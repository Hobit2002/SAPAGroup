// If you have PHP you can set the post values like this
//var postState = '<?= $_POST["state"] ?>';
//var postCountry = '<?= $_POST["country"] ?>';
var postMajor = '';
var postDiscipline = '';
var postEducation = '';

// Major table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var major = '\
1000:1001:Art History|\
1000:1002:Art Theory and Practice|\
1000:1003:Arts Education|\
1000:1004:Culinary Arts and Sciences|\
1000:1005:Dance|\
1000:1006:Design and Applied Arts|\
1000:1007:Drama/Theater Arts|\
1000:1008:Fashion|\
1000:1009:Fine and Studio Arts|\
1000:1010:Graphic Arts|\
1000:1011:Interior Design|\
1000:1012:Landscape Design|\
1000:1013:Music|\
1000:1014:Music Education|\
1000:1015:Performance Studies|\
1000:1016:Other Performing or Visual Art Major|\
1000:99:--   Prefer not to answer|\
1100:1101:Accounting|\
1100:1102:Agricultural Businesses|\
1100:1103:Business Administration and Management|\
1100:1104:Entrepreneurship|\
1100:1105:Finance and Financial Management|\
1100:1106:General Business|\
1100:1107:Hospitality Administration/Management|\
1100:1108:Human Resource Administration|\
1100:1109:International Business|\
1100:1110:Labor Relations|\
1100:1111:Logistics and Supply Chain Management|\
1100:1112:Marketing|\
1100:1113:Real Estate Management and Services|\
1100:1114:Sales and Marketing Operations|\
1100:1115:Other Business Major|\
1100:99:--   Prefer not to answer|\
1200:1201:Communication Disorders and Services|\
1200:1202:Communication Sciences|\
1200:1203:Communications and Media Studies|\
1200:1204:Journalism|\
1200:1205:Public Relations and Advertising|\
1200:1206:Radio, Television and Film Communication|\
1200:1207:Other Communications Major|\
1200:99:--   Prefer not to answer|\
1300:1301:Criminal Justice and Corrections|\
1300:1302:Family and Consumer Science|\
1300:1303:Human Development and Family Studies|\
1300:1304:Parks, Recreation and Leisure Studies|\
1300:1305:Social Policy|\
1300:1306:Social Work|\
1300:1307:Urban and Municipal Planning|\
1300:1308:Other Community and Social Services Major|\
1300:99:--   Prefer not to answer|\
1400:1401:Computer and Information Systems - General|\
1400:1402:Computer Graphics|\
1400:1403:Computer Programming|\
1400:1404:Electronic Commerce|\
1400:1405:Management Information Systems|\
1400:1406:Other Computer and Information Sciences Major|\
1400:99:--   Prefer not to answer|\
1500:1501:African-American Studies|\
1500:1502:American Studies|\
1500:1503:Asian Studies|\
1500:1504:Classical Studies|\
1500:1505:European Studies|\
1500:1506:Gender Studies|\
1500:1507:International Studies|\
1500:1508:Jewish Studies|\
1500:1509:Latina and Latino Studies|\
1500:1510:Middle Eastern Studies|\
1500:1511:Urban Studies|\
1500:1512:Other Cultural and Regional Studies Major|\
1500:99:--   Prefer not to answer|\
1600:1601:Education Administration|\
1600:1602:Elementary Education|\
1600:1603:Health Education|\
1600:1604:Kindergarten/Preschool Education|\
1600:1605:Language Arts Education|\
1600:1606:Learning and Organizational Change|\
1600:1607:Mathematics Education|\
1600:1608:Physical Education|\
1600:1609:Science Education|\
1600:1610:Secondary Education|\
1600:1611:Special Education|\
1600:1612:Other Education Major|\
1600:99:--   Prefer not to answer|\
1700:1701:Aerospace Engineering|\
1700:1702:Biomedical Engineering|\
1700:1703:Chemical and Biological Engineering|\
1700:1704:Civil Engineering|\
1700:1705:Computer Engineering|\
1700:1706:Electrical Engineering|\
1700:1707:Environmental Engineering|\
1700:1708:Industrial Engineering|\
1700:1709:Manufacturing and Design Engineering|\
1700:1710:Materials Science and Engineering|\
1700:1711:Mechanical Engineering|\
1700:1712:Other Engineering and Technology Major|\
1700:99:--   Prefer not to answer|\
1800:1801:Asian Languages and Literature|\
1800:1802:Classical Languages (Latin and Greek)|\
1800:1803:Comparative Literature Studies|\
1800:1804:English|\
1800:1805:Fiction Writing|\
1800:1806:French|\
1800:1807:German|\
1800:1808:Italian|\
1800:1809:Linguistics|\
1800:1810:Middle East Languages and Literature|\
1800:1811:Non-Fiction Writing|\
1800:1812:Poetry Writing|\
1800:1813:Portuguese|\
1800:1814:Slavic Languages|\
1800:1815:Spanish|\
1800:1816:Other Language and Literature Studies Major|\
1800:99:--   Prefer not to answer|\
1900:1901:Actuarial Sciences|\
1900:1902:Applied Mathematics|\
1900:1903:Mathematical Methods in the Social Sciences|\
1900:1904:Mathematics|\
1900:1905:Statistics|\
1900:1906:Other Mathematics Major|\
1900:99:--   Prefer not to answer|\
2000:2001:Dentistry|\
2000:2002:Health Sciences - General|\
2000:2003:Health Services and Administration|\
2000:2004:Medical Assisting|\
2000:2005:Medical Laboratory/Technology|\
2000:2006:Medicine (Pre-Med)|\
2000:2007:Nursing|\
2000:2008:Nutrition and Wellness|\
2000:2009:Pharmacology|\
2000:2010:Other Medicine and Allied Health Major|\
2000:99:--   Prefer not to answer|\
2100:2101:Animal Sciences|\
2100:2102:Astronomy|\
2100:2103:Biology|\
2100:2104:Botany|\
2100:2105:Chemistry|\
2100:2106:Cognitive Science|\
2100:2107:Environmental Sciences|\
2100:2108:Forensic Science|\
2100:2109:Geological Sciences|\
2100:2110:Neuroscience|\
2100:2111:Oceanography|\
2100:2112:Physics|\
2100:2113:Other Natural Sciences Major|\
2100:99:--   Prefer not to answer|\
2200:2201:Anthropology|\
2200:2202:Criminology|\
2200:2203:Economics|\
2200:2204:Geography|\
2200:2205:Government|\
2200:2206:History|\
2200:2207:Law and Legal Studies|\
2200:2208:Philosophy|\
2200:2209:Political Science|\
2200:2210:Psychology|\
2200:2211:Religion|\
2200:2212:Sociology|\
2200:2213:Other Social Sciences Major|\
2200:99:--   Prefer not to answer|\
';

// Discipline table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var discipline = '\
0:0:Not Applicable|\
1:0:Not Applicable|\
2:0:Undecided|\
2:1000:Arts (Performing and Visual)|\
2:1100:Business|\
2:1200:Communications|\
2:1300:Community and Social Services|\
2:1400:Computer and Information Sciences|\
2:1500:Cultural and Regional Studies|\
2:1600:Education|\
2:1700:Engineering and Technology|\
2:1800:Language and Literature Studies|\
2:1900:Mathematics|\
2:2000:Medicine and Allied Health|\
2:2100:Natural Sciences|\
2:2200:Social Sciences|\
2:99:--   Prefer not to answer|\
3:0:Undecided|\
3:1000:Arts (Performing and Visual)|\
3:1100:Business|\
3:1200:Communications|\
3:1300:Community and Social Services|\
3:1400:Computer and Information Sciences|\
3:1500:Cultural and Regional Studies|\
3:1600:Education|\
3:1700:Engineering and Technology|\
3:1800:Language and Literature Studies|\
3:1900:Mathematics|\
3:2000:Medicine and Allied Health|\
3:2100:Natural Sciences|\
3:2200:Social Sciences|\
3:99:--   Prefer not to answer|\
4:1000:Arts (Performing and Visual)|\
4:1100:Business|\
4:1200:Communications|\
4:1300:Community and Social Services|\
4:1400:Computer and Information Sciences|\
4:1500:Cultural and Regional Studies|\
4:1600:Education|\
4:1700:Engineering and Technology|\
4:1800:Language and Literature Studies|\
4:1900:Mathematics|\
4:2000:Medicine and Allied Health|\
4:2100:Natural Sciences|\
4:2200:Social Sciences|\
4:99:--   Prefer not to answer|\
5:1000:Arts (Performing and Visual)|\
5:1100:Business|\
5:1200:Communications|\
5:1300:Community and Social Services|\
5:1400:Computer and Information Sciences|\
5:1500:Cultural and Regional Studies|\
5:1600:Education|\
5:1700:Engineering and Technology|\
5:1800:Language and Literature Studies|\
5:1900:Mathematics|\
5:2000:Medicine and Allied Health|\
5:2100:Natural Sciences|\
5:2200:Social Sciences|\
5:99:--   Prefer not to answer|\
6:1000:Arts (Performing and Visual)|\
6:1100:Business|\
6:1200:Communications|\
6:1300:Community and Social Services|\
6:1400:Computer and Information Sciences|\
6:1500:Cultural and Regional Studies|\
6:1600:Education|\
6:1700:Engineering and Technology|\
6:1800:Language and Literature Studies|\
6:1900:Mathematics|\
6:2000:Medicine and Allied Health|\
6:2100:Natural Sciences|\
6:2200:Social Sciences|\
6:99:--   Prefer not to answer|\
7:1000:Arts (Performing and Visual)|\
7:1100:Business|\
7:1200:Communications|\
7:1300:Community and Social Services|\
7:1400:Computer and Information Sciences|\
7:1500:Cultural and Regional Studies|\
7:1600:Education|\
7:1700:Engineering and Technology|\
7:1800:Language and Literature Studies|\
7:1900:Mathematics|\
7:2000:Medicine and Allied Health|\
7:2100:Natural Sciences|\
7:2200:Social Sciences|\
7:99:--   Prefer not to answer|\
';

// Education data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var education = '\
0:Less than 12 years|\
1:High school graduate|\
2:Currently in college/university|\
3:Some college/university, but did not graduate|\
7:Associate degree (2 yr)|\
4:College/university degree (4 yr)|\
5:Currently in graduate or professional school|\
6:Graduate or professional school degree|\
99:--  Prefer not to answer\
';

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the counties from the country list
function populateEducation(defaultEducation) {
  if ( postEducation != '' ) {
    defaultEducation = postEducation; 
  }
  var educationLineArray = education.split("|");  // Split into lines
  var selObj = document.getElementById('educationSelect');
  selObj.options[0] = new Option('Select level of education','999');
  selObj.selectedIndex = 0;
  for (var loop = 0; loop < educationLineArray.length; loop++) {
    lineArray = educationLineArray[loop].split(':');
    educationCode  = TrimString(lineArray[0]);
    educationName  = TrimString(lineArray[1]);
    if ( educationCode != '' ) {
      selObj.options[loop + 1] = new Option(educationName, educationCode);
    }
    if ( defaultEducation == educationCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}

function populateDiscipline() {
  var selObj = document.getElementById('disciplineSelect');
  var foundDiscipline = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select discipline of university major','999');
    selObj.selectedIndex = 0;
  }
  // Populate the drop down with states from the selected country
  var disciplineLineArray = discipline.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < disciplineLineArray.length; loop++) {
    lineArray = disciplineLineArray[loop].split(":");
    educationCode  = TrimString(lineArray[0]);
    disciplineCode    = TrimString(lineArray[1]);
    disciplineName    = TrimString(lineArray[2]);
  if (document.getElementById('educationSelect').value == educationCode && educationCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) {
        parentObj = document.getElementById('disciplineSelect').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement("SELECT");
        inputSel.setAttribute("name","discipline");
        inputSel.setAttribute("id","disciplineSelect");
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('disciplineSelect');
        selObj.selectedIndex = 0;
      }
      if ( disciplineCode != '' ) {
        selObj.options[optionCntr] = new Option(disciplineName, disciplineCode);
      }
      // See if it's selected from a previous post
      if ( disciplineCode == postDiscipline && educationCode == postEducation ) {
        selObj.selectedIndex = optionCntr;
      }
      foundDiscipline = true;
      optionCntr++
    }
  }

  if (document.getElementById('educationSelect').value == '0' || document.getElementById('educationSelect').value == '1') {
  selObj.options[0] = new Option('Select "Discipline: Not applicable"','0');
  selObj.options[1] = new Option('Discipline: Not Applicable','0')
  }
}

function populateMajor() {
  var selObj = document.getElementById('majorSelect');
  var foundMajor = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select university major','999');
    selObj.selectedIndex = 0;
  }
  
  // Populate the drop down with states from the selected country
  var majorLineArray = major.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < majorLineArray.length; loop++) {
    lineArray = majorLineArray[loop].split(":");
    disciplineCode  = TrimString(lineArray[0]);
    majorCode    = TrimString(lineArray[1]);
    majorName    = TrimString(lineArray[2]);
  if (document.getElementById('disciplineSelect').value == disciplineCode && disciplineCode != '' ) {
      if ( majorCode != '' ) {
        selObj.options[optionCntr] = new Option(majorName, majorCode);
      }
      // See if it's selected from a previous post
      if ( majorCode == postMajor && disciplineCode == postDiscipline ) {
        selObj.selectedIndex = optionCntr;
      }
      foundMajor = true;
      optionCntr++
    }
  }
/*  if (disciplineCode != postDiscipline)
 {
  selObj.options[0] = new Option('Select One','0');
  } */
  
  if (document.getElementById('disciplineSelect').value == '0') {
  selObj.options[0] = new Option('Major: Not applicable','0');
  }
}


function initEducation(education) {
  populateEducation(education);
  populateDiscipline();
  populateMajor();
}





