// If you have PHP you can set the post values like this
//var postState = '<?php $_POST["state"] ?>';
//var postCountry = '<?php $_POST["country"] ?>';
var postState = '';
var postCountry = '';

// State table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var state = '\
001:001:Alabama|\
001:002:Alaska|\
001:003:Arizona|\
001:004:Arkansas|\
001:005:California|\
001:006:Colorado|\
001:007:Connecticut|\
001:008:Delaware|\
001:051:District of Columbia|\
001:009:Florida|\
001:010:Georgia|\
001:011:Hawaii|\
001:012:Idaho|\
001:013:Illinois|\
001:014:Indiana|\
001:015:Iowa|\
001:016:Kansas|\
001:017:Kentucky|\
001:018:Louisiana|\
001:019:Maine|\
001:020:Maryland|\
001:021:Massachusetts|\
001:022:Michigan|\
001:023:Minnesota|\
001:024:Mississippi|\
001:025:Missouri|\
001:026:Montana|\
001:027:Nebraska|\
001:028:Nevada|\
001:029:New Hampshire|\
001:030:New Jersey|\
001:031:New Mexico|\
001:032:New York|\
001:033:North Carolina|\
001:034:North Dakota|\
001:035:Ohio|\
001:036:Oklahoma|\
001:037:Oregon|\
001:038:Pennsylvania|\
001:039:Rhode Island|\
001:040:South Carolina|\
001:041:South Dakota|\
001:042:Tennessee|\
001:043:Texas|\
001:044:Utah|\
001:045:Vermont|\
001:046:Virginia|\
001:047:Washington|\
001:048:West Virginia|\
001:049:Wisconsin|\
001:050:Wyoming|\
013:054:Australian Capital Territory|\
013:060:New South Wales|\
013:062:Northern Territory|\
013:063:Queensland|\
013:064:South Australia|\
013:065:Tasmania|\
013:066:Victoria|\
013:067:Western Australia|\
018:068:Barisal|\
018:069:Chittagong|\
018:070:Dhaka|\
018:071:Khulna|\
018:072:Rajshahi|\
018:073:Rangpur|\
018:074:Sylhet|\
021:075:Antwerp|\
021:076:East Flanders|\
021:077:Flemish Brabant|\
021:078:Hainaut|\
021:079:Liege|\
021:080:Limburg|\
021:081:Luxembourg|\
021:082:Namur|\
021:083:Walloon Brabant|\
021:084:West Flanders|\
027:085:Brunei|\
027:086:Kalimantan|\
027:087:Sabah|\
027:088:Sarawak|\
030:089:Acre|\
030:090:Alagoas|\
030:091:Amapa|\
030:092:Amazonas|\
030:093:Bahia|\
030:094:Ceara|\
030:095:Distrito Federal|\
030:096:Espirito Santo|\
030:097:Golas|\
030:098:Maranhao|\
030:099:Mato Grosso|\
030:100:Mato Grosso do Sul|\
030:101:Minas Gerais|\
030:102:Para|\
030:103:Paraiba|\
030:104:Parana|\
030:105:Pernambuco|\
030:106:Piaui|\
030:107:Rio de Janeiro|\
030:108:Rio Grande do Norte|\
030:109:Rio Grande do Sul|\
030:110:Rondonia|\
030:111:Roraima|\
030:112:Santa Catarina|\
030:113:Sao Paulo|\
030:114:Sergipe|\
030:115:Tocantins|\
040:116:Alberta|\
040:117:British Columbia|\
040:118:Manitoba|\
040:119:New Brunswick|\
040:120:Newfoundland and Labrador|\
040:121:Northwest Territories|\
040:122:Nova Scotia|\
040:123:Nunavut|\
040:124:Ontario|\
040:125:Prince Edward Island|\
040:126:Quebec|\
040:127:Saskatchewan|\
040:128:Yukon|\
046:129:Anhui|\
046:130:Fujian|\
046:131:Gansu|\
046:132:Guangdong|\
046:133:Guizhou|\
046:134:Hainan|\
046:135:Hebei|\
046:136:Heilongjiang|\
046:137:Henan|\
046:138:Hubei|\
046:139:Hunan|\
046:140:Jiangsu|\
046:141:Jiangxi|\
046:142:Jilin|\
046:143:Liaoning|\
046:144:Qinghai|\
046:145:Shaanxi|\
046:146:Shandong|\
046:147:Shanxi|\
046:148:Sichuan|\
046:149:Yunnan|\
046:150:Zhejiang|\
056:151:Hovedstaden|\
056:152:Midtjyllan|\
056:153:Nordjylland|\
056:154:Sjaelland|\
056:155:Syddanmark|\
072:156:Aland Islands|\
072:157:Central Finland|\
072:158:Central Ostrobothnia|\
072:159:Eastern Uusimaa|\
072:160:Finland Proper|\
072:161:Kainuu|\
072:162:Kymenlaakso|\
072:163:Lapland|\
072:164:North Karelia|\
072:165:Northern Ostrobothnia|\
072:166:Northern Savonia|\
072:167:Ostrobothnia|\
072:168:Paijanne Tavastia|\
072:169:Pirkanmaa|\
072:170:Satakunta|\
072:171:South Karelia|\
072:172:Souther Ostrobothnia|\
072:173:Southern Savonia|\
072:174:Tavastia Proper|\
072:175:Uusimaa|\
073:176:Alsace|\
073:177:Aquitaine|\
073:178:Auvergne|\
073:179:Basse-Normandie|\
073:180:Bourgogne|\
073:181:Bretagne|\
073:182:Centre|\
073:183:Champagne-Ardenne|\
073:184:Corsica|\
073:185:Franche-Comte|\
073:186:Haute-Normandie|\
073:187:Ile-de-France|\
073:188:Languedoc-Roussillon|\
073:189:Limousin|\
073:190:Lorraine|\
073:191:Midi-Pyrenees|\
073:192:Nord-Pas-de-Calais|\
073:193:Pays de la Loire|\
073:194:Picardie|\
073:195:Poitou-Charentes|\
073:196:Provence-Alpes-Cote d\'Azur|\
073:197:Rhone-Alpes|\
079:198:Baden-Württemberg|\
079:199:Bavaria|\
079:200:Berlin|\
079:201:Brandenburg|\
079:202:Bremen|\
079:203:Hamburg|\
079:204:Hesse|\
079:205:Lower Saxony|\
079:206:Mecklenburg-Vorpommem|\
079:207:North Rhine-Westphalia|\
079:208:Rhineland-Palatinate|\
079:209:Saarland|\
079:210:Saxony|\
079:211:Saxony-Anhalt|\
079:212:Schleswig-Holstein|\
079:213:Thuringia|\
093:214:Hong Kong Island - Central and Western|\
093:215:Hong Kong Island - Eastern|\
093:216:Hong Kong Island - Southern|\
093:217:Hong Kong Island - Wan Chai|\
093:218:Kowloon - Kowloon City|\
093:219:Kowloon - Kwun Tong|\
093:220:Kowloon - Sham Shui Po|\
093:221:Kowloon - Wong Tai Sin|\
093:222:Kowloon - Yau Tsim Mong|\
093:223:New Territories - Islands|\
093:224:New Territories - Kwai Tsing|\
093:225:New Territories - North|\
093:226:New Territories - Sai Kung|\
093:227:New Territories - Sha Tin|\
093:228:New Territories - Tai Po|\
093:229:New Territories - Tsuen Wan|\
093:230:New Territories - Tuen Mun|\
093:231:New Territories - Yuen Long|\
096:232:Andaman and Nicobar Islands|\
096:233:Andhra Pradesh|\
096:234:Arunachal Pradesh|\
096:235:Assam|\
096:236:Bihar|\
096:237:Chandigarh|\
096:238:Chhattisgarh|\
096:239:Dadra and Nagar Haveli|\
096:240:Daman and Diu|\
096:241:Goa|\
096:242:Gujarat|\
096:243:Haryana|\
096:244:Himachal Pradesh|\
096:245:Jammu and Kashmir|\
096:246:Jharkhand|\
096:247:Karnataka|\
096:248:Kerala|\
096:249:Lakshadweep|\
096:250:Madhya Pradesh|\
096:251:Maharashtra|\
096:252:Manipur|\
096:253:Meghalaya|\
096:254:Mizoram|\
096:255:Nagaland|\
096:256:Orissa|\
096:257:Puducherry|\
096:258:Punjab|\
096:259:Rajasthan|\
096:260:Sikkim|\
096:261:Tamil Nadu|\
096:262:The Government of NCT of Delhi|\
096:263:Tripura|\
096:264:Uttar Pradesh|\
096:265:Uttarakhand|\
096:266:West Bengal|\
097:267:Java|\
097:268:Kalimantan|\
097:269:Lesser Sunda Islands|\
097:270:Maluku Islands|\
097:271:Sulawesi|\
097:272:Sumatra|\
097:273:Western New Guinea|\
100:274:Connacht|\
100:275:Leinster|\
100:276:Munster|\
100:277:Ulster|\
102:278:Abruzzo|\
102:279:Aosta Valley|\
102:280:Apulia|\
102:281:Basilicata|\
102:282:Calabria|\
102:283:Campania|\
102:284:Emilia-Romagna|\
102:285:Friuli-Venezia Giulia|\
102:286:Lazio|\
102:287:Liguria|\
102:288:Lombardy|\
102:289:Marche|\
102:290:Molise|\
102:291:Piedmont|\
102:292:Sardinia|\
102:293:Sicily|\
102:294:Trentino-Alto Adige|\
102:295:Tuscany|\
102:296:Umbria|\
102:297:Veneto|\
127:298:Federal Territory of Kuala Lumpur|\
127:301:Johor|\
127:302:Kedah|\
127:303:Kelantan|\
127:304:Malacca|\
127:305:Negeri Sembilan|\
127:306:Pahang|\
127:307:Penang|\
127:308:Perak|\
127:309:Perlis|\
127:310:Sabah|\
127:311:Sarawak|\
127:312:Selangor|\
127:313:Terengganu|\
135:314:Aguascalientes|\
135:315:Baja California|\
135:316:Baja California Sur|\
135:317:Campeche|\
135:318:Chiapas|\
135:319:Chihuahua|\
135:320:Ciudad de Mexico|\
135:321:Coahuila|\
135:322:Colima|\
135:323:Durango|\
135:324:Guanajuato|\
135:325:Guerrero|\
135:326:Hidalgo|\
135:327:Jalisco|\
135:328:Mexico|\
135:329:Michoacan|\
135:330:Morelos|\
135:331:Nayarit|\
135:332:Nuevo Leon|\
135:333:Oaxaca|\
135:334:Puebla|\
135:335:Queretaro|\
135:336:Quintana Roo|\
135:337:San Luis Potosi|\
135:338:Sinaloa|\
135:339:Sonora|\
135:340:Tabasco|\
135:341:Tamaulipas|\
135:342:Tiaxcala|\
135:343:Veracruz|\
135:344:Yucatan|\
135:345:Zacatecas|\
148:346:Drenthe|\
148:347:Flevoland|\
148:348:Friesland|\
148:349:Gelderland|\
148:350:Groningen|\
148:351:Limburg|\
148:352:North Brabant|\
148:353:North Holland|\
148:354:Overijssel|\
148:355:South Holland|\
148:356:Utrecht|\
148:357:Zeeland|\
150:358:Auckland|\
150:359:Bay of Plenty|\
150:360:Canterbury|\
150:361:Gisborne|\
150:362:Hawke\'s Bay|\
150:363:Manawatu-Wanganui|\
150:364:Marlborough|\
150:365:Nelson|\
150:366:Northland|\
150:367:Otago|\
150:368:Southland|\
150:369:Taranaki|\
150:370:Tasman|\
150:371:Waikato|\
150:372:Wellington|\
150:373:West Coast|\
158:374:Akershus|\
158:375:Aust-Agder|\
158:376:Buskerud|\
158:377:Finnmark|\
158:378:Hedmark|\
158:379:Hordaland|\
158:380:Jan Mayen|\
158:381:More og Romsdal|\
158:382:Nord-Trondelag|\
158:383:Nordland|\
158:384:Oppland|\
158:385:Oslo|\
158:386:Ostfold|\
158:387:Rogaland|\
158:388:Sogn og Fjordane|\
158:389:Sor-Trondelag|\
158:390:Svalbard|\
158:391:Telemark|\
158:392:Troms|\
158:393:Vest-Agder|\
158:394:Vestfold|\
160:395:Azad Kashmir|\
160:396:Balochistan|\
160:397:Capital Territory|\
160:398:Gilgit-Baltistan|\
160:399:Khyber-Pakhtunkhwa|\
160:400:Punjab|\
160:401:Sindh|\
160:402:Tribal Areas|\
167:403:Autonomous Region in Muslim Mindanao|\
167:404:Bicol Region|\
167:405:Cagayan Valley|\
167:406:Calabarzon|\
167:407:Caraga|\
167:408:Central Luzon|\
167:409:Central Visayas|\
167:410:Cordillera Administrative Region|\
167:411:Davao Region|\
167:412:Eastern Visayas|\
167:413:Ilocos Region|\
167:414:Mimaropa|\
167:415:National Capital Region|\
167:416:Northern Mindanao|\
167:417:Soccsksargen|\
167:418:Western Visayas|\
167:419:Zamboanga Peninsula|\
169:420:Greater Poland|\
169:421:Kuyavian-Pomeranian|\
169:422:Lesser Poland|\
169:423:Lodz|\
169:424:Lower Silesian|\
169:425:Lublin|\
169:426:Lubusz|\
169:427:Masovian|\
169:428:Opole|\
169:429:Podlaskie|\
169:430:Pomeranian|\
169:431:Silesian|\
169:432:Subcarpathian|\
169:433:Swietokrzyskie|\
169:434:Warmian-Masurian|\
169:435:West Pomeranian|\
174:436:Bucuresti-Ilfov|\
174:437:Centru|\
174:438:Nord-Est|\
174:439:Nord-Vest|\
174:440:Sud-Est|\
174:441:Sud-Muntenia|\
174:442:Sud-Vest Oltenia|\
174:443:Vest|\
175:444:Adygea|\
175:445:Altai|\
175:446:Altai|\
175:447:Amur|\
175:448:Arkhangelsk|\
175:449:Astrakhan|\
175:450:Bashkortostan|\
175:451:Belgorod|\
175:452:Bryansk|\
175:453:Buryat|\
175:454:Chechen|\
175:455:Chelyabinsk|\
175:456:Chukotka|\
175:457:Chuvash|\
175:458:Dagestan|\
175:459:Ingushetia|\
175:460:Irkutsk|\
175:461:Ivanovo|\
175:462:Jewish Oblast|\
175:463:Kabardino-Balkar|\
175:464:Kaliningrad|\
175:465:Kalmykia|\
175:466:Kaluga|\
175:467:Kamchatka|\
175:468:Karachay-Cherkess|\
175:469:Karelia|\
175:470:Kemerovo|\
175:471:Khabarovsk|\
175:472:Khakassia|\
175:473:Khanty-Mansi|\
175:474:Kirov|\
175:475:Komi|\
175:476:Kostroma|\
175:477:Krasnodar|\
175:478:Krasnoyarsk|\
175:479:Kurgan|\
175:480:Kursk|\
175:481:Leningrad|\
175:482:Lipetsk|\
175:483:Magadan|\
175:484:Mari El|\
175:485:Mordovia|\
175:486:Moscow|\
175:487:Moscow|\
175:488:Murmansk|\
175:489:Nenets|\
175:490:Nizhny Novgorod|\
175:491:North Ossetia-Alania|\
175:492:Novgorod|\
175:493:Novosibirsk|\
175:494:Omsk|\
175:495:Orenburg|\
175:496:Oryol|\
175:497:Penza|\
175:498:Perm|\
175:499:Primorsky|\
175:500:Pskov|\
175:501:Rostov|\
175:502:Ryazan|\
175:503:Saint Petersburg|\
175:504:Sakha|\
175:505:Sakhalin|\
175:506:Samara|\
175:507:Saratov|\
175:508:Smolensk|\
175:509:Stavropol|\
175:510:Sverdlovsk|\
175:511:Tambov|\
175:512:Tatarstan|\
175:513:Tomsk|\
175:514:Tula|\
175:515:Tuva|\
175:516:Tver|\
175:517:Tyumen|\
175:518:Udmurt|\
175:519:Ulyanovsk|\
175:520:Vladimir|\
175:521:Volgograd|\
175:522:Vologda|\
175:523:Voronezh|\
175:524:Yamalo-Nenets|\
175:525:Yaroslavl|\
175:526:Zabaykalsky|\
195:527:Eastern Cape|\
195:528:Free State|\
195:529:Gauteng|\
195:530:KwaZulu-Natal|\
195:531:Limpopo|\
195:532:Mpumalanga|\
195:533:North West|\
195:534:Northern Cape|\
195:535:Western Cape|\
196:536:Busan|\
196:537:Chungcheongbuk-do|\
196:538:Chungcheongnam-do|\
196:539:Daegu|\
196:540:Daejeon|\
196:541:Gangwon-do|\
196:542:Gwangju|\
196:543:Gyeonggi-do|\
196:544:Gyeongsangbuk-do|\
196:545:Gyeongsangnam-do|\
196:546:Incheon|\
196:547:Jeju-teukbyeoljachido|\
196:548:Jeollabuk-do|\
196:549:Jeollanam-do|\
196:550:Seoul|\
196:551:Ulsan|\
197:552:Alava|\
197:553:Albacete|\
197:554:Alicante|\
197:555:Almeria|\
197:556:Asturias|\
197:557:Avila|\
197:558:Badajoz|\
197:559:Baleares|\
197:560:Barcelona|\
197:561:Vizcaya|\
197:562:Burgos|\
197:563:Caceres|\
197:564:Cadiz|\
197:565:Cantabria|\
197:566:Castellon|\
197:567:Ciudad Real|\
197:568:Cordoba|\
197:569:Cuenca|\
197:570:Gerona|\
197:571:Granada|\
197:572:Guadalajara|\
197:573:Guipuzcoa|\
197:574:Huelva|\
197:575:Huesca|\
197:576:Jaen|\
197:577:La Coruna|\
197:578:La Rioja|\
197:579:Leon|\
197:580:Lerida|\
197:581:Lugo|\
197:582:Madrid|\
197:583:Malaga|\
197:584:Murcia|\
197:585:Navarra|\
197:586:Orense|\
197:587:Palencia|\
197:588:Las Palmas|\
197:589:Pontevedra|\
197:590:Salamanca|\
197:591:Santa Cruz|\
197:592:Segovia|\
197:593:Sevilla|\
197:594:Soria|\
197:595:Tarragona|\
197:596:Teruel|\
197:597:Toledo|\
197:598:Valencia|\
197:599:Valladolid|\
197:600:Zamora|\
197:601:Zaragoza|\
202:602:Blekinge|\
202:603:Dalarna|\
202:604:Gavleborg|\
202:605:Gotland|\
202:606:Halland|\
202:607:Jamtland|\
202:608:Jonkoping|\
202:609:Kalmar|\
202:610:Kronoberg|\
202:611:Norrbotten|\
202:612:Orebro|\
202:613:Ostergotland|\
202:614:Skane|\
202:615:Sodermanland|\
202:616:Stockholm|\
202:617:Uppsala|\
202:618:Varmland|\
202:619:Vasterbotten|\
202:620:Vasternorrland|\
202:621:Vastmanland|\
202:622:Vastra Gotaland|\
222:623:England|\
222:624:Northern Ireland|\
222:625:Scotland|\
222:626:Wales|\
228:627:Central Highlands|\
228:628:Mekong River Delta|\
228:629:North Central Coast|\
228:630:Northeast|\
228:631:Northwest|\
228:632:Red River Delta|\
228:633:South Central Coast|\
228:634:Southeast|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var country = '\
001:USA|\
002:Afghanistan|\
003:Albania|\
004:Algeria|\
005:Andorra|\
006:Angola|\
007:Anguilla|\
008:Antarctica|\
009:Antigua and Barbuda|\
010:Argentina|\
011:Armenia|\
012:Aruba|\
013:Australia|\
014:Austria|\
015:Azerbaijan|\
016:Bahamas|\
017:Bahrain|\
018:Bangladesh|\
019:Barbados|\
020:Belarus|\
021:Belgium|\
022:Belize|\
023:Benin|\
024:Bermuda|\
025:Bhutan|\
026:Bolivia|\
027:Borneo|\
028:Bosnia Herzogovinia|\
029:Botswana|\
030:Brazil|\
031:British Indian Ocean Territory|\
032:British Virgin Islands|\
033:Brunei|\
034:Bulgaria|\
035:Burkina Fasso|\
036:Burma - Union of Myanmar|\
037:Burundi|\
038:Cambodia|\
039:Cameroon|\
040:Canada|\
041:Cape Verde|\
042:Cayman Islands|\
043:Central African Republic|\
044:Chad|\
045:Chile|\
046:China|\
047:Colombia|\
048:Comoros|\
049:Congo (The Democratic Republic of the Congo)|\
235:Congo (The Republic of the Congo)|\
050:Cook Islands|\
051:Costa Rica|\
052:Croatia|\
053:Cuba|\
054:Cyprus|\
055:Czech Republic|\
056:Denmark|\
057:Djibouti|\
058:Dominica|\
059:Dominican Republic|\
060:East Timor|\
061:Ecuador|\
062:Egypt|\
063:El Salvador|\
064:Equatorial Guinea|\
065:Eritrea|\
066:Estonia|\
067:Ethiopia|\
068:Faroe Islands|\
069:Falkland Islands|\
070:Federated States of Micronesia|\
071:Fiji|\
072:Finland|\
073:France|\
074:French Guiana|\
075:French Polynesia|\
076:Gabon|\
077:Gambia|\
078:Georgia|\
079:Germany|\
080:Ghana|\
081:Gibraltar|\
082:Greece|\
083:Greenland|\
084:Grenada|\
085:Guadeloupe|\
086:Guam|\
087:Guatemala|\
088:Guinea-Bissau|\
089:Guinea|\
090:Guyana|\
091:Haiti|\
092:Honduras|\
093:Hong Kong|\
094:Hungary|\
095:Iceland|\
096:India|\
097:Indonesia|\
098:Iran|\
099:Iraq|\
100:Ireland|\
101:Israel|\
102:Italy|\
103:Ivory Coast (Republic of Côte d\'Ivoire)|\
104:Jamaica|\
105:Japan|\
106:Johnston Island|\
107:Jordan|\
108:Kazakhstan|\
109:Kenya|\
110:Kiribati|\
111:Kosovo|\
112:Kuwait|\
113:Kyrgystan|\
114:Laos|\
115:Latvia|\
116:Lebanon|\
117:Lesotho|\
118:Liberia|\
119:Libya|\
120:Liechtenstein|\
121:Lithuania|\
122:Luxembourg|\
123:Macau (Macao)|\
124:Macedonia|\
125:Madagascar|\
126:Malawi|\
127:Malaysia|\
128:Maldives|\
129:Mali|\
130:Malta|\
131:Marshall Islands|\
132:Martinique|\
133:Mauritania|\
134:Mauritius|\
135:Mexico|\
136:Midway Islands|\
137:Moldova|\
138:Monaco|\
139:Mongolia|\
140:Montenegro|\
141:Montserrat|\
142:Morocco|\
143:Mozambique|\
144:Namibia|\
145:Nauru|\
146:Nepal|\
147:Netherlands Antilles|\
148:Netherlands|\
149:New Caledonia|\
150:New Zealand|\
151:Nicaragua|\
152:Niger|\
153:Nigeria|\
154:Niue|\
155:Norfolk Island|\
156:North Korea (Democratic People\'s Republic of Korea)|\
157:Northern Mariana Islands|\
158:Norway|\
159:Oman|\
160:Pakistan|\
161:Palau|\
162:Palestinian Territory|\
163:Panama|\
164:Papua New Guinea|\
165:Paraguay|\
166:Peru|\
167:Philippines|\
168:Pitcairn Islands|\
169:Poland|\
170:Portugal|\
171:Puerto Rico|\
172:Qatar|\
173:Reunion|\
174:Romania|\
175:Russian Federation|\
176:Rwanda|\
177:Saint Helena|\
178:Saint Kitts and Nevis|\
179:Saint Lucia|\
180:Saint Pierre and Miquelon|\
181:Saint Vincent and Grenadines|\
182:Samoa|\
183:San Marino|\
184:Sao Tome and Principe|\
185:Saudi Arabia|\
186:Senegal|\
187:Serbia|\
188:Seychelles|\
189:Sierra Leone|\
190:Singapore|\
191:Slovakia|\
192:Slovenia|\
193:Solomon Islands|\
194:Somalia|\
195:South Africa|\
196:South Korea (Republic of Korea)|\
197:Spain|\
198:Sri Lanka|\
199:Sudan|\
200:Suriname|\
201:Swaziland|\
202:Sweden|\
203:Switzerland|\
204:Syria (Syrian Arab Republic)|\
205:Taiwan|\
206:Tajikistan|\
207:Tanzania|\
208:Thailand|\
209:Togo|\
210:Tokelau|\
211:Tonga|\
212:Trinidad and Tobago|\
213:Tunisia|\
214:Turkey|\
215:Turkmenistan|\
216:Turks and Caicos Islands|\
217:Tuvalu|\
218:U.S. Virgin Islands|\
219:Uganda|\
220:Ukraine|\
221:United Arab Emirates|\
222:United Kingdom|\
001:United States of America|\
223:Uruguay|\
224:Uzbekistan|\
225:Vanuatu|\
226:Vatican City|\
227:Venezuela|\
228:Vietnam|\
229:Wake Island|\
230:Wallis and Futuna Islands|\
231:Western Sahara|\
232:Yemen|\
233:Zambia|\
234:Zimbabwe\
';

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the countries from the country list
function populateCountry(defaultCountry) {
  if ( postCountry != '' ) {
    defaultCountry = postCountry;
  }
  var countryLineArray = country.split('|');  // Split into lines
  var selObj = document.getElementById('countrySelect');
  selObj.options[0] = new Option('Select country','999');
  selObj.selectedIndex = 0;
  for (var loop = 0; loop < countryLineArray.length; loop++) {
    lineArray = countryLineArray[loop].split(':');
    countryCode  = TrimString(lineArray[0]);
    countryName  = TrimString(lineArray[1]);
    if ( countryCode != '' ) {
      selObj.options[loop + 1] = new Option(countryName, countryCode);
    }
    if ( defaultCountry == countryCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}

function populateState() {
  var selObj = document.getElementById('stateSelect');
  var foundState = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select state/region','999');
    selObj.selectedIndex = 0;
  }
  // Populate the drop down with states from the selected country
  var stateLineArray = state.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < stateLineArray.length; loop++) {
    lineArray = stateLineArray[loop].split(":");
    countryCode  = TrimString(lineArray[0]);
    stateCode    = TrimString(lineArray[1]);
    stateName    = TrimString(lineArray[2]);
  if (document.getElementById('countrySelect').value == countryCode && countryCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) {
        parentObj = document.getElementById('stateSelect').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement("SELECT");
        inputSel.setAttribute("name","state");
        inputSel.setAttribute("id","stateSelect");
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('stateSelect');
        selObj.selectedIndex = 0;
      }
      if ( stateCode != '' ) {
        selObj.options[optionCntr] = new Option(stateName, stateCode);
      }
      // See if it's selected from a previous post
      if ( stateCode == postState && countryCode == postCountry ) {
        selObj.selectedIndex = optionCntr;
      }
      foundState = true;
      optionCntr++
    }
  }

  if ( ! foundState && document.getElementById('countrySelect').value != '999') {
  selObj.options[0] = new Option('State/region option not available','0');
  }  
}

function initCountry(country) {
  populateCountry(country);
  populateState();
}
