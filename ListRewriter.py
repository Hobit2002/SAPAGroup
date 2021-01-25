for i in range(1,11):
    OriginalText=open("Templates/List%s.html"%i).read()
    print("Templates/List%s.html"%i)
    for l in range(22):
        OriginalText = OriginalText.replace("<legend>","<$r_e_p$legend>{{Others.%s}}:"%l,1)
        for ur in range(6):
            OriginalText =OriginalText.replace("input type=\"radio\" name=\"","in$r_e_p$put type=\"radio\" name=\""+"{{Others.%s}}_"%l,1)
    OriginalText =OriginalText.replace("input type=\"radio\" name=\"","in$r_e_p$put type=\"radio\" name=\""+"{{You}}_")
    for y in range(22,25):
        OriginalText =OriginalText.replace("<legend>","<$r_e_p$legend>{{You}}:",1)
    OriginalText =OriginalText.replace("$r_e_p$","")
    open("Templates/List%s.html"%i,"w").write(OriginalText)
    
    
    
