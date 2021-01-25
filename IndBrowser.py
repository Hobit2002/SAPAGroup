import json,bs4
Synonyms = json.load(open('Views/synonyms.json'))
Synkeys=list(Synonyms.keys())
Included=[]
for Valdicts in Synonyms.values():
    Included+=Valdicts["Negative"]["Examples"]+Valdicts["Positive"]["Examples"]

for i in range(1,11):
    print("List%s"%i)
    Html = bs4.BeautifulSoup(open("Templates/List%s.html"%i).read(),'html')
    Fieldsets = Html.find_all('fieldset')
    for Fieldset in Fieldsets[:-3]:
        RawID=Fieldset.find_all('input')[0].get('name')
        _indx = RawID.index('_')+1
        ID=RawID[_indx:]
        if ID not in Included:
            Legend = Fieldset.legend.contents
            print(Legend)
            Response = input()
            if Response[-1]==".":
                Key="Negative"
                Response=Response[:-1]
            else:Key="Positive"
            Synonyms[Synkeys[int(Response)-1]][Key]["Indicators"].append(ID)
        else:
            print("Already exists")
            for Trait,Valdicts in Synonyms.items():
                for spin in ["Negative","Positive"]:
                    if ID in Valdicts[spin]["Examples"]:
                        Valdicts[spin]["Indicators"].append(ID)
sinFile = open('Views/synonyms.json',"w")
sinFile.write(json.dumps(Synonyms))
sinFile.close()
        
