import json,os,bs4
Synonyms = json.load(open('Views/synonyms.json'))
Synkeys=list(Synonyms.keys())
Included=[]
for Valdicts in Synonyms.values():
    Included+=Valdicts["Negative"]["Examples"]+Valdicts["Positive"]["Examples"]
print(Included)
Startpoint = int(open('ExpbData.txt').read())
NewPoint=Startpoint
for root,dirs,files in os.walk('Templates/ExamplePages'):
    for doc in list(files)[Startpoint:]:
        print("New file")
        NewPoint+=1
        Html = bs4.BeautifulSoup(open(root+'/'+doc).read(),'html')
        Fieldsets = Html.find_all('fieldset')
        for Fieldset in Fieldsets[:-3]:
            ID=Fieldset.find_all('input')[0].get('name')
            if ID not in Included:
                Legend = Fieldset.legend.contents
                print(Legend)
                Response = input()
                if Response[-1]==".":
                    Key="Negative"
                    Response=Response[:-1]
                else:Key="Positive"
                Synonyms[Synkeys[int(Response)-1]][Key]["Examples"].append(ID)
                Included.append(ID)
            else:
                print('Already used')
        sinFile = open('Views/synonyms.json',"w")
        sinFile.write(json.dumps(Synonyms))
        sinFile.close()
        expFile = open('ExpbData.txt',"w")
        expFile.write(str(NewPoint))
        expFile.close()
