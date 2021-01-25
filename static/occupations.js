
<!-- Paste this code into an external JavaScript file  -->

// If you have PHP you can set the post values like this
//var postState = '<?= $_POST["state"] ?>';
//var postCountry = '<?= $_POST["country"] ?>';
var postOccupation = '';
var postField = '';
var postStatus = '';

// Occupation table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var occupation = '\
100:101:Actor|\
100:102:Announcer|\
100:103:Art Director|\
100:104:Athlete and/or Sports Competitor|\
100:105:Audio and Video Equipment Technician|\
100:106:Author|\
100:107:Broadcast News Analyst|\
100:108:Broadcast Technician|\
100:109:Camera Operator|\
100:110:Choreographer|\
100:111:Coach and/or Scout|\
100:112:Commercial and/or Industrial Designers|\
100:113:Copy Writer|\
100:114:Craft Artist|\
100:115:Curator|\
100:116:Dancer|\
100:117:Director - Stage, Motion Pictures, Television and/or Radio|\
100:118:Editor|\
100:119:Essayist|\
100:120:Fashion Designer|\
100:121:Film and Video Editor|\
100:122:Floral Designer|\
100:123:Graphic Designer|\
100:124:Illustrator|\
100:125:Interior Designer|\
100:126:Interpreter and/or Translator|\
100:127:Media and Communication Equipment Worker|\
100:128:Merchandising|\
100:129:Multi-Media Artist and/or Animator|\
100:130:Music Director and/or Composer|\
100:131:Musician and/or Singer|\
100:132:Painter|\
100:133:Photographer|\
100:134:Poet|\
100:135:Producer and/or Director|\
100:136:Program Director|\
100:137:Public Relations Specialist|\
100:138:Radio Operator|\
100:139:Reporter and/or Correspondent|\
100:140:Sculptor|\
100:141:Set and/or Exhibit Designer|\
100:142:Singer|\
100:143:Songwriter and/or Lyricist|\
100:144:Sound Engineering Technician|\
100:145:Talent Director|\
100:146:Technical Director and/or Manager|\
100:147:Technical Writer|\
100:148:Umpire, Referee, and/or Other Sports Official|\
100:149:Writer|\
100:150:Other - Artist|\
100:151:Other - Creative Writer|\
100:152:Other - Designer|\
100:153:Other - Entertainer and/or Performer|\
100:154:Other - Media Related Worker|\
200:201:Janitor and/or Cleaner (except Maid and/or Housekeeping Cleaner)|\
200:202:Landscaping and/or Groundskeeping Worker|\
200:203:Maid and/or Housekeeping Cleaner|\
200:204:Pest Control Worker|\
200:205:Pesticide Handler, Sprayer, and/or Applicator|\
200:206:Supervisor/Manager of Housekeeping and Janitorial Workers|\
200:207:Supervisor/Manager of Landscaping, Lawn Service, and Groundskeeping Workers|\
200:208:Tree Trimmer and/or Pruner|\
200:209:Other - Building Cleaning Worker|\
200:210:Other - Grounds Maintenance Worker|\
300:301:Accountant|\
300:302:Agent and/or Business Manager of Artists, Performers, and Athletes|\
300:303:Appraiser and/or Assessor|\
300:304:Auditor|\
300:305:Budget Analyst|\
300:306:Business Continuity Planner|\
300:307:Business Operations Specialist|\
300:308:Claims Adjuster, Examiner, and/or Investigator|\
300:309:Compensation, Benefits, and/or Job Analysis Specialist|\
300:310:Compliance Officer|\
300:311:Coroner|\
300:312:Cost Estimator|\
300:313:Credit Analyst|\
300:314:Customs Broker|\
300:315:Emergency Management Specialist|\
300:316:Employment Interviewer|\
300:317:Employment, Recruitment, and/or Placement Specialist|\
300:318:Energy Auditor|\
300:319:Environmental Compliance Inspector|\
300:320:Equal Opportunity Representative and/or Officer  |\
300:321:Financial Analyst|\
300:322:Financial Examiner|\
300:323:Financial Quantitative Analyst|\
300:324:Fraud Examiner, Investigator and/or Analyst|\
300:325:Government Property Inspector and/or Investigator|\
300:326:Human Resources and/or Training|\
300:327:Insurance Appraiser and/or Adjuster|\
300:328:Insurance Underwriter|\
300:329:Investment Underwriter|\
300:330:Labor Relations Specialist|\
300:331:Licensing Examiner and/or Inspector|\
300:332:Loan Counselor|\
300:333:Loan Officer|\
300:334:Logistician|\
300:335:Logistics Analyst and/or Engineer|\
300:336:Management Analyst|\
300:337:Meeting and Convention Planner|\
300:338:Personal Financial Advisor|\
300:339:Personnel Recruiter|\
300:340:Purchasing Agent and/or Buyer|\
300:341:Regulatory Affairs Specialist |\
300:342:Risk Management Specialist|\
300:343:Security Management Specialist|\
300:344:Sustainability Specialist|\
300:345:Tax Examiner, Collector, and/or Revenue Agent|\
300:346:Tax Preparer|\
300:347:Training and Development Specialist|\
300:348:Wholesale and/or Retail Buyer|\
300:349:Other - Financial Specialist|\
300:350:Other - Business Worker|\
400:401:Clergy|\
400:402:Counselor - Educational, Vocational, and School|\
400:403:Counselor - Mental Health|\
400:404:Counselor - Rehabilitation|\
400:405:Director of Religious Education or Activities|\
400:406:Health Educator|\
400:407:Marriage and/or Family Therapist|\
400:408:Probation Officer and/or Correctional Treatment Specialist|\
400:409:Social and Human Service Assistant|\
400:410:Social Worker - Child, Family and/or School|\
400:411:Social Worker - Medical and/or Public Health|\
400:412:Social Worker - Mental Health and/or Substance Abuse|\
400:413:Substance Abuse and/or Behavioral Disorder Counselor|\
400:414:Other - Community and/or Social Service Specialist|\
400:415:Other - Counselor|\
400:416:Other - Religious Worker|\
400:417:Other - Social Worker|\
500:501:Actuary|\
500:502:Biostatistician|\
500:503:Business Intelligence Analyst|\
500:504:Clinical Data Manager|\
500:505:Computer and Information Scientist|\
500:506:Computer Programmer|\
500:507:Computer Security Specialist|\
500:508:Computer Software Engineer|\
500:509:Computer Specialist|\
500:510:Computer Support Specialist|\
500:511:Computer Systems Engineers/Architect|\
500:512:Data Warehousing Specialist|\
500:513:Database Administrator|\
500:514:Database Architect|\
500:534:Data Scientist|\
500:515:Document Management Specialist|\
500:516:Electronic Commerce Specialist|\
500:517:Geographic Information Systems Technician  |\
500:518:Geospatial Information Scientist and/or Technologist  |\
500:519:Informatics Nurse Specialist|\
500:520:Information Technology Project Manager|\
500:521:Mathematical Science Occupation|\
500:522:Mathematical Technician|\
500:523:Mathematician|\
500:524:Network and Computer Systems Administrator|\
500:525:Network Systems and Data Communications Analyst|\
500:526:Operations Research Analyst|\
500:527:Software Quality Assurance Engineer and/or Tester|\
500:528:Statistician|\
500:529:Telecommunications Specialist|\
500:530:Video Game Designer|\
500:531:Web Administrator|\
500:532:Web Developer|\
500:533:Other - Computer Science Worker|\
600:601:Boilermaker|\
600:602:Carpenter|\
600:603:Carpet Installer|\
600:604:Cement Mason and/or Concrete Finisher|\
600:605:Construction and/or Building Inspector|\
600:606:Construction Laborer|\
600:607:Derrick Operator (Oil and Gas)|\
600:608:Drywall and/or Ceiling Tile Installer|\
600:609:Earth Driller (except Oil and Gas)|\
600:610:Electrician|\
600:611:Elevator Installer and/or Repairer|\
600:612:Explosives Worker, Ordnance Handling Expert, and/or Blaster|\
600:613:Fence Erector|\
600:614:Floor Layer|\
600:615:Floor Sander and/or Finisher|\
600:616:Glazier|\
600:617:Hazardous Materials Removal Worker|\
600:618:Helper - Brickmasons, Blockmasons, Stonemasons, and/or Tile and Marble Setters|\
600:619:Helper - Carpenters    |\
600:620:Helper - Electricians  |\
600:621:Helper - Extraction Workers|\
600:622:Helper - Painters, Paperhangers, Plasterers, and/or Stucco Masons|\
600:623:Helper - Pipelayers, Plumbers, Pipefitters, and/or Steamfitters  |\
600:624:Helper - Roofers|\
600:625:Highway Maintenance Worker|\
600:626:Insulation Worker|\
600:627:Mason - Brick, Block, Stone, Tile and/or Marble|\
600:628:Mining Machine Operator|\
600:629:Painter and/or Paperhanger|\
600:630:Paving, Surfacing, and/or Tamping Equipment Operator|\
600:631:Pile-Driver Operator|\
600:632:Pipelayer|\
600:633:Plumber, Pipefitter, and/or Steamfitter|\
600:634:Rail-Track Laying and/or Maintenance Equipment Operator|\
600:635:Reinforcing Iron and/or Rebar Worker|\
600:636:Rock Splitter|\
600:637:Roofer|\
600:638:Rotary Drill Operator|\
600:639:Roustabout|\
600:640:Segmental Paver|\
600:641:Septic Tank Servicer and/or Sewer Pipe Cleaner|\
600:642:Sheet Metal Worker|\
600:643:Solar Energy Installation Manager|\
600:644:Solar Photovoltaic Installer|\
600:645:Solar Thermal Installer and/or Technician|\
600:646:Structural Iron and Steel Worker|\
600:647:Supervisor/Manager of Construction and/or Extraction Workers|\
600:648:Taper|\
600:649:Weatherization Installer and/or Technician|\
600:650:Other - Construction and Related Work|\
600:651:Other - Construction Equipment Operator|\
600:652:Other - Extraction Worker|\
600:653:Other - Helper|\
600:654:Other - Mining Worker|\
600:655:Other - Oil and Gas Worker|\
700:701:Adaptive Physical Education Specialist|\
700:702:Adult Literacy, Remedial Education, and/or GED Teacher and/or Instructor|\
700:703:Archivist|\
700:704:Audio-Visual Collections Specialist|\
700:705:Curator|\
700:706:Elementary School Teacher (except Special Education)|\
700:707:Farm and/or Home Management Advisor|\
700:708:Graduate Teaching Assistant|\
700:709:Instructional Coordinator|\
700:710:Instructional Designer and/or Technologist|\
700:711:Kindergarten Teacher (except Special Education)|\
700:712:Librarian|\
700:713:Library Technician|\
700:714:Middle School Teacher (except Special and Vocational Education) |\
700:715:Museum Technician and/or Conservator  |\
700:716:Postsecondary Teacher - Agricultural Sciences|\
700:717:Postsecondary Teacher - Anthropology and/or Archeology|\
700:718:Postsecondary Teacher - Architecture|\
700:719:Postsecondary Teacher - Area, Ethnic and/or Cultural Studies|\
700:720:Postsecondary Teacher - Art, Drama and/or Music|\
700:721:Postsecondary Teacher - Atmospheric, Earth, Marine and/or Space Sciences|\
700:722:Postsecondary Teacher - Biological Science|\
700:723:Postsecondary Teacher - Business|\
700:724:Postsecondary Teacher - Chemistry|\
700:725:Postsecondary Teacher - Communications|\
700:726:Postsecondary Teacher - Computer Science|\
700:727:Postsecondary Teacher - Criminal Justice and/or Law Enforcement|\
700:728:Postsecondary Teacher - Economics|\
700:729:Postsecondary Teacher - Education|\
700:730:Postsecondary Teacher - Engineering|\
700:731:Postsecondary Teacher - English Language and/or Literature|\
700:732:Postsecondary Teacher - Environmental Science|\
700:733:Postsecondary Teacher - Foreign Language and/or Literature|\
700:734:Postsecondary Teacher - Forestry and/or Conservation Science|\
700:735:Postsecondary Teacher - Geography|\
700:736:Postsecondary Teacher - Health Specialties|\
700:737:Postsecondary Teacher - History|\
700:738:Postsecondary Teacher - Home Economics|\
700:739:Postsecondary Teacher - Law|\
700:740:Postsecondary Teacher - Library Science|\
700:741:Postsecondary Teacher - Mathematical Science|\
700:742:Postsecondary Teacher - Nursing|\
700:743:Postsecondary Teacher - Other|\
700:744:Postsecondary Teacher - Philosophy or Religion|\
700:745:Postsecondary Teacher - Physics|\
700:746:Postsecondary Teacher - Political Science|\
700:747:Postsecondary Teacher - Psychology|\
700:748:Postsecondary Teacher - Recreation and Fitness Studies|\
700:749:Postsecondary Teacher - Social Sciences|\
700:750:Postsecondary Teacher - Social Work|\
700:751:Postsecondary Teacher - Sociology|\
700:752:Postsecondary Teacher - Vocational Education|\
700:753:Preschool Teacher (except Special Education)|\
700:754:Secondary School Teacher (except Special and Vocational Education)|\
700:755:Self-Enrichment Education Teacher|\
700:756:Special Education Teacher - Middle School|\
700:757:Special Education Teacher - Preschool, Kindergarten, and Elementary School  |\
700:758:Special Education Teacher - Secondary School|\
700:759:Teacher Assistant|\
700:760:Tutor|\
700:761:Vocational Education Teacher - Middle School|\
700:762:Vocational Education Teacher - Secondary School|\
700:763:Other - Education, Training, or Library Worker|\
700:764:Other - Teacher and/or Instructor|\
800:801:Aerospace Engineer|\
800:802:Aerospace Engineering and Operations Technician|\
800:803:Agricultural Engineer|\
800:804:Architect|\
800:805:Architectural and/or Civil Drafter|\
800:806:Automotive Engineer|\
800:807:Automotive Engineering Technician|\
800:808:Biochemical Engineer|\
800:809:Biomedical Engineer|\
800:810:Cartographer and/or Photogrammetrist|\
800:811:Chemical Engineer|\
800:812:Civil Engineer|\
800:813:Civil Engineering Technician|\
800:814:Computer Hardware Engineer|\
800:815:Drafter|\
800:816:Electrical and/or Electronic Engineering Technician|\
800:817:Electrical and/or Electronics Drafter|\
800:818:Electrical Engineers|\
800:819:Electro-Mechanical Technician|\
800:820:Electronics Engineer|\
800:821:Energy Engineer|\
800:822:Environmental Engineer|\
800:823:Environmental Engineering Technician|\
800:824:Fire-Prevention and Protection Engineer|\
800:825:Fuel Cell Engineer|\
800:826:Fuel Cell Technician|\
800:827:Geodetic Surveyor|\
800:828:Health and Safety Engineer|\
800:829:Human Factors Engineer and Ergonomist|\
800:830:Industrial Engineering Technicians|\
800:831:Industrial Engineers|\
800:832:Industrial Safety and Health Engineer|\
800:833:Landscape Architect|\
800:834:Manufacturing Engineer|\
800:835:Manufacturing Engineering Technologist|\
800:836:Manufacturing Production Technician|\
800:837:Mapping Technician|\
800:838:Marine Architect|\
800:839:Marine Engineer and/or Naval Architect|\
800:840:Materials Engineer|\
800:841:Mechanical Drafter|\
800:842:Mechanical Engineer|\
800:843:Mechanical Engineering Technician|\
800:844:Mechatronics Engineer|\
800:845:Microsystems Engineer|\
800:846:Mining and/or Geological Engineer (including Mining Safety Engineer)|\
800:847:Nanosystems Engineer|\
800:848:Nanotechnology Engineering Technician|\
800:849:Non-Destructive Testing Specialist|\
800:850:Nuclear Engineer|\
800:851:Petroleum Engineer|\
800:852:Photonics Engineer|\
800:853:Photonics Technician|\
800:854:Product Safety Engineer|\
800:855:Radio Frequency Identification Device Specialist|\
800:856:Robotics Engineer|\
800:857:Robotics Technician|\
800:858:Solar Energy Systems Engineer|\
800:859:Surveying and Mapping Technician|\
800:860:Surveyor|\
800:861:Transportation Engineer|\
800:862:Validation Engineer|\
800:863:Water/Wastewater Engineer|\
800:864:Wind Energy Engineer|\
800:865:Other - Engineer|\
800:866:Other - Engineering Technician|\
900:901:Agricultural Equipment Operator|\
900:902:Agricultural Inspector|\
900:903:Animal Breeder|\
900:904:Faller|\
900:905:Farm Labor Contractor|\
900:906:Farmer and/or Rancher|\
900:907:Farmworker and/or Laborer (Crop, Nursery, and Greenhouse)|\
900:908:Farmworker and/or Laborer (Ranch and Farm Animals)|\
900:909:Fisher or Related Fishing Worker|\
900:910:Forest and Conservation Worker|\
900:911:Grader and/or Sorter of Agricultural Products|\
900:912:Hunter and/or Trapper|\
900:913:Log Grader and/or Scaler|\
900:914:Logging Equipment Operator|\
900:915:Nursery Worker|\
900:916:Supervisor/Manager of Agricultural Crop and Horticultural Workers  |\
900:917:Supervisor/Manager of Animal Husbandry and Animal Care Workers|\
900:918:Supervisor/Manager of Aquacultural Workers|\
900:919:Supervisor/Manager of Farming, Fishing, and Forestry Workers|\
900:920:Supervisor/Manager of Logging Workers  |\
900:921:Other - Agriculture Worker|\
900:922:Other - Animal Science|\
900:923:Other - Fishing Worker|\
900:924:Other - Forestry Worker|\
900:925:Other - Horticulture Worker|\
900:926:Other - Logging Worker|\
1000:1001:Barista|\
1000:1002:Bartender|\
1000:1003:Chef and/or Head Cook|\
1000:1004:Cook - Fast Food|\
1000:1005:Cook - Institutional and Cafeteria|\
1000:1006:Cook - Other|\
1000:1007:Cook - Private Household|\
1000:1008:Cook - Restaurant|\
1000:1009:Cook - Short Order|\
1000:1010:Dishwasher|\
1000:1011:Food Preparation Worker|\
1000:1012:Food Server|\
1000:1013:Food Service Attendant/Helper|\
1000:1014:Host/Hostess|\
1000:1015:Supervisor/Manager of Food Preparation and Serving Workers|\
1000:1016:Waiter/Waitress|\
1000:1017:Other - Food Preparation Worker|\
1100:1101:Acupuncturist|\
1100:1102:Acute Care Nurse|\
1100:1103:Advanced Practice Psychiatric Nurse|\
1100:1104:Allergist and/or Immunologist|\
1100:1105:Anesthesiologist|\
1100:1106:Anesthesiologist Assistant|\
1100:1107:Athletic Trainer|\
1100:1108:Audiologist|\
1100:1109:Cardiovascular Technologist and/or Technician|\
1100:1110:Chiropractor|\
1100:1111:Critical Care Nurse|\
1100:1112:Cytogenetic Technologist|\
1100:1113:Cytotechnologist|\
1100:1114:Dental Assistant|\
1100:1115:Dental Hygienist|\
1100:1116:Dentist|\
1100:1117:Dermatologist|\
1100:1118:Diagnostic Medical Sonographer|\
1100:1119:Dietetic Technician|\
1100:1120:Dietitian and/or Nutritionist|\
1100:1121:Electroneurodiagnostic Technologist|\
1100:1122:Emergency Medical Technician and/or Paramedic|\
1100:1123:Endoscopy Technician|\
1100:1124:Family and General Practitioner|\
1100:1125:Genetic Counselor|\
1100:1126:Hearing Aid Specialist|\
1100:1127:Histotechnologist and/or Histologic Technician|\
1100:1128:Home Health Aide|\
1100:1129:Hospitalist|\
1100:1130:Internist|\
1100:1131:Licensed Practical Nurse and/or Licensed Vocational Nurse|\
1100:1132:Vision, Orientation and Mobility Specialist|\
1100:1133:Massage Therapist|\
1100:1134:Medical and Clinical Laboratory Technician and/or Technologist|\
1100:1135:Medical Assistant|\
1100:1136:Medical Equipment Preparer|\
1100:1137:Medical Records and Health Information Technicians|\
1100:1138:Medical Transcriptionist|\
1100:1139:Midwife|\
1100:1140:Naturopathic Physician|\
1100:1141:Neurologist|\
1100:1142:Nuclear Medicine Physician|\
1100:1143:Nuclear Medicine Technologist|\
1100:1144:Nuclear Medicine Technologist|\
1100:1145:Nurse Anesthetist|\
1100:1146:Nurse Midwife|\
1100:1147:Nurse Practitioner|\
1100:1148:Nursing Aid, Orderly and/or Attendant|\
1100:1149:Obstetrician and/or Gynecologist|\
1100:1150:Occupational Health and Safety Specialist|\
1100:1151:Occupational Health and Safety Technician|\
1100:1152:Occupational Therapist|\
1100:1153:Occupational Therapist Aide|\
1100:1154:Occupational Therapist Assistant|\
1100:1155:Ophthalmic Medical Technologist and/or Technician|\
1100:1156:Ophthalmologist|\
1100:1157:Optician (Dispensing)|\
1100:1158:Optometrist|\
1100:1159:Oral and Maxillofacial Surgeon|\
1100:1160:Orthodontist|\
1100:1161:Orthoptist|\
1100:1162:Orthotist and/or Prosthetist|\
1100:1163:Pathologist|\
1100:1164:Pediatrician|\
1100:1165:Pharmacist|\
1100:1166:Pharmacy Aide|\
1100:1167:Pharmacy Technician|\
1100:1168:Physical Medicine and Rehabilitation Physician  |\
1100:1169:Physical Therapist|\
1100:1170:Physical Therapist Aide|\
1100:1171:Physical Therapist Assistant|\
1100:1172:Physician\'s Assistant|\
1100:1173:Podiatrist|\
1100:1174:Preventive Medicine Physician|\
1100:1175:Prosthodontist|\
1100:1176:Psychiatric Aide|\
1100:1177:Psychiatric Technician|\
1100:1178:Psychiatrist|\
1100:1179:Radiation Therapist|\
1100:1180:Radiologic Technologist and/or Technician|\
1100:1181:Radiologist|\
1100:1182:Recreational Therapist|\
1100:1183:Registered Nurse|\
1100:1184:Respiratory Therapist|\
1100:1185:Respiratory Therapy Technician|\
1100:1186:Speech-Language Pathologist|\
1100:1187:Speech-Language Pathology Assistant|\
1100:1188:Sports Medicine Physician|\
1100:1189:Surgeon|\
1100:1190:Surgical Technologist|\
1100:1191:Urologist|\
1100:1192:Veterinarian|\
1100:1193:Veterinary Assistant and/or Laboratory Animal Caretaker|\
1100:1194:Veterinary Technologist and/or Technician|\
1100:1195:Other - Health Diagnosing and Treating Practitioner|\
1100:1196:Other - Health Technologist and/or Technician|\
1100:1197:Other - Healthcare Support Worker|\
1100:1198:Other - Physician and/or Surgeon|\
1100:1199:Other - Therapist|\
1300:1301:Aircraft Mechanic and/or Service Technician|\
1300:1302:Automotive Mechanic and/or Service Technician|\
1300:1303:Avionics Technician|\
1300:1304:Bicycle Repairer|\
1300:1305:Bus and Truck Mechanic and/or Diesel Engine Specialist|\
1300:1306:Camera and/or Photographic Equipment Repairer|\
1300:1307:Coin, Vending, and/or Amusement Machine Servicer and/or Repairer|\
1300:1308:Commercial Diver|\
1300:1309:Computer, Automated Teller, and/or Office Machine Repairer|\
1300:1310:Control and Valve Installer and/or Repairer|\
1300:1311:Electric Motor, Power Tool, and/or Related Repairer|\
1300:1312:Electrical and Electronics Installer and/or Repairer|\
1300:1313:Electrical Power-Line Installers and Repairers|\
1300:1314:Fabric Mender|\
1300:1315:Farm Equipment Mechanic|\
1300:1316:Geothermal Technician|\
1300:1317:Heating, Air Conditioning, and Refrigeration Mechanic and/or Installer|\
1300:1318:Helper - Installation, Maintenance and/or Repair Workers  |\
1300:1319:Home Appliance Repairer|\
1300:1320:Home Entertainment Equipment Installer and/or Repairer|\
1300:1321:Industrial Machinery Mechanic|\
1300:1322:Locksmith and/or Safe Repairer|\
1300:1323:Machinery Maintenance Worker|\
1300:1324:Maintenance and Repair Worker - General|\
1300:1325:Manufactured Building and Mobile Home Installer|\
1300:1326:Mechanic - Power Equipment and/or Small Engine|\
1300:1327:Mechanical Door Repairer|\
1300:1328:Medical Equipment Repairer|\
1300:1329:Millwright|\
1300:1330:Mobile Heavy Equipment Mechanic|\
1300:1331:Motorboat Mechanic|\
1300:1332:Motorcycle Mechanic|\
1300:1333:Musical Instrument Repairer and/or Tuner|\
1300:1334:Precision Instrument and Equipment Repairer|\
1300:1335:Radio Mechanic|\
1300:1336:Rail Car Repairer|\
1300:1337:Recreational Vehicle Service Technician|\
1300:1338:Refractory Materials Repairer|\
1300:1339:Refrigeration Mechanic and/or Installer|\
1300:1340:Rigger|\
1300:1341:Security and/or Fire Alarm Systems Installer|\
1300:1342:Signal and Track Switch Repairer|\
1300:1343:Supervisor/Manager of Mechanics, Installers, and/or Repairers|\
1300:1344:Telecommunications Equipment Installer and/or Repairer|\
1300:1345:Tire Repairer and/or Changer|\
1300:1346:Watch Repairer|\
1300:1347:Wind Turbine Service Technician |\
1300:1348:Other - Installation, Maintenance, and Repair Worker|\
1400:1401:Administrative Law Judge, Adjudicator, and/or Hearing Officer|\
1400:1402:Arbitrator, Mediator, and/or Conciliator|\
1400:1403:Court Reporter|\
1400:1404:Judge, Magistrate Judge, and/or Magistrate|\
1400:1405:Law Clerk|\
1400:1406:Lawyer|\
1400:1407:Paralegal and/or Legal Assistant|\
1400:1408:Title Examiner, Abstractor, and/or Searcher|\
1400:1409:Other - Legal Worker|\
1400:1410:Other - Legal Support Worker|\
1500:1501:Agricultural and/or Food Science Technician|\
1500:1502:Animal Scientist|\
1500:1503:Anthropologist|\
1500:1504:Archeologist|\
1500:1505:Astronomer|\
1500:1506:Atmospheric and/or Space Scientist|\
1500:1507:Biochemist|\
1500:1508:Bioinformatics Scientist  |\
1500:1509:Biological Technician|\
1500:1510:Biologists |\
1500:1511:Biophysicist|\
1500:1512:Chemical Technician|\
1500:1513:Chemist|\
1500:1514:City and Regional Planning Aide|\
1500:1515:Climate Change Analyst|\
1500:1516:Conservation Scientist|\
1500:1517:Economist|\
1500:1518:Environmental Economist|\
1500:1519:Environmental Restoration Planner|\
1500:1520:Environmental Science Technician|\
1500:1521:Environmental Scientist|\
1500:1522:Epidemiologist|\
1500:1523:Food Scientist and/or Technologist|\
1500:1524:Forensic Science Technician|\
1500:1525:Forest and Conservation Technician|\
1500:1526:Forester|\
1500:1527:Geneticist|\
1500:1528:Geographer|\
1500:1529:Geological and/or Petroleum Technician|\
1500:1530:Geological Sample Test Technician|\
1500:1531:Geophysical Data Technician|\
1500:1532:Geoscientist (except Hydrologist or Geographer)|\
1500:1533:Historian|\
1500:1534:Hydrologist|\
1500:1535:Industrial Ecologist|\
1500:1536:Market Research Analyst|\
1500:1537:Materials Scientist|\
1500:1538:Medical Scientist (except Epidemiologist)|\
1500:1539:Microbiologist|\
1500:1540:Molecular and Cellular Biologist|\
1500:1541:Neuropsychologist and/or Clinical Neuropsychologist|\
1500:1542:Nuclear Equipment Operation Technician|\
1500:1543:Nuclear Monitoring Technician|\
1500:1544:Nuclear Technician|\
1500:1545:Park Naturalist|\
1500:1546:Physicist|\
1500:1547:Political Scientist|\
1500:1548:Precision Agriculture Technician|\
1500:1549:Psychologist - Clinical|\
1500:1550:Psychologist - Cognitive|\
1500:1551:Psychologist - Counseling|\
1500:1552:Psychologist - Developmental|\
1500:1553:Psychologist - Industrial-Organizational|\
1500:1554:Psychologist - Other|\
1500:1555:Psychologist - Personality|\
1500:1556:Psychologist - School|\
1500:1557:Psychologist - Social|\
1500:1558:Quality Control Analyst|\
1500:1559:Range Manager|\
1500:1560:Remote Sensing Scientist and/or Technologist |\
1500:1561:Remote Sensing Technician|\
1500:1562:Social Science Research Assistant|\
1500:1563:Sociologist|\
1500:1564:Soil and Plant Scientist|\
1500:1565:Soil and/or Water Conservationist|\
1500:1566:Survey Researcher|\
1500:1567:Transportation Planner|\
1500:1568:Urban and Regional Planner|\
1500:1569:Zoologist and/or Wildlife Biologist|\
1500:1570:Other - Biological Scientist|\
1500:1571:Other - Life Scientist|\
1500:1572:Other - Life, Physical and Social Science Technician|\
1500:1573:Other - Mathematical Science Occupation|\
1500:1574:Other - Physical Scientist|\
1500:1575:Other - Science Technician|\
1500:1576:Other - Social Scientist|\
1600:1601:Administrative Services Manager|\
1600:1602:Advertising and Promotions Manager|\
1600:1603:Aquacultural Manager|\
1600:1604:Biofuels Production Manager|\
1600:1605:Biofuels/Biodiesel Technology and/or Product Development Manager |\
1600:1606:Biomass Production Manager|\
1600:1607:Brownfield Redevelopment Specialists and Site Manager|\
1600:1608:Chief Executive Officer|\
1600:1609:Chief Sustainability Officer|\
1600:1610:Clinical Nurse Specialist|\
1600:1611:Clinical Research Coordinator|\
1600:1612:Compensation and Benefits Manager|\
1600:1613:Compliance Manager|\
1600:1614:Computer and Information Systems Manager|\
1600:1615:Construction Manager|\
1600:1616:Crop and Livestock Manager|\
1600:1617:Distance Learning Coordinator|\
1600:1618:Education Administrator - Elementary and Secondary School|\
1600:1619:Education Administrator - Other|\
1600:1620:Education Administrator - Postsecondary|\
1600:1621:Education Administrator - Preschool and Child Care Center/Program|\
1600:1622:Engineering Manager|\
1600:1623:Farm, Ranch, or Other Agricultural Managers|\
1600:1624:Financial Manager|\
1600:1625:Fitness and Wellness Coordinator|\
1600:1626:Food Service Manager|\
1600:1627:Funeral Director|\
1600:1628:Gaming Manager|\
1600:1629:General and Operations Manager|\
1600:1630:Geothermal Production Manager|\
1600:1631:Green Marketer|\
1600:1632:Human Resources Manager|\
1600:1633:Hydroelectric Production Manager|\
1600:1634:Industrial Production Manager|\
1600:1635:Investment Fund Manager|\
1600:1636:Legislator|\
1600:1637:Lodging Manager|\
1600:1638:Logistics Manager|\
1600:1639:Loss Prevention Manager|\
1600:1640:Marketing Manager|\
1600:1641:Medical and Health Services Manager|\
1600:1642:Methane/Landfill Gas Collection System Operator|\
1600:1643:Natural Sciences Manager|\
1600:1644:Nursery and Greenhouse Manager|\
1600:1645:Online Merchant|\
1600:1646:Postmaster and/or Mail Superintendent|\
1600:1647:Property, Real Estate and/or Community Association Manager|\
1600:1648:Public Relations Manager|\
1600:1649:Purchasing Manager|\
1600:1650:Quality Control Systems Manager|\
1600:1651:Regulatory Affairs Manager|\
1600:1652:Sales Manager|\
1600:1653:Security Manager|\
1600:1654:Social and Community Service Manager|\
1600:1655:Storage and Distribution Manager|\
1600:1656:Supply Chain Manager|\
1600:1657:Training and Development Manager|\
1600:1658:Transportation Manager|\
1600:1659:Transportation, Storage, or Distribution Manager|\
1600:1660:Treasurer and/or Controller|\
1600:1661:Water Resource Specialist|\
1600:1662:Wind Energy Operations Manager|\
1600:1663:Wind Energy Project Manager|\
1600:1664:Other - Manager|\
1700:1701:Aircraft Production Worker|\
1700:1702:Baker and/or Bakery Production Worker|\
1700:1703:Bindery Worker|\
1700:1704:Biofuels Processing Technician|\
1700:1705:Biomass Plant Technician|\
1700:1706:Bookbinder and/or Publishing Production Worker|\
1700:1707:Butcher and/or Meat Cutter|\
1700:1708:Cabinetmaker and/or Bench Carpenter|\
1700:1709:Cementing and Gluing Machine Operator and/or Tender|\
1700:1710:Chemical Equipment Operator and/or Tender|\
1700:1711:Chemical Plant and/or System Operator|\
1700:1712:Cleaning, Washing, and Metal Pickling Equipment Operator and/or Tender|\
1700:1713:Coating, Painting, and Spraying Machine Setter, Operator, and/or Tender|\
1700:1714:Coil Winder, Taper, and/or Finisher|\
1700:1715:Computer-Controlled Machine Tool Operator|\
1700:1716:Cooling and Freezing Equipment Operator and/or Tender|\
1700:1717:Crushing, Grinding, and Polishing Machine Setter, Operator, and/or Tenders|\
1700:1718:Cutter and/or Trimmer|\
1700:1719:Cutting, Slicing, Punching, and Press Machine Setter, Operator, and/or Tender|\
1700:1720:Dental Laboratory Technician|\
1700:1721:Drilling and Boring Machine Tool Setter, Operator, and/or Tender|\
1700:1722:Electrical and/or Electronic Equipment Assembler|\
1700:1723:Electromechanical Equipment Assembler|\
1700:1724:Engine and/or Other Machine Assembler|\
1700:1725:Etcher and/or Engraver|\
1700:1726:Extruding, Forming, Pressing, and Compacting Machine Setter, Operator, and/or Tender|\
1700:1727:Fabric and/or Apparel Patternmaker|\
1700:1728:Fiberglass Laminator and/or Fabricator|\
1700:1729:Food and Tobacco Roasting, Baking, and Drying Machine Operator and/or Tender|\
1700:1730:Food Batchmaker|\
1700:1731:Forging Machine Setter, Operator, and/or Tender|\
1700:1732:Foundry Mold and Coremaker|\
1700:1733:Furnace, Kiln, Oven, Drier, and Kettle Operator and/or Tender|\
1700:1734:Furniture Finisher|\
1700:1735:Gas Plant Operator|\
1700:1736:Gem and/or Diamond Worker|\
1700:1737:Glass Blower, Molder, Bender, and/or Finisher|\
1700:1738:Grinding and/or Polishing Worker|\
1700:1739:Grinding, Lapping, Polishing, and Buffing Machine Tool Setter, Operator, and Tender|\
1700:1740:Heat Treating Equipment Setter, Operator, and/or Tender|\
1700:1741:Helper - Production Workers|\
1700:1742:Hydroelectric Plant Technician|\
1700:1743:Inspector, Tester, Sorter, Sampler and/or Weigher|\
1700:1744:Jeweler and/or Precious Stone Worker|\
1700:1745:Job Printer|\
1700:1746:Lathe and Turning Machine Tool Setter, Operator, and/or Tender|\
1700:1747:Laundry and/or Dry-Cleaning Worker|\
1700:1748:Lay-Out Worker|\
1700:1749:Machinist|\
1700:1750:Meat, Poultry, and/or Fish Cutter and Trimmer|\
1700:1751:Medical Appliance Technician|\
1700:1752:Metal Caster and/or Pourer|\
1700:1753:Metal-Refining Furnace Operator and/or Tender|\
1700:1754:Methane/Landfill Gas Generation System Technician|\
1700:1755:Milling and Planing Machine Setter, Operator, and/or Tender|\
1700:1756:Mixing and Blending Machine Setter, Operator, and/or Tender|\
1700:1757:Model Maker|\
1700:1758:Molding and Casting Worker|\
1700:1759:Multiple Machine Tool Setter, Operator, and/or Tender|\
1700:1760:Nuclear Power Reactor Operator|\
1700:1761:Numerical Tool and/or Process Control Programmer|\
1700:1762:Ophthalmic Laboratory Technician|\
1700:1763:Packaging and Filling Machine Operator and/or Tender|\
1700:1764:Painting, Coating, and/or Decorating Worker|\
1700:1765:Paper Goods Machine Setter, Operator, and/or Tenders|\
1700:1766:Patternmaker|\
1700:1767:Petroleum Pump System Operator, Refinery Operator, and/or Gauger|\
1700:1768:Photographic Process Worker|\
1700:1769:Plating and Coating Machine Setter, Operator, and/or Tender|\
1700:1770:Potter|\
1700:1771:Pourer and/or Caster|\
1700:1772:Power Distributor and Dispatcher|\
1700:1773:Power Plant Operator|\
1700:1774:Precious Metal Worker|\
1700:1775:Prepress Technician and/or Worker|\
1700:1776:Presser|\
1700:1777:Printing Machine Operator|\
1700:1778:Recycling and Reclamation Worker|\
1700:1779:Rolling Machine Setter, Operator, and/or Tender|\
1700:1780:Sawing Machine Setter, Operator, and/or Tender|\
1700:1781:Semiconductor Processor|\
1700:1782:Separating, Filtering, Precipitating, and Still Machine Setter, Operator, and/or Tender|\
1700:1783:Sewer and/or Sewing Machine Operator|\
1700:1784:Shoe and Leather Worker and/or Repairer|\
1700:1785:Shoe Machine Operator and/or Tender|\
1700:1786:Slaughterer and/or Meat Packer|\
1700:1787:Solderer and/or Brazer|\
1700:1788:Stationary Engineer and/or Boiler Operator|\
1700:1789:Stone Cutter and/or Carver|\
1700:1790:Structural Metal Fabricator and Fitter|\
1700:1791:Supervisor/Manager of Production Workers|\
1700:1792:Tailor, Dressmaker, and/or Custom Sewer|\
1700:1793:Team Assembler|\
1700:1794:Textile Machine Setter, Operator and/or Tender|\
1700:1795:Timing Device Assembler, Adjuster, and/or Calibrator|\
1700:1796:Tire Builder|\
1700:1797:Tool and Die Maker|\
1700:1798:Tool Grinder, Filer, and/or Sharpener|\
1700:1799:Upholsterer|\
1700:1801:Water and Liquid Waste Treatment Plant and/or System Operator|\
1700:1802:Welder, Cutter, Solderer, and/or Brazer|\
1700:1803:Welding, Soldering, and Brazing Machine Setter, Operator, and/or Tender|\
1700:1804:Woodworker|\
1700:1805:Woodworking Machine Setter, Operator, and/or Tender|\
1700:1806:Other - Assembler and/or Fabricator|\
1700:1807:Other - Machine Tool Setter, Operator, and/or Tender|\
1700:1808:Other - Metal and/or Plastic Worker|\
1700:1809:Other - Plant and System Operator|\
1700:1810:Other - Production Worker|\
1700:1811:Other - Textile, Apparel, and/or Furnishings Worker|\
1900:1901:Air Crew Member|\
1900:1902:Air Crew Officer|\
1900:1903:Aircraft Launch and Recovery Officer|\
1900:1904:Aircraft Launch and Recovery Specialist|\
1900:1905:Armored Assault Vehicle Crew Member|\
1900:1906:Armored Assault Vehicle Officer|\
1900:1907:Artillery and Missile Crew Member|\
1900:1908:Artillery and Missile Officer|\
1900:1909:Command and Control Center Officer|\
1900:1910:Command and Control Center Specialist|\
1900:1911:Infantry|\
1900:1912:Infantry Officer|\
1900:1913:Radar and/or Sonar Technician|\
1900:1914:Special Force|\
1900:1915:Special Forces Officer|\
1900:1916:Supervisor/Manager of Air Crew Members|\
1900:1917:Supervisor/Manager of All Other Tactical Operations Specialists|\
1900:1918:Supervisor/Manager of Weapons Specialists/Crew Members|\
1900:1919:Other - Military Enlisted Special and Tactical Operations Crew Member and/or Specialist|\
1900:1920:Other - Military Officer Special and Tactical Operations Leader/Manager|\
2000:2001:Bill and/or Account Collector|\
2000:2002:Billing Clerk|\
2000:2003:Billing, Cost, and/or Rate Clerk|\
2000:2004:Billing, Posting, and/or Calculating Machine Operator|\
2000:2005:Bioinformatics Technician|\
2000:2006:Bookkeeping, Accounting, and Auditing Clerks|\
2000:2007:Brokerage Clerk|\
2000:2008:Cargo and/or Freight Agent|\
2000:2009:Clerk - (Brokerage, Court, Municipal, and/or License)|\
2000:2010:Communications Equipment Operator|\
2000:2011:Computer Operator|\
2000:2012:Correspondence Clerk|\
2000:2013:Courier and/or Messenger|\
2000:2014:Court Clerk|\
2000:2015:Court, Municipal, and/or License Clerk|\
2000:2016:Credit Authorizer, Checker, and/or Clerk|\
2000:2017:Customer Service Representative|\
2000:2018:Data Entry Keyer|\
2000:2019:Desktop Publisher|\
2000:2020:Dispatcher - Other|\
2000:2021:Dispatcher - Police, Fire and Ambulance|\
2000:2022:Eligibility Interviewer - Government Program|\
2000:2023:Executive Secretary and/or Administrative Assistant|\
2000:2024:File Clerk|\
2000:2025:Freight Forwarder|\
2000:2026:Gaming Clerk|\
2000:2027:Hotel, Motel, and Resort Desk Clerk|\
2000:2028:Human Resources Assistant|\
2000:2029:Insurance Claims and/or Policy Processing Clerk|\
2000:2030:Interviewer|\
2000:2031:Legal Secretary|\
2000:2032:Library Assistant|\
2000:2033:License Clerk|\
2000:2034:Loan Clerk|\
2000:2035:Mail Clerk and Mail Machine Operator (except Postal Service)|\
2000:2036:Marking Clerk|\
2000:2037:Medical Secretary|\
2000:2038:Meter Reader|\
2000:2039:Municipal Clerk|\
2000:2040:New Accounts Clerk|\
2000:2041:Office Clerk, General|\
2000:2042:Office Machine Operator (except Computer)|\
2000:2043:Order Clerk|\
2000:2044:Order Filler - Wholesale and/or Retail Sales  |\
2000:2045:Other - Information and/or Record Clerk|\
2000:2046:Patient Representative|\
2000:2047:Payroll and/or Timekeeping Clerk|\
2000:2048:Postal Service Clerk|\
2000:2049:Postal Service Mail Carrier|\
2000:2050:Postal Service Mail Sorter, Processor, and/or Processing Machine Operator|\
2000:2051:Procurement Clerk|\
2000:2052:Production, Planning, and/or Expediting Clerk|\
2000:2053:Proofreader and/or Copy Marker|\
2000:2054:Receptionist and/or Information Clerk|\
2000:2055:Recordkeeping - Weigher, Measurer, Checker, and/or Sampler|\
2000:2056:Reservation and Transportation Ticket Agent and/or Travel Clerk|\
2000:2057:Secretary|\
2000:2058:Shipping, Receiving, and Traffic Clerk|\
2000:2059:Statement Clerk|\
2000:2060:Statistical Assistant|\
2000:2061:Stock Clerk and/or Order Filler|\
2000:2062:Supervisor/Manager of Office and Administrative Support Workers|\
2000:2063:Switchboard Operator (including Answering Service)|\
2000:2064:Telephone Operator|\
2000:2065:Teller|\
2000:2066:Word Processor and/or Typist|\
2000:2067:Other - Office and Administrative Support Worker|\
2100:2101:Amusement and/or Recreation Attendant|\
2100:2102:Animal Trainer|\
2100:2103:Baggage Porter and/or Bellhop|\
2100:2104:Barber|\
2100:2105:Child Care Worker|\
2100:2106:Concierge|\
2100:2107:Costume Attendant|\
2100:2108:Embalmer|\
2100:2109:Fitness Trainer and/or Aerobics Instructor|\
2100:2110:Flight Attendant|\
2100:2111:Funeral Attendant|\
2100:2112:Gaming Service Worker|\
2100:2113:Hairdresser, Hairstylist, and/or Cosmetologist|\
2100:2114:Locker Room, Coatroom, and/or Dressing Room Attendant|\
2100:2115:Makeup Artist|\
2100:2116:Manicurist and/or Pedicurist|\
2100:2117:Motion Picture Projectionist|\
2100:2118:Nanny|\
2100:2119:Nonfarm Animal Caretaker|\
2100:2120:Personal and Home Care Aide|\
2100:2121:Recreation Worker|\
2100:2122:Residential Advisor|\
2100:2123:Shampooer|\
2100:2124:Skin Care Specialist|\
2100:2125:Spa Manager|\
2100:2126:Supervisor/Manager of Personal Service Workers|\
2100:2127:Tour Guide and/or Escort|\
2100:2128:Transportation Attendant|\
2100:2129:Travel Guide|\
2100:2130:Usher, Lobby Attendant, and/or Ticket Taker|\
2100:2131:Other - Entertainment Attendant or Related Worker|\
2100:2132:Other - Personal Care and Service Worker|\
2200:2201:Animal Control Worker|\
2200:2202:Bailiff|\
2200:2203:Correctional Offices and/or Jailer|\
2200:2204:Criminal Investigator and/or Special Agent|\
2200:2205:Crossing Guard|\
2200:2206:Detective|\
2200:2207:Fire Fighter|\
2200:2208:Fire Inspector|\
2200:2209:Fire Investigator|\
2200:2210:Fish and Game Warden|\
2200:2211:Forest Fire Fighter|\
2200:2212:Forest Fire Fighting and Prevention Supervisor|\
2200:2213:Forest Fire Inspectors and Prevention Specialists|\
2200:2214:Gaming Surveillance Officer and/or Gaming Investigator|\
2200:2215:Immigration and/or Customs Inspector|\
2200:2216:Intelligence Analyst|\
2200:2217:Lifeguard, Ski Patrol, or Other Recreational Protective Service Worker|\
2200:2218:Loss Prevention Specialist|\
2200:2219:Municipal Fire Fighter|\
2200:2220:Municipal Fire Fighting and Prevention Supervisor|\
2200:2221:Parking Enforcement Worker|\
2200:2222:Police and Sheriff\'s Patrol Officer|\
2200:2223:Police Detective|\
2200:2224:Police Identification and Records Officer|\
2200:2225:Police Patrol Officer|\
2200:2226:Private Detective and/or Investigator|\
2200:2227:Security Guard|\
2200:2228:Sheriff and/or Deputy Sheriff|\
2200:2229:Supervisor/Manager of Correctional Officers|\
2200:2230:Supervisor/Manager of Fire Fighting and Prevention Workers|\
2200:2231:Supervisor/Manager of Police and Detectives|\
2200:2232:Transit and Railroad Police|\
2200:2233:Transportation Security Officer|\
2200:2234:Other - Protective Service Worker|\
2200:2235:Other - Supervisor/Manager of Protective Service Workers|\
2300:2301:Advertising Sales Agent|\
2300:2302:Cashier|\
2300:2303:Convenience and/or Newsstand Vender|\
2300:2304:Counter and/or Rental Clerk|\
2300:2305:Door-to-Door Sales Worker|\
2300:2306:Energy Broker|\
2300:2307:Financial Services Sales Agent |\
2300:2308:Gaming Change Person and/or Booth Cashier|\
2300:2309:Insurance Sales Agent|\
2300:2310:Model|\
2300:2311:Parts Salesperson|\
2300:2312:Product Promoters and/or Demonstrator|\
2300:2313:Real Estate Broker|\
2300:2314:Real Estate Sales Agent|\
2300:2315:Retail Salesperson|\
2300:2316:Sales Engineer|\
2300:2317:Sales Representative - Services|\
2300:2318:Sales Representative - Wholesale and Manufacturing|\
2300:2319:Securities and Commodities Sales Agent  |\
2300:2320:Securities and Commodities Trader|\
2300:2321:Solar Sales Representative and/or Assessor|\
2300:2322:Street Vendor|\
2300:2323:Supervisor/Manager of Retail Sales Workers|\
2300:2324:Supervisors/Manager of Non-Retail Sales Workers|\
2300:2325:Telemarketer|\
2300:2326:Travel Agent|\
2300:2327:Other - Sales Representative|\
2300:2328:Other - Sales Worker|\
2400:2401:Air Traffic Controller|\
2400:2402:Aircraft Cargo Handling Supervisor|\
2400:2403:Airfield Operations Specialist|\
2400:2404:Airline Pilots, Copilots, and/or Flight Engineer|\
2400:2405:Ambulance Driver and/or Attendant|\
2400:2406:Aviation Inspectors|\
2400:2407:Bridge and Lock Tender|\
2400:2408:Bus Driver - School|\
2400:2409:Bus Driver - Transit and Intercity|\
2400:2410:Captain of Water Vessels|\
2400:2411:Cleaner of Vehicles and/or Equipment|\
2400:2412:Commercial Pilot|\
2400:2413:Conveyor Operator and/or Tender|\
2400:2414:Crane and/or Tower Operator|\
2400:2415:Dredge Operator|\
2400:2416:Driver/Sales Worker|\
2400:2417:Excavating and Related Machinery Operator|\
2400:2418:Freight and Cargo Inspector|\
2400:2419:Gas Compressor and/or Gas Pumping Station Operator|\
2400:2420:Hoist and/or Winch Operator|\
2400:2421:Industrial Truck and/or Tractor Operator|\
2400:2422:Laborer - Freight, Stock, and/or Material Moving|\
2400:2423:Locomotive Engineer|\
2400:2424:Locomotive Firer|\
2400:2425:Machine Feeder and/or Offbearer|\
2400:2426:Mate of Water Vessels|\
2400:2427:Motorboat Operator|\
2400:2428:Packer and/or Packager|\
2400:2429:Parking Lot Attendant|\
2400:2430:Pilot of Water Vessels|\
2400:2431:Pump Operator|\
2400:2432:Rail Transportation Worker|\
2400:2433:Recycling Coordinators    |\
2400:2434:Refuse and/or Recyclable Material Collector|\
2400:2435:Sailor and/or Marine Oiler|\
2400:2436:Service Station Attendant|\
2400:2437:Ship Engineer|\
2400:2438:Shuttle Car Operator|\
2400:2439:Subway and/or Streetcar Operator|\
2400:2440:Supervisor/Manager of Transportation Workers and/or Material Movers|\
2400:2441:Tank Car, Truck, and Ship Loader|\
2400:2442:Taxi Driver and/or Chauffeur|\
2400:2443:Traffic Technician|\
2400:2444:Transportation Inspector|\
2400:2450:Heavy and Tractor-Trailer Truck Driver|\
2400:2451:Light Truck or Delivery Services Driver|\
2400:2446:Wellhead Pumper|\
2400:2447:Other - Material Moving Worker|\
2400:2448:Other - Motor Vehicle Operator|\
2400:2449:Other - Transportation Workers|\
';

// 2400:2445:Truck Driver|\ deprecated

// Field table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var field = '\
0:0:Not Applicable|\
1:0:Not Applicable|\
2:0:Not Applicable|\
3:0:Not Applicable|\
4:100:Arts, Design, Entertainment, Sports, and Media|\
4:200:Building and Grounds Cleaning and Maintenance|\
4:300:Business and Financial Operations|\
4:400:Community and Social Services|\
4:500:Computers and Mathematics|\
4:600:Construction and Extraction|\
4:700:Education, Training and Library Services|\
4:800:Engineering and Architecture|\
4:900:Farming, Fishing, and Forestry|\
4:1000:Food Preparation and Serving|\
4:1100:Healthcare|\
4:1300:Installation, Maintenance, and Repair|\
4:1400:Law and Legal Services|\
4:1500:Life, Physical, & Social Sciences|\
4:1600:Management|\
4:1700:Manufacturing and Production|\
4:1900:Military|\
4:2000:Office and Administrative Support|\
4:2100:Personal Care and Related Services|\
4:2200:Protective Services|\
4:2300:Sales and Related Services|\
4:2400:Transportation and Material Moving|\
5:100:Arts, Design, Entertainment, Sports, and Media|\
5:200:Building and Grounds Cleaning and Maintenance|\
5:300:Business and Financial Operations|\
5:400:Community and Social Services|\
5:500:Computers and Mathematics|\
5:600:Construction and Extraction|\
5:700:Education, Training and Library Services|\
5:800:Engineering and Architecture|\
5:900:Farming, Fishing, and Forestry|\
5:1000:Food Preparation and Serving|\
5:1100:Healthcare|\
5:1300:Installation, Maintenance, and Repair|\
5:1400:Law and Legal Services|\
5:1500:Life Sciences, Physical Sciences and Social Sciences|\
5:1600:Management|\
5:1700:Manufacturing and Production|\
5:1900:Military|\
5:2000:Office and Administrative Support|\
5:2100:Personal Care and Related Services|\
5:2200:Protective Services|\
5:2300:Sales and Related Services|\
5:2400:Transportation and Material Moving|\
99:0:Not Applicable|\
';

// Status data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var status = '\
0:Currently a student|\
1:Not employed|\
2:Not employed, seeking work|\
3:Homemaker|\
4:Employed|\
5:Retired|\
99:--   Prefer not to answer\
';

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the counties from the country list
function populateStatus(defaultStatus) {
  if ( postStatus != '' ) {
    defaultStatus = postStatus; 
  }
  var statusLineArray = status.split("|");  // Split into lines
  var selObj = document.getElementById('statusSelect');
  selObj.options[0] = new Option('Select employment status','999');
  selObj.selectedIndex = 0;
  for (var loop = 0; loop < statusLineArray.length; loop++) {
    lineArray = statusLineArray[loop].split(':');
    statusCode  = TrimString(lineArray[0]);
    statusName  = TrimString(lineArray[1]);
    if ( statusCode != '' ) {
      selObj.options[loop + 1] = new Option(statusName, statusCode);
    }
    if ( defaultStatus == statusCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}

function populateField() {
  var selObj = document.getElementById('fieldSelect');
  var foundField = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select general field of work','999');
    selObj.selectedIndex = 0;
  }
  // Populate the drop down with states from the selected country
  var fieldLineArray = field.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < fieldLineArray.length; loop++) {
    lineArray = fieldLineArray[loop].split(":");
    statusCode  = TrimString(lineArray[0]);
    fieldCode    = TrimString(lineArray[1]);
    fieldName    = TrimString(lineArray[2]);
  if (document.getElementById('statusSelect').value == statusCode && statusCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) {
        parentObj = document.getElementById('fieldSelect').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement("SELECT");
        inputSel.setAttribute("name","field");
        inputSel.setAttribute("id","fieldSelect");
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('fieldSelect');
        selObj.selectedIndex = 0;
      }
      if ( fieldCode != '' ) {
        selObj.options[optionCntr] = new Option(fieldName, fieldCode);
      }
      // See if it's selected from a previous post
      if ( fieldCode == postField && statusCode == postStatus ) {
        selObj.selectedIndex = optionCntr;
      }
      foundField = true;
      optionCntr++
    }
  }

 if (document.getElementById('statusSelect').value == '0' 
 || document.getElementById('statusSelect').value == '1'
 || document.getElementById('statusSelect').value == '2'
 || document.getElementById('statusSelect').value == '3'
 || document.getElementById('statusSelect').value == '99' 
 ) {
  selObj.options[0] = new Option('Select "Field of work: Not applicable"','0');
  selObj.options[1] = new Option('Field of work: Not applicable','0')
  }
}

function populateOccupation() {
  var selObj = document.getElementById('occupationSelect');
  var foundOccupation = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select the closest job','999');
    selObj.selectedIndex = 0;
  }
  
  // Populate the drop down with states from the selected country
  var occupationLineArray = occupation.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < occupationLineArray.length; loop++) {
    lineArray = occupationLineArray[loop].split(":");
    fieldCode  = TrimString(lineArray[0]);
    occupationCode    = TrimString(lineArray[1]);
    occupationName    = TrimString(lineArray[2]);
  if (document.getElementById('fieldSelect').value == fieldCode && fieldCode != '' ) {
      if ( occupationCode != '' ) {
        selObj.options[optionCntr] = new Option(occupationName, occupationCode);
      }
      // See if it's selected from a previous post
      if ( occupationCode == postOccupation && fieldCode == postField ) {
        selObj.selectedIndex = optionCntr;
      }
      foundOccupation = true;
      optionCntr++
    }
  }
/*  if (fieldCode != postField)
 {
  selObj.options[0] = new Option('Select One','0');
  } */
  
  if (document.getElementById('fieldSelect').value == '0') {
  selObj.options[0] = new Option('Specific job: Not applicable','0');
  }
}


function initStatus(status) {
  populateStatus(status);
  populateField();
  populateOccupation();
}





