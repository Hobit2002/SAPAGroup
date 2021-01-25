from django.shortcuts import render,redirect
from django.core.cache import cache
from urllib.parse import urlencode
from django.urls import reverse
from django.http import HttpResponse
import random,requests,bs4,json
# Create your views here.
def AddPartic(request):
    Name = request.GET["Name"]
    GameCode = request.COOKIES["GameCode"]
    Game = cache.get(GameCode+"SAPAgroup")
    Game[Name] = {"Data":{}}
    cache.set(GameCode+"SAPAgroup",Game,300)
    return HttpResponse('Trone!')

def HomePage(request):
    GameCode = "1"
    while cache.get(GameCode+"SAPAgroup")!=None:
        GameCode = str(random.randint(0,1000))
    DictData={"GameCode":GameCode}
    cache.set(GameCode+"SAPAgroup",{},300)
    Response = render(request,'HomePage.html',DictData)
    Response.set_cookie("GameCode",GameCode,max_age=6000)
    return Response

def JoinGame(request):
    Name = request.GET["Name"]
    GameCode = request.GET["GameCode"]
    Response = render(request,'MyInfo.html')
    Response.set_cookie("GameCode",GameCode,max_age=6000)
    Game = cache.get(GameCode+"SAPAgroup")
    if Name in Game.keys():
        cache.set(GameCode+"SAPAgroup",Game,6000)
        Response.set_cookie("Player",Name,max_age=6000)
        return Response
    
def demographics(request):
    GameCode = request.COOKIES["GameCode"]
    Player = request.COOKIES["Player"]
    Game = cache.get(GameCode+"SAPAgroup")
    Game[Player]["demographics"]=request.POST
    cache.set(GameCode+"SAPAgroup",Game,6000)
    return redirect(listURL(1))

def List(request):
    number=request.GET["num"]
    GameCode = request.COOKIES["GameCode"]
    Player = request.COOKIES["Player"]
    Game = cache.get(GameCode+"SAPAgroup")
    ListHeroes = list(Game.keys())
    MeIndx = ListHeroes.index(Player)
    OtherList = ListHeroes[MeIndx+1:]+ListHeroes[:MeIndx]
    Others=[]
    takepoint=0
    while len(Others)<22:
        Others.append(OtherList[takepoint])
        takepoint+=1
        if takepoint==len(OtherList):takepoint=0
    Response = render(request,"List%s.html"%number,{"Others":Others,"You":Player})
    Response.set_cookie("num",number,max_age=6000)
    return Response

def listURL(number):
    base_url = reverse('List')
    query_string =  urlencode({'num': number})
    url = '{}?{}'.format(base_url, query_string)
    return url

    
def SubmitResults(request):
    GameCode = request.COOKIES["GameCode"]
    Player = request.COOKIES["Player"]
    num = int(request.COOKIES["num"])
    Game = cache.get(GameCode+"SAPAgroup")
    for key,val in request.POST.items():
        if "Time" in key:
            Game[Player]["Data"][key]=val
        elif key != 'csrfmiddlewaretoken' and key!="submitGo": 
            Splitpoint = key.index("_")
            Target=key[:Splitpoint]
            key=key.replace(Target+"_","")
            Game[Target]["Data"][key]=val
    cache.set(GameCode+"SAPAgroup",Game,6000)
    if num ==10:
        return render(request,"LastInfo.html")
    else:return redirect(listURL(num+1))

def LastInfo(request):
    GameCode = request.COOKIES["GameCode"]
    Player = request.COOKIES["Player"]
    Game = cache.get(GameCode+"SAPAgroup")
    Game[Player]["LastInfo"]=request.POST
    cache.set(GameCode+"SAPAgroup",Game,6000)
    return render(request,"HallofFame.html")

def RequestResult(request):
    GameCode = request.COOKIES["GameCode"]
    Player = request.COOKIES["Player"]
    Game = cache.get(GameCode+"SAPAgroup")
    DataKeys = list(Game[Player]["Data"].keys())
    Data = Game[Player]["Data"]
    Synonyms = json.load(open("Views/synonyms.json"))
    AnswCounts={}
    for Trait in Synonyms.keys():AnswCounts[Trait]={"Positive":0,"Negative":0}
    cache.set(GameCode+"SAPAgroup",Game,6000)
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'}
    Session = requests.Session()
    rsp1=Session.get('https://www.sapa-project.org/survey/demographics.php',headers=headers)
    resp = Session.post('https://www.sapa-project.org/survey/demographics.php',data=Dictize(dict(Game[Player]["demographics"])),cookies=rsp1.cookies,headers=headers)
    for r in range(1,11):
        PageTime='page%sTime'%r
        RequestCont={"submitGo":"Next page",PageTime:Data[PageTime]}
        Html = bs4.BeautifulSoup(resp.text,'html')
        Fieldsets = Html.find_all('fieldset')
        for Fieldset in Fieldsets[:-3]:
            ID=Fieldset.find_all('input')[0].get('name')
            if ID in DataKeys:
                RequestCont[ID]=Data[ID]
            else:
                for Trait,Traitdata in Synonyms.items():
                    ReversedSpins={"Negative":"Positive","Positive":"Negative"}
                    for spin in ["Negative","Positive"]:
                        if ID in Traitdata[spin]['Examples']:
                            index=AnswCounts[Trait][spin]
                            try:
                                RequestCont[ID]=Traitdata[spin]['Indicators'][index]
                                AnswCounts[Trait][spin]+=1
                            except IndexError:
                                try:
                                    RequestCont[ID]=Traitdata[spin]['Indicators'][0]
                                    AnswCounts[Trait][spin]=0
                                except IndexError:
                                    RequestCont[ID]=str(7-int(Traitdata[ReversedSpins[spin]]['Indicators'][0]))
                            
        for Fieldset in Fieldsets[:-3]:
            RequestCont[ID]='3'
        print(RequestCont)
        resp = Session.post('https://www.sapa-project.org/survey/survey%s.php'%(r),data=RequestCont,cookies=resp.cookies,headers=headers)
    response = Session.post('https://www.sapa-project.org/survey/prereport.php',data=Dictize(dict(Game[Player]["LastInfo"])),cookies=resp.cookies,headers=headers)
    #response = Session.get('https://www.sapa-project.org/survey/report.php',cookies=response.cookies,headers=headers)
    print(response)
    Page = response.text
    Page = Page.replace("..","https://www.sapa-project.org")
    Page = Page.replace("<img src='","<img src='https://www.sapa-project.org/survey/")
    resnum=str(GameCode)+"_"+str(list(Game.keys()).index(Player))
    ResFile=open("Templates/Response/Result%s.html"%str(resnum),"w")
    ResFile.write(Page)
    ResFile.close()
    base_url = reverse('ShowResult')
    query_string =  urlencode({'ID': resnum})
    url = '{}?{}'.format(base_url, query_string)
    return HttpResponse(url)

def Dictize(paradic):
    try:
        del paradic['csrfmiddlewaretoken']
    except KeyError:
        pass
    respdict = {}
    for parkey,parval in paradic.items():
        respdict[parkey]=parval[0]
    return respdict

def ShowResult(request):
    ID=request.GET["ID"]
    return render(request,"Response/Result%s.html"%str(ID))