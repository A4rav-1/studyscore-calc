/**
 * Every published 2025 VCE 40+ study score, grouped by school and subject.
 * Source: https://www.vcaa.vic.edu.au/sites/default/files/2026-02/2025StudentData.xlsx
 *
 * Student names are intentionally excluded. Scores are sorted highest first and
 * form the published part of each school/subject rank curve.
 */
export type HonourRollSchoolOption = {
  name: string;
  locality: string;
};

export const HONOUR_ROLL_2025_SCHOOL_OPTIONS: readonly HonourRollSchoolOption[] = [
  {
    "name": "Academy of Mary Immaculate, Fitzroy",
    "locality": "Fitzroy"
  },
  {
    "name": "Aetolian College, Keilor East",
    "locality": "Keilor East"
  },
  {
    "name": "Aitken College, Greenvale",
    "locality": "Greenvale"
  },
  {
    "name": "Al Iman College, Melton South",
    "locality": "Melton South"
  },
  {
    "name": "Al Siraat College, Epping",
    "locality": "Epping"
  },
  {
    "name": "Al-Taqwa College, Truganina",
    "locality": "Truganina"
  },
  {
    "name": "Albert Park College",
    "locality": ""
  },
  {
    "name": "Alexandra Secondary College",
    "locality": ""
  },
  {
    "name": "Alice Miller School, Macedon",
    "locality": "Macedon"
  },
  {
    "name": "Alkira Secondary College, Cranbourne North",
    "locality": "Cranbourne North"
  },
  {
    "name": "Alphington Grammar School",
    "locality": ""
  },
  {
    "name": "Altona College",
    "locality": ""
  },
  {
    "name": "Antonine College, Pascoe Vale South",
    "locality": "Pascoe Vale South"
  },
  {
    "name": "Apollo Bay P-12 College",
    "locality": ""
  },
  {
    "name": "Aquinas College, Ringwood",
    "locality": "Ringwood"
  },
  {
    "name": "Ashwood High School",
    "locality": ""
  },
  {
    "name": "Assumption College, Kilmore",
    "locality": "Kilmore"
  },
  {
    "name": "Auburn High School, Hawthorn East",
    "locality": "Hawthorn East"
  },
  {
    "name": "Ave Maria College, Aberfeldie",
    "locality": "Aberfeldie"
  },
  {
    "name": "Avila College, Mount Waverley",
    "locality": "Mount Waverley"
  },
  {
    "name": "Bacchus Marsh College",
    "locality": ""
  },
  {
    "name": "Bacchus Marsh Grammar",
    "locality": ""
  },
  {
    "name": "Bairnsdale Secondary College",
    "locality": ""
  },
  {
    "name": "Balcombe Grammar School, Mount Martha",
    "locality": "Mount Martha"
  },
  {
    "name": "Ballarat Clarendon College",
    "locality": ""
  },
  {
    "name": "Ballarat Grammar, Wendouree",
    "locality": "Wendouree"
  },
  {
    "name": "Ballarat High School",
    "locality": ""
  },
  {
    "name": "Balwyn High School, Balwyn North",
    "locality": "Balwyn North"
  },
  {
    "name": "Bannockburn P-12 College",
    "locality": ""
  },
  {
    "name": "Bass Coast College, Wonthaggi",
    "locality": "Wonthaggi"
  },
  {
    "name": "Bayside Christian College, Langwarrin South",
    "locality": "Langwarrin South"
  },
  {
    "name": "Bayside P-12 College - Paisley Campus, Newport",
    "locality": "Newport"
  },
  {
    "name": "Bayview College, Portland",
    "locality": "Portland"
  },
  {
    "name": "Beaconhills College - Berwick",
    "locality": ""
  },
  {
    "name": "Beaconhills College - Pakenham",
    "locality": ""
  },
  {
    "name": "Beaumaris Secondary College",
    "locality": ""
  },
  {
    "name": "Beechworth Secondary College",
    "locality": ""
  },
  {
    "name": "Belgrave Heights Christian School",
    "locality": ""
  },
  {
    "name": "Bellarine Secondary College, Drysdale",
    "locality": "Drysdale"
  },
  {
    "name": "Belmont High School",
    "locality": ""
  },
  {
    "name": "Bendigo Senior Secondary College",
    "locality": ""
  },
  {
    "name": "Bentleigh Secondary College, Bentleigh East",
    "locality": "Bentleigh East"
  },
  {
    "name": "Berwick Grammar School, Officer",
    "locality": "Officer"
  },
  {
    "name": "Berwick Secondary College",
    "locality": ""
  },
  {
    "name": "Beth Rivkah Ladies College, St Kilda East",
    "locality": "St Kilda East"
  },
  {
    "name": "Bharathi Academy, Dandenong",
    "locality": "Dandenong"
  },
  {
    "name": "Bialik College, Hawthorn East",
    "locality": "Hawthorn East"
  },
  {
    "name": "Billanook College Ltd, Mooroolbark",
    "locality": "Mooroolbark"
  },
  {
    "name": "Birchip P-12 School",
    "locality": ""
  },
  {
    "name": "Blackburn High School",
    "locality": ""
  },
  {
    "name": "Boort District P-12 School",
    "locality": ""
  },
  {
    "name": "Boronia K-12 College",
    "locality": ""
  },
  {
    "name": "Box Hill Chinese Language School, Mont Albert North",
    "locality": "Mont Albert North"
  },
  {
    "name": "Box Hill High School",
    "locality": ""
  },
  {
    "name": "Box Hill Institute - CAE campus, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Box Hill Senior Secondary College, Mont Albert North",
    "locality": "Mont Albert North"
  },
  {
    "name": "Braemar College, Woodend",
    "locality": "Woodend"
  },
  {
    "name": "Brauer College, Warrnambool",
    "locality": "Warrnambool"
  },
  {
    "name": "Braybrook College",
    "locality": ""
  },
  {
    "name": "Brentwood Secondary College, Glen Waverley",
    "locality": "Glen Waverley"
  },
  {
    "name": "Bright P-12 College",
    "locality": ""
  },
  {
    "name": "Brighton Grammar School",
    "locality": ""
  },
  {
    "name": "Brighton Secondary College, Brighton East",
    "locality": "Brighton East"
  },
  {
    "name": "Broadford Secondary College",
    "locality": ""
  },
  {
    "name": "Brunswick Secondary College",
    "locality": ""
  },
  {
    "name": "Buckley Park College, Essendon",
    "locality": "Essendon"
  },
  {
    "name": "Camberwell Anglican Girls Grammar School, Canterbury",
    "locality": "Canterbury"
  },
  {
    "name": "Camberwell Grammar School, Canterbury",
    "locality": "Canterbury"
  },
  {
    "name": "Camberwell High School, Canterbury",
    "locality": "Canterbury"
  },
  {
    "name": "Canterbury Girls Secondary College",
    "locality": ""
  },
  {
    "name": "Carey Baptist Grammar School, Kew",
    "locality": "Kew"
  },
  {
    "name": "Caroline Chisholm Catholic College, Braybrook",
    "locality": "Braybrook"
  },
  {
    "name": "Carrum Downs Secondary College",
    "locality": ""
  },
  {
    "name": "Carwatha College P-12, Noble Park North",
    "locality": "Noble Park North"
  },
  {
    "name": "Casey Grammar School, Cranbourne",
    "locality": "Cranbourne"
  },
  {
    "name": "Castlemaine Secondary College",
    "locality": ""
  },
  {
    "name": "Cathedral College, Wangaratta",
    "locality": "Wangaratta"
  },
  {
    "name": "Catherine McAuley College, Bendigo",
    "locality": "Bendigo"
  },
  {
    "name": "Catholic College Sale",
    "locality": ""
  },
  {
    "name": "Catholic College Wodonga",
    "locality": ""
  },
  {
    "name": "Catholic Ladies College, Eltham",
    "locality": "Eltham"
  },
  {
    "name": "Catholic Regional College - Sydenham",
    "locality": ""
  },
  {
    "name": "Caulfield Grammar School - Caulfield Campus, St Kilda East",
    "locality": "St Kilda East"
  },
  {
    "name": "Caulfield Grammar School, Wheelers Hill",
    "locality": "Wheelers Hill"
  },
  {
    "name": "Centre for Higher Education Studies, South Yarra",
    "locality": "South Yarra"
  },
  {
    "name": "Chairo Christian School - Drouin",
    "locality": ""
  },
  {
    "name": "Chairo Christian School - Leongatha Campus",
    "locality": ""
  },
  {
    "name": "Chairo Christian School - Pakenham, Nar Nar Goon",
    "locality": "Nar Nar Goon"
  },
  {
    "name": "Charlton College",
    "locality": ""
  },
  {
    "name": "Cheltenham Secondary College",
    "locality": ""
  },
  {
    "name": "Cheryl Kaloger Brown School of Dance, Hawthorn East",
    "locality": "Hawthorn East"
  },
  {
    "name": "Chinese Culture School - Glen Waverley Campus",
    "locality": ""
  },
  {
    "name": "Chinese Culture School - Melbourne High Campus, South Yarra",
    "locality": "South Yarra"
  },
  {
    "name": "Chinese Culture School - Northcote Campus",
    "locality": ""
  },
  {
    "name": "Chinese Culture and Arts School of Melbourne, Collingwood",
    "locality": "Collingwood"
  },
  {
    "name": "Christian College Geelong, Waurn Ponds",
    "locality": "Waurn Ponds"
  },
  {
    "name": "Christway College, Clarinda",
    "locality": "Clarinda"
  },
  {
    "name": "Clonard College, Herne Hill",
    "locality": "Herne Hill"
  },
  {
    "name": "Clyde Secondary College, Clyde North",
    "locality": "Clyde North"
  },
  {
    "name": "Cobram Anglican Grammar School",
    "locality": ""
  },
  {
    "name": "Coburg High School",
    "locality": ""
  },
  {
    "name": "Colac Secondary College",
    "locality": ""
  },
  {
    "name": "Copperfield College, Delahey",
    "locality": "Delahey"
  },
  {
    "name": "Cornish College, Bangholme",
    "locality": "Bangholme"
  },
  {
    "name": "Corryong College",
    "locality": ""
  },
  {
    "name": "Covenant College, Bell Post Hill",
    "locality": "Bell Post Hill"
  },
  {
    "name": "Craigieburn Secondary College",
    "locality": ""
  },
  {
    "name": "Cranbourne East Secondary College",
    "locality": ""
  },
  {
    "name": "Cranbourne Secondary College",
    "locality": ""
  },
  {
    "name": "Cranbourne West Secondary College",
    "locality": ""
  },
  {
    "name": "Damascus College, Mount Clear",
    "locality": "Mount Clear"
  },
  {
    "name": "Dandenong High School",
    "locality": ""
  },
  {
    "name": "Darul Ulum College of Victoria, Fawkner",
    "locality": "Fawkner"
  },
  {
    "name": "Daylesford Secondary College",
    "locality": ""
  },
  {
    "name": "De La Salle College, Malvern",
    "locality": "Malvern"
  },
  {
    "name": "Derrinallum P12 College",
    "locality": ""
  },
  {
    "name": "Diamond Valley College, Diamond Creek",
    "locality": "Diamond Creek"
  },
  {
    "name": "Doncaster Secondary College",
    "locality": ""
  },
  {
    "name": "Donvale Christian College",
    "locality": ""
  },
  {
    "name": "Dromana Secondary College",
    "locality": ""
  },
  {
    "name": "Drouin Secondary College",
    "locality": ""
  },
  {
    "name": "East Doncaster Secondary College, Doncaster East",
    "locality": "Doncaster East"
  },
  {
    "name": "East Loddon P-12 College, Dingee",
    "locality": "Dingee"
  },
  {
    "name": "East Preston Islamic College",
    "locality": ""
  },
  {
    "name": "Echuca College",
    "locality": ""
  },
  {
    "name": "Edenbrook Secondary College, Pakenham",
    "locality": "Pakenham"
  },
  {
    "name": "Edgars Creek Secondary College, Wollert",
    "locality": "Wollert"
  },
  {
    "name": "Edinburgh College, Lilydale",
    "locality": "Lilydale"
  },
  {
    "name": "Elevation Secondary College, Craigieburn",
    "locality": "Craigieburn"
  },
  {
    "name": "Elisabeth Murdoch College, Langwarrin",
    "locality": "Langwarrin"
  },
  {
    "name": "Eltham College, Research",
    "locality": "Research"
  },
  {
    "name": "Eltham High School",
    "locality": ""
  },
  {
    "name": "Elwood College",
    "locality": ""
  },
  {
    "name": "Emmanuel College Warrnambool",
    "locality": ""
  },
  {
    "name": "Emmanuel College, Altona North",
    "locality": "Altona North"
  },
  {
    "name": "Emmaus College, Vermont South",
    "locality": "Vermont South"
  },
  {
    "name": "Epping Secondary College",
    "locality": ""
  },
  {
    "name": "Essendon Keilor College",
    "locality": ""
  },
  {
    "name": "F.C.J. College, Benalla",
    "locality": "Benalla"
  },
  {
    "name": "Fairhills High School, Knoxfield",
    "locality": "Knoxfield"
  },
  {
    "name": "Fintona Girls' School, Balwyn",
    "locality": "Balwyn"
  },
  {
    "name": "Firbank Grammar - Lianyungang Foreign Language School, Lianyungang, Jiangsu",
    "locality": "Jiangsu"
  },
  {
    "name": "Firbank Grammar - Qidong Qidi Foreign Language School, Nantong, Jiangsu P.R",
    "locality": "Jiangsu P.R"
  },
  {
    "name": "Firbank Grammar - Shanghai Tianhua College High School",
    "locality": ""
  },
  {
    "name": "Firbank Grammar - Suzhou Int. Foreign Language School",
    "locality": ""
  },
  {
    "name": "Firbank Grammar School, Brighton",
    "locality": "Brighton"
  },
  {
    "name": "Fitzroy High School - Wurun Senior Campus, Fitzroy North",
    "locality": "Fitzroy North"
  },
  {
    "name": "Flinders Christian Community College - Carrum Downs Campus",
    "locality": ""
  },
  {
    "name": "Flinders Christian Community College, Tyabb",
    "locality": "Tyabb"
  },
  {
    "name": "Footscray High School",
    "locality": ""
  },
  {
    "name": "Forest Hill College, Burwood East",
    "locality": "Burwood East"
  },
  {
    "name": "Foster Secondary College",
    "locality": ""
  },
  {
    "name": "Fountain Gate Secondary College",
    "locality": ""
  },
  {
    "name": "Frankston High School - VCE Campus",
    "locality": ""
  },
  {
    "name": "Galen College, Wangaratta",
    "locality": "Wangaratta"
  },
  {
    "name": "Geelong Baptist College, Lovely Banks",
    "locality": "Lovely Banks"
  },
  {
    "name": "Geelong Grammar School, Corio",
    "locality": "Corio"
  },
  {
    "name": "Geelong High School, East Geelong",
    "locality": "East Geelong"
  },
  {
    "name": "Geelong Lutheran College, Armstrong Creek",
    "locality": "Armstrong Creek"
  },
  {
    "name": "Genazzano FCJ College, Kew",
    "locality": "Kew"
  },
  {
    "name": "Gilson College, Taylors Hill",
    "locality": "Taylors Hill"
  },
  {
    "name": "Gippsland Grammar - Senior, Sale",
    "locality": "Sale"
  },
  {
    "name": "Girton Grammar School, Bendigo",
    "locality": "Bendigo"
  },
  {
    "name": "Gisborne Secondary College",
    "locality": ""
  },
  {
    "name": "Gladstone Park Secondary College",
    "locality": ""
  },
  {
    "name": "Glen Eira College, Caulfield East",
    "locality": "Caulfield East"
  },
  {
    "name": "Glen Waverley Secondary College",
    "locality": ""
  },
  {
    "name": "Gleneagles Secondary College, Endeavour Hills",
    "locality": "Endeavour Hills"
  },
  {
    "name": "Good News Lutheran College, Tarneit",
    "locality": "Tarneit"
  },
  {
    "name": "Gordon Institute of TAFE, Geelong",
    "locality": "Geelong"
  },
  {
    "name": "Goulburn Valley Grammar School, Shepparton",
    "locality": "Shepparton"
  },
  {
    "name": "Great Future Chinese Culture School Inc, Preston",
    "locality": "Preston"
  },
  {
    "name": "Greater Shepparton Secondary College",
    "locality": ""
  },
  {
    "name": "Greek Orthodox Community of Melbourne and Victoria",
    "locality": ""
  },
  {
    "name": "Greensborough Secondary College",
    "locality": ""
  },
  {
    "name": "Grovedale College",
    "locality": ""
  },
  {
    "name": "Haileybury - Chengdu Shude High School, Chengdu City Sichuan Province",
    "locality": "Chengdu City Sichuan Province"
  },
  {
    "name": "Haileybury - Dili International School",
    "locality": ""
  },
  {
    "name": "Haileybury - Einstein School, Binh Chanh District",
    "locality": "Binh Chanh District"
  },
  {
    "name": "Haileybury - Luoyang No. 1 High School, Luoyang Henan",
    "locality": "Luoyang Henan"
  },
  {
    "name": "Haileybury - Ningbo Li Hui Li High School, China",
    "locality": "China"
  },
  {
    "name": "Haileybury - Pangea campus, Keysborough",
    "locality": "Keysborough"
  },
  {
    "name": "Haileybury - Qingdao No 19 High School, China",
    "locality": "China"
  },
  {
    "name": "Haileybury - Tianjin, China",
    "locality": "China"
  },
  {
    "name": "Haileybury - Wuhan Foreign Languages School, Wuhan   PRC   430022",
    "locality": "Wuhan   PRC   430022"
  },
  {
    "name": "Haileybury College, Keysborough",
    "locality": "Keysborough"
  },
  {
    "name": "Haileybury Girls College, Keysborough",
    "locality": "Keysborough"
  },
  {
    "name": "Haileybury Rendall School, Berrimah",
    "locality": "Berrimah"
  },
  {
    "name": "Hampton Park Secondary College",
    "locality": ""
  },
  {
    "name": "Hazel Glen College, Doreen",
    "locality": "Doreen"
  },
  {
    "name": "Heathdale Christian College Werribee Campus",
    "locality": ""
  },
  {
    "name": "Heathmont College",
    "locality": ""
  },
  {
    "name": "Heritage College Knox, Ferntree Gully",
    "locality": "Ferntree Gully"
  },
  {
    "name": "Highvale Secondary College, Glen Waverley",
    "locality": "Glen Waverley"
  },
  {
    "name": "Highview Christian Community College, Maryborough",
    "locality": "Maryborough"
  },
  {
    "name": "Hillcrest Christian College - Ayr Hill Campus, Clyde North",
    "locality": "Clyde North"
  },
  {
    "name": "Holmes Grammar School, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Homestead Senior Secondary College, Point Cook",
    "locality": "Point Cook"
  },
  {
    "name": "Hoppers Crossing Secondary College",
    "locality": ""
  },
  {
    "name": "Horsham College",
    "locality": ""
  },
  {
    "name": "Hume Anglican Grammar, Mickleham",
    "locality": "Mickleham"
  },
  {
    "name": "Hume Central Secondary College - Town Park Campus, Broadmeadows",
    "locality": "Broadmeadows"
  },
  {
    "name": "Huntingtower School, Mount Waverley",
    "locality": "Mount Waverley"
  },
  {
    "name": "Ilim College Doveton Campus",
    "locality": ""
  },
  {
    "name": "Ilim College Kiewa Campus, Dallas",
    "locality": "Dallas"
  },
  {
    "name": "Ilim College, Broadmeadows",
    "locality": "Broadmeadows"
  },
  {
    "name": "Iona College Geelong, Charlemont",
    "locality": "Charlemont"
  },
  {
    "name": "Iranian Cultural School, East Doncaster",
    "locality": "East Doncaster"
  },
  {
    "name": "Islamic College of Melbourne, Tarneit",
    "locality": "Tarneit"
  },
  {
    "name": "Ivanhoe Girls' Grammar School",
    "locality": ""
  },
  {
    "name": "Ivanhoe Grammar School",
    "locality": ""
  },
  {
    "name": "Ivanhoe Grammar School - Plenty Campus, Mernda",
    "locality": "Mernda"
  },
  {
    "name": "John Monash Science School, Clayton",
    "locality": "Clayton"
  },
  {
    "name": "John Paul College, Frankston",
    "locality": "Frankston"
  },
  {
    "name": "Kambrya College, Berwick",
    "locality": "Berwick"
  },
  {
    "name": "Kaniva P-12 College",
    "locality": ""
  },
  {
    "name": "Kardinia International College, Bell Post Hill",
    "locality": "Bell Post Hill"
  },
  {
    "name": "Keilor Downs College",
    "locality": ""
  },
  {
    "name": "Kew High School, Kew East",
    "locality": "Kew East"
  },
  {
    "name": "Keysborough Secondary College - Acacia Campus",
    "locality": ""
  },
  {
    "name": "Keysborough Secondary College - Banksia Campus, Springvale South",
    "locality": "Springvale South"
  },
  {
    "name": "Kilbreda College, Mentone",
    "locality": "Mentone"
  },
  {
    "name": "Killester College, Springvale",
    "locality": "Springvale"
  },
  {
    "name": "Kilvington Grammar School, Ormond",
    "locality": "Ormond"
  },
  {
    "name": "Kingswood College, Box Hill",
    "locality": "Box Hill"
  },
  {
    "name": "Kolbe Catholic College, Greenvale",
    "locality": "Greenvale"
  },
  {
    "name": "Koo Wee Rup Secondary College",
    "locality": ""
  },
  {
    "name": "Koonung Secondary College, Mont Albert North",
    "locality": "Mont Albert North"
  },
  {
    "name": "Korean Language School of Melbourne, Prahran",
    "locality": "Prahran"
  },
  {
    "name": "Korowa Anglican Girls' School, Glen Iris",
    "locality": "Glen Iris"
  },
  {
    "name": "Korumburra Secondary College",
    "locality": ""
  },
  {
    "name": "Kurnai College - University Campus, Churchill",
    "locality": "Churchill"
  },
  {
    "name": "Kurunjang Secondary College, Melton",
    "locality": "Melton"
  },
  {
    "name": "Kyabram P-12 College",
    "locality": ""
  },
  {
    "name": "Lac Hong Vietnamese School - St Albans",
    "locality": ""
  },
  {
    "name": "Lakeside Lutheran College, Pakenham",
    "locality": "Pakenham"
  },
  {
    "name": "Lakeview Senior College, Caroline Springs",
    "locality": "Caroline Springs"
  },
  {
    "name": "Lalor North Secondary College, Epping",
    "locality": "Epping"
  },
  {
    "name": "Lalor Secondary College",
    "locality": ""
  },
  {
    "name": "Lara Secondary College",
    "locality": ""
  },
  {
    "name": "Lauriston Girls' School, Armadale",
    "locality": "Armadale"
  },
  {
    "name": "Lavalla Catholic College, Traralgon",
    "locality": "Traralgon"
  },
  {
    "name": "Leibler Yavneh College, Elsternwick",
    "locality": "Elsternwick"
  },
  {
    "name": "Leongatha Secondary College",
    "locality": ""
  },
  {
    "name": "Lighthouse Christian College Cranbourne",
    "locality": ""
  },
  {
    "name": "Lighthouse Christian College, Keysborough",
    "locality": "Keysborough"
  },
  {
    "name": "Lilydale Heights College",
    "locality": ""
  },
  {
    "name": "Lilydale High School",
    "locality": ""
  },
  {
    "name": "Little Yarra Steiner School, Yarra Junction",
    "locality": "Yarra Junction"
  },
  {
    "name": "Loreto Mandeville Hall, Toorak",
    "locality": "Toorak"
  },
  {
    "name": "Lorne P-12 College",
    "locality": ""
  },
  {
    "name": "Lowanna College, Newborough",
    "locality": "Newborough"
  },
  {
    "name": "Lowther Hall Anglican Grammar School, Essendon",
    "locality": "Essendon"
  },
  {
    "name": "Loyola College, Watsonia",
    "locality": "Watsonia"
  },
  {
    "name": "Luther College, Croydon Hills",
    "locality": "Croydon Hills"
  },
  {
    "name": "Lyndale Secondary College, Dandenong North",
    "locality": "Dandenong North"
  },
  {
    "name": "Lyndhurst Secondary College, Cranbourne",
    "locality": "Cranbourne"
  },
  {
    "name": "MacKillop Catholic Regional College Werribee",
    "locality": ""
  },
  {
    "name": "MacRobertson Girls High School, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Macleod College",
    "locality": ""
  },
  {
    "name": "Maffra Secondary College",
    "locality": ""
  },
  {
    "name": "Mallacoota P-12 College",
    "locality": ""
  },
  {
    "name": "Manor Lakes P-12 College, Wyndham Vale",
    "locality": "Wyndham Vale"
  },
  {
    "name": "Mansfield Secondary College",
    "locality": ""
  },
  {
    "name": "Maranatha Christian School, Endeavour Hills",
    "locality": "Endeavour Hills"
  },
  {
    "name": "Marcellin College, Bulleen",
    "locality": "Bulleen"
  },
  {
    "name": "Marian College - Sunshine, Sunshine West",
    "locality": "Sunshine West"
  },
  {
    "name": "Marian College Ararat",
    "locality": ""
  },
  {
    "name": "Maribyrnong College",
    "locality": ""
  },
  {
    "name": "Marist - Sion College, Warragul",
    "locality": "Warragul"
  },
  {
    "name": "Marist College Bendigo, Maiden Gully",
    "locality": "Maiden Gully"
  },
  {
    "name": "Mary Mackillop Catholic Regional College, Leongatha",
    "locality": "Leongatha"
  },
  {
    "name": "Marymede Catholic College, South Morang",
    "locality": "South Morang"
  },
  {
    "name": "Mater Christi College, Belgrave",
    "locality": "Belgrave"
  },
  {
    "name": "Matthew Flinders Girls Secondary College, Geelong",
    "locality": "Geelong"
  },
  {
    "name": "Mazenod College, Mulgrave",
    "locality": "Mulgrave"
  },
  {
    "name": "McClelland Secondary College, Frankston",
    "locality": "Frankston"
  },
  {
    "name": "McKinnon Secondary College",
    "locality": ""
  },
  {
    "name": "Melba College, Croydon",
    "locality": "Croydon"
  },
  {
    "name": "Melbourne Girls Grammar, South Yarra",
    "locality": "South Yarra"
  },
  {
    "name": "Melbourne Girls' College, Richmond",
    "locality": "Richmond"
  },
  {
    "name": "Melbourne Grammar School",
    "locality": ""
  },
  {
    "name": "Melbourne High School, South Yarra",
    "locality": "South Yarra"
  },
  {
    "name": "Melbourne Rudolf Steiner School, Warranwood",
    "locality": "Warranwood"
  },
  {
    "name": "Melbourne Swedish Community School Ass Inc., Toorak",
    "locality": "Toorak"
  },
  {
    "name": "Melton Christian College, Brookfield",
    "locality": "Brookfield"
  },
  {
    "name": "Melton Secondary College",
    "locality": ""
  },
  {
    "name": "Mentone Girls' Grammar School",
    "locality": ""
  },
  {
    "name": "Mentone Girls' Secondary College",
    "locality": ""
  },
  {
    "name": "Mentone Grammar School",
    "locality": ""
  },
  {
    "name": "Mercy College, Coburg",
    "locality": "Coburg"
  },
  {
    "name": "Mercy Regional College - Camperdown",
    "locality": ""
  },
  {
    "name": "Mernda Central P-12 College",
    "locality": ""
  },
  {
    "name": "Mernda Hills Christian College",
    "locality": ""
  },
  {
    "name": "Methodist Ladies' College, Kew",
    "locality": "Kew"
  },
  {
    "name": "Mildura Senior College",
    "locality": ""
  },
  {
    "name": "Mill Park Secondary College, Epping",
    "locality": "Epping"
  },
  {
    "name": "Minaret College - Officer Campus",
    "locality": ""
  },
  {
    "name": "Minaret College - Springvale Campus",
    "locality": ""
  },
  {
    "name": "Mirboo North Secondary College",
    "locality": ""
  },
  {
    "name": "Monbulk College",
    "locality": ""
  },
  {
    "name": "Monivae College, Hamilton",
    "locality": "Hamilton"
  },
  {
    "name": "Montmorency Secondary College",
    "locality": ""
  },
  {
    "name": "Mooroolbark College",
    "locality": ""
  },
  {
    "name": "Mordialloc College",
    "locality": ""
  },
  {
    "name": "Mornington Secondary College",
    "locality": ""
  },
  {
    "name": "Mortlake College",
    "locality": ""
  },
  {
    "name": "Mount Alexander 7-12 College, Flemington",
    "locality": "Flemington"
  },
  {
    "name": "Mount Clear College",
    "locality": ""
  },
  {
    "name": "Mount Eliza Secondary College",
    "locality": ""
  },
  {
    "name": "Mount Erin College, Frankston South",
    "locality": "Frankston South"
  },
  {
    "name": "Mount Evelyn Christian School",
    "locality": ""
  },
  {
    "name": "Mount Lilydale Mercy College",
    "locality": ""
  },
  {
    "name": "Mount Ridley P-12 College, Craigieburn",
    "locality": "Craigieburn"
  },
  {
    "name": "Mount Rowan Secondary College, Wendouree",
    "locality": "Wendouree"
  },
  {
    "name": "Mount Scopus Memorial College, Burwood",
    "locality": "Burwood"
  },
  {
    "name": "Mount St Joseph Girls' College, Altona",
    "locality": "Altona"
  },
  {
    "name": "Mount Waverley Secondary College",
    "locality": ""
  },
  {
    "name": "Mt Hira College, Keysborough",
    "locality": "Keysborough"
  },
  {
    "name": "Mullauna College, Mitcham",
    "locality": "Mitcham"
  },
  {
    "name": "Nagle College, Bairnsdale",
    "locality": "Bairnsdale"
  },
  {
    "name": "Narre Warren South P-12 College",
    "locality": ""
  },
  {
    "name": "Nazareth College, Noble Park North",
    "locality": "Noble Park North"
  },
  {
    "name": "Nestoras College, Doncaster",
    "locality": "Doncaster"
  },
  {
    "name": "New Century Chinese Language School, Burwood East",
    "locality": "Burwood East"
  },
  {
    "name": "New Chinese Language and Culture School, Thornbury",
    "locality": "Thornbury"
  },
  {
    "name": "Newcomb Secondary College",
    "locality": ""
  },
  {
    "name": "Newhaven College, Rhyll",
    "locality": "Rhyll"
  },
  {
    "name": "Nhill College",
    "locality": ""
  },
  {
    "name": "North Geelong Secondary College, Geelong North",
    "locality": "Geelong North"
  },
  {
    "name": "Northcote High School",
    "locality": ""
  },
  {
    "name": "Northern Bay P-12 College, Corio",
    "locality": "Corio"
  },
  {
    "name": "Northern College of the Arts and Technology, Preston East",
    "locality": "Preston East"
  },
  {
    "name": "Northside Christian College, Bundoora",
    "locality": "Bundoora"
  },
  {
    "name": "Norwood Secondary College, Ringwood",
    "locality": "Ringwood"
  },
  {
    "name": "Nossal High School, Berwick",
    "locality": "Berwick"
  },
  {
    "name": "Notre Dame College, Shepparton",
    "locality": "Shepparton"
  },
  {
    "name": "Nunawading Christian College - Secondary Campus",
    "locality": ""
  },
  {
    "name": "Oakleigh Grammar",
    "locality": ""
  },
  {
    "name": "Oberon High School, Belmont",
    "locality": "Belmont"
  },
  {
    "name": "Officer Secondary College",
    "locality": ""
  },
  {
    "name": "OneSchool Global Vic, Melton",
    "locality": "Melton"
  },
  {
    "name": "Our Lady of Mercy College, Heidelberg",
    "locality": "Heidelberg"
  },
  {
    "name": "Our Lady of Sacred Heart College, Bentleigh",
    "locality": "Bentleigh"
  },
  {
    "name": "Our Lady of Sion College, Box Hill",
    "locality": "Box Hill"
  },
  {
    "name": "Ouyen P-12 College",
    "locality": ""
  },
  {
    "name": "Overnewton Anglican Community College - Yirramboi Campus, Keilor",
    "locality": "Keilor"
  },
  {
    "name": "Oxley Christian College, Chirnside Park",
    "locality": "Chirnside Park"
  },
  {
    "name": "Ozford College, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Padua College, Mornington",
    "locality": "Mornington"
  },
  {
    "name": "Parade College, Bundoora",
    "locality": "Bundoora"
  },
  {
    "name": "Parkdale Secondary College, Mordialloc",
    "locality": "Mordialloc"
  },
  {
    "name": "Pascoe Vale Girls Secondary College",
    "locality": ""
  },
  {
    "name": "Patterson River Secondary College, Carrum",
    "locality": "Carrum"
  },
  {
    "name": "Peninsula Grammar - Heze Number 1 Middle School, Shandong Province",
    "locality": "Shandong Province"
  },
  {
    "name": "Peninsula Grammar - Pudong Foreign Language School, Shanghai 201203",
    "locality": "Shanghai 201203"
  },
  {
    "name": "Peninsula Grammar, Mount Eliza",
    "locality": "Mount Eliza"
  },
  {
    "name": "Peninsula International School Australia - Malaysia Campus",
    "locality": ""
  },
  {
    "name": "Penleigh and Essendon Grammar School, Keilor East",
    "locality": "Keilor East"
  },
  {
    "name": "Penola Catholic College, Broadmeadows",
    "locality": "Broadmeadows"
  },
  {
    "name": "Philippine Language School of Victoria, Braybrook",
    "locality": "Braybrook"
  },
  {
    "name": "Phoenix P-12 Community College, Sebastopol",
    "locality": "Sebastopol"
  },
  {
    "name": "Plenty Valley Christian College, Doreen",
    "locality": "Doreen"
  },
  {
    "name": "Point Cook Senior Secondary College",
    "locality": ""
  },
  {
    "name": "Portland Secondary College",
    "locality": ""
  },
  {
    "name": "Prahran High School, Windsor",
    "locality": "Windsor"
  },
  {
    "name": "Presbyterian Ladies' College, Burwood",
    "locality": "Burwood"
  },
  {
    "name": "Preston High School",
    "locality": ""
  },
  {
    "name": "Princes Hill Secondary College",
    "locality": ""
  },
  {
    "name": "Protypo Greek School, Oakleigh",
    "locality": "Oakleigh"
  },
  {
    "name": "Rainbow P-12 College",
    "locality": ""
  },
  {
    "name": "Reflections Academy of Dance, Cranbourne",
    "locality": "Cranbourne"
  },
  {
    "name": "Reservoir High School",
    "locality": ""
  },
  {
    "name": "Richmond High School",
    "locality": ""
  },
  {
    "name": "Ringwood Secondary College",
    "locality": ""
  },
  {
    "name": "Rosebud Secondary College",
    "locality": ""
  },
  {
    "name": "Rosehill Secondary College, Niddrie",
    "locality": "Niddrie"
  },
  {
    "name": "Rowville Secondary College",
    "locality": ""
  },
  {
    "name": "Roxburgh College, Roxburgh Park",
    "locality": "Roxburgh Park"
  },
  {
    "name": "Rushworth P-12 College",
    "locality": ""
  },
  {
    "name": "Rutherglen High School",
    "locality": ""
  },
  {
    "name": "Ruyton Girls' School, Kew",
    "locality": "Kew"
  },
  {
    "name": "Sacre Coeur, Glen Iris",
    "locality": "Glen Iris"
  },
  {
    "name": "Sacred Heart College Geelong, Newtown",
    "locality": "Newtown"
  },
  {
    "name": "Sacred Heart College Kyneton",
    "locality": ""
  },
  {
    "name": "Sacred Heart College, Yarrawonga",
    "locality": "Yarrawonga"
  },
  {
    "name": "Sacred Heart Girls' College Oakleigh, Hughesdale",
    "locality": "Hughesdale"
  },
  {
    "name": "Saint Ignatius College Geelong, Drysdale",
    "locality": "Drysdale"
  },
  {
    "name": "Salesian College Sunbury",
    "locality": ""
  },
  {
    "name": "Salesian College, Chadstone",
    "locality": "Chadstone"
  },
  {
    "name": "Sandringham College",
    "locality": ""
  },
  {
    "name": "Santa Maria College, Northcote",
    "locality": "Northcote"
  },
  {
    "name": "Scoresby Secondary College",
    "locality": ""
  },
  {
    "name": "Scotch College, Hawthorn",
    "locality": "Hawthorn"
  },
  {
    "name": "Seymour College",
    "locality": ""
  },
  {
    "name": "Shepparton Christian College",
    "locality": ""
  },
  {
    "name": "Siena College, Camberwell",
    "locality": "Camberwell"
  },
  {
    "name": "Simonds Catholic College, Fitzroy North",
    "locality": "Fitzroy North"
  },
  {
    "name": "Sirius College - Eastmeadows Campus, Broadmeadows",
    "locality": "Broadmeadows"
  },
  {
    "name": "Sirius College - Ibrahim Dellal Campus, Sunshine West",
    "locality": "Sunshine West"
  },
  {
    "name": "Sirius College - Keysborough Campus",
    "locality": ""
  },
  {
    "name": "Sirius College - Meadow Fair Campus, Broadmeadows",
    "locality": "Broadmeadows"
  },
  {
    "name": "South Oakleigh College, Oakleigh South",
    "locality": "Oakleigh South"
  },
  {
    "name": "Southern Cross Grammar, Caroline Springs",
    "locality": "Caroline Springs"
  },
  {
    "name": "Springside West Secondary College, Fraser Rise",
    "locality": "Fraser Rise"
  },
  {
    "name": "Springvale Indo-Chinese Ethnic School Inc., Springvale South",
    "locality": "Springvale South"
  },
  {
    "name": "St Albans Secondary College",
    "locality": ""
  },
  {
    "name": "St Aloysius College, North Melbourne",
    "locality": "North Melbourne"
  },
  {
    "name": "St Andrews Christian College, Wantirna South",
    "locality": "Wantirna South"
  },
  {
    "name": "St Anne's College, Kialla",
    "locality": "Kialla"
  },
  {
    "name": "St Arnaud Secondary College",
    "locality": ""
  },
  {
    "name": "St Augustine's College, Kyabram",
    "locality": "Kyabram"
  },
  {
    "name": "St Bede's College, Mentone",
    "locality": "Mentone"
  },
  {
    "name": "St Bernard's College, Essendon",
    "locality": "Essendon"
  },
  {
    "name": "St Catherine's School, Toorak",
    "locality": "Toorak"
  },
  {
    "name": "St Columba's College, Essendon",
    "locality": "Essendon"
  },
  {
    "name": "St Francis Catholic College, Melton",
    "locality": "Melton"
  },
  {
    "name": "St Francis Xavier College, Beaconsfield",
    "locality": "Beaconsfield"
  },
  {
    "name": "St Helena Secondary College, Eltham",
    "locality": "Eltham"
  },
  {
    "name": "St John's Greek Orthodox College, Preston",
    "locality": "Preston"
  },
  {
    "name": "St John's Regional College, Dandenong",
    "locality": "Dandenong"
  },
  {
    "name": "St Joseph's College - Echuca",
    "locality": ""
  },
  {
    "name": "St Joseph's College - Ferntree Gully",
    "locality": ""
  },
  {
    "name": "St Joseph's College - Mildura",
    "locality": ""
  },
  {
    "name": "St Joseph's College Newtown",
    "locality": ""
  },
  {
    "name": "St Kevin's College Toorak",
    "locality": ""
  },
  {
    "name": "St Leonard's College, Brighton East",
    "locality": "Brighton East"
  },
  {
    "name": "St Margarets School, Berwick",
    "locality": "Berwick"
  },
  {
    "name": "St Mary Mackillop College, Swan Hill",
    "locality": "Swan Hill"
  },
  {
    "name": "St Mary of the Angels School, Nathalia",
    "locality": "Nathalia"
  },
  {
    "name": "St Mary's College Melbourne - St Kilda, St Kilda East",
    "locality": "St Kilda East"
  },
  {
    "name": "St Mary's College, Seymour",
    "locality": "Seymour"
  },
  {
    "name": "St Mary's Coptic Orthodox College, Coolaroo",
    "locality": "Coolaroo"
  },
  {
    "name": "St Michael's Grammar School, St Kilda",
    "locality": "St Kilda"
  },
  {
    "name": "St Monica's College, Epping",
    "locality": "Epping"
  },
  {
    "name": "St Patrick's College, Ballarat",
    "locality": "Ballarat"
  },
  {
    "name": "St Paul's Anglican Grammar School, Warragul",
    "locality": "Warragul"
  },
  {
    "name": "St Peter's College, Cranbourne",
    "locality": "Cranbourne"
  },
  {
    "name": "St Thomas Aquinas College, Tynong",
    "locality": "Tynong"
  },
  {
    "name": "Star of the Sea College, Brighton",
    "locality": "Brighton"
  },
  {
    "name": "Stawell Secondary College",
    "locality": ""
  },
  {
    "name": "Stott's College, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Strathcona Baptist Girls Grammar School, Canterbury",
    "locality": "Canterbury"
  },
  {
    "name": "Strathmore Secondary College",
    "locality": ""
  },
  {
    "name": "Sunbury College",
    "locality": ""
  },
  {
    "name": "Sunbury Downs Secondary College",
    "locality": ""
  },
  {
    "name": "Sunshine College",
    "locality": ""
  },
  {
    "name": "Surf Coast Secondary College, Torquay",
    "locality": "Torquay"
  },
  {
    "name": "Suzanne Cory High School, Werribee",
    "locality": "Werribee"
  },
  {
    "name": "Swan Hill College",
    "locality": ""
  },
  {
    "name": "Swinburne Senior Secondary College, Hawthorn",
    "locality": "Hawthorn"
  },
  {
    "name": "Tarneit Senior College",
    "locality": ""
  },
  {
    "name": "Taxiarches Greek School of Mentone and District's Incorp.",
    "locality": ""
  },
  {
    "name": "Taylors Lakes Secondary College",
    "locality": ""
  },
  {
    "name": "Templestowe College, Templestowe Lower",
    "locality": "Templestowe Lower"
  },
  {
    "name": "The Geelong College, Newtown",
    "locality": "Newtown"
  },
  {
    "name": "The Grange P-12 College, Hoppers Crossing",
    "locality": "Hoppers Crossing"
  },
  {
    "name": "The Hamilton and Alexandra College",
    "locality": ""
  },
  {
    "name": "The Hungarian Language School, Wantirna",
    "locality": "Wantirna"
  },
  {
    "name": "The King David School - Senior School, Armadale",
    "locality": "Armadale"
  },
  {
    "name": "The Knox School, Wantirna South",
    "locality": "Wantirna South"
  },
  {
    "name": "The Lakes South Morang College",
    "locality": ""
  },
  {
    "name": "The Melbourne International School of Japanese, Oakleigh South",
    "locality": "Oakleigh South"
  },
  {
    "name": "The Pushkin Lyceum Russian Community School, Elwood",
    "locality": "Elwood"
  },
  {
    "name": "Thomas Carr College - Hailiang Foreign Language School, Zhejiang",
    "locality": "Zhejiang"
  },
  {
    "name": "Thomas Carr College - Wenzhou No 21 Middle School, Wenzhou Zhejiang",
    "locality": "Wenzhou Zhejiang"
  },
  {
    "name": "Thomas Carr College, Tarneit",
    "locality": "Tarneit"
  },
  {
    "name": "Thomastown Secondary College",
    "locality": ""
  },
  {
    "name": "Thornbury High School",
    "locality": ""
  },
  {
    "name": "Tintern Grammar, Ringwood East",
    "locality": "Ringwood East"
  },
  {
    "name": "Toorak College, Mount Eliza",
    "locality": "Mount Eliza"
  },
  {
    "name": "Trafalgar High School",
    "locality": ""
  },
  {
    "name": "Traralgon College",
    "locality": ""
  },
  {
    "name": "Trinity College Colac",
    "locality": ""
  },
  {
    "name": "Trinity Grammar School, Kew",
    "locality": "Kew"
  },
  {
    "name": "University High School, Parkville",
    "locality": "Parkville"
  },
  {
    "name": "Upper Yarra Secondary College, Yarra Junction",
    "locality": "Yarra Junction"
  },
  {
    "name": "Upwey High School",
    "locality": ""
  },
  {
    "name": "VSL - Altona North/Sunshine/Creekside/Truganina, Footscray",
    "locality": "Footscray"
  },
  {
    "name": "VSL - Box Hill/Blackburn/Doncaster",
    "locality": ""
  },
  {
    "name": "VSL - Craigieburn/Keilor Downs/Taylors Lakes/Melton",
    "locality": ""
  },
  {
    "name": "VSL - Croydon/Shepparton/Bendigo/Ballarat/Mildura, Thornbury",
    "locality": "Thornbury"
  },
  {
    "name": "VSL - Dandenong/Hampton Park/Berwick",
    "locality": ""
  },
  {
    "name": "VSL - Epping/Lalor/Roxburgh/Thomastown",
    "locality": ""
  },
  {
    "name": "VSL - Glen Waverley/Carwatha/Brentwood",
    "locality": ""
  },
  {
    "name": "VSL - North Geelong/Matthew Flinders/Werribee/Point Cook",
    "locality": ""
  },
  {
    "name": "VSL - University/Brunswick/Collingwood/Footscray, Parkville",
    "locality": "Parkville"
  },
  {
    "name": "VSL - Westall/South Oakleigh/Mckinnon/Mentone, Clayton South",
    "locality": "Clayton South"
  },
  {
    "name": "VSL Distance Education, Thornbury",
    "locality": "Thornbury"
  },
  {
    "name": "Vermont Secondary College",
    "locality": ""
  },
  {
    "name": "Victoria University Secondary College - Cairnlea Campus, St Albans",
    "locality": "St Albans"
  },
  {
    "name": "Victorian College for the Deaf, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Victorian College of the Arts Secondary School, Southbank",
    "locality": "Southbank"
  },
  {
    "name": "Victorian Tamil Association, Glen Waverley",
    "locality": "Glen Waverley"
  },
  {
    "name": "Victory Christian College, Strathdale",
    "locality": "Strathdale"
  },
  {
    "name": "Victory Lutheran College, West Wodonga",
    "locality": "West Wodonga"
  },
  {
    "name": "Viewbank College, Rosanna",
    "locality": "Rosanna"
  },
  {
    "name": "Virtual School Victoria, Thornbury",
    "locality": "Thornbury"
  },
  {
    "name": "Wallan Secondary College",
    "locality": ""
  },
  {
    "name": "Wangaratta High School - Edwards Street Campus",
    "locality": ""
  },
  {
    "name": "Wantirna College",
    "locality": ""
  },
  {
    "name": "Warragul Regional College",
    "locality": ""
  },
  {
    "name": "Warrandyte High School",
    "locality": ""
  },
  {
    "name": "Warrnambool College",
    "locality": ""
  },
  {
    "name": "Waverley Christian College - Narre Warren Campus, Narre Warren South",
    "locality": "Narre Warren South"
  },
  {
    "name": "Waverley Christian College, Wantirna South",
    "locality": "Wantirna South"
  },
  {
    "name": "Wedderburn College",
    "locality": ""
  },
  {
    "name": "Wellington Secondary College, Mulgrave",
    "locality": "Mulgrave"
  },
  {
    "name": "Werribee Secondary College",
    "locality": ""
  },
  {
    "name": "Wesley College - Glen Waverley Campus",
    "locality": ""
  },
  {
    "name": "Wesley College, Melbourne",
    "locality": "Melbourne"
  },
  {
    "name": "Westall Secondary College, Clayton South",
    "locality": "Clayton South"
  },
  {
    "name": "Westbourne Grammar School - Hoppers Crossing Campus, Truganina",
    "locality": "Truganina"
  },
  {
    "name": "Western Chinese Language School, Braybrook",
    "locality": "Braybrook"
  },
  {
    "name": "Western Heights Secondary College, Hamlyn Heights",
    "locality": "Hamlyn Heights"
  },
  {
    "name": "Western Port Secondary College, Hastings",
    "locality": "Hastings"
  },
  {
    "name": "Wheelers Hill Secondary College",
    "locality": ""
  },
  {
    "name": "Whitefriars College, Donvale",
    "locality": "Donvale"
  },
  {
    "name": "Whittlesea Secondary College",
    "locality": ""
  },
  {
    "name": "William Ruthven Secondary College, Reservoir",
    "locality": "Reservoir"
  },
  {
    "name": "Williamstown High School",
    "locality": ""
  },
  {
    "name": "Wimmera Litheran College - Horsham",
    "locality": ""
  },
  {
    "name": "Woodleigh School, Langwarrin South",
    "locality": "Langwarrin South"
  },
  {
    "name": "Woodmans Hill Secondary College, Ballarat East",
    "locality": "Ballarat East"
  },
  {
    "name": "Wycheproof P-12 College",
    "locality": ""
  },
  {
    "name": "Wyndham Central Secondary College, Werribee",
    "locality": "Werribee"
  },
  {
    "name": "Xavier College, Kew",
    "locality": "Kew"
  },
  {
    "name": "Xinjinshan Chinese Language and Culture School Inc, Mount Waverley",
    "locality": "Mount Waverley"
  },
  {
    "name": "Yarra Valley Grammar School, Ringwood",
    "locality": "Ringwood"
  },
  {
    "name": "Yarrawonga College P-12 - Pinniger Street Campus",
    "locality": ""
  },
  {
    "name": "Yea High School",
    "locality": ""
  },
  {
    "name": "Yeshivah College, St Kilda East",
    "locality": "St Kilda East"
  },
  {
    "name": "Yesodei Hatorah College - Ormond Campus, Brighton",
    "locality": "Brighton"
  }
];

export const HONOUR_ROLL_2025_SCHOOL_ALIASES: Readonly<Record<string, string>> = {
  "Al-Taqwa College": "Al-Taqwa College, Truganina",
  "Alice Miller School": "Alice Miller School, Macedon",
  "Alphington Grammar School": "Alphington Grammar School",
  "Auburn High School": "Auburn High School, Hawthorn East",
  "Avila College": "Avila College, Mount Waverley",
  "Bacchus Marsh Grammar": "Bacchus Marsh Grammar",
  "Ballarat Clarendon College": "Ballarat Clarendon College",
  "Ballarat Grammar": "Ballarat Grammar, Wendouree",
  "Balwyn High School": "Balwyn High School, Balwyn North",
  "Beth Rivkah Ladies College": "Beth Rivkah Ladies College, St Kilda East",
  "Bialik College": "Bialik College, Hawthorn East",
  "Box Hill High School": "Box Hill High School",
  "Brighton Grammar School": "Brighton Grammar School",
  "Camberwell Girls Grammar School": "Camberwell Anglican Girls Grammar School, Canterbury",
  "Camberwell Grammar School": "Camberwell Grammar School, Canterbury",
  "Carey Baptist Grammar School": "Carey Baptist Grammar School, Kew",
  "Catholic Ladies College": "Catholic Ladies College, Eltham",
  "Caulfield Grammar School,ST KILDA EAST": "Caulfield Grammar School - Caulfield Campus, St Kilda East",
  "Caulfield Grammar School,WHEELERS HILL": "Caulfield Grammar School, Wheelers Hill",
  "Charlton College": "Charlton College",
  "Darul Ulum College of Victoria": "Darul Ulum College of Victoria, Fawkner",
  "East Doncaster Secondary College": "East Doncaster Secondary College, Doncaster East",
  "Edenbrook Secondary College": "Edenbrook Secondary College, Pakenham",
  "Fintona Girls School": "Fintona Girls' School, Balwyn",
  "Firbank Grammar School": "Firbank Grammar School, Brighton",
  "Geelong Grammar School": "Geelong Grammar School, Corio",
  "Genazzano FCJ College": "Genazzano FCJ College, Kew",
  "Girton Grammar School": "Girton Grammar School, Bendigo",
  "Glen Waverley Secondary College": "Glen Waverley Secondary College",
  "Goulburn Valley Grammar School": "Goulburn Valley Grammar School, Shepparton",
  "Haileybury - Pangea Campus": "Haileybury - Pangea campus, Keysborough",
  "Haileybury College": "Haileybury College, Keysborough",
  "Haileybury College (Girls)": "Haileybury Girls College, Keysborough",
  "Haileybury Rendall School": "Haileybury Rendall School, Berrimah",
  "Huntingtower School": "Huntingtower School, Mount Waverley",
  "Islamic College of Melbourne": "Islamic College of Melbourne, Tarneit",
  "Ivanhoe Girls' Grammar School": "Ivanhoe Girls' Grammar School",
  "Ivanhoe Grammar School,Doreen": "Ivanhoe Grammar School - Plenty Campus, Mernda",
  "Ivanhoe Grammar School,Ivanhoe": "Ivanhoe Grammar School",
  "John Monash Science School": "John Monash Science School, Clayton",
  "Kardinia International College": "Kardinia International College, Bell Post Hill",
  "Kew High School": "Kew High School, Kew East",
  "Kilbreda College": "Kilbreda College, Mentone",
  "Kilvington Grammar School": "Kilvington Grammar School, Ormond",
  "Kingswood College": "Kingswood College, Box Hill",
  "Korowa Anglican Girls' School": "Korowa Anglican Girls' School, Glen Iris",
  "Lauriston Girls' School": "Lauriston Girls' School, Armadale",
  "Leibler Yavneh College": "Leibler Yavneh College, Elsternwick",
  "Loreto Mandeville Hall": "Loreto Mandeville Hall, Toorak",
  "Lowther Hall Anglican Grammar School": "Lowther Hall Anglican Grammar School, Essendon",
  "MacRobertson Girls High School": "MacRobertson Girls High School, Melbourne",
  "Mazenod College": "Mazenod College, Mulgrave",
  "McKinnon Secondary College": "McKinnon Secondary College",
  "Melbourne Girls Grammar": "Melbourne Girls Grammar, South Yarra",
  "Melbourne Girls' College": "Melbourne Girls' College, Richmond",
  "Melbourne Grammar School": "Melbourne Grammar School",
  "Melbourne High School": "Melbourne High School, South Yarra",
  "Mentone Girls' Grammar School": "Mentone Girls' Grammar School",
  "Mentone Grammar School": "Mentone Grammar School",
  "Methodist Ladies College": "Methodist Ladies' College, Kew",
  "Mount Scopus Memorial College": "Mount Scopus Memorial College, Burwood",
  "Nossal High School": "Nossal High School, Berwick",
  "Our Lady of Mercy College": "Our Lady of Mercy College, Heidelberg",
  "Our Lady of Sion College": "Our Lady of Sion College, Box Hill",
  "Oxley Christian College": "Oxley Christian College, Chirnside Park",
  "Peninsula Grammar": "Peninsula Grammar, Mount Eliza",
  "Penleigh and Essendon Grammar School": "Penleigh and Essendon Grammar School, Keilor East",
  "Presbyterian Ladies' College": "Presbyterian Ladies' College, Burwood",
  "Ruyton Girls' School": "Ruyton Girls' School, Kew",
  "Sacre Coeur": "Sacre Coeur, Glen Iris",
  "Scotch College": "Scotch College, Hawthorn",
  "Siena College": "Siena College, Camberwell",
  "St Andrews Christian College": "St Andrews Christian College, Wantirna South",
  "St Catherine's School": "St Catherine's School, Toorak",
  "St Kevin's College": "St Kevin's College Toorak",
  "St Leonard's College": "St Leonard's College, Brighton East",
  "St Margaret's School": "St Margarets School, Berwick",
  "St Michael's Grammar School": "St Michael's Grammar School, St Kilda",
  "Star of the Sea College": "Star of the Sea College, Brighton",
  "Strathcona Baptist Girls' Grammar School": "Strathcona Baptist Girls Grammar School, Canterbury",
  "Suzanne Cory High School": "Suzanne Cory High School, Werribee",
  "The Geelong College": "The Geelong College, Newtown",
  "The King David School": "The King David School - Senior School, Armadale",
  "The Knox School": "The Knox School, Wantirna South",
  "Tintern Grammar": "Tintern Grammar, Ringwood East",
  "Toorak College": "Toorak College, Mount Eliza",
  "Trinity Grammar School": "Trinity Grammar School, Kew",
  "Victorian College of the Arts": "Victorian College of the Arts Secondary School, Southbank",
  "Waverley Christian College": "Waverley Christian College, Wantirna South",
  "Wesley College,Glen Waverley": "Wesley College, Melbourne",
  "Wesley College,Melbourne": "Wesley College, Melbourne",
  "Williamstown High School": "Williamstown High School",
  "Xavier College": "Xavier College, Kew",
  "Yarra Valley Grammar School": "Yarra Valley Grammar School, Ringwood",
  "Yeshivah College": "Yeshivah College, St Kilda East",
  "Yesodei HaTorah College": "Yesodei Hatorah College - Ormond Campus, Brighton"
};

export const HONOUR_ROLL_2025_SUBJECT_BY_CODE: Readonly<Record<string, string>> = {
  "AC": "Accounting",
  "AH": "Agricultural and Horticultural Studies",
  "AL03": "Algorithmics (HESS)",
  "AR": "Languages:Arabic",
  "AT": "Art Creative Practice",
  "BI": "Biology",
  "BM": "Business Management",
  "CC": "Classical Studies",
  "CH": "Chemistry",
  "CK": "Languages:Chinese Second Language Advanced",
  "CL": "Languages:Chinese Second Language",
  "CN": "Languages:Chinese First Language",
  "DA": "Dance",
  "DR": "Drama",
  "DT": "Product Design and Technologies",
  "EC": "Economics",
  "EF": "English as an Additional Language",
  "EG": "English Language",
  "EN": "English",
  "EV": "Environmental Science",
  "FR": "Languages:French",
  "FT": "Food Studies",
  "GE": "Geography",
  "GN": "Languages:German",
  "HA": "Australian History",
  "HH": "Health and Human Development",
  "HI": "Languages:Hindi",
  "HI17": "Ancient History",
  "HR": "History Revolutions",
  "IL": "Languages:Italian",
  "IT02": "Applied Computing: Data Analytics",
  "IT03": "Applied Computing: Software Development",
  "IX": "Languages:Indonesian Second Language",
  "JS": "Languages:Japanese Second Language",
  "KS": "Languages:Korean Second Language",
  "LA": "Languages:Latin",
  "LI": "Literature",
  "LO31": "Languages:Vietnamese Second Language",
  "LO49": "Languages:Punjabi",
  "LO57": "Languages:Chinese Culture and Society",
  "LS": "Legal Studies",
  "MA10": "Foundation Mathematics",
  "ME": "Media",
  "MG": "Languages:Greek",
  "NF": "General Mathematics",
  "NJ": "Mathematical Methods",
  "NS": "Specialist Mathematics",
  "OS": "Outdoor and Environmental Studies",
  "PE": "Physical Education",
  "PH": "Physics",
  "PL": "Philosophy",
  "PN": "Languages:Persian",
  "PS06": "Politics",
  "PY": "Psychology",
  "RS": "Religion and Society",
  "RU": "Languages:Russian",
  "SA": "Art Making and Exhibiting",
  "SE03": "Systems Engineering",
  "SO03": "Sociology",
  "SP": "Languages:Spanish",
  "TS": "Theatre Studies",
  "TU": "Languages:Turkish",
  "VC": "Visual Communication Design",
  "XI03": "Extended Investigation"
};

export const HONOUR_ROLL_2025_SCORES: Readonly<
  Record<string, Readonly<Record<string, readonly number[]>>>
> = {
  "Academy of Mary Immaculate, Fitzroy": {
    "Biology": [
      44,
      43
    ],
    "Business Management": [
      44,
      42,
      41,
      40,
      40
    ],
    "English": [
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      44,
      40
    ],
    "General Mathematics": [
      47,
      44,
      43
    ],
    "Health and Human Development": [
      48,
      44,
      41,
      41
    ],
    "Languages:French": [
      45,
      40
    ],
    "Legal Studies": [
      41,
      40,
      40
    ],
    "Literature": [
      48,
      45,
      40
    ],
    "Mathematical Methods": [
      45,
      40
    ],
    "Physical Education": [
      42,
      41
    ],
    "Psychology": [
      49,
      44,
      44,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43
    ],
    "Visual Communication Design": [
      48,
      40
    ]
  },
  "Aetolian College, Keilor East": {
    "Languages:Greek": [
      41
    ]
  },
  "Aitken College, Greenvale": {
    "Accounting": [
      46
    ],
    "Chemistry": [
      40
    ],
    "English": [
      45,
      44,
      41,
      40
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Health and Human Development": [
      46,
      40
    ],
    "Legal Studies": [
      41
    ],
    "Mathematical Methods": [
      45
    ],
    "Media": [
      45
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      41
    ],
    "Psychology": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "Al Iman College, Melton South": {
    "English": [
      40
    ]
  },
  "Al Siraat College, Epping": {
    "Business (VCE VET)": [
      44,
      40,
      40
    ],
    "Community Services (VCE VET)": [
      47,
      42,
      40
    ],
    "English": [
      50,
      45,
      42,
      41,
      41
    ],
    "Food Studies": [
      44,
      41
    ],
    "General Mathematics": [
      50,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Information and Commuications Technology (VCE VET)": [
      42
    ],
    "Legal Studies": [
      41
    ],
    "Physics": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      45,
      40
    ]
  },
  "Al-Taqwa College, Truganina": {
    "Business Management": [
      50,
      44,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      42
    ],
    "Economics": [
      46
    ],
    "English": [
      45,
      44,
      43,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      45,
      44,
      43,
      43,
      43,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      45,
      42,
      40,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      44,
      40
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      44,
      44,
      42,
      42,
      41
    ],
    "Texts and Traditions": [
      48,
      42,
      40
    ]
  },
  "Albert Park College": {
    "Biology": [
      50,
      40
    ],
    "Business Management": [
      40
    ],
    "Chemistry": [
      41
    ],
    "Dance": [
      41
    ],
    "Dance (VCE VET)": [
      41
    ],
    "Drama": [
      44
    ],
    "Economics": [
      46,
      41,
      40
    ],
    "English": [
      50,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "English Language": [
      41
    ],
    "General Mathematics": [
      50,
      41
    ],
    "Health and Human Development": [
      43,
      41
    ],
    "History Revolutions": [
      40
    ],
    "Languages:French": [
      43
    ],
    "Legal Studies": [
      50,
      46,
      43,
      40
    ],
    "Literature": [
      47,
      43,
      42
    ],
    "Mathematical Methods": [
      45,
      42,
      40
    ],
    "Media": [
      46,
      43,
      41,
      41
    ],
    "Philosophy": [
      40
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      43,
      41,
      41
    ],
    "Politics": [
      41
    ],
    "Product Design and Technologies": [
      44
    ],
    "Psychology": [
      45,
      43,
      43,
      43,
      42,
      41
    ],
    "Sociology": [
      48,
      43,
      43,
      41,
      40
    ],
    "Specialist Mathematics": [
      40
    ],
    "Visual Communication Design": [
      50
    ]
  },
  "Alexandra Secondary College": {
    "Physical Education": [
      41,
      40
    ],
    "Psychology": [
      47,
      40
    ]
  },
  "Alice Miller School, Macedon": {
    "Chemistry": [
      47
    ],
    "English": [
      40
    ],
    "Furnishing": [
      40
    ],
    "General Mathematics": [
      50,
      48,
      46,
      45,
      45,
      44,
      43,
      41,
      40,
      40
    ],
    "Hospitality": [
      41
    ],
    "Legal Studies": [
      42
    ],
    "Mathematical Methods": [
      41
    ],
    "Music Sound Production (VCE VET)": [
      45,
      44,
      42
    ],
    "Psychology": [
      41
    ]
  },
  "Alkira Secondary College, Cranbourne North": {
    "English": [
      40
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Literature": [
      43
    ],
    "Psychology": [
      41
    ],
    "Sociology": [
      41
    ],
    "Visual Communication Design": [
      50,
      40
    ]
  },
  "Alphington Grammar School": {
    "Accounting": [
      42
    ],
    "Applied Computing: Software Development": [
      50,
      44,
      43
    ],
    "Business Management": [
      41
    ],
    "Chemistry": [
      44,
      44
    ],
    "English": [
      46,
      42,
      41
    ],
    "General Mathematics": [
      47,
      45,
      44,
      44,
      43,
      41,
      41,
      41
    ],
    "Health and Human Development": [
      43,
      42,
      41
    ],
    "Languages:Greek": [
      46
    ],
    "Legal Studies": [
      40
    ],
    "Mathematical Methods": [
      43,
      41,
      40
    ],
    "Music Inquiry": [
      41
    ],
    "Physics": [
      46,
      42
    ]
  },
  "Altona College": {
    "English": [
      42
    ],
    "Health and Human Development": [
      43,
      40
    ],
    "Legal Studies": [
      44,
      41
    ],
    "Psychology": [
      47,
      46
    ]
  },
  "Antonine College, Pascoe Vale South": {
    "Foundation Mathematics": [
      43
    ],
    "General Mathematics": [
      48,
      40
    ],
    "Languages:Arabic": [
      41
    ]
  },
  "Apollo Bay P-12 College": {
    "Biology": [
      42
    ],
    "Hospitality": [
      45
    ],
    "Physical Education": [
      50
    ]
  },
  "Aquinas College, Ringwood": {
    "Accounting": [
      40
    ],
    "Applied Computing: Data Analytics": [
      41,
      40
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Biology": [
      48,
      40,
      40
    ],
    "Business Management": [
      48,
      45,
      44,
      42
    ],
    "English": [
      48,
      44,
      41,
      40
    ],
    "General Mathematics": [
      46,
      42,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      42
    ],
    "History Revolutions": [
      40
    ],
    "Hospitality": [
      45
    ],
    "Hospitality (Cookery)(VCE VET)": [
      44
    ],
    "Literature": [
      42
    ],
    "Physical Education": [
      43,
      43,
      43,
      42,
      41
    ],
    "Politics": [
      47
    ],
    "Psychology": [
      42,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ],
    "Systems Engineering": [
      45
    ]
  },
  "Ashwood High School": {
    "Accounting": [
      50
    ],
    "Art Making and Exhibiting": [
      50
    ],
    "Biology": [
      42,
      41
    ],
    "Chemistry": [
      42,
      41,
      40
    ],
    "English": [
      44,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      44,
      40
    ],
    "Food Studies": [
      49,
      46
    ],
    "General Mathematics": [
      48,
      44,
      43,
      42,
      42,
      41
    ],
    "Health and Human Development": [
      45,
      43,
      40
    ],
    "History Revolutions": [
      46,
      42,
      41
    ],
    "Literature": [
      47
    ],
    "Mathematical Methods": [
      45,
      43,
      42
    ],
    "Physics": [
      42,
      40
    ],
    "Politics": [
      42,
      41
    ],
    "Psychology": [
      40,
      40
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      48,
      47
    ]
  },
  "Assumption College, Kilmore": {
    "Food Studies": [
      43,
      40
    ],
    "General Mathematics": [
      50,
      41,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Music Performance (VCE VET)": [
      40
    ],
    "Outdoor and Environmental Studies": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      50,
      43,
      41,
      40
    ],
    "Systems Engineering": [
      44,
      43
    ]
  },
  "Auburn High School, Hawthorn East": {
    "Accounting": [
      40
    ],
    "Applied Computing: Software Development": [
      43
    ],
    "Biology": [
      44,
      41
    ],
    "Business Management": [
      46,
      44,
      43,
      41,
      41,
      41,
      40
    ],
    "Chemistry": [
      40
    ],
    "English": [
      47,
      44,
      43,
      43,
      41
    ],
    "English Language": [
      42,
      41
    ],
    "English as an Additional Language": [
      43,
      41,
      40
    ],
    "General Mathematics": [
      48,
      41,
      41,
      41
    ],
    "Health and Human Development": [
      45,
      44,
      43,
      41,
      41
    ],
    "History Revolutions": [
      40,
      40
    ],
    "Languages:French": [
      46,
      43,
      40
    ],
    "Legal Studies": [
      44,
      44,
      43,
      40
    ],
    "Mathematical Methods": [
      49,
      49,
      42,
      40
    ],
    "Media": [
      42,
      41
    ],
    "Physical Education": [
      45,
      42,
      40
    ],
    "Physics": [
      49,
      47,
      41,
      40,
      40
    ],
    "Psychology": [
      47,
      45,
      43,
      42,
      42,
      42,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      40
    ]
  },
  "Ave Maria College, Aberfeldie": {
    "Business (VCE VET)": [
      44
    ],
    "Business Management": [
      46,
      45,
      41
    ],
    "English": [
      44,
      42
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      42,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Legal Studies": [
      44,
      41,
      41,
      40
    ],
    "Media": [
      50
    ],
    "Outdoor and Environmental Studies": [
      42,
      40
    ],
    "Product Design and Technologies": [
      42
    ],
    "Psychology": [
      45,
      41,
      41
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Avila College, Mount Waverley": {
    "Agricultural and Horticultural Studies": [
      47,
      42
    ],
    "Applied Computing: Data Analytics": [
      43
    ],
    "Art Creative Practice": [
      50,
      45,
      43,
      40,
      40
    ],
    "Biology": [
      43,
      42,
      40
    ],
    "Business Management": [
      46,
      46,
      44,
      44,
      44,
      43,
      43,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      40
    ],
    "English": [
      50,
      50,
      49,
      47,
      47,
      46,
      45,
      44,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Food Studies": [
      43
    ],
    "General Mathematics": [
      46,
      45,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      43,
      41,
      40,
      40,
      40
    ],
    "Legal Studies": [
      49,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      46,
      42
    ],
    "Physical Education": [
      43,
      43,
      41
    ],
    "Product Design and Technologies": [
      43,
      43
    ],
    "Psychology": [
      49,
      45,
      45,
      45,
      44,
      43,
      42,
      42,
      41,
      40
    ],
    "Religion and Society": [
      47,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      42,
      41
    ],
    "Visual Communication Design": [
      46,
      45,
      42,
      40,
      40,
      40,
      40,
      40
    ]
  },
  "Bacchus Marsh College": {
    "English": [
      45
    ],
    "Mathematical Methods": [
      42
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Bacchus Marsh Grammar": {
    "Accounting": [
      50,
      44
    ],
    "Applied Computing: Software Development": [
      44,
      40
    ],
    "Art Making and Exhibiting": [
      44,
      41
    ],
    "Australian History": [
      42,
      40
    ],
    "Biology": [
      50,
      47,
      42,
      40
    ],
    "Business Management": [
      47,
      43,
      43,
      42,
      42,
      42,
      40,
      40,
      40
    ],
    "Chemistry": [
      48
    ],
    "Dance": [
      42
    ],
    "English": [
      46,
      45,
      41,
      40,
      40
    ],
    "English Language": [
      43,
      40,
      40
    ],
    "Environmental Science": [
      46,
      45,
      43,
      43,
      43,
      42
    ],
    "Food Studies": [
      48,
      43,
      40
    ],
    "General Mathematics": [
      50,
      50,
      49,
      49,
      47,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      44,
      40
    ],
    "History Revolutions": [
      44,
      41,
      40
    ],
    "Hospitality": [
      43,
      42
    ],
    "Languages:Indonesian Second Language": [
      40
    ],
    "Languages:Japanese Second Language": [
      45
    ],
    "Legal Studies": [
      44,
      40,
      40
    ],
    "Mathematical Methods": [
      48,
      47,
      44,
      44,
      42,
      42,
      41,
      41,
      41,
      41,
      40
    ],
    "Music Performance (VCE VET)": [
      50,
      43
    ],
    "Outdoor and Environmental Studies": [
      50,
      50,
      46,
      44,
      44,
      43,
      41,
      41,
      40
    ],
    "Physics": [
      40,
      40
    ],
    "Psychology": [
      46,
      46,
      45,
      45,
      43,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      45,
      44
    ],
    "Systems Engineering": [
      50,
      41,
      40
    ],
    "Visual Communication Design": [
      41,
      40
    ]
  },
  "Bairnsdale Secondary College": {
    "Physical Education": [
      41
    ]
  },
  "Balcombe Grammar School, Mount Martha": {
    "Accounting": [
      40
    ],
    "Art Creative Practice": [
      47,
      42
    ],
    "Biology": [
      45,
      42,
      41,
      40,
      40
    ],
    "Business Management": [
      40,
      40
    ],
    "Dance (VCE VET)": [
      45
    ],
    "English": [
      44,
      43,
      42,
      41,
      41
    ],
    "Food Studies": [
      46,
      44,
      40
    ],
    "General Mathematics": [
      50,
      46,
      43,
      42
    ],
    "Health and Human Development": [
      46,
      41,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Languages:French": [
      40
    ],
    "Legal Studies": [
      46,
      45,
      44
    ],
    "Music Performance (VCE VET)": [
      40
    ],
    "Physical Education": [
      48,
      43,
      41,
      40
    ],
    "Product Design and Technologies": [
      43
    ],
    "Psychology": [
      43,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      48
    ]
  },
  "Ballarat Clarendon College": {
    "Accounting": [
      44,
      44,
      42,
      40,
      40
    ],
    "Applied Computing: Data Analytics": [
      50,
      49,
      47,
      44,
      42,
      41
    ],
    "Art Making and Exhibiting": [
      45,
      44,
      42,
      41,
      40
    ],
    "Biology": [
      47,
      47,
      45,
      43,
      41,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      48,
      45,
      43,
      43,
      42,
      40,
      40
    ],
    "Chemistry": [
      50,
      50,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      44,
      41,
      41,
      40
    ],
    "English": [
      50,
      50,
      47,
      47,
      46,
      46,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      47,
      47,
      46,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      50,
      48,
      46,
      46,
      45,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health Services": [
      48,
      45,
      45,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      46,
      46,
      45,
      44,
      43,
      43,
      42,
      42,
      40,
      40,
      40
    ],
    "History Revolutions": [
      46,
      41,
      40
    ],
    "Languages:French": [
      43,
      42
    ],
    "Legal Studies": [
      49,
      48,
      47,
      46,
      45,
      43,
      43,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      48,
      43,
      43,
      43,
      41,
      41,
      41,
      40
    ],
    "Mathematical Methods": [
      49,
      48,
      46,
      46,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Physical Education": [
      46,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Physics": [
      50,
      44,
      44,
      42,
      42,
      40,
      40
    ],
    "Politics": [
      40
    ],
    "Psychology": [
      48,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43,
      41
    ],
    "Theatre Studies": [
      41,
      41,
      40
    ],
    "Visual Communication Design": [
      46,
      41
    ]
  },
  "Ballarat Grammar, Wendouree": {
    "Agricultural and Horticultural Studies": [
      48,
      45,
      43,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      42,
      40
    ],
    "Biology": [
      44,
      42,
      40
    ],
    "Business Management": [
      44,
      44,
      43,
      43,
      43,
      42,
      41,
      40
    ],
    "Chemistry": [
      50,
      42,
      42,
      42
    ],
    "English": [
      46,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      45,
      41
    ],
    "English as an Additional Language": [
      43
    ],
    "General Mathematics": [
      46,
      45,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      41,
      41,
      41,
      40,
      40
    ],
    "Languages:French": [
      47,
      40
    ],
    "Legal Studies": [
      41,
      41,
      41,
      41
    ],
    "Literature": [
      45,
      45,
      44,
      41,
      41,
      41
    ],
    "Mathematical Methods": [
      45,
      44,
      42
    ],
    "Media": [
      44
    ],
    "Music Performance (VCE VET)": [
      41,
      40
    ],
    "Music Sound Production (VCE VET)": [
      45
    ],
    "Philosophy": [
      47,
      42
    ],
    "Physical Education": [
      43,
      42,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      42,
      41
    ],
    "Psychology": [
      42,
      41,
      41,
      40
    ],
    "Specialist Mathematics": [
      42,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ],
    "Systems Engineering": [
      45,
      41
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "Ballarat High School": {
    "Art Making and Exhibiting": [
      49
    ],
    "Community Services (VCE VET)": [
      41,
      41
    ],
    "General Mathematics": [
      45,
      42,
      41,
      40,
      40,
      40
    ],
    "Philosophy": [
      42
    ],
    "Psychology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      49,
      45,
      43,
      40,
      40
    ]
  },
  "Balwyn High School, Balwyn North": {
    "Accounting": [
      46,
      45,
      43,
      43,
      42,
      42,
      40
    ],
    "Applied Computing: Data Analytics": [
      40,
      40
    ],
    "Applied Computing: Software Development": [
      49,
      44,
      42,
      42,
      40
    ],
    "Art Creative Practice": [
      46,
      44,
      44,
      42,
      42
    ],
    "Biology": [
      50,
      49,
      49,
      46,
      46,
      45,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      50,
      50,
      49,
      47,
      47,
      45,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      50,
      49,
      45,
      45,
      45,
      45,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Economics": [
      44,
      43,
      42,
      40
    ],
    "English": [
      50,
      47,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      46,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      48,
      46,
      44,
      41,
      41,
      40,
      40
    ],
    "Food Studies": [
      44,
      44
    ],
    "General Mathematics": [
      50,
      50,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      49,
      48,
      47,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "History Revolutions": [
      49,
      47,
      46,
      45,
      44,
      41,
      41,
      40,
      40
    ],
    "Languages:Chinese First Language": [
      47,
      46,
      41,
      41,
      41
    ],
    "Languages:Chinese Second Language": [
      41
    ],
    "Languages:Chinese Second Language Advanced": [
      44,
      43,
      42,
      41,
      41
    ],
    "Languages:French": [
      47,
      41,
      40
    ],
    "Languages:Vietnamese First Language": [
      48,
      46,
      44,
      44,
      43
    ],
    "Legal Studies": [
      46,
      46,
      45,
      42
    ],
    "Literature": [
      48,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      50,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      43,
      42,
      40
    ],
    "Music Contemporary Performance": [
      41
    ],
    "Physical Education": [
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Physics": [
      50,
      49,
      46,
      45,
      45,
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Politics": [
      43
    ],
    "Psychology": [
      46,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      44,
      43,
      43,
      41,
      41,
      40,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      47,
      42
    ],
    "Visual Communication Design": [
      46,
      42,
      41,
      41,
      41
    ]
  },
  "Bannockburn P-12 College": {
    "Art Making and Exhibiting": [
      46,
      42
    ],
    "English": [
      46,
      46
    ],
    "Media": [
      49
    ],
    "Sociology": [
      46
    ]
  },
  "Bass Coast College, Wonthaggi": {
    "Art Making and Exhibiting": [
      43
    ],
    "Business Management": [
      44,
      43,
      41
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Media": [
      40
    ],
    "Outdoor and Environmental Studies": [
      42,
      41
    ],
    "Physical Education": [
      40
    ],
    "Politics": [
      40
    ],
    "Psychology": [
      43,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      42,
      42,
      40,
      40
    ]
  },
  "Bayside Christian College, Langwarrin South": {
    "Art Making and Exhibiting": [
      50,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Bayside P-12 College - Paisley Campus, Newport": {
    "Business Management": [
      45
    ],
    "Creative and Digital Media (VCE VET)": [
      40
    ],
    "General Mathematics": [
      44
    ],
    "Health and Human Development": [
      44
    ],
    "Sport and Recreation (VCE VET)": [
      43
    ]
  },
  "Bayview College, Portland": {
    "Chemistry": [
      40
    ],
    "Psychology": [
      41
    ]
  },
  "Beaconhills College - Berwick": {
    "Accounting": [
      43,
      40,
      40
    ],
    "Biology": [
      50,
      40
    ],
    "Business Management": [
      43,
      41,
      41
    ],
    "Chemistry": [
      49
    ],
    "Economics": [
      49
    ],
    "English": [
      41,
      40,
      40,
      40
    ],
    "English Language": [
      46,
      41
    ],
    "General Mathematics": [
      50,
      45,
      41,
      41
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      43
    ],
    "Languages:French": [
      42
    ],
    "Legal Studies": [
      42,
      40
    ],
    "Media": [
      44,
      41
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Outdoor and Environmental Studies": [
      45,
      44,
      44,
      42,
      41,
      41,
      40
    ],
    "Physical Education": [
      42,
      41
    ],
    "Physics": [
      44
    ],
    "Product Design and Technologies": [
      45,
      40
    ],
    "Psychology": [
      41,
      40
    ],
    "Specialist Mathematics": [
      49
    ],
    "Systems Engineering": [
      46
    ],
    "Visual Communication Design": [
      50,
      41
    ]
  },
  "Beaconhills College - Pakenham": {
    "Biology": [
      40
    ],
    "Business Management": [
      40,
      40
    ],
    "English": [
      45,
      41,
      40
    ],
    "Environmental Science": [
      50
    ],
    "Food Studies": [
      46,
      42
    ],
    "Foundation Mathematics": [
      47,
      41
    ],
    "Health and Human Development": [
      40,
      40
    ],
    "Literature": [
      45
    ],
    "Media": [
      40
    ],
    "Psychology": [
      47,
      40
    ]
  },
  "Beaumaris Secondary College": {
    "Biology": [
      41
    ],
    "Business Management": [
      42,
      40,
      40,
      40
    ],
    "Economics": [
      44,
      42
    ],
    "English": [
      45,
      42,
      42,
      40
    ],
    "English Language": [
      46
    ],
    "Food Studies": [
      41,
      40
    ],
    "Health and Human Development": [
      47,
      45,
      43
    ],
    "Legal Studies": [
      46,
      44,
      43,
      43
    ],
    "Mathematical Methods": [
      44
    ],
    "Philosophy": [
      44,
      42
    ],
    "Physical Education": [
      48,
      44,
      41,
      41,
      40,
      40
    ],
    "Physics": [
      45
    ],
    "Psychology": [
      48,
      46,
      42,
      41,
      40,
      40,
      40,
      40
    ]
  },
  "Beechworth Secondary College": {
    "Engineering Studies (VCE VET)": [
      45
    ]
  },
  "Belgrave Heights Christian School": {
    "Business Management": [
      40
    ],
    "English": [
      43
    ],
    "Health and Human Development": [
      41
    ],
    "Media": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      50
    ]
  },
  "Bellarine Secondary College, Drysdale": {
    "Equine Studies (VCE VET)": [
      43,
      41
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      50
    ],
    "Laboratory Skills (VCE VET)": [
      46
    ],
    "Outdoor and Environmental Studies": [
      41
    ],
    "Physical Education": [
      47
    ],
    "Physics": [
      40
    ]
  },
  "Belmont High School": {
    "Art Making and Exhibiting": [
      41,
      40
    ],
    "English": [
      43,
      43,
      42,
      42,
      41,
      40,
      40
    ],
    "English Language": [
      43
    ],
    "Food Studies": [
      47
    ],
    "General Mathematics": [
      44,
      40,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      41
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      50,
      40
    ],
    "Physical Education": [
      41
    ],
    "Psychology": [
      43,
      43,
      42
    ],
    "Specialist Mathematics": [
      42,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      42,
      41
    ]
  },
  "Bendigo Senior Secondary College": {
    "Art Creative Practice": [
      48,
      44,
      42
    ],
    "Art Making and Exhibiting": [
      46,
      42,
      40
    ],
    "Biology": [
      42,
      40
    ],
    "Business Management": [
      40
    ],
    "Classical Studies": [
      43
    ],
    "Community Services (VCE VET)": [
      47
    ],
    "English": [
      41,
      40,
      40
    ],
    "English Language": [
      43
    ],
    "Environmental Science": [
      50
    ],
    "Foundation Mathematics": [
      43,
      41,
      41
    ],
    "General Mathematics": [
      41,
      40,
      40,
      40
    ],
    "Health Services": [
      50,
      45,
      43,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      41,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Legal Studies": [
      42
    ],
    "Literature": [
      43,
      43,
      41
    ],
    "Media": [
      42
    ],
    "Music Inquiry": [
      44,
      41
    ],
    "Music Performance (VCE VET)": [
      43,
      40
    ],
    "Outdoor and Environmental Studies": [
      41,
      41
    ],
    "Philosophy": [
      44,
      42
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      50
    ],
    "Sociology": [
      43,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      48
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Bentleigh Secondary College, Bentleigh East": {
    "Biology": [
      45,
      43,
      41,
      40,
      40
    ],
    "Business Management": [
      46,
      43,
      41
    ],
    "Chemistry": [
      42,
      40
    ],
    "English": [
      41,
      40
    ],
    "General Mathematics": [
      48,
      45,
      41,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      44
    ],
    "Legal Studies": [
      47
    ],
    "Media": [
      43
    ],
    "Outdoor and Environmental Studies": [
      50,
      41,
      40
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      43,
      40
    ],
    "Psychology": [
      42,
      40
    ]
  },
  "Berwick Grammar School, Officer": {
    "Applied Computing: Data Analytics": [
      42
    ],
    "Chemistry": [
      45
    ],
    "English": [
      44,
      41
    ],
    "General Mathematics": [
      40
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Legal Studies": [
      42
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      44,
      43
    ],
    "Psychology": [
      46,
      41,
      41
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Berwick Secondary College": {
    "Business Management": [
      45,
      45
    ],
    "English": [
      48,
      45,
      43,
      42,
      42,
      41
    ],
    "Foundation Mathematics": [
      46,
      45
    ],
    "General Mathematics": [
      44,
      43,
      42,
      42,
      40,
      40,
      40
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      42,
      41,
      40
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Literature": [
      43,
      40
    ],
    "Media": [
      42
    ],
    "Philosophy": [
      43
    ],
    "Physics": [
      43
    ]
  },
  "Beth Rivkah Ladies College, St Kilda East": {
    "Art Creative Practice": [
      42
    ],
    "English": [
      47,
      47,
      46,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "General Mathematics": [
      46
    ],
    "History Revolutions": [
      42
    ],
    "Mathematical Methods": [
      41
    ],
    "Psychology": [
      50,
      49
    ],
    "Religion and Society": [
      50,
      45,
      44,
      43,
      43,
      43,
      42
    ]
  },
  "Bharathi Academy, Dandenong": {
    "Languages:Tamil": [
      49,
      43,
      42,
      42
    ]
  },
  "Bialik College, Hawthorn East": {
    "Accounting": [
      47,
      42
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      45,
      42,
      42,
      41
    ],
    "Business Management": [
      43,
      42,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      49,
      47,
      44,
      43,
      41
    ],
    "Economics": [
      43,
      42,
      41
    ],
    "English": [
      50,
      50,
      46,
      46,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "General Mathematics": [
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Languages:French": [
      45
    ],
    "Languages:Hebrew": [
      46,
      43,
      43,
      40,
      40
    ],
    "Legal Studies": [
      45,
      44,
      43,
      42,
      42
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      48,
      46,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Music Contemporary Performance": [
      43
    ],
    "Physical Education": [
      49,
      49,
      40
    ],
    "Physics": [
      43,
      41
    ],
    "Psychology": [
      48,
      47,
      43
    ],
    "Specialist Mathematics": [
      46,
      42,
      42,
      40
    ]
  },
  "Billanook College Ltd, Mooroolbark": {
    "Art Making and Exhibiting": [
      49,
      43,
      41,
      40
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      49
    ],
    "Chemistry": [
      43
    ],
    "Economics": [
      40
    ],
    "English": [
      48,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      45,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      45,
      42,
      41
    ],
    "History Revolutions": [
      43,
      43,
      42
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      41,
      40
    ],
    "Music Contemporary Performance": [
      44,
      43
    ],
    "Music Performance (VCE VET)": [
      46,
      42,
      40
    ],
    "Outdoor and Environmental Studies": [
      50,
      43
    ],
    "Philosophy": [
      42
    ],
    "Physical Education": [
      48,
      45,
      41,
      40
    ],
    "Physics": [
      48,
      40
    ],
    "Product Design and Technologies": [
      42
    ],
    "Theatre Studies": [
      47,
      40
    ]
  },
  "Birchip P-12 School": {
    "Art Making and Exhibiting": [
      43
    ],
    "Australian History": [
      41
    ],
    "Hospitality (Cookery)(VCE VET)": [
      41
    ]
  },
  "Blackburn High School": {
    "Art Making and Exhibiting": [
      41,
      40
    ],
    "Biology": [
      46,
      42,
      42,
      40,
      40
    ],
    "Business Management": [
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      45,
      43,
      40
    ],
    "Engineering Studies (VCE VET)": [
      44
    ],
    "English": [
      42,
      42,
      41,
      41,
      41
    ],
    "English Language": [
      43
    ],
    "General Mathematics": [
      46,
      46,
      45,
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      43,
      42
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      42,
      41,
      41,
      40
    ],
    "Music Contemporary Performance": [
      40,
      40
    ],
    "Philosophy": [
      42,
      41,
      41
    ],
    "Physical Education": [
      43,
      43,
      42,
      40
    ],
    "Physics": [
      44,
      40
    ],
    "Psychology": [
      49,
      46,
      40
    ],
    "Systems Engineering": [
      40,
      40
    ],
    "Visual Communication Design": [
      49,
      44,
      40
    ]
  },
  "Boort District P-12 School": {
    "Outdoor and Environmental Studies": [
      40
    ]
  },
  "Boronia K-12 College": {
    "English": [
      44,
      40
    ],
    "Food Studies": [
      45
    ]
  },
  "Box Hill Chinese Language School, Mont Albert North": {
    "Languages:Chinese First Language": [
      40
    ]
  },
  "Box Hill High School": {
    "Accounting": [
      41,
      40
    ],
    "Art Making and Exhibiting": [
      48,
      41
    ],
    "Biology": [
      49,
      48,
      44,
      43,
      43,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      42,
      41,
      40
    ],
    "Chemistry": [
      43,
      42,
      41,
      40,
      40
    ],
    "Economics": [
      44
    ],
    "English": [
      48,
      47,
      45,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      43,
      43,
      42,
      41,
      41,
      41
    ],
    "English as an Additional Language": [
      43,
      41,
      40
    ],
    "General Mathematics": [
      48,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      47
    ],
    "Languages:Chinese First Language": [
      40
    ],
    "Languages:German": [
      45
    ],
    "Legal Studies": [
      48,
      45,
      45,
      42,
      41,
      40
    ],
    "Literature": [
      43
    ],
    "Mathematical Methods": [
      50,
      46,
      46,
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Media": [
      47,
      46,
      44,
      40
    ],
    "Physical Education": [
      47,
      42
    ],
    "Physics": [
      46,
      44,
      44,
      42,
      40,
      40
    ],
    "Psychology": [
      50,
      47,
      46,
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      47,
      40,
      40
    ],
    "Visual Communication Design": [
      50,
      47,
      45,
      43,
      41,
      40
    ]
  },
  "Box Hill Institute - CAE campus, Melbourne": {
    "Chemistry": [
      41
    ],
    "General Mathematics": [
      40
    ],
    "Legal Studies": [
      44
    ]
  },
  "Box Hill Senior Secondary College, Mont Albert North": {
    "Sport and Recreation (VCE VET)": [
      43
    ]
  },
  "Braemar College, Woodend": {
    "Business Management": [
      49,
      41
    ],
    "Chemistry": [
      43
    ],
    "English": [
      46,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      43,
      42
    ],
    "Foundation Mathematics": [
      41
    ],
    "General Mathematics": [
      43
    ],
    "Health and Human Development": [
      40
    ],
    "Languages:French": [
      45
    ],
    "Legal Studies": [
      48,
      40,
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      42,
      40
    ],
    "Media": [
      41
    ],
    "Outdoor and Environmental Studies": [
      41
    ],
    "Philosophy": [
      43
    ],
    "Physics": [
      46
    ],
    "Politics": [
      40
    ],
    "Psychology": [
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Brauer College, Warrnambool": {
    "Business Management": [
      40
    ],
    "Chemistry": [
      41
    ],
    "Drama": [
      40
    ],
    "English": [
      43,
      42,
      41
    ],
    "General Mathematics": [
      45
    ],
    "Health and Human Development": [
      45,
      43,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      43
    ],
    "Outdoor and Environmental Studies": [
      44,
      42,
      41
    ],
    "Physics": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      41
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Braybrook College": {
    "Biology": [
      43,
      42
    ],
    "Business Management": [
      50,
      44,
      42,
      42
    ],
    "Community Services (VCE VET)": [
      40
    ],
    "English": [
      48,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      41,
      41,
      40,
      40
    ],
    "Foundation Mathematics": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      45,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Languages:Vietnamese First Language": [
      50,
      45,
      43,
      42,
      40
    ],
    "Languages:Vietnamese Second Language": [
      44,
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      44,
      42,
      42
    ],
    "Physics": [
      43,
      42
    ],
    "Psychology": [
      44,
      44,
      44,
      43,
      41,
      41,
      40,
      40,
      40
    ],
    "Theatre Studies": [
      41,
      40
    ]
  },
  "Brentwood Secondary College, Glen Waverley": {
    "Accounting": [
      40
    ],
    "Art Making and Exhibiting": [
      42
    ],
    "Biology": [
      47,
      44,
      44,
      43,
      40
    ],
    "Business Management": [
      50,
      46,
      43
    ],
    "Chemistry": [
      43,
      42,
      40,
      40,
      40
    ],
    "Economics": [
      42,
      40,
      40
    ],
    "English": [
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      44,
      42,
      40,
      40
    ],
    "General Mathematics": [
      47,
      45,
      44,
      43,
      42,
      42,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      42,
      41,
      40
    ],
    "Languages:Japanese Second Language": [
      49,
      49,
      41,
      40
    ],
    "Legal Studies": [
      47,
      43,
      40
    ],
    "Literature": [
      46,
      44,
      43
    ],
    "Mathematical Methods": [
      43,
      42,
      40
    ],
    "Media": [
      49,
      42
    ],
    "Music Repertoire Performance": [
      43
    ],
    "Physical Education": [
      44,
      41
    ],
    "Physics": [
      43,
      41,
      40
    ],
    "Psychology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ],
    "Theatre Studies": [
      43
    ]
  },
  "Bright P-12 College": {
    "English": [
      40
    ],
    "Languages: Aboriginal Languages of Victoria": [
      41,
      40,
      40
    ],
    "Physical Education": [
      40
    ]
  },
  "Brighton Grammar School": {
    "Accounting": [
      44,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Biology": [
      47,
      42,
      42,
      41,
      41,
      40
    ],
    "Business Management": [
      45,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      50,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Economics": [
      43,
      41,
      41,
      41,
      40,
      40
    ],
    "Engineering Studies (VCE VET)": [
      42
    ],
    "English": [
      50,
      48,
      48,
      47,
      46,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      44,
      44,
      43,
      41,
      40
    ],
    "General Mathematics": [
      50,
      46,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      44,
      43,
      41,
      40
    ],
    "Health and Human Development": [
      42,
      42,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      43,
      41,
      40
    ],
    "Languages:French": [
      42
    ],
    "Legal Studies": [
      40
    ],
    "Literature": [
      50
    ],
    "Mathematical Methods": [
      49,
      47,
      45,
      45,
      43,
      41,
      40,
      40
    ],
    "Media": [
      43,
      41
    ],
    "Physical Education": [
      49,
      48,
      46,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      47,
      46,
      46,
      45,
      44,
      43,
      40,
      40
    ],
    "Psychology": [
      50,
      43,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      49,
      47,
      46,
      40
    ],
    "Visual Communication Design": [
      43,
      42,
      40,
      40
    ]
  },
  "Brighton Secondary College, Brighton East": {
    "Biology": [
      50
    ],
    "Business Management": [
      42,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      46
    ],
    "Economics": [
      43,
      42,
      40
    ],
    "English": [
      43,
      42,
      42
    ],
    "English as an Additional Language": [
      47,
      40
    ],
    "General Mathematics": [
      44,
      43,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      50,
      43,
      42,
      42,
      41
    ],
    "Media": [
      40
    ],
    "Physics": [
      41
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      47,
      42,
      41,
      40,
      40
    ]
  },
  "Broadford Secondary College": {
    "Food Studies": [
      41,
      40
    ]
  },
  "Brunswick Secondary College": {
    "Accounting": [
      48
    ],
    "Art Making and Exhibiting": [
      43,
      41,
      40
    ],
    "Biology": [
      42,
      41,
      40
    ],
    "Food Studies": [
      46,
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      49,
      45,
      42,
      42,
      40
    ],
    "Geography": [
      41,
      40
    ],
    "Health and Human Development": [
      46,
      40,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      48,
      43,
      41,
      41,
      40
    ],
    "Literature": [
      42,
      40,
      40
    ],
    "Mathematical Methods": [
      40,
      40,
      40,
      40
    ],
    "Media": [
      44,
      42,
      41
    ],
    "Outdoor and Environmental Studies": [
      41
    ],
    "Psychology": [
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Buckley Park College, Essendon": {
    "Accounting": [
      40
    ],
    "Art Making and Exhibiting": [
      44
    ],
    "Business Management": [
      43
    ],
    "Economics": [
      41
    ],
    "English": [
      46,
      41,
      40,
      40
    ],
    "General Mathematics": [
      44,
      42,
      42,
      41
    ],
    "Health and Human Development": [
      44,
      44,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Languages:Japanese Second Language": [
      44
    ],
    "Legal Studies": [
      41,
      41,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      43,
      41,
      41,
      40
    ],
    "Physical Education": [
      42,
      41
    ],
    "Physics": [
      43,
      41,
      40
    ],
    "Psychology": [
      44,
      41,
      40
    ]
  },
  "Camberwell Anglican Girls Grammar School, Canterbury": {
    "Accounting": [
      44,
      43,
      41,
      40
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      49,
      48,
      48,
      47,
      46,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      45,
      44,
      43,
      43,
      43,
      42,
      40
    ],
    "Chemistry": [
      44,
      44,
      43,
      43,
      41,
      41,
      40
    ],
    "English": [
      46,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      50,
      46,
      44,
      44,
      43,
      42,
      40,
      40
    ],
    "English as an Additional Language": [
      47
    ],
    "Food Studies": [
      42,
      42,
      40
    ],
    "General Mathematics": [
      50,
      44,
      43,
      43,
      43,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      44,
      43
    ],
    "Languages:Chinese First Language": [
      44,
      44
    ],
    "Languages:Chinese Second Language": [
      41
    ],
    "Languages:French": [
      42,
      41,
      40,
      40
    ],
    "Legal Studies": [
      50,
      41,
      41,
      40
    ],
    "Literature": [
      44,
      42,
      42,
      41
    ],
    "Mathematical Methods": [
      48,
      43,
      40,
      40
    ],
    "Music Repertoire Performance": [
      41
    ],
    "Physical Education": [
      47,
      44,
      41,
      41,
      40
    ],
    "Physics": [
      42,
      42,
      41
    ],
    "Psychology": [
      48,
      46,
      45,
      44,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      41,
      40
    ],
    "Theatre Studies": [
      41
    ],
    "Visual Communication Design": [
      48,
      40
    ]
  },
  "Camberwell Grammar School, Canterbury": {
    "Accounting": [
      50,
      46,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "Applied Computing: Software Development": [
      44,
      43,
      42,
      42,
      41,
      40
    ],
    "Art Creative Practice": [
      42
    ],
    "Biology": [
      50,
      48,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Chemistry": [
      50,
      50,
      48,
      48,
      46,
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English": [
      50,
      49,
      48,
      48,
      47,
      46,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      49,
      46,
      44,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      40,
      40
    ],
    "General Mathematics": [
      50,
      48,
      46,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      42
    ],
    "History Revolutions": [
      46,
      44,
      42
    ],
    "Languages:French": [
      46,
      44,
      40
    ],
    "Languages:Latin": [
      41,
      40
    ],
    "Legal Studies": [
      40,
      40,
      40
    ],
    "Literature": [
      45,
      41
    ],
    "Mathematical Methods": [
      49,
      49,
      48,
      48,
      47,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Music Repertoire Performance": [
      47,
      41,
      40,
      40
    ],
    "Physical Education": [
      50,
      50,
      46,
      43,
      41,
      40,
      40
    ],
    "Physics": [
      49,
      47,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      48,
      47,
      45,
      43,
      43,
      43,
      42,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      42,
      41,
      40
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Camberwell High School, Canterbury": {
    "Applied Computing: Software Development": [
      41,
      40
    ],
    "Art Creative Practice": [
      47,
      41,
      41,
      40
    ],
    "Biology": [
      44,
      43,
      40,
      40
    ],
    "Business Management": [
      48,
      46,
      44,
      43,
      41,
      41,
      40
    ],
    "Chemistry": [
      42
    ],
    "Economics": [
      40
    ],
    "English": [
      41
    ],
    "English Language": [
      41,
      40
    ],
    "English as an Additional Language": [
      45
    ],
    "General Mathematics": [
      48,
      46,
      45,
      44,
      44,
      41
    ],
    "Health and Human Development": [
      45,
      42,
      41,
      41,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Mathematical Methods": [
      48,
      47,
      46,
      42
    ],
    "Media": [
      40
    ],
    "Physical Education": [
      42,
      42,
      41
    ],
    "Physics": [
      49,
      46,
      43,
      41
    ],
    "Psychology": [
      41,
      41,
      41,
      40
    ],
    "Specialist Mathematics": [
      43
    ],
    "Visual Communication Design": [
      42,
      41,
      40
    ]
  },
  "Canterbury Girls Secondary College": {
    "Art Making and Exhibiting": [
      44,
      43,
      42
    ],
    "Biology": [
      48,
      46,
      45,
      43,
      41,
      41,
      40
    ],
    "Business Management": [
      42,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      45,
      43,
      40
    ],
    "Economics": [
      41
    ],
    "English": [
      43,
      42,
      41,
      41,
      41
    ],
    "English Language": [
      45,
      44
    ],
    "Food Studies": [
      41,
      41
    ],
    "General Mathematics": [
      46,
      44,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      43,
      42,
      40,
      40
    ],
    "Legal Studies": [
      41,
      41,
      40
    ],
    "Literature": [
      40
    ],
    "Philosophy": [
      41,
      40
    ],
    "Physical Education": [
      46,
      44,
      41
    ],
    "Psychology": [
      48,
      41,
      41
    ],
    "Specialist Mathematics": [
      41
    ]
  },
  "Carey Baptist Grammar School, Kew": {
    "Accounting": [
      44,
      43,
      42
    ],
    "Art Creative Practice": [
      49,
      46,
      44
    ],
    "Australian History": [
      44,
      40,
      40
    ],
    "Biology": [
      44,
      43,
      40,
      40
    ],
    "Business Management": [
      50,
      47,
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      49,
      46,
      43,
      42,
      41,
      40
    ],
    "Dance (VCE VET)": [
      45
    ],
    "Economics": [
      41
    ],
    "English": [
      50,
      46,
      45,
      45,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "English Language": [
      40
    ],
    "English as an Additional Language": [
      48,
      45,
      44,
      43
    ],
    "General Mathematics": [
      48,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      44,
      42
    ],
    "Health and Human Development": [
      49,
      48,
      45,
      45,
      43,
      41,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Languages:French": [
      40
    ],
    "Legal Studies": [
      47,
      47,
      45,
      43,
      43,
      41
    ],
    "Literature": [
      44
    ],
    "Mathematical Methods": [
      49,
      44,
      44,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Media": [
      50,
      44,
      41
    ],
    "Physical Education": [
      46,
      43,
      42,
      41,
      40
    ],
    "Physics": [
      45,
      45,
      43
    ],
    "Product Design and Technologies": [
      49,
      41
    ],
    "Psychology": [
      49,
      47,
      46,
      46,
      45,
      42,
      41,
      41,
      41,
      40
    ],
    "Specialist Mathematics": [
      50,
      48,
      41,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ],
    "Theatre Studies": [
      43
    ],
    "Visual Communication Design": [
      43,
      43,
      42
    ]
  },
  "Caroline Chisholm Catholic College, Braybrook": {
    "Accounting": [
      40
    ],
    "Art Making and Exhibiting": [
      44
    ],
    "Business Management": [
      42,
      42,
      41,
      40
    ],
    "Chemistry": [
      42,
      41
    ],
    "English": [
      46,
      46,
      45,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      43,
      43,
      43,
      41,
      41,
      41,
      40,
      40
    ],
    "Health Services": [
      41,
      40
    ],
    "Health and Human Development": [
      43
    ],
    "Laboratory Skills (VCE VET)": [
      43,
      42,
      41
    ],
    "Legal Studies": [
      45,
      45,
      44,
      40
    ],
    "Literature": [
      42
    ],
    "Mathematical Methods": [
      48
    ],
    "Music Performance (VCE VET)": [
      43,
      42
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      43,
      43
    ],
    "Sport and Recreation (VCE VET)": [
      43
    ],
    "Systems Engineering": [
      49
    ],
    "Visual Communication Design": [
      46,
      43,
      42
    ]
  },
  "Carrum Downs Secondary College": {
    "English": [
      46
    ],
    "English as an Additional Language": [
      43
    ],
    "General Mathematics": [
      44,
      43
    ]
  },
  "Carwatha College P-12, Noble Park North": {
    "Business Management": [
      44,
      43
    ],
    "English": [
      44
    ],
    "English as an Additional Language": [
      43
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      40
    ],
    "Outdoor and Environmental Studies": [
      40,
      40
    ]
  },
  "Casey Grammar School, Cranbourne": {
    "Biology": [
      46,
      41
    ],
    "Business Management": [
      41
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      49,
      45,
      42
    ],
    "Health and Human Development": [
      50,
      41
    ],
    "Industry and Enterprise": [
      45,
      44,
      42,
      41
    ],
    "Mathematical Methods": [
      44
    ],
    "Outdoor and Environmental Studies": [
      48,
      44,
      41,
      40
    ],
    "Physical Education": [
      45
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      42
    ]
  },
  "Castlemaine Secondary College": {
    "Art Making and Exhibiting": [
      46
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      44
    ],
    "Mathematical Methods": [
      40
    ],
    "Music Sound Production (VCE VET)": [
      43
    ]
  },
  "Cathedral College, Wangaratta": {
    "Agricultural and Horticultural Studies": [
      45
    ],
    "Art Creative Practice": [
      50
    ],
    "Biology": [
      40
    ],
    "English": [
      44,
      43,
      42,
      42,
      41
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      41
    ],
    "History Revolutions": [
      43
    ],
    "Literature": [
      42
    ],
    "Outdoor and Environmental Studies": [
      44
    ],
    "Physical Education": [
      42
    ],
    "Psychology": [
      45
    ],
    "Visual Communication Design": [
      50
    ]
  },
  "Catherine McAuley College, Bendigo": {
    "Accounting": [
      43
    ],
    "Art Making and Exhibiting": [
      40
    ],
    "Biology": [
      44,
      43,
      42
    ],
    "Business Management": [
      40
    ],
    "Drama": [
      46,
      40
    ],
    "Engineering Studies (VCE VET)": [
      43
    ],
    "English": [
      48,
      40
    ],
    "Environmental Science": [
      47,
      47,
      45,
      45,
      42
    ],
    "General Mathematics": [
      43,
      42,
      41,
      40
    ],
    "Health Services": [
      42,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      41
    ],
    "Outdoor and Environmental Studies": [
      40,
      40
    ],
    "Physical Education": [
      47,
      45,
      43,
      41
    ],
    "Product Design and Technologies": [
      44
    ],
    "Psychology": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      46,
      44
    ]
  },
  "Catholic College Sale": {
    "Biology": [
      43,
      43,
      41,
      40
    ],
    "English": [
      43,
      40
    ],
    "Food Studies": [
      42
    ],
    "General Mathematics": [
      45,
      40
    ],
    "Health Services": [
      40
    ],
    "Outdoor and Environmental Studies": [
      47,
      41
    ],
    "Physical Education": [
      43,
      43
    ],
    "Psychology": [
      41
    ]
  },
  "Catholic College Wodonga": {
    "Business Management": [
      46
    ],
    "Chemistry": [
      41
    ],
    "English": [
      44,
      43,
      42
    ],
    "English as an Additional Language": [
      45
    ],
    "General Mathematics": [
      44,
      41,
      40
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      43
    ],
    "Specialist Mathematics": [
      40
    ]
  },
  "Catholic Ladies College, Eltham": {
    "Accounting": [
      43
    ],
    "Biology": [
      45,
      45,
      42,
      41,
      41,
      41
    ],
    "Business Management": [
      48,
      46,
      40
    ],
    "Chemistry": [
      43,
      42,
      41
    ],
    "Dance (VCE VET)": [
      46
    ],
    "English": [
      44,
      41,
      40,
      40
    ],
    "Food Studies": [
      46,
      43,
      42,
      40
    ],
    "Foundation Mathematics": [
      41
    ],
    "General Mathematics": [
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      47,
      44,
      43,
      42,
      41,
      41
    ],
    "History Revolutions": [
      44,
      44,
      42,
      40
    ],
    "Legal Studies": [
      43,
      42,
      41,
      40
    ],
    "Literature": [
      41
    ],
    "Media": [
      40,
      40
    ],
    "Music Performance (VCE VET)": [
      43
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      47,
      43,
      42,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      43
    ]
  },
  "Catholic Regional College - Sydenham": {
    "Ancient History": [
      43
    ],
    "Biology": [
      40
    ],
    "Chemistry": [
      40
    ],
    "Drama": [
      41
    ],
    "English": [
      48,
      47,
      44,
      43,
      42,
      42,
      40,
      40,
      40
    ],
    "General Mathematics": [
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      48,
      44,
      44,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Information and Commuications Technology (VCE VET)": [
      42
    ],
    "Mathematical Methods": [
      44,
      41,
      41
    ],
    "Media": [
      42,
      42,
      41,
      40
    ],
    "Music Performance (VCE VET)": [
      49
    ],
    "Outdoor and Environmental Studies": [
      41
    ],
    "Physical Education": [
      43,
      42,
      40
    ],
    "Physics": [
      40
    ],
    "Politics": [
      44
    ],
    "Psychology": [
      43,
      40,
      40
    ],
    "Religion and Society": [
      44,
      42,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40,
      40
    ],
    "Systems Engineering": [
      43
    ]
  },
  "Caulfield Grammar School - Caulfield Campus, St Kilda East": {
    "Accounting": [
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Art Creative Practice": [
      45,
      45,
      44,
      42
    ],
    "Art Making and Exhibiting": [
      45,
      44,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Biology": [
      50,
      45,
      45,
      44,
      44,
      44,
      44,
      42,
      42,
      42,
      40
    ],
    "Business Management": [
      49,
      47,
      47,
      46,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      50,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Dance": [
      45,
      40
    ],
    "Drama": [
      50,
      42,
      40
    ],
    "Economics": [
      48,
      47,
      45,
      45,
      43,
      42,
      42,
      40
    ],
    "English": [
      50,
      50,
      50,
      50,
      49,
      49,
      48,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      43
    ],
    "English as an Additional Language": [
      40
    ],
    "Environmental Science": [
      41,
      41,
      41
    ],
    "General Mathematics": [
      50,
      47,
      47,
      45,
      45,
      44,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Geography": [
      45
    ],
    "Health and Human Development": [
      47,
      47,
      46,
      46,
      46,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      44,
      42,
      42,
      41,
      40,
      40
    ],
    "Languages:Chinese First Language": [
      40
    ],
    "Languages:Chinese Second Language": [
      40
    ],
    "Languages:French": [
      50
    ],
    "Legal Studies": [
      50,
      50,
      48,
      46,
      45,
      43,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "Literature": [
      45,
      44,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      47,
      47,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      50,
      49,
      45,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      41
    ],
    "Music Sound Production (VCE VET)": [
      47
    ],
    "Outdoor and Environmental Studies": [
      45,
      44,
      41,
      40,
      40,
      40
    ],
    "Physical Education": [
      49,
      48,
      47,
      46,
      46,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      48,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Politics": [
      46,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Psychology": [
      47,
      47,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43,
      42,
      42,
      40
    ],
    "Systems Engineering": [
      46,
      44
    ],
    "Theatre Studies": [
      45,
      44,
      42,
      40
    ],
    "Visual Communication Design": [
      47,
      46,
      44,
      43,
      41
    ]
  },
  "Caulfield Grammar School, Wheelers Hill": {
    "Accounting": [
      50,
      50,
      49,
      46,
      46,
      46,
      44,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Applied Computing: Software Development": [
      48,
      41
    ],
    "Art Creative Practice": [
      47,
      45,
      41,
      40,
      40
    ],
    "Biology": [
      46,
      44,
      43,
      43,
      43,
      40
    ],
    "Business Management": [
      47,
      46,
      46,
      45,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      47,
      47,
      42,
      41,
      40,
      40,
      40
    ],
    "Creative and Digital Media (VCE VET)": [
      49
    ],
    "Dance (VCE VET)": [
      43
    ],
    "Economics": [
      47,
      44,
      44,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "English": [
      50,
      50,
      50,
      48,
      47,
      47,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "English as an Additional Language": [
      46,
      42
    ],
    "General Mathematics": [
      50,
      48,
      48,
      48,
      47,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41
    ],
    "Geography": [
      40
    ],
    "History Revolutions": [
      41
    ],
    "Languages:Chinese First Language": [
      42
    ],
    "Languages:Chinese Second Language": [
      45,
      44,
      43
    ],
    "Languages:Chinese Second Language Advanced": [
      45,
      42,
      41
    ],
    "Legal Studies": [
      48,
      47,
      46,
      45,
      45,
      44,
      44,
      42,
      41,
      40
    ],
    "Literature": [
      44,
      42
    ],
    "Mathematical Methods": [
      49,
      48,
      46,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Music Repertoire Performance": [
      43,
      42
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      47,
      47,
      46,
      45,
      45,
      43,
      43,
      40
    ],
    "Politics": [
      49,
      45
    ],
    "Product Design and Technologies": [
      43,
      40,
      40
    ],
    "Psychology": [
      47,
      47,
      44,
      42,
      42,
      41
    ],
    "Specialist Mathematics": [
      44,
      43,
      42,
      41,
      40
    ],
    "Visual Communication Design": [
      46,
      41,
      41,
      41,
      40
    ]
  },
  "Centre for Higher Education Studies, South Yarra": {
    "Algorithmics (HESS)": [
      45,
      42,
      40,
      40
    ],
    "Extended Investigation": [
      44,
      42,
      41
    ],
    "Specialist Mathematics": [
      44,
      41,
      41
    ]
  },
  "Chairo Christian School - Drouin": {
    "English": [
      44,
      41,
      40,
      40
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Geography": [
      48,
      40
    ],
    "Legal Studies": [
      43
    ],
    "Physical Education": [
      41
    ],
    "Politics": [
      43
    ],
    "Psychology": [
      40
    ]
  },
  "Chairo Christian School - Leongatha Campus": {
    "Mathematical Methods": [
      42
    ]
  },
  "Chairo Christian School - Pakenham, Nar Nar Goon": {
    "Outdoor and Environmental Studies": [
      40
    ]
  },
  "Charlton College": {
    "Art Making and Exhibiting": [
      41,
      40
    ],
    "Community Services (VCE VET)": [
      44
    ],
    "Health and Human Development": [
      44,
      41
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      48
    ]
  },
  "Cheltenham Secondary College": {
    "Accounting": [
      40
    ],
    "Biology": [
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      46,
      44,
      44,
      42
    ],
    "Dance (VCE VET)": [
      50
    ],
    "English": [
      45,
      42,
      42
    ],
    "General Mathematics": [
      46,
      43,
      41,
      40
    ],
    "Health and Human Development": [
      46,
      46,
      44,
      41,
      41
    ],
    "Legal Studies": [
      47,
      40,
      40
    ]
  },
  "Cheryl Kaloger Brown School of Dance, Hawthorn East": {
    "Dance": [
      50,
      45
    ]
  },
  "Chinese Culture School - Glen Waverley Campus": {
    "Languages:Chinese Second Language": [
      46,
      43
    ],
    "Languages:Chinese Second Language Advanced": [
      45,
      41
    ]
  },
  "Chinese Culture School - Melbourne High Campus, South Yarra": {
    "Languages:Chinese First Language": [
      47,
      43
    ]
  },
  "Chinese Culture School - Northcote Campus": {
    "Languages:Chinese First Language": [
      44,
      43,
      43,
      43
    ],
    "Languages:Chinese Second Language": [
      41,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      46,
      40
    ]
  },
  "Chinese Culture and Arts School of Melbourne, Collingwood": {
    "Languages:Chinese First Language": [
      44,
      43
    ],
    "Languages:Chinese Second Language Advanced": [
      45
    ]
  },
  "Christian College Geelong, Waurn Ponds": {
    "Accounting": [
      42
    ],
    "Applied Computing: Software Development": [
      42
    ],
    "Biology": [
      49,
      46,
      41
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      41,
      41
    ],
    "English": [
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Foundation Mathematics": [
      41,
      40
    ],
    "General Mathematics": [
      47,
      46,
      44,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      49,
      44,
      43
    ],
    "History Revolutions": [
      49,
      48,
      47,
      44,
      41
    ],
    "Legal Studies": [
      47,
      46
    ],
    "Literature": [
      45,
      41,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      43
    ],
    "Music Contemporary Performance": [
      44,
      42,
      41
    ],
    "Outdoor and Environmental Studies": [
      40,
      40,
      40
    ],
    "Physical Education": [
      43
    ],
    "Psychology": [
      44,
      41
    ],
    "Sociology": [
      50
    ],
    "Visual Communication Design": [
      42,
      40
    ]
  },
  "Christway College, Clarinda": {
    "Applied Computing: Software Development": [
      48,
      42
    ],
    "English": [
      41
    ],
    "General Mathematics": [
      46,
      42,
      40
    ],
    "Languages:French": [
      45
    ]
  },
  "Clonard College, Herne Hill": {
    "Art Creative Practice": [
      44,
      41
    ],
    "Biology": [
      45,
      41
    ],
    "Business Management": [
      41,
      41,
      40
    ],
    "English": [
      41,
      40,
      40
    ],
    "Food Studies": [
      50
    ],
    "General Mathematics": [
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      43,
      42
    ],
    "Literature": [
      40,
      40,
      40
    ],
    "Physical Education": [
      42
    ],
    "Psychology": [
      45,
      42,
      42,
      42,
      40
    ]
  },
  "Clyde Secondary College, Clyde North": {
    "General Mathematics": [
      46,
      44,
      43,
      42,
      42,
      41,
      40,
      40
    ]
  },
  "Cobram Anglican Grammar School": {
    "General Mathematics": [
      41
    ]
  },
  "Coburg High School": {
    "Applied Computing: Software Development": [
      43
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Business Management": [
      41,
      40
    ],
    "Chemistry": [
      43,
      40
    ],
    "English": [
      41
    ],
    "English as an Additional Language": [
      46
    ],
    "Food Studies": [
      45,
      44,
      43
    ],
    "General Mathematics": [
      42,
      41
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      46,
      42,
      40
    ],
    "Legal Studies": [
      40
    ],
    "Mathematical Methods": [
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Media": [
      45,
      41,
      40
    ],
    "Music Contemporary Performance": [
      49
    ],
    "Outdoor and Environmental Studies": [
      43,
      42
    ],
    "Physics": [
      40,
      40
    ],
    "Psychology": [
      50,
      44,
      43
    ],
    "Visual Communication Design": [
      50,
      43,
      41
    ]
  },
  "Colac Secondary College": {
    "Business Management": [
      41
    ],
    "Food Studies": [
      46
    ],
    "Outdoor and Environmental Studies": [
      45
    ]
  },
  "Copperfield College, Delahey": {
    "Business Management": [
      40
    ],
    "English": [
      40,
      40
    ],
    "General Mathematics": [
      46,
      40,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Visual Communication Design": [
      42,
      41
    ]
  },
  "Cornish College, Bangholme": {
    "Biology": [
      41,
      41
    ],
    "Business Management": [
      41,
      40
    ],
    "General Mathematics": [
      45,
      40
    ],
    "History Revolutions": [
      44,
      42
    ],
    "Legal Studies": [
      44
    ],
    "Psychology": [
      47,
      42,
      41,
      41,
      40
    ],
    "Sociology": [
      50,
      44
    ],
    "Theatre Studies": [
      40,
      40
    ]
  },
  "Corryong College": {
    "English": [
      40
    ]
  },
  "Covenant College, Bell Post Hill": {
    "Biology": [
      43
    ],
    "English": [
      44
    ],
    "Media": [
      41
    ],
    "Psychology": [
      47
    ]
  },
  "Craigieburn Secondary College": {
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      40
    ],
    "Legal Studies": [
      42
    ]
  },
  "Cranbourne East Secondary College": {
    "Biology": [
      40,
      40
    ],
    "Business Management": [
      45,
      43,
      41,
      41
    ],
    "Chemistry": [
      41
    ],
    "English": [
      42,
      40
    ],
    "General Mathematics": [
      44,
      44,
      40
    ],
    "Health and Human Development": [
      44,
      42
    ],
    "Mathematical Methods": [
      46,
      40
    ],
    "Physics": [
      44,
      41
    ],
    "Psychology": [
      41
    ],
    "Specialist Mathematics": [
      41
    ]
  },
  "Cranbourne Secondary College": {
    "English": [
      40
    ],
    "General Mathematics": [
      43
    ]
  },
  "Cranbourne West Secondary College": {
    "Applied Computing: Data Analytics": [
      41,
      41
    ],
    "Business Management": [
      46,
      43,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      47,
      46,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      46,
      45,
      43,
      43,
      42,
      42,
      42,
      40
    ],
    "Psychology": [
      49,
      45,
      44,
      44,
      44,
      44,
      43,
      41,
      41
    ]
  },
  "Damascus College, Mount Clear": {
    "Art Creative Practice": [
      40
    ],
    "Chemistry": [
      42
    ],
    "Community Services (VCE VET)": [
      49,
      43
    ],
    "Drama": [
      46
    ],
    "English": [
      50,
      44,
      44,
      43,
      41,
      40
    ],
    "Health and Human Development": [
      44,
      44,
      41,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Literature": [
      41,
      41
    ],
    "Media": [
      44,
      40
    ],
    "Religion and Society": [
      43
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "Dandenong High School": {
    "Business Management": [
      41
    ],
    "Health and Human Development": [
      40
    ],
    "Psychology": [
      42
    ]
  },
  "Darul Ulum College of Victoria, Fawkner": {
    "Biology": [
      44
    ],
    "Business Management": [
      43,
      40,
      40
    ],
    "English": [
      44,
      43,
      41,
      40,
      40
    ],
    "Foundation Mathematics": [
      45,
      41,
      41
    ],
    "General Mathematics": [
      45,
      40,
      40
    ],
    "Languages:Arabic": [
      40
    ],
    "Psychology": [
      41
    ],
    "Texts and Traditions": [
      42,
      41,
      40,
      40
    ]
  },
  "Daylesford Secondary College": {
    "Languages:Italian": [
      40
    ],
    "Legal Studies": [
      40
    ],
    "Literature": [
      48,
      43,
      41
    ],
    "Music Contemporary Performance": [
      46
    ],
    "Psychology": [
      41
    ],
    "Systems Engineering": [
      45
    ]
  },
  "De La Salle College, Malvern": {
    "Art Making and Exhibiting": [
      47,
      44
    ],
    "Business Management": [
      50,
      44,
      44,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      43
    ],
    "Drama": [
      42
    ],
    "Economics": [
      45
    ],
    "English": [
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      42,
      41,
      40
    ],
    "Geography": [
      44,
      43,
      42
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "Legal Studies": [
      50,
      43,
      42
    ],
    "Literature": [
      42,
      40
    ],
    "Mathematical Methods": [
      50
    ],
    "Media": [
      43,
      42,
      40
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      50
    ],
    "Politics": [
      41
    ],
    "Product Design and Technologies": [
      41
    ],
    "Specialist Mathematics": [
      45
    ]
  },
  "Derrinallum P12 College": {
    "Sociology": [
      41
    ]
  },
  "Diamond Valley College, Diamond Creek": {
    "Business Management": [
      42
    ],
    "English": [
      42
    ]
  },
  "Doncaster Secondary College": {
    "Accounting": [
      49,
      44,
      43
    ],
    "Ancient History": [
      48,
      41
    ],
    "Art Making and Exhibiting": [
      40
    ],
    "Biology": [
      44,
      43,
      41,
      41
    ],
    "Business Management": [
      43
    ],
    "Chemistry": [
      48,
      44,
      43,
      43,
      42
    ],
    "English": [
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      40
    ],
    "English as an Additional Language": [
      43,
      42,
      42
    ],
    "General Mathematics": [
      46,
      46,
      43,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Literature": [
      41,
      40
    ],
    "Mathematical Methods": [
      43,
      42
    ],
    "Physical Education": [
      45,
      41,
      41
    ],
    "Physics": [
      43,
      43,
      40
    ],
    "Psychology": [
      41,
      40
    ],
    "Sociology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      45
    ]
  },
  "Donvale Christian College": {
    "Accounting": [
      45
    ],
    "Art Making and Exhibiting": [
      40
    ],
    "Biology": [
      44,
      41,
      40
    ],
    "Business Management": [
      47,
      43,
      42,
      42
    ],
    "Chemistry": [
      47,
      45,
      44,
      41,
      40
    ],
    "English": [
      47,
      46,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Equine Studies (VCE VET)": [
      47
    ],
    "General Mathematics": [
      45,
      44,
      43,
      42
    ],
    "Health and Human Development": [
      47,
      44,
      41
    ],
    "Languages:German": [
      40
    ],
    "Literature": [
      42,
      40
    ],
    "Mathematical Methods": [
      44,
      42,
      42,
      41,
      40,
      40
    ],
    "Media": [
      48,
      42
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      45,
      43,
      40,
      40
    ],
    "Psychology": [
      46,
      44,
      41,
      41,
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      46,
      41
    ]
  },
  "Dromana Secondary College": {
    "Biology": [
      50,
      48,
      42,
      42,
      41
    ],
    "Business Management": [
      45,
      44,
      40
    ],
    "Chemistry": [
      41
    ],
    "English": [
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      41,
      40,
      40
    ],
    "Foundation Mathematics": [
      45,
      42
    ],
    "General Mathematics": [
      48,
      47,
      47,
      46,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      41,
      40
    ],
    "Languages:Indonesian Second Language": [
      48,
      47,
      41
    ],
    "Legal Studies": [
      46,
      42
    ],
    "Mathematical Methods": [
      40
    ],
    "Outdoor and Environmental Studies": [
      42,
      41,
      40,
      40,
      40
    ],
    "Physical Education": [
      42
    ],
    "Physics": [
      44
    ],
    "Systems Engineering": [
      40
    ],
    "Visual Communication Design": [
      45,
      42,
      41
    ]
  },
  "Drouin Secondary College": {
    "English": [
      50,
      43,
      40
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      45
    ],
    "Health and Human Development": [
      50
    ],
    "Product Design and Technologies": [
      43
    ],
    "Psychology": [
      46,
      43
    ]
  },
  "East Doncaster Secondary College, Doncaster East": {
    "Accounting": [
      47
    ],
    "Biology": [
      47,
      47,
      46,
      45,
      40,
      40
    ],
    "Business Management": [
      47,
      46,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      41,
      40
    ],
    "Chemistry": [
      46,
      42,
      41,
      40
    ],
    "Classical Studies": [
      46,
      42
    ],
    "Economics": [
      41
    ],
    "English": [
      46,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      46,
      44,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      41
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      50,
      50,
      50,
      48,
      46,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      48,
      46,
      44,
      44,
      43,
      41,
      41,
      41,
      40
    ],
    "History Revolutions": [
      42,
      42
    ],
    "Languages:Chinese First Language": [
      50,
      48,
      47,
      43,
      41,
      41
    ],
    "Languages:Italian": [
      40
    ],
    "Legal Studies": [
      50,
      40
    ],
    "Mathematical Methods": [
      48,
      42,
      41,
      40
    ],
    "Media": [
      44,
      43
    ],
    "Physical Education": [
      46,
      45
    ],
    "Physics": [
      45,
      41,
      41,
      40,
      40
    ],
    "Psychology": [
      50,
      45,
      45,
      45,
      44,
      43,
      40
    ],
    "Specialist Mathematics": [
      42,
      41
    ],
    "Systems Engineering": [
      42
    ],
    "Visual Communication Design": [
      40,
      40
    ]
  },
  "East Loddon P-12 College, Dingee": {
    "Agricultural and Horticultural Studies": [
      40
    ],
    "Outdoor and Environmental Studies": [
      50
    ],
    "Psychology": [
      46
    ]
  },
  "East Preston Islamic College": {
    "Foundation Mathematics": [
      40
    ]
  },
  "Echuca College": {
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      41
    ]
  },
  "Edenbrook Secondary College, Pakenham": {
    "Psychology": [
      40,
      40
    ]
  },
  "Edgars Creek Secondary College, Wollert": {
    "Business Management": [
      40
    ],
    "General Mathematics": [
      44,
      42,
      40
    ],
    "Mathematical Methods": [
      42
    ],
    "Sociology": [
      41,
      41,
      40
    ]
  },
  "Edinburgh College, Lilydale": {
    "Biology": [
      44
    ]
  },
  "Elevation Secondary College, Craigieburn": {
    "General Mathematics": [
      42
    ],
    "Legal Studies": [
      44
    ]
  },
  "Elisabeth Murdoch College, Langwarrin": {
    "Chemistry": [
      46
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      49,
      44,
      42,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      43,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Media": [
      40
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      49,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      41,
      40,
      40
    ]
  },
  "Eltham College, Research": {
    "Applied Computing: Data Analytics": [
      46,
      45,
      43,
      42,
      40
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      40,
      40
    ],
    "English": [
      46,
      42
    ],
    "English as an Additional Language": [
      40
    ],
    "General Mathematics": [
      43,
      42,
      42,
      42,
      41
    ],
    "Health and Human Development": [
      42,
      42,
      41,
      41,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      50,
      41
    ],
    "Media": [
      46
    ],
    "Physical Education": [
      50,
      42,
      40
    ],
    "Physics": [
      43,
      41,
      41,
      40,
      40
    ],
    "Psychology": [
      42,
      42,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      44,
      42
    ],
    "Visual Communication Design": [
      48
    ]
  },
  "Eltham High School": {
    "Art Making and Exhibiting": [
      46
    ],
    "Biology": [
      45,
      41
    ],
    "Business Management": [
      44,
      42
    ],
    "Chemistry": [
      50
    ],
    "English": [
      42,
      41
    ],
    "Extended Investigation": [
      43,
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      42,
      42,
      42,
      40,
      40,
      40
    ],
    "Geography": [
      44,
      43
    ],
    "Health and Human Development": [
      43,
      41
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Languages:Indonesian Second Language": [
      41
    ],
    "Legal Studies": [
      50,
      48,
      45,
      40,
      40,
      40
    ],
    "Literature": [
      47,
      46,
      45,
      43,
      42,
      41,
      41
    ],
    "Media": [
      47,
      43,
      42,
      41,
      41,
      40
    ],
    "Philosophy": [
      40
    ],
    "Physical Education": [
      44
    ],
    "Politics": [
      41
    ],
    "Psychology": [
      45,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ]
  },
  "Elwood College": {
    "Drama": [
      40
    ],
    "Food Studies": [
      46,
      43,
      40,
      40
    ],
    "General Mathematics": [
      47
    ],
    "Geography": [
      46,
      41
    ],
    "Mathematical Methods": [
      41,
      40
    ],
    "Media": [
      42,
      41
    ],
    "Psychology": [
      41
    ],
    "Specialist Mathematics": [
      46
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Emmanuel College Warrnambool": {
    "Ancient History": [
      42,
      40
    ],
    "Biology": [
      41,
      41
    ],
    "Business Management": [
      42,
      41
    ],
    "Chemistry": [
      42,
      41
    ],
    "English": [
      50,
      48,
      48,
      46,
      46,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Food Studies": [
      43
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      46,
      44,
      42,
      42,
      41
    ],
    "Outdoor and Environmental Studies": [
      47,
      42
    ],
    "Physical Education": [
      44,
      43,
      42,
      41,
      40
    ],
    "Psychology": [
      43,
      42,
      40,
      40
    ]
  },
  "Emmanuel College, Altona North": {
    "Accounting": [
      43,
      41,
      40
    ],
    "Applied Computing: Software Development": [
      44
    ],
    "Chemistry": [
      44,
      40
    ],
    "English": [
      40,
      40
    ],
    "Foundation Mathematics": [
      43,
      41
    ],
    "General Mathematics": [
      45,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Legal Studies": [
      41
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      43,
      41,
      40
    ],
    "Music Performance (VCE VET)": [
      50,
      50,
      42
    ],
    "Physical Education": [
      40,
      40
    ],
    "Physics": [
      42,
      40,
      40
    ],
    "Psychology": [
      40
    ],
    "Religion and Society": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      49,
      46,
      45,
      45,
      42,
      41,
      40
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Emmaus College, Vermont South": {
    "Applied Computing: Data Analytics": [
      45
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      50,
      47,
      46,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      41
    ],
    "Engineering Studies (VCE VET)": [
      43
    ],
    "English": [
      46,
      44,
      43,
      43,
      41,
      41,
      40
    ],
    "English Language": [
      41
    ],
    "English as an Additional Language": [
      41
    ],
    "Food Studies": [
      50,
      40
    ],
    "General Mathematics": [
      50,
      50,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      46,
      44,
      44,
      43,
      41,
      41,
      41,
      41,
      40
    ],
    "Mathematical Methods": [
      45
    ],
    "Media": [
      40
    ],
    "Music Contemporary Performance": [
      41,
      41
    ],
    "Physical Education": [
      50,
      49,
      46,
      43,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "Psychology": [
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43
    ],
    "Visual Communication Design": [
      43,
      42,
      40
    ]
  },
  "Epping Secondary College": {
    "Biology": [
      50
    ],
    "Business Management": [
      50,
      45
    ],
    "English": [
      40,
      40
    ],
    "General Mathematics": [
      40,
      40
    ],
    "Psychology": [
      43
    ],
    "Sociology": [
      41
    ]
  },
  "Essendon Keilor College": {
    "Art Making and Exhibiting": [
      40
    ],
    "Business Management": [
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "Food Studies": [
      45
    ],
    "Languages:Vietnamese First Language": [
      42,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "F.C.J. College, Benalla": {
    "Food Studies": [
      46
    ]
  },
  "Fairhills High School, Knoxfield": {
    "Biology": [
      40
    ],
    "English": [
      43,
      41
    ]
  },
  "Fintona Girls' School, Balwyn": {
    "Accounting": [
      45,
      41,
      41,
      40
    ],
    "Art Creative Practice": [
      41,
      41
    ],
    "Biology": [
      49,
      48,
      44,
      42,
      42,
      42,
      40,
      40,
      40
    ],
    "Chemistry": [
      48,
      42,
      40,
      40
    ],
    "Economics": [
      45
    ],
    "English": [
      44,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      40
    ],
    "Geography": [
      46,
      40
    ],
    "Health and Human Development": [
      44,
      43
    ],
    "History Revolutions": [
      43,
      42,
      40
    ],
    "Languages:French": [
      43,
      41
    ],
    "Languages:Japanese Second Language": [
      42
    ],
    "Languages:Latin": [
      42
    ],
    "Legal Studies": [
      48,
      41,
      41
    ],
    "Mathematical Methods": [
      50,
      45,
      44,
      41
    ],
    "Physics": [
      41
    ],
    "Politics": [
      47,
      43
    ],
    "Psychology": [
      48,
      42,
      40
    ],
    "Specialist Mathematics": [
      40
    ],
    "Theatre Studies": [
      40
    ],
    "Visual Communication Design": [
      45
    ]
  },
  "Firbank Grammar - Lianyungang Foreign Language School, Lianyungang, Jiangsu": {
    "Languages:Chinese First Language": [
      48,
      45,
      43,
      40
    ]
  },
  "Firbank Grammar - Qidong Qidi Foreign Language School, Nantong, Jiangsu P.R": {
    "Languages:Chinese First Language": [
      42
    ]
  },
  "Firbank Grammar - Shanghai Tianhua College High School": {
    "General Mathematics": [
      46,
      41
    ],
    "Mathematical Methods": [
      40
    ]
  },
  "Firbank Grammar - Suzhou Int. Foreign Language School": {
    "General Mathematics": [
      47,
      41,
      41
    ],
    "Languages:Chinese First Language": [
      42
    ]
  },
  "Firbank Grammar School, Brighton": {
    "Applied Computing: Software Development": [
      48,
      45,
      41,
      41,
      40
    ],
    "Art Creative Practice": [
      46,
      40
    ],
    "Biology": [
      49,
      48,
      46,
      44,
      43,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      48,
      48,
      48,
      44,
      41,
      40
    ],
    "Chemistry": [
      50,
      45,
      40
    ],
    "Dance": [
      44,
      43,
      42
    ],
    "Economics": [
      46
    ],
    "English": [
      50,
      47,
      45,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      50,
      43,
      43,
      43,
      42
    ],
    "Geography": [
      44
    ],
    "Health and Human Development": [
      50,
      50,
      50,
      50,
      48,
      48,
      48,
      48,
      47,
      47,
      46,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      46,
      44,
      42
    ],
    "Languages:Chinese First Language": [
      46,
      45,
      40
    ],
    "Languages:Chinese Second Language": [
      42,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      46,
      44,
      40
    ],
    "Languages:French": [
      41
    ],
    "Languages:German": [
      44
    ],
    "Legal Studies": [
      48,
      45,
      44,
      43,
      41,
      40
    ],
    "Literature": [
      42,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      44,
      43,
      40,
      40
    ],
    "Physical Education": [
      45,
      44,
      44,
      43,
      43,
      41
    ],
    "Physics": [
      47,
      40
    ],
    "Psychology": [
      49,
      48,
      46,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      44
    ],
    "Theatre Studies": [
      47
    ],
    "Visual Communication Design": [
      49
    ]
  },
  "Fitzroy High School - Wurun Senior Campus, Fitzroy North": {
    "Art Making and Exhibiting": [
      40
    ],
    "Biology": [
      43,
      43
    ],
    "Business Management": [
      40,
      40
    ],
    "Chemistry": [
      40
    ],
    "English": [
      40,
      40
    ],
    "English Language": [
      48
    ],
    "Environmental Science": [
      42,
      41
    ],
    "Extended Investigation": [
      46
    ],
    "Health and Human Development": [
      42
    ],
    "History Revolutions": [
      45
    ],
    "Mathematical Methods": [
      41
    ],
    "Media": [
      40,
      40
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      42
    ],
    "Sociology": [
      43,
      42,
      42,
      42,
      42,
      41
    ]
  },
  "Flinders Christian Community College - Carrum Downs Campus": {
    "Business Management": [
      41
    ],
    "Chemistry": [
      40
    ],
    "Dance (VCE VET)": [
      40
    ],
    "English": [
      44,
      43,
      41
    ],
    "Food Studies": [
      40
    ],
    "Health and Human Development": [
      45,
      43
    ],
    "Physical Education": [
      42
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      48,
      43,
      42,
      40
    ]
  },
  "Flinders Christian Community College, Tyabb": {
    "Biology": [
      40
    ],
    "Business Management": [
      48
    ],
    "Foundation Mathematics": [
      44,
      40
    ],
    "General Mathematics": [
      43
    ],
    "Philosophy": [
      45
    ],
    "Psychology": [
      40
    ]
  },
  "Footscray High School": {
    "Applied Computing: Software Development": [
      40,
      40
    ],
    "Art Creative Practice": [
      43
    ],
    "Biology": [
      41,
      40
    ],
    "Business Management": [
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      45,
      43
    ],
    "Economics": [
      46
    ],
    "English": [
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Environmental Science": [
      43,
      41
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      43,
      41,
      41
    ],
    "History Revolutions": [
      42
    ],
    "Legal Studies": [
      47,
      44,
      42,
      41
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      46,
      42
    ],
    "Media": [
      40
    ],
    "Physical Education": [
      43
    ],
    "Physics": [
      48,
      44
    ],
    "Politics": [
      43,
      43,
      40
    ],
    "Psychology": [
      50,
      45,
      44,
      44,
      41
    ],
    "Specialist Mathematics": [
      44
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Forest Hill College, Burwood East": {
    "Business Management": [
      45
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      47,
      41,
      41,
      41
    ],
    "Media": [
      40
    ],
    "Psychology": [
      50,
      44
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Foster Secondary College": {
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      41
    ],
    "Outdoor and Environmental Studies": [
      40
    ]
  },
  "Fountain Gate Secondary College": {
    "Art Making and Exhibiting": [
      46
    ],
    "Chemistry": [
      40
    ],
    "English": [
      46,
      42,
      41
    ],
    "English as an Additional Language": [
      40
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      43,
      41
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      40
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      42,
      42,
      40
    ]
  },
  "Frankston High School - VCE Campus": {
    "Applied Computing: Software Development": [
      42,
      40,
      40
    ],
    "Art Creative Practice": [
      45
    ],
    "Chemistry": [
      40
    ],
    "English": [
      46,
      44,
      43,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      43,
      43,
      41
    ],
    "Foundation Mathematics": [
      44
    ],
    "General Mathematics": [
      46,
      44,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      42,
      41
    ],
    "Media": [
      45
    ],
    "Outdoor and Environmental Studies": [
      47,
      46,
      46,
      45,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Philosophy": [
      45,
      43,
      40,
      40
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      48,
      41
    ],
    "Psychology": [
      47,
      43,
      42
    ],
    "Sport and Recreation (VCE VET)": [
      41,
      41
    ],
    "Visual Communication Design": [
      42,
      40
    ]
  },
  "Galen College, Wangaratta": {
    "Biology": [
      40
    ],
    "General Mathematics": [
      45,
      44,
      40,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      40
    ],
    "Physical Education": [
      42,
      42,
      42
    ]
  },
  "Geelong Baptist College, Lovely Banks": {
    "Food Studies": [
      42
    ],
    "Foundation Mathematics": [
      42
    ]
  },
  "Geelong Grammar School, Corio": {
    "Accounting": [
      43,
      41,
      41,
      40,
      40
    ],
    "Ancient History": [
      40,
      40
    ],
    "Art Making and Exhibiting": [
      48,
      46,
      42,
      42,
      41,
      40,
      40
    ],
    "Business Management": [
      44,
      43,
      42,
      42,
      41,
      40,
      40
    ],
    "Economics": [
      47
    ],
    "English": [
      47,
      44,
      44,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Environmental Science": [
      42,
      40
    ],
    "Foundation Mathematics": [
      42,
      41
    ],
    "General Mathematics": [
      49,
      48,
      45,
      44,
      43,
      42,
      41,
      41,
      40
    ],
    "Geography": [
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      46,
      41
    ],
    "Mathematical Methods": [
      42,
      41,
      40
    ],
    "Media": [
      41
    ],
    "Physical Education": [
      40,
      40
    ],
    "Product Design and Technologies": [
      47,
      42,
      40
    ],
    "Psychology": [
      41,
      40
    ],
    "Specialist Mathematics": [
      47
    ],
    "Theatre Studies": [
      50,
      41
    ]
  },
  "Geelong High School, East Geelong": {
    "Applied Computing: Software Development": [
      41
    ],
    "Art Making and Exhibiting": [
      48
    ],
    "Business Management": [
      46,
      45,
      45,
      43
    ],
    "Chemistry": [
      42
    ],
    "English": [
      47,
      46,
      44,
      44,
      41,
      41
    ],
    "Food Studies": [
      46
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      49,
      46,
      42
    ],
    "Media": [
      42,
      42
    ],
    "Music Sound Production (VCE VET)": [
      41,
      40
    ],
    "Psychology": [
      42,
      42
    ],
    "Theatre Studies": [
      41
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Geelong Lutheran College, Armstrong Creek": {
    "Biology": [
      43
    ],
    "Drama": [
      42
    ],
    "English": [
      42,
      41,
      41
    ],
    "General Mathematics": [
      44,
      42
    ],
    "Health and Human Development": [
      42,
      40
    ],
    "History Revolutions": [
      50
    ],
    "Languages:German": [
      43
    ],
    "Literature": [
      46,
      40
    ],
    "Product Design and Technologies": [
      45,
      42,
      41
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Genazzano FCJ College, Kew": {
    "Accounting": [
      40
    ],
    "Biology": [
      45,
      44,
      43,
      42
    ],
    "Business Management": [
      48,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      40,
      40
    ],
    "Economics": [
      44
    ],
    "English": [
      50,
      45,
      45,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      45,
      43,
      43,
      40
    ],
    "English as an Additional Language": [
      44,
      44,
      40
    ],
    "General Mathematics": [
      50,
      48,
      44,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      47,
      46,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Languages:Chinese First Language": [
      50
    ],
    "Languages:Chinese Second Language": [
      40
    ],
    "Languages:Italian": [
      40
    ],
    "Legal Studies": [
      45,
      44,
      43,
      41
    ],
    "Literature": [
      42,
      40
    ],
    "Mathematical Methods": [
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Physical Education": [
      50,
      45,
      45,
      44
    ],
    "Physics": [
      47,
      42
    ],
    "Politics": [
      41
    ],
    "Product Design and Technologies": [
      47,
      44,
      43
    ],
    "Psychology": [
      46,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      42
    ],
    "Visual Communication Design": [
      44,
      43
    ]
  },
  "Gilson College, Taylors Hill": {
    "Art Making and Exhibiting": [
      45
    ],
    "English": [
      43,
      40
    ],
    "General Mathematics": [
      50,
      40
    ],
    "Literature": [
      42
    ],
    "Religion and Society": [
      43,
      40,
      40
    ]
  },
  "Gippsland Grammar - Senior, Sale": {
    "Accounting": [
      40
    ],
    "Applied Computing: Data Analytics": [
      50,
      42
    ],
    "Biology": [
      50,
      44,
      43,
      42
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      44
    ],
    "Economics": [
      47,
      40
    ],
    "Foundation Mathematics": [
      41
    ],
    "Furnishing": [
      44
    ],
    "General Mathematics": [
      47,
      45,
      41
    ],
    "Languages:French": [
      41,
      40
    ],
    "Legal Studies": [
      41
    ],
    "Mathematical Methods": [
      48
    ],
    "Media": [
      44
    ],
    "Music Repertoire Performance": [
      40
    ],
    "Physical Education": [
      42
    ]
  },
  "Girton Grammar School, Bendigo": {
    "Accounting": [
      45
    ],
    "Biology": [
      50,
      46,
      44,
      42,
      41,
      41
    ],
    "Business Management": [
      49,
      44,
      43
    ],
    "English": [
      50,
      46,
      46,
      46,
      45,
      44,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "English Language": [
      40,
      40
    ],
    "General Mathematics": [
      44,
      43,
      42,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      45,
      44
    ],
    "History Revolutions": [
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Languages:French": [
      50
    ],
    "Legal Studies": [
      44,
      41
    ],
    "Literature": [
      47,
      42
    ],
    "Mathematical Methods": [
      42,
      41,
      40
    ],
    "Outdoor and Environmental Studies": [
      47,
      45,
      42,
      41,
      40
    ],
    "Physical Education": [
      48,
      48,
      45,
      44,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "Physics": [
      45,
      44,
      41,
      40
    ],
    "Psychology": [
      40
    ],
    "Sociology": [
      48,
      43,
      41
    ],
    "Systems Engineering": [
      50,
      41,
      41
    ],
    "Theatre Studies": [
      47
    ]
  },
  "Gisborne Secondary College": {
    "Environmental Science": [
      41
    ]
  },
  "Gladstone Park Secondary College": {
    "Applied Computing: Software Development": [
      49,
      46
    ],
    "Biology": [
      47,
      43,
      41,
      40
    ],
    "Business Management": [
      43
    ],
    "Chemistry": [
      41
    ],
    "Economics": [
      48
    ],
    "English": [
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Food Studies": [
      42
    ],
    "General Mathematics": [
      46,
      43,
      43
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Languages:Italian": [
      45,
      41
    ],
    "Legal Studies": [
      44,
      43,
      42
    ],
    "Mathematical Methods": [
      40
    ],
    "Physics": [
      42
    ]
  },
  "Glen Eira College, Caulfield East": {
    "Biology": [
      45,
      45,
      43,
      40
    ],
    "Business Management": [
      48,
      43,
      40,
      40
    ],
    "English": [
      40
    ],
    "English Language": [
      41
    ],
    "General Mathematics": [
      47,
      41,
      41,
      40,
      40
    ],
    "Languages:French": [
      44,
      42
    ],
    "Legal Studies": [
      43
    ],
    "Mathematical Methods": [
      40,
      40
    ],
    "Physics": [
      42
    ],
    "Visual Communication Design": [
      46
    ]
  },
  "Glen Waverley Secondary College": {
    "Accounting": [
      48,
      47,
      47,
      46,
      46,
      46,
      44,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Applied Computing: Software Development": [
      45,
      43,
      43,
      41,
      40
    ],
    "Art Creative Practice": [
      46
    ],
    "Biology": [
      47,
      46,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      49,
      47,
      46,
      46,
      45,
      44,
      44,
      44,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      50,
      45,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Drama": [
      40
    ],
    "Economics": [
      44,
      42,
      42,
      41,
      40
    ],
    "English": [
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      49,
      45,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      50,
      50,
      49,
      47,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      47,
      47,
      47,
      46,
      45,
      45,
      45,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      45
    ],
    "Languages:Chinese First Language": [
      46,
      45,
      43,
      41
    ],
    "Languages:Chinese Second Language": [
      43
    ],
    "Languages:Chinese Second Language Advanced": [
      40
    ],
    "Languages:French": [
      40
    ],
    "Languages:Italian": [
      45,
      44,
      40
    ],
    "Legal Studies": [
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      47,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      45,
      40
    ],
    "Music Contemporary Performance": [
      44
    ],
    "Music Repertoire Performance": [
      42,
      41
    ],
    "Physical Education": [
      45,
      42,
      40
    ],
    "Physics": [
      49,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Politics": [
      46,
      41,
      40
    ],
    "Psychology": [
      50,
      46,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      42,
      41,
      41,
      41
    ],
    "Systems Engineering": [
      47,
      44,
      43,
      42,
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      47,
      43,
      42
    ]
  },
  "Gleneagles Secondary College, Endeavour Hills": {
    "Business Management": [
      41,
      40
    ],
    "English": [
      42,
      40
    ],
    "General Mathematics": [
      42,
      42,
      42
    ],
    "Health and Human Development": [
      41
    ],
    "Physics": [
      42
    ],
    "Psychology": [
      41
    ],
    "Sociology": [
      47,
      45,
      44,
      41,
      41,
      40,
      40
    ]
  },
  "Good News Lutheran College, Tarneit": {
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      43,
      40
    ],
    "Business Management": [
      47,
      40
    ],
    "Chemistry": [
      47
    ],
    "Community Services (VCE VET)": [
      41
    ],
    "English": [
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "General Mathematics": [
      43,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      50,
      48
    ],
    "Legal Studies": [
      43,
      43
    ],
    "Mathematical Methods": [
      41,
      41
    ],
    "Product Design and Technologies": [
      47
    ]
  },
  "Gordon Institute of TAFE, Geelong": {
    "Legal Studies": [
      47
    ]
  },
  "Goulburn Valley Grammar School, Shepparton": {
    "Accounting": [
      48,
      45,
      44,
      42,
      41
    ],
    "Biology": [
      45,
      44,
      44,
      40,
      40
    ],
    "Chemistry": [
      45,
      43,
      43,
      43
    ],
    "Economics": [
      44,
      42
    ],
    "English": [
      48,
      46,
      44,
      44,
      44,
      44,
      43,
      43,
      41,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      50,
      49,
      47
    ],
    "General Mathematics": [
      50,
      45,
      43,
      43,
      42,
      42,
      42,
      41,
      41
    ],
    "Health and Human Development": [
      50,
      49,
      47,
      46,
      45,
      44,
      44,
      44,
      41,
      40
    ],
    "History Revolutions": [
      45,
      42,
      41
    ],
    "Languages:Indonesian Second Language": [
      41
    ],
    "Legal Studies": [
      45,
      42,
      41,
      41
    ],
    "Literature": [
      40,
      40
    ],
    "Mathematical Methods": [
      42,
      41,
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      43,
      42,
      41,
      40,
      40
    ],
    "Physics": [
      42,
      41,
      41,
      40
    ],
    "Politics": [
      44,
      41
    ],
    "Psychology": [
      50,
      46,
      43,
      43,
      42,
      41
    ],
    "Visual Communication Design": [
      43,
      40
    ]
  },
  "Great Future Chinese Culture School Inc, Preston": {
    "Languages:Chinese Second Language": [
      48
    ]
  },
  "Greater Shepparton Secondary College": {
    "Biology": [
      41
    ],
    "Legal Studies": [
      40
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Psychology": [
      42,
      40
    ]
  },
  "Greek Orthodox Community of Melbourne and Victoria": {
    "Languages:Greek": [
      42,
      41,
      40,
      40
    ]
  },
  "Greensborough Secondary College": {
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      41,
      40
    ]
  },
  "Grovedale College": {
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      40,
      40
    ]
  },
  "Haileybury - Chengdu Shude High School, Chengdu City Sichuan Province": {
    "Chemistry": [
      40
    ],
    "English as an Additional Language": [
      42,
      42,
      41,
      40
    ],
    "Languages:Chinese First Language": [
      43,
      41,
      41
    ],
    "Mathematical Methods": [
      48,
      43
    ],
    "Physics": [
      43,
      40
    ],
    "Specialist Mathematics": [
      41
    ]
  },
  "Haileybury - Dili International School": {
    "English": [
      41
    ],
    "Languages:Indonesian Second Language": [
      42
    ],
    "Languages:Portuguese": [
      41
    ]
  },
  "Haileybury - Einstein School, Binh Chanh District": {
    "English as an Additional Language": [
      44
    ],
    "General Mathematics": [
      46,
      46,
      45,
      43
    ],
    "Languages:Vietnamese First Language": [
      42,
      41
    ]
  },
  "Haileybury - Luoyang No. 1 High School, Luoyang Henan": {
    "Physics": [
      42
    ]
  },
  "Haileybury - Ningbo Li Hui Li High School, China": {
    "Chemistry": [
      45,
      44,
      44,
      42,
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      40
    ],
    "Languages:Chinese First Language": [
      46,
      42,
      41,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      48,
      45,
      44,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Physics": [
      46,
      44,
      42,
      42,
      42,
      40,
      40
    ]
  },
  "Haileybury - Pangea campus, Keysborough": {
    "English": [
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      43,
      41
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      47,
      45
    ],
    "Visual Communication Design": [
      45
    ]
  },
  "Haileybury - Qingdao No 19 High School, China": {
    "Mathematical Methods": [
      43,
      41
    ]
  },
  "Haileybury - Tianjin, China": {
    "Chemistry": [
      43
    ],
    "English as an Additional Language": [
      42
    ],
    "General Mathematics": [
      50,
      46,
      41,
      41,
      40,
      40,
      40
    ],
    "Languages:Chinese First Language": [
      47,
      44,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      43
    ],
    "Physics": [
      44
    ],
    "Specialist Mathematics": [
      43
    ]
  },
  "Haileybury - Wuhan Foreign Languages School, Wuhan   PRC   430022": {
    "English as an Additional Language": [
      44,
      44,
      43,
      43,
      41,
      40
    ],
    "General Mathematics": [
      45,
      45,
      43,
      42,
      40
    ],
    "Mathematical Methods": [
      47,
      46,
      43,
      43,
      40
    ],
    "Physics": [
      46,
      43,
      41
    ],
    "Specialist Mathematics": [
      44,
      40
    ]
  },
  "Haileybury College, Keysborough": {
    "Accounting": [
      50,
      48,
      48,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Algorithmics (HESS)": [
      43,
      42
    ],
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      49,
      48,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      45,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      50,
      48,
      47,
      46,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Drama": [
      44,
      41
    ],
    "Economics": [
      46,
      44,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "English": [
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      48,
      48,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      44,
      42,
      41
    ],
    "General Mathematics": [
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      49,
      48,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      45,
      42,
      42,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      50,
      40
    ],
    "History Revolutions": [
      48,
      47,
      43,
      41,
      40,
      40,
      40
    ],
    "Languages:Chinese Second Language": [
      41,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      46,
      42
    ],
    "Languages:French": [
      46,
      46,
      45,
      43
    ],
    "Languages:Japanese Second Language": [
      46,
      42,
      42,
      41,
      41
    ],
    "Languages:Latin": [
      44,
      42
    ],
    "Legal Studies": [
      47,
      47,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Mathematical Methods": [
      50,
      48,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Media": [
      48
    ],
    "Music Contemporary Performance": [
      50,
      44,
      42
    ],
    "Music Performance (VCE VET)": [
      50,
      48,
      44
    ],
    "Music Repertoire Performance": [
      47
    ],
    "Music Sound Production (VCE VET)": [
      48,
      45
    ],
    "Outdoor and Environmental Studies": [
      42,
      42
    ],
    "Philosophy": [
      42
    ],
    "Physical Education": [
      47,
      46,
      43,
      43,
      40,
      40,
      40
    ],
    "Physics": [
      49,
      46,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Politics": [
      46,
      42,
      41,
      41,
      41
    ],
    "Psychology": [
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Sociology": [
      50,
      49,
      48,
      47,
      46,
      46,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      40
    ],
    "Specialist Mathematics": [
      50,
      50,
      49,
      46,
      45,
      45,
      45,
      43,
      41,
      41,
      40,
      40
    ],
    "Systems Engineering": [
      48,
      44,
      42,
      42,
      42,
      41
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Haileybury Girls College, Keysborough": {
    "Accounting": [
      45,
      45,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Applied Computing: Software Development": [
      42
    ],
    "Art Making and Exhibiting": [
      45
    ],
    "Biology": [
      50,
      50,
      49,
      49,
      49,
      48,
      47,
      47,
      46,
      46,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      50,
      48,
      45,
      45,
      43,
      43,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      47,
      47,
      44,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Dance": [
      42,
      41
    ],
    "Drama": [
      47,
      42,
      40
    ],
    "Economics": [
      44
    ],
    "English": [
      50,
      50,
      49,
      49,
      49,
      48,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      45
    ],
    "General Mathematics": [
      50,
      50,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      50
    ],
    "Health and Human Development": [
      50,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      48,
      46,
      45,
      43,
      43,
      43,
      41,
      40,
      40
    ],
    "Languages:Chinese Culture and Society": [
      41,
      40
    ],
    "Languages:Chinese Second Language": [
      50
    ],
    "Languages:Chinese Second Language Advanced": [
      50,
      49,
      41
    ],
    "Languages:French": [
      48,
      45,
      43,
      41,
      40
    ],
    "Languages:Japanese Second Language": [
      49,
      40
    ],
    "Languages:Latin": [
      50,
      40
    ],
    "Legal Studies": [
      50,
      49,
      48,
      48,
      48,
      47,
      46,
      45,
      45,
      45,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      42
    ],
    "Mathematical Methods": [
      48,
      46,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      48,
      45,
      41,
      40
    ],
    "Music Composition": [
      43
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Music Performance (VCE VET)": [
      45,
      43
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Philosophy": [
      50,
      43
    ],
    "Physical Education": [
      48,
      47,
      44,
      43,
      41,
      41
    ],
    "Physics": [
      45,
      44,
      42,
      41,
      41,
      41
    ],
    "Politics": [
      49,
      48,
      48,
      48,
      42,
      40
    ],
    "Psychology": [
      49,
      48,
      48,
      47,
      47,
      47,
      46,
      46,
      46,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Sociology": [
      50,
      48,
      47,
      46,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      40
    ],
    "Systems Engineering": [
      42,
      41,
      40
    ],
    "Theatre Studies": [
      43,
      42,
      42
    ]
  },
  "Haileybury Rendall School, Berrimah": {
    "Chemistry": [
      47
    ],
    "Economics": [
      41
    ],
    "English": [
      50,
      50,
      48,
      48,
      47,
      46,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      43
    ],
    "General Mathematics": [
      43,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      47,
      45
    ],
    "Legal Studies": [
      42,
      40,
      40
    ],
    "Mathematical Methods": [
      44
    ],
    "Outdoor and Environmental Studies": [
      44
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      50
    ],
    "Psychology": [
      42,
      41,
      41,
      40
    ],
    "Sociology": [
      40
    ],
    "Specialist Mathematics": [
      42
    ]
  },
  "Hampton Park Secondary College": {
    "English": [
      45,
      45,
      41
    ],
    "English as an Additional Language": [
      41
    ],
    "Foundation Mathematics": [
      41
    ],
    "General Mathematics": [
      45,
      44,
      40
    ],
    "Philosophy": [
      41
    ],
    "Physics": [
      41
    ]
  },
  "Hazel Glen College, Doreen": {
    "Biology": [
      46,
      44
    ],
    "Engineering Studies (VCE VET)": [
      40
    ],
    "English": [
      40
    ],
    "Foundation Mathematics": [
      40
    ],
    "Health and Human Development": [
      44,
      41
    ],
    "Legal Studies": [
      40
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      46
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      42
    ]
  },
  "Heathdale Christian College Werribee Campus": {
    "Applied Computing: Software Development": [
      48
    ],
    "Art Making and Exhibiting": [
      46
    ],
    "Biology": [
      42,
      40
    ],
    "Business Management": [
      42,
      41
    ],
    "Chemistry": [
      41
    ],
    "Drama": [
      43,
      42
    ],
    "Economics": [
      40
    ],
    "English": [
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      48,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Laboratory Skills (VCE VET)": [
      40
    ],
    "Legal Studies": [
      43,
      41
    ],
    "Literature": [
      44,
      41
    ],
    "Music Performance (VCE VET)": [
      50,
      40
    ],
    "Physics": [
      40
    ],
    "Systems Engineering": [
      42
    ]
  },
  "Heathmont College": {
    "Applied Computing: Data Analytics": [
      44
    ],
    "Biology": [
      41
    ],
    "Food Studies": [
      43,
      41
    ],
    "Health and Human Development": [
      41
    ],
    "Mathematical Methods": [
      44
    ],
    "Physics": [
      40
    ]
  },
  "Heritage College Knox, Ferntree Gully": {
    "Health and Human Development": [
      40,
      40
    ]
  },
  "Highvale Secondary College, Glen Waverley": {
    "Accounting": [
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Biology": [
      44,
      43,
      40,
      40
    ],
    "Business Management": [
      41
    ],
    "Chemistry": [
      46,
      46,
      46,
      44,
      44,
      40
    ],
    "English": [
      46,
      46,
      44,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      42,
      41
    ],
    "English as an Additional Language": [
      41,
      40
    ],
    "Food Studies": [
      43,
      43,
      40,
      40
    ],
    "General Mathematics": [
      50,
      49,
      46,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      41
    ],
    "History Revolutions": [
      41
    ],
    "Legal Studies": [
      45,
      42,
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      45,
      44,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Music Sound Production (VCE VET)": [
      40
    ],
    "Physics": [
      45,
      42,
      42,
      41,
      40
    ],
    "Product Design and Technologies": [
      40
    ],
    "Psychology": [
      41
    ],
    "Specialist Mathematics": [
      44,
      42,
      40
    ],
    "Visual Communication Design": [
      42,
      42
    ]
  },
  "Highview Christian Community College, Maryborough": {
    "Foundation Mathematics": [
      45,
      43
    ],
    "Psychology": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ]
  },
  "Hillcrest Christian College - Ayr Hill Campus, Clyde North": {
    "Business Management": [
      45,
      44,
      42
    ],
    "Economics": [
      40
    ],
    "English": [
      49,
      44,
      44,
      41
    ],
    "Equine Studies (VCE VET)": [
      41
    ],
    "General Mathematics": [
      43,
      42
    ],
    "Health and Human Development": [
      50
    ],
    "Legal Studies": [
      40
    ],
    "Psychology": [
      43
    ],
    "Theatre Studies": [
      43
    ]
  },
  "Holmes Grammar School, Melbourne": {
    "Foundation Mathematics": [
      40
    ],
    "Languages:Vietnamese First Language": [
      40,
      40
    ]
  },
  "Homestead Senior Secondary College, Point Cook": {
    "Biology": [
      41
    ],
    "English": [
      43
    ],
    "English as an Additional Language": [
      43
    ],
    "General Mathematics": [
      46,
      41,
      41
    ],
    "Health and Human Development": [
      45,
      44,
      44
    ],
    "Legal Studies": [
      44,
      44,
      40
    ],
    "Music Contemporary Performance": [
      44
    ],
    "Physics": [
      41,
      40
    ],
    "Psychology": [
      45,
      44,
      44,
      41,
      40
    ]
  },
  "Hoppers Crossing Secondary College": {
    "Business Management": [
      41
    ],
    "English": [
      40
    ],
    "Food Studies": [
      42
    ],
    "General Mathematics": [
      45
    ],
    "Media": [
      40
    ]
  },
  "Horsham College": {
    "Business Management": [
      45
    ],
    "English": [
      42,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      50
    ],
    "General Mathematics": [
      42,
      42,
      40,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      42
    ],
    "Physical Education": [
      44
    ]
  },
  "Hume Anglican Grammar, Mickleham": {
    "Accounting": [
      40,
      40
    ],
    "Business Management": [
      48,
      44,
      41,
      41,
      41
    ],
    "Chemistry": [
      45,
      40
    ],
    "English": [
      47,
      43,
      42,
      42,
      42,
      40,
      40
    ],
    "Environmental Science": [
      40
    ],
    "General Mathematics": [
      50,
      47,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      47,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      40
    ],
    "Legal Studies": [
      47,
      41
    ],
    "Mathematical Methods": [
      50,
      42,
      40,
      40
    ],
    "Physics": [
      47,
      47,
      42
    ],
    "Politics": [
      43
    ],
    "Psychology": [
      40,
      40
    ],
    "Specialist Mathematics": [
      49
    ],
    "Systems Engineering": [
      42,
      40
    ]
  },
  "Hume Central Secondary College - Town Park Campus, Broadmeadows": {
    "English": [
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      41
    ]
  },
  "Huntingtower School, Mount Waverley": {
    "Art Making and Exhibiting": [
      44,
      44
    ],
    "Biology": [
      47,
      47,
      46,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      47,
      42
    ],
    "Chemistry": [
      47,
      43,
      42,
      41,
      41,
      40
    ],
    "Economics": [
      49,
      45,
      43,
      43
    ],
    "English": [
      50,
      48,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      48,
      47,
      45,
      44,
      42,
      40,
      40
    ],
    "Geography": [
      49,
      44
    ],
    "Health and Human Development": [
      44,
      43,
      42
    ],
    "History Revolutions": [
      46,
      45,
      44,
      42,
      41,
      41
    ],
    "Languages:Indonesian Second Language": [
      45
    ],
    "Legal Studies": [
      44,
      42,
      40
    ],
    "Mathematical Methods": [
      50,
      48,
      47,
      46,
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      49,
      43,
      42
    ],
    "Physical Education": [
      50,
      48,
      44,
      41,
      40,
      40
    ],
    "Physics": [
      42
    ],
    "Psychology": [
      43,
      43,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      42
    ],
    "Sport and Recreation (VCE VET)": [
      46,
      45,
      45,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Theatre Studies": [
      42
    ],
    "Visual Communication Design": [
      46,
      43
    ]
  },
  "Ilim College Doveton Campus": {
    "English": [
      49,
      43,
      42
    ]
  },
  "Ilim College Kiewa Campus, Dallas": {
    "Biology": [
      45
    ],
    "Chemistry": [
      40
    ],
    "English": [
      47,
      46,
      45,
      41,
      41
    ],
    "General Mathematics": [
      46,
      45,
      40
    ],
    "Languages:Turkish": [
      47
    ]
  },
  "Ilim College, Broadmeadows": {
    "Biology": [
      42
    ],
    "Chemistry": [
      41,
      40,
      40
    ],
    "English": [
      50,
      48,
      45,
      43,
      41,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      47
    ],
    "Foundation Mathematics": [
      48,
      46,
      46,
      45,
      43,
      43,
      41,
      41,
      40
    ],
    "General Mathematics": [
      43,
      42,
      40,
      40
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "Languages:Turkish": [
      40,
      40
    ],
    "Legal Studies": [
      40
    ],
    "Psychology": [
      46
    ],
    "Sociology": [
      46,
      46,
      42,
      40
    ],
    "Texts and Traditions": [
      45,
      44,
      44,
      43,
      41
    ]
  },
  "Iona College Geelong, Charlemont": {
    "English": [
      42,
      40
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      41,
      40,
      40,
      40
    ],
    "Media": [
      43,
      41
    ],
    "Music Sound Production (VCE VET)": [
      41
    ],
    "Outdoor and Environmental Studies": [
      47,
      44
    ],
    "Physics": [
      40
    ],
    "Product Design and Technologies": [
      45,
      43
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "Iranian Cultural School, East Doncaster": {
    "Languages:Persian": [
      47
    ]
  },
  "Islamic College of Melbourne, Tarneit": {
    "Business Management": [
      44
    ],
    "Community Services (VCE VET)": [
      47
    ],
    "English": [
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Foundation Mathematics": [
      50,
      47,
      46,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "General Mathematics": [
      50,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      46,
      44,
      40,
      40
    ],
    "Industry and Enterprise": [
      42,
      41
    ],
    "Information and Commuications Technology (VCE VET)": [
      40,
      40
    ],
    "Legal Studies": [
      45
    ],
    "Sport and Recreation (VCE VET)": [
      48
    ]
  },
  "Ivanhoe Girls' Grammar School": {
    "Accounting": [
      41
    ],
    "Art Creative Practice": [
      42
    ],
    "Art Making and Exhibiting": [
      44,
      41
    ],
    "Australian History": [
      44,
      43
    ],
    "Biology": [
      48,
      45,
      44,
      41,
      40,
      40
    ],
    "Business Management": [
      50,
      49,
      49,
      47,
      45,
      43,
      42,
      41,
      40
    ],
    "Chemistry": [
      48,
      46,
      44,
      43,
      40,
      40,
      40
    ],
    "Economics": [
      43
    ],
    "English": [
      50,
      48,
      47,
      47,
      46,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      49,
      43,
      41
    ],
    "English as an Additional Language": [
      49
    ],
    "General Mathematics": [
      43,
      42,
      42
    ],
    "Health and Human Development": [
      48,
      45,
      43,
      40
    ],
    "History Revolutions": [
      42,
      41
    ],
    "Languages:French": [
      40
    ],
    "Legal Studies": [
      49,
      46,
      45,
      43
    ],
    "Literature": [
      42,
      42
    ],
    "Mathematical Methods": [
      46,
      44,
      44,
      41,
      40,
      40
    ],
    "Music Repertoire Performance": [
      48
    ],
    "Physics": [
      42,
      42,
      40
    ],
    "Politics": [
      42,
      40
    ],
    "Psychology": [
      47,
      46,
      44,
      43,
      43,
      43,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43,
      42
    ],
    "Theatre Studies": [
      48,
      46,
      44,
      42
    ],
    "Visual Communication Design": [
      46
    ]
  },
  "Ivanhoe Grammar School": {
    "Accounting": [
      45
    ],
    "Applied Computing: Software Development": [
      40
    ],
    "Art Making and Exhibiting": [
      47,
      41
    ],
    "Biology": [
      49,
      45,
      41,
      41,
      40
    ],
    "Business Management": [
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      41,
      41,
      41
    ],
    "Chemistry": [
      45,
      44,
      44,
      43,
      42,
      42,
      41,
      41
    ],
    "Economics": [
      48,
      42,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "English": [
      49,
      48,
      48,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Environmental Science": [
      41
    ],
    "General Mathematics": [
      47,
      46,
      45,
      45,
      45,
      45,
      45,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      48,
      45,
      45,
      44,
      41
    ],
    "Health and Human Development": [
      50,
      50,
      48,
      47,
      44,
      44,
      43,
      43,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      42,
      41,
      40,
      40
    ],
    "Languages:Chinese Culture and Society": [
      46
    ],
    "Languages:Chinese First Language": [
      49
    ],
    "Languages:French": [
      40
    ],
    "Legal Studies": [
      46,
      46,
      46,
      43,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      48,
      42
    ],
    "Mathematical Methods": [
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Media": [
      46,
      43,
      42,
      40
    ],
    "Physical Education": [
      50,
      47,
      47,
      46,
      45,
      45,
      45,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      43,
      42,
      41,
      40
    ],
    "Product Design and Technologies": [
      41,
      41,
      41,
      40
    ],
    "Psychology": [
      50,
      48,
      48,
      48,
      48,
      46,
      46,
      45,
      44,
      44,
      43,
      43,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Theatre Studies": [
      44,
      40
    ],
    "Visual Communication Design": [
      43,
      40
    ]
  },
  "Ivanhoe Grammar School - Plenty Campus, Mernda": {
    "Accounting": [
      45,
      43
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Biology": [
      47,
      47,
      44,
      41
    ],
    "Business Management": [
      46,
      44,
      43,
      43,
      42,
      41
    ],
    "Chemistry": [
      47,
      44,
      42
    ],
    "English": [
      47,
      46,
      45,
      44,
      42,
      40,
      40,
      40
    ],
    "General Mathematics": [
      43,
      43
    ],
    "Health and Human Development": [
      50,
      42
    ],
    "History Revolutions": [
      44,
      43,
      41
    ],
    "Languages:Chinese Second Language": [
      43
    ],
    "Legal Studies": [
      42,
      41,
      41,
      40
    ],
    "Literature": [
      44,
      42,
      40
    ],
    "Mathematical Methods": [
      50,
      44,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "Media": [
      44
    ],
    "Physical Education": [
      48,
      41,
      40
    ],
    "Physics": [
      49,
      43,
      43,
      41,
      40
    ],
    "Product Design and Technologies": [
      41
    ],
    "Psychology": [
      47,
      45,
      45,
      40,
      40
    ],
    "Specialist Mathematics": [
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "John Monash Science School, Clayton": {
    "Accounting": [
      43
    ],
    "Biology": [
      47,
      47,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      50,
      49,
      49,
      48,
      47,
      46,
      44,
      44,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      41
    ],
    "Engineering Studies (VCE VET)": [
      43
    ],
    "English": [
      50,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      42,
      42,
      42
    ],
    "Environmental Science": [
      47,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      46,
      43
    ],
    "Geography": [
      48,
      47,
      41,
      40,
      40
    ],
    "History Revolutions": [
      42,
      42,
      40
    ],
    "Laboratory Skills (VCE VET)": [
      40
    ],
    "Languages:Japanese Second Language": [
      42,
      40
    ],
    "Literature": [
      43,
      40
    ],
    "Mathematical Methods": [
      50,
      50,
      50,
      50,
      50,
      49,
      48,
      48,
      47,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Music Contemporary Performance": [
      46,
      42
    ],
    "Music Repertoire Performance": [
      43,
      42
    ],
    "Physical Education": [
      47,
      44,
      43,
      43,
      41
    ],
    "Physics": [
      47,
      47,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Psychology": [
      46,
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      47,
      46,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ]
  },
  "John Paul College, Frankston": {
    "Applied Computing: Software Development": [
      40
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Biology": [
      50,
      41
    ],
    "Business Management": [
      40
    ],
    "Chemistry": [
      40,
      40
    ],
    "English": [
      44,
      44,
      43,
      42,
      40
    ],
    "General Mathematics": [
      47,
      42,
      42
    ],
    "Health and Human Development": [
      46,
      41,
      40
    ],
    "History Revolutions": [
      49
    ],
    "Mathematical Methods": [
      41,
      41
    ],
    "Media": [
      42
    ],
    "Outdoor and Environmental Studies": [
      42
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      48,
      42,
      40
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Kambrya College, Berwick": {
    "Accounting": [
      40
    ],
    "Biology": [
      48,
      45
    ],
    "Business Management": [
      50,
      44,
      41
    ],
    "English": [
      47,
      42,
      41,
      40,
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      50,
      44,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      43,
      42,
      41,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      43,
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      43
    ],
    "Legal Studies": [
      50,
      47
    ],
    "Physical Education": [
      42,
      40
    ],
    "Psychology": [
      44,
      42,
      42,
      42
    ],
    "Sociology": [
      43,
      41,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      42
    ],
    "Systems Engineering": [
      43
    ],
    "Visual Communication Design": [
      44,
      44
    ]
  },
  "Kaniva P-12 College": {
    "General Mathematics": [
      40
    ]
  },
  "Kardinia International College, Bell Post Hill": {
    "Applied Computing: Software Development": [
      46,
      44,
      44,
      40
    ],
    "Art Creative Practice": [
      48,
      41,
      40
    ],
    "Australian History": [
      42,
      41,
      40
    ],
    "Biology": [
      45,
      43,
      42,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      43,
      42,
      40,
      40
    ],
    "English": [
      47,
      43,
      42,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      46
    ],
    "Environmental Science": [
      45,
      44,
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      50,
      49,
      47,
      45,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      41
    ],
    "Information and Commuications Technology (VCE VET)": [
      48
    ],
    "Legal Studies": [
      43,
      42,
      41
    ],
    "Mathematical Methods": [
      49,
      45,
      45,
      42,
      42,
      40
    ],
    "Media": [
      48,
      47,
      45
    ],
    "Physical Education": [
      48,
      42,
      42,
      41,
      40
    ],
    "Physics": [
      43
    ],
    "Psychology": [
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Systems Engineering": [
      43,
      41,
      40
    ],
    "Visual Communication Design": [
      46
    ]
  },
  "Keilor Downs College": {
    "Business Management": [
      46
    ],
    "Chemistry": [
      42,
      41
    ],
    "English": [
      50,
      47,
      43,
      42,
      42,
      41
    ],
    "English as an Additional Language": [
      40
    ],
    "Food Studies": [
      46
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Legal Studies": [
      44
    ],
    "Psychology": [
      43,
      41,
      40,
      40
    ]
  },
  "Kew High School, Kew East": {
    "Accounting": [
      45
    ],
    "Art Creative Practice": [
      42,
      40,
      40
    ],
    "Biology": [
      44,
      43,
      41,
      40
    ],
    "Business Management": [
      40
    ],
    "Chemistry": [
      47,
      45,
      43,
      42,
      42
    ],
    "Economics": [
      48,
      42,
      42,
      42,
      40,
      40
    ],
    "English": [
      47,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      45,
      41,
      41
    ],
    "English as an Additional Language": [
      42
    ],
    "General Mathematics": [
      50,
      48,
      45,
      43,
      43,
      42,
      42,
      40,
      40
    ],
    "Geography": [
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Languages:Vietnamese First Language": [
      45,
      45,
      41,
      40
    ],
    "Legal Studies": [
      43,
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      50,
      50,
      46,
      45,
      42,
      41,
      41,
      41,
      40
    ],
    "Media": [
      46
    ],
    "Physical Education": [
      44,
      41,
      40
    ],
    "Physics": [
      46,
      43,
      42,
      41,
      40
    ],
    "Psychology": [
      47,
      45,
      44,
      42,
      40,
      40
    ],
    "Specialist Mathematics": [
      50,
      49,
      46,
      43
    ],
    "Sport and Recreation (VCE VET)": [
      50,
      44,
      42,
      41
    ],
    "Visual Communication Design": [
      47
    ]
  },
  "Keysborough Secondary College - Acacia Campus": {
    "Chemistry": [
      41
    ],
    "English": [
      45,
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      46,
      46,
      42,
      42,
      41,
      41
    ],
    "Health and Human Development": [
      40
    ],
    "Physical Education": [
      46
    ],
    "Systems Engineering": [
      43,
      41
    ]
  },
  "Keysborough Secondary College - Banksia Campus, Springvale South": {
    "Chemistry": [
      40
    ],
    "General Mathematics": [
      48
    ],
    "Product Design and Technologies": [
      45
    ],
    "Specialist Mathematics": [
      48
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Kilbreda College, Mentone": {
    "Applied Computing: Data Analytics": [
      46
    ],
    "Art Creative Practice": [
      43
    ],
    "Business Management": [
      48,
      47,
      47,
      46,
      42,
      41,
      41,
      41,
      41,
      40
    ],
    "Dance": [
      40
    ],
    "English": [
      46,
      45,
      45,
      45,
      44,
      43,
      42,
      41,
      40
    ],
    "Food Studies": [
      47,
      44,
      43,
      42,
      40,
      40
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      43,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      49,
      47,
      46,
      46,
      45,
      43,
      41,
      41,
      41,
      41,
      40
    ],
    "Legal Studies": [
      45,
      40
    ],
    "Literature": [
      41
    ],
    "Physical Education": [
      44,
      41,
      40,
      40
    ],
    "Politics": [
      50
    ],
    "Product Design and Technologies": [
      46,
      43,
      40
    ],
    "Psychology": [
      45,
      44,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      48,
      48,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Killester College, Springvale": {
    "Biology": [
      43,
      40
    ],
    "English": [
      46,
      42,
      41
    ],
    "Foundation Mathematics": [
      44
    ],
    "General Mathematics": [
      44,
      40
    ],
    "Health and Human Development": [
      43,
      41,
      41,
      40
    ],
    "Laboratory Skills (VCE VET)": [
      41
    ],
    "Philosophy": [
      44
    ],
    "Politics": [
      40
    ],
    "Product Design and Technologies": [
      47,
      43,
      41
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Kilvington Grammar School, Ormond": {
    "Applied Computing: Data Analytics": [
      41,
      40
    ],
    "Biology": [
      44,
      43,
      43,
      42,
      41,
      41
    ],
    "Business Management": [
      44,
      42,
      41,
      41,
      41
    ],
    "Chemistry": [
      45,
      42,
      40,
      40
    ],
    "English": [
      49,
      47,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "English as an Additional Language": [
      41
    ],
    "Food Studies": [
      50
    ],
    "General Mathematics": [
      46,
      46,
      44,
      44,
      42,
      41,
      40,
      40
    ],
    "Geography": [
      40
    ],
    "Health and Human Development": [
      42
    ],
    "History Revolutions": [
      44
    ],
    "Languages:French": [
      48,
      42
    ],
    "Legal Studies": [
      45,
      41
    ],
    "Literature": [
      40,
      40
    ],
    "Mathematical Methods": [
      46,
      46,
      42,
      42,
      40
    ],
    "Media": [
      48,
      47,
      41
    ],
    "Music Repertoire Performance": [
      40
    ],
    "Physical Education": [
      50,
      43,
      41
    ],
    "Physics": [
      50,
      40
    ],
    "Psychology": [
      50,
      43,
      43,
      41
    ],
    "Sociology": [
      44,
      43,
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      47,
      41
    ],
    "Systems Engineering": [
      46,
      43,
      41,
      40,
      40
    ]
  },
  "Kingswood College, Box Hill": {
    "Art Creative Practice": [
      42,
      41
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      41,
      40,
      40
    ],
    "Economics": [
      44
    ],
    "English": [
      43,
      42,
      40
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      45,
      43,
      40
    ],
    "Languages:Chinese First Language": [
      42
    ],
    "Languages:French": [
      42
    ],
    "Legal Studies": [
      46,
      40
    ],
    "Literature": [
      43
    ],
    "Mathematical Methods": [
      43,
      41
    ],
    "Physical Education": [
      44
    ],
    "Politics": [
      43
    ],
    "Psychology": [
      43,
      43,
      41,
      40
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "Kolbe Catholic College, Greenvale": {
    "Foundation Mathematics": [
      50,
      43,
      40,
      40
    ],
    "General Mathematics": [
      46,
      42,
      41
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ]
  },
  "Koo Wee Rup Secondary College": {
    "General Mathematics": [
      47
    ],
    "Outdoor and Environmental Studies": [
      43,
      41
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      47,
      42
    ]
  },
  "Koonung Secondary College, Mont Albert North": {
    "Art Creative Practice": [
      45
    ],
    "Biology": [
      43,
      41,
      41,
      41,
      40
    ],
    "Business Management": [
      41,
      41
    ],
    "Chemistry": [
      45,
      44,
      42,
      40,
      40
    ],
    "English": [
      45,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "Environmental Science": [
      46,
      42,
      40
    ],
    "General Mathematics": [
      45,
      45,
      45,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      41,
      40
    ],
    "Languages:French": [
      41
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Mathematical Methods": [
      44,
      44,
      43,
      42,
      40
    ],
    "Physical Education": [
      42,
      42,
      42,
      42,
      41,
      40
    ],
    "Physics": [
      40
    ],
    "Product Design and Technologies": [
      40
    ],
    "Psychology": [
      46,
      44,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Korean Language School of Melbourne, Prahran": {
    "Languages:Korean Second Language": [
      43,
      42
    ]
  },
  "Korowa Anglican Girls' School, Glen Iris": {
    "Art Creative Practice": [
      45,
      44,
      40
    ],
    "Biology": [
      50,
      49,
      46,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      46,
      46,
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Chemistry": [
      46,
      42,
      41,
      40,
      40
    ],
    "Drama": [
      44
    ],
    "English": [
      50,
      47,
      47,
      45,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      50,
      48,
      45,
      41,
      40
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      45,
      44,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      45,
      43,
      43,
      42,
      41,
      40
    ],
    "History Revolutions": [
      46,
      43,
      41
    ],
    "Languages:Chinese Second Language": [
      45,
      43,
      42,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      47,
      47,
      43,
      42,
      41,
      41,
      41,
      41
    ],
    "Languages:French": [
      40
    ],
    "Languages:German": [
      43
    ],
    "Legal Studies": [
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Literature": [
      45,
      40
    ],
    "Mathematical Methods": [
      46,
      44,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Media": [
      44,
      42,
      42
    ],
    "Physics": [
      41,
      41
    ],
    "Psychology": [
      50,
      49,
      48,
      46,
      44,
      43,
      42,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      43,
      42,
      40
    ],
    "Visual Communication Design": [
      42,
      41
    ]
  },
  "Korumburra Secondary College": {
    "Art Making and Exhibiting": [
      43
    ],
    "Mathematical Methods": [
      40
    ]
  },
  "Kurnai College - University Campus, Churchill": {
    "Biology": [
      40
    ],
    "Business Management": [
      43
    ],
    "Environmental Science": [
      43
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      41
    ],
    "Sociology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      46
    ]
  },
  "Kurunjang Secondary College, Melton": {
    "English": [
      48,
      43
    ],
    "Food Studies": [
      41
    ]
  },
  "Kyabram P-12 College": {
    "Sport and Recreation (VCE VET)": [
      42
    ]
  },
  "Lac Hong Vietnamese School - St Albans": {
    "Languages:Vietnamese Second Language": [
      42
    ]
  },
  "Lakeside Lutheran College, Pakenham": {
    "Health and Human Development": [
      42
    ],
    "Literature": [
      40
    ],
    "Psychology": [
      46
    ]
  },
  "Lakeview Senior College, Caroline Springs": {
    "Biology": [
      41
    ],
    "Business Management": [
      41
    ],
    "English": [
      44,
      41,
      41,
      41
    ],
    "General Mathematics": [
      44,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Mathematical Methods": [
      42
    ],
    "Psychology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      46
    ]
  },
  "Lalor North Secondary College, Epping": {
    "Health and Human Development": [
      40
    ]
  },
  "Lalor Secondary College": {
    "Dance (VCE VET)": [
      50
    ],
    "English": [
      41
    ],
    "Health and Human Development": [
      46,
      42
    ]
  },
  "Lara Secondary College": {
    "General Mathematics": [
      41,
      40
    ],
    "Health and Human Development": [
      40,
      40
    ]
  },
  "Lauriston Girls' School, Armadale": {
    "Art Making and Exhibiting": [
      45,
      43,
      42,
      42,
      42
    ],
    "Australian History": [
      46,
      41
    ],
    "Biology": [
      42,
      41
    ],
    "Business Management": [
      50,
      49,
      48,
      47,
      44,
      44,
      42,
      40
    ],
    "Chemistry": [
      41
    ],
    "Economics": [
      43
    ],
    "English": [
      49,
      47,
      47,
      46,
      45,
      44,
      44,
      42,
      42,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      50,
      50,
      48,
      48,
      48,
      46,
      40
    ],
    "Health and Human Development": [
      44,
      43,
      43
    ],
    "Legal Studies": [
      50,
      46,
      46,
      42,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      46,
      43,
      41,
      41
    ],
    "Music Repertoire Performance": [
      43,
      40
    ],
    "Physical Education": [
      44,
      44,
      43,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      41
    ],
    "Specialist Mathematics": [
      41
    ],
    "Theatre Studies": [
      49
    ],
    "Visual Communication Design": [
      43,
      43,
      43,
      42,
      41,
      40
    ]
  },
  "Lavalla Catholic College, Traralgon": {
    "Business Management": [
      42
    ],
    "Drama": [
      43,
      40
    ],
    "English": [
      43,
      42
    ],
    "Foundation Mathematics": [
      47
    ],
    "General Mathematics": [
      41,
      41
    ],
    "Geography": [
      50
    ],
    "Languages:Italian": [
      42
    ],
    "Legal Studies": [
      42,
      42
    ],
    "Religion and Society": [
      42
    ],
    "Systems Engineering": [
      44
    ]
  },
  "Leibler Yavneh College, Elsternwick": {
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      44
    ],
    "Business Management": [
      46,
      45,
      41
    ],
    "Chemistry": [
      44
    ],
    "Drama": [
      49
    ],
    "English": [
      48,
      48,
      45,
      43,
      42,
      42
    ],
    "General Mathematics": [
      42,
      41,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Music Contemporary Performance": [
      47
    ],
    "Physical Education": [
      49
    ],
    "Physics": [
      43,
      43,
      42,
      42
    ],
    "Religion and Society": [
      45,
      44
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      40,
      40
    ]
  },
  "Leongatha Secondary College": {
    "English": [
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      43
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      42
    ],
    "Physical Education": [
      42,
      40
    ],
    "Psychology": [
      43,
      42,
      40
    ],
    "Systems Engineering": [
      42,
      42,
      40
    ]
  },
  "Lighthouse Christian College Cranbourne": {
    "Accounting": [
      40
    ],
    "Biology": [
      46,
      46,
      41
    ],
    "English": [
      48,
      48,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "General Mathematics": [
      50,
      40
    ],
    "Health and Human Development": [
      40
    ]
  },
  "Lighthouse Christian College, Keysborough": {
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      40
    ],
    "English": [
      47,
      43,
      42
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      47
    ],
    "Psychology": [
      41
    ]
  },
  "Lilydale Heights College": {
    "Biology": [
      44
    ],
    "Food Studies": [
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      40
    ],
    "Psychology": [
      47
    ]
  },
  "Lilydale High School": {
    "Engineering Studies (VCE VET)": [
      46
    ],
    "Food Studies": [
      41
    ],
    "Health and Human Development": [
      40,
      40,
      40
    ]
  },
  "Little Yarra Steiner School, Yarra Junction": {
    "Art Creative Practice": [
      40
    ]
  },
  "Loreto Mandeville Hall, Toorak": {
    "Ancient History": [
      44,
      43,
      42,
      41
    ],
    "Art Creative Practice": [
      48,
      42,
      42
    ],
    "Art Making and Exhibiting": [
      50,
      41,
      41
    ],
    "Biology": [
      47,
      46,
      46,
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      48,
      44,
      44,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Economics": [
      47,
      47,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "English": [
      50,
      48,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Geography": [
      49,
      44,
      42,
      42,
      40
    ],
    "Health and Human Development": [
      50,
      50,
      48,
      48,
      46,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      43,
      42,
      42
    ],
    "Languages:Indonesian Second Language": [
      43
    ],
    "Languages:Italian": [
      44,
      42
    ],
    "Legal Studies": [
      50,
      48,
      48,
      47,
      46,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Literature": [
      41,
      40
    ],
    "Mathematical Methods": [
      42,
      41,
      40,
      40
    ],
    "Media": [
      40,
      40
    ],
    "Music Repertoire Performance": [
      45
    ],
    "Physical Education": [
      50,
      47,
      47,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Physics": [
      41
    ],
    "Politics": [
      45,
      42
    ],
    "Psychology": [
      50,
      46,
      45,
      44,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Theatre Studies": [
      45,
      41,
      41
    ],
    "Visual Communication Design": [
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41
    ]
  },
  "Lorne P-12 College": {
    "General Mathematics": [
      41
    ],
    "Music Sound Production (VCE VET)": [
      43
    ]
  },
  "Lowanna College, Newborough": {
    "Biology": [
      43
    ],
    "General Mathematics": [
      42
    ],
    "Psychology": [
      43
    ]
  },
  "Lowther Hall Anglican Grammar School, Essendon": {
    "Applied Computing: Software Development": [
      44,
      43
    ],
    "Biology": [
      45,
      41
    ],
    "Business Management": [
      44,
      42,
      40,
      40
    ],
    "Chemistry": [
      45,
      44,
      42,
      41,
      40
    ],
    "English": [
      47,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Food Studies": [
      42,
      41,
      41,
      41,
      40
    ],
    "General Mathematics": [
      46,
      44,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      47,
      46,
      45,
      43,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      45,
      44,
      42,
      41
    ],
    "Languages:French": [
      42,
      42
    ],
    "Legal Studies": [
      47,
      43,
      42
    ],
    "Literature": [
      48,
      44,
      41
    ],
    "Music Repertoire Performance": [
      45,
      40
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      41,
      41,
      41
    ],
    "Psychology": [
      41,
      41,
      40
    ],
    "Theatre Studies": [
      45
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Loyola College, Watsonia": {
    "Ancient History": [
      43
    ],
    "Business Management": [
      43,
      42,
      40,
      40
    ],
    "Chemistry": [
      42
    ],
    "English": [
      45,
      43,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      42,
      41,
      40
    ],
    "General Mathematics": [
      50,
      43,
      41,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      43,
      42,
      41,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      40
    ],
    "Languages:Indonesian Second Language": [
      40
    ],
    "Languages:Italian": [
      43,
      41
    ],
    "Legal Studies": [
      46,
      40
    ],
    "Media": [
      44
    ],
    "Physics": [
      40
    ],
    "Product Design and Technologies": [
      43,
      42,
      40,
      40
    ],
    "Psychology": [
      44,
      42,
      42
    ],
    "Sociology": [
      41,
      41,
      40
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Luther College, Croydon Hills": {
    "Accounting": [
      42
    ],
    "Biology": [
      45,
      45,
      45,
      42,
      40
    ],
    "Business Management": [
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Chemistry": [
      47,
      40,
      40
    ],
    "English": [
      47,
      45,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      40
    ],
    "Food Studies": [
      47,
      41
    ],
    "General Mathematics": [
      46,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      41,
      40
    ],
    "History Revolutions": [
      41,
      41,
      40,
      40
    ],
    "Legal Studies": [
      49,
      45,
      45,
      45,
      44,
      43
    ],
    "Literature": [
      42
    ],
    "Mathematical Methods": [
      44,
      41,
      40,
      40
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Outdoor and Environmental Studies": [
      45,
      45,
      41
    ],
    "Physical Education": [
      42,
      41,
      40
    ],
    "Physics": [
      45,
      43,
      40
    ],
    "Politics": [
      43
    ],
    "Psychology": [
      46,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43
    ]
  },
  "Lyndale Secondary College, Dandenong North": {
    "English": [
      42,
      41,
      41,
      41,
      40
    ],
    "General Mathematics": [
      45,
      42
    ],
    "Legal Studies": [
      50
    ]
  },
  "Lyndhurst Secondary College, Cranbourne": {
    "Art Making and Exhibiting": [
      42
    ],
    "English": [
      41
    ],
    "General Mathematics": [
      48
    ],
    "Legal Studies": [
      44
    ]
  },
  "MacKillop Catholic Regional College Werribee": {
    "Accounting": [
      42
    ],
    "Applied Computing: Data Analytics": [
      43
    ],
    "Art Creative Practice": [
      41,
      41
    ],
    "Biology": [
      42,
      41,
      41
    ],
    "Business Management": [
      44,
      43
    ],
    "Chemistry": [
      41,
      40
    ],
    "Economics": [
      41
    ],
    "English": [
      46,
      45,
      42,
      40
    ],
    "Foundation Mathematics": [
      47,
      40,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      50,
      47,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      42,
      40
    ],
    "Literature": [
      44
    ],
    "Mathematical Methods": [
      42,
      40
    ],
    "Media": [
      47
    ],
    "Outdoor and Environmental Studies": [
      40
    ],
    "Physics": [
      44,
      40
    ],
    "Product Design and Technologies": [
      43,
      42,
      40
    ],
    "Psychology": [
      42
    ],
    "Theatre Studies": [
      44,
      41
    ]
  },
  "MacRobertson Girls High School, Melbourne": {
    "Accounting": [
      50,
      49,
      47,
      46,
      46,
      46,
      45,
      45,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Applied Computing: Software Development": [
      40
    ],
    "Art Making and Exhibiting": [
      50,
      44,
      41,
      40
    ],
    "Biology": [
      50,
      49,
      49,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      48,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      48,
      47,
      47,
      47,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "English": [
      50,
      49,
      48,
      48,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      50,
      50,
      50,
      49,
      48,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      44,
      43
    ],
    "Extended Investigation": [
      42,
      40,
      40
    ],
    "General Mathematics": [
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      48,
      48,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "Health and Human Development": [
      50,
      48,
      47,
      45,
      45,
      45,
      45,
      43,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      50,
      46,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      41,
      41,
      41,
      40
    ],
    "Languages:French": [
      44,
      43,
      40,
      40,
      40
    ],
    "Languages:Indonesian Second Language": [
      46,
      42,
      42
    ],
    "Languages:Japanese Second Language": [
      41
    ],
    "Legal Studies": [
      43,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "Literature": [
      45,
      42,
      41
    ],
    "Mathematical Methods": [
      47,
      47,
      47,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      46
    ],
    "Philosophy": [
      46,
      41,
      41,
      41
    ],
    "Physical Education": [
      50,
      48,
      47,
      44,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      46,
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Politics": [
      47
    ],
    "Psychology": [
      50,
      50,
      49,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      46,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      50,
      47,
      47,
      40,
      40
    ]
  },
  "Macleod College": {
    "Applied Computing: Data Analytics": [
      40
    ],
    "Art Creative Practice": [
      43
    ],
    "General Mathematics": [
      47
    ],
    "Health and Human Development": [
      40
    ]
  },
  "Maffra Secondary College": {
    "English": [
      40
    ],
    "Physical Education": [
      45
    ]
  },
  "Mallacoota P-12 College": {
    "Psychology": [
      40
    ]
  },
  "Manor Lakes P-12 College, Wyndham Vale": {
    "English": [
      40
    ],
    "Foundation Mathematics": [
      46,
      43,
      42,
      42,
      41,
      40
    ],
    "General Mathematics": [
      43,
      41,
      41
    ],
    "Sociology": [
      41,
      40
    ]
  },
  "Mansfield Secondary College": {
    "Biology": [
      50
    ],
    "Chemistry": [
      41
    ],
    "Legal Studies": [
      41
    ],
    "Literature": [
      43
    ],
    "Mathematical Methods": [
      41
    ],
    "Physical Education": [
      41
    ]
  },
  "Maranatha Christian School, Endeavour Hills": {
    "Art Making and Exhibiting": [
      44,
      41
    ],
    "Biology": [
      41
    ],
    "English": [
      42
    ],
    "General Mathematics": [
      40
    ],
    "Languages:Chinese Culture and Society": [
      41
    ]
  },
  "Marcellin College, Bulleen": {
    "Applied Computing: Software Development": [
      40
    ],
    "Biology": [
      44
    ],
    "Business Management": [
      40
    ],
    "English": [
      46,
      44,
      43
    ],
    "General Mathematics": [
      44,
      44,
      43,
      43,
      42,
      41,
      41
    ],
    "Geography": [
      45
    ],
    "Languages:Chinese Culture and Society": [
      44
    ],
    "Languages:Italian": [
      43
    ],
    "Mathematical Methods": [
      45,
      40
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      41,
      40,
      40
    ]
  },
  "Marian College - Sunshine, Sunshine West": {
    "Applied Computing: Data Analytics": [
      46,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      44
    ],
    "Chemistry": [
      44
    ],
    "English": [
      50,
      41,
      40,
      40
    ],
    "General Mathematics": [
      44,
      43,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Legal Studies": [
      43
    ],
    "Mathematical Methods": [
      40
    ],
    "Psychology": [
      40
    ]
  },
  "Marian College Ararat": {
    "Biology": [
      44,
      41
    ],
    "Physical Education": [
      44
    ]
  },
  "Maribyrnong College": {
    "Accounting": [
      43
    ],
    "Applied Computing: Software Development": [
      40
    ],
    "Business Management": [
      46,
      45,
      42,
      40,
      40
    ],
    "Chemistry": [
      45
    ],
    "English": [
      48,
      44,
      40
    ],
    "English Language": [
      42
    ],
    "English as an Additional Language": [
      43,
      43
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      45,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Literature": [
      45
    ],
    "Mathematical Methods": [
      46,
      42,
      41
    ],
    "Physics": [
      42
    ],
    "Psychology": [
      42,
      40
    ],
    "Specialist Mathematics": [
      44
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Marist - Sion College, Warragul": {
    "English": [
      40
    ],
    "Food Studies": [
      43
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      42,
      42,
      40,
      40
    ],
    "Physical Education": [
      44,
      44,
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Marist College Bendigo, Maiden Gully": {
    "Environmental Science": [
      41
    ],
    "General Mathematics": [
      43,
      42
    ],
    "Health and Human Development": [
      41,
      41
    ],
    "Outdoor and Environmental Studies": [
      44
    ],
    "Psychology": [
      41
    ]
  },
  "Mary Mackillop Catholic Regional College, Leongatha": {
    "Agricultural and Horticultural Studies": [
      42
    ],
    "Biology": [
      40,
      40,
      40
    ],
    "English": [
      41
    ],
    "General Mathematics": [
      40
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      46,
      44,
      44
    ]
  },
  "Marymede Catholic College, South Morang": {
    "Applied Computing: Software Development": [
      40
    ],
    "Business Management": [
      43,
      42,
      40
    ],
    "Chemistry": [
      40
    ],
    "English": [
      42,
      41
    ],
    "General Mathematics": [
      47,
      42,
      42,
      40,
      40
    ],
    "Health and Human Development": [
      41,
      41,
      40
    ],
    "Legal Studies": [
      42
    ],
    "Literature": [
      40
    ],
    "Media": [
      42
    ],
    "Psychology": [
      43
    ],
    "Religion and Society": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ]
  },
  "Mater Christi College, Belgrave": {
    "Accounting": [
      40
    ],
    "Art Creative Practice": [
      46,
      46,
      43,
      40
    ],
    "Biology": [
      47,
      43
    ],
    "English": [
      42,
      40,
      40
    ],
    "English Language": [
      50
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      41,
      40,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      41,
      41
    ],
    "Outdoor and Environmental Studies": [
      44,
      42,
      42,
      41,
      41,
      40
    ],
    "Physics": [
      41
    ],
    "Psychology": [
      43,
      41
    ],
    "Visual Communication Design": [
      44,
      42,
      40
    ]
  },
  "Matthew Flinders Girls Secondary College, Geelong": {
    "Biology": [
      41
    ],
    "English": [
      41
    ],
    "Environmental Science": [
      40
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      45,
      43,
      40
    ],
    "Music Contemporary Performance": [
      43
    ]
  },
  "Mazenod College, Mulgrave": {
    "Accounting": [
      42
    ],
    "Applied Computing: Software Development": [
      50,
      45
    ],
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      45,
      43,
      42,
      40
    ],
    "Chemistry": [
      42,
      40
    ],
    "Economics": [
      44
    ],
    "Engineering Studies (VCE VET)": [
      50,
      42,
      42,
      41,
      40,
      40
    ],
    "English": [
      46,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Furnishing": [
      47,
      43,
      41
    ],
    "General Mathematics": [
      50,
      50,
      50,
      49,
      49,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Geography": [
      47,
      43,
      43
    ],
    "History Revolutions": [
      44,
      43,
      41,
      41,
      41
    ],
    "Information and Commuications Technology (VCE VET)": [
      46
    ],
    "Languages:Chinese Culture and Society": [
      42,
      40
    ],
    "Languages:Italian": [
      41
    ],
    "Languages:Japanese Second Language": [
      40
    ],
    "Literature": [
      49,
      42,
      41,
      41,
      40,
      40
    ],
    "Mathematical Methods": [
      47,
      45,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Music Contemporary Performance": [
      43
    ],
    "Physical Education": [
      43
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      43
    ],
    "Religion and Society": [
      49,
      49,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      45,
      41
    ]
  },
  "McClelland Secondary College, Frankston": {
    "Biology": [
      42
    ],
    "English": [
      41,
      40
    ],
    "Environmental Science": [
      43
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      43,
      42
    ],
    "Philosophy": [
      43
    ]
  },
  "McKinnon Secondary College": {
    "Accounting": [
      43,
      43,
      43,
      40,
      40
    ],
    "Applied Computing: Data Analytics": [
      44,
      44
    ],
    "Applied Computing: Software Development": [
      48,
      44,
      42,
      42
    ],
    "Biology": [
      50,
      50,
      48,
      47,
      44,
      44,
      42,
      42,
      41,
      41,
      40
    ],
    "Business Management": [
      47,
      47,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Chemistry": [
      50,
      40,
      40
    ],
    "Economics": [
      45,
      44,
      41,
      40,
      40,
      40,
      40
    ],
    "English": [
      48,
      47,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      46,
      43,
      41,
      41,
      41,
      40
    ],
    "Food Studies": [
      45
    ],
    "General Mathematics": [
      50,
      50,
      50,
      49,
      48,
      48,
      48,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      49,
      47,
      46,
      45,
      44,
      44,
      43,
      43,
      41,
      41,
      41
    ],
    "History Revolutions": [
      44,
      43,
      43,
      42,
      41,
      40
    ],
    "Languages:French": [
      44,
      42,
      41
    ],
    "Legal Studies": [
      47,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Literature": [
      44
    ],
    "Mathematical Methods": [
      50,
      48,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Media": [
      45,
      41,
      41,
      41
    ],
    "Music Contemporary Performance": [
      41
    ],
    "Philosophy": [
      41,
      40
    ],
    "Physical Education": [
      50,
      48,
      47,
      46,
      45,
      45,
      45,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Physics": [
      41,
      41,
      40
    ],
    "Politics": [
      43,
      43,
      41,
      40
    ],
    "Psychology": [
      48,
      47,
      46,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      42,
      41
    ],
    "Visual Communication Design": [
      41,
      40
    ]
  },
  "Melba College, Croydon": {
    "Health and Human Development": [
      43
    ]
  },
  "Melbourne Girls Grammar, South Yarra": {
    "Accounting": [
      40
    ],
    "Art Creative Practice": [
      43
    ],
    "Biology": [
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      44,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      50,
      47,
      46,
      45,
      43,
      43,
      43,
      41,
      41,
      41
    ],
    "Classical Studies": [
      42
    ],
    "Drama": [
      45,
      43,
      40
    ],
    "English": [
      50,
      49,
      49,
      49,
      48,
      47,
      46,
      46,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      47,
      44,
      43,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      40,
      40
    ],
    "General Mathematics": [
      49,
      48,
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Geography": [
      46,
      46,
      40
    ],
    "Health and Human Development": [
      44,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "History Revolutions": [
      44,
      42,
      40,
      40
    ],
    "Languages:Chinese First Language": [
      46,
      44,
      42,
      41,
      40
    ],
    "Languages:French": [
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Languages:Italian": [
      44,
      40
    ],
    "Legal Studies": [
      49,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Literature": [
      50,
      47,
      46,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Mathematical Methods": [
      44,
      44,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Media": [
      43,
      43,
      42,
      42,
      42
    ],
    "Music Repertoire Performance": [
      50,
      41
    ],
    "Philosophy": [
      46,
      44,
      42
    ],
    "Physical Education": [
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      46,
      46,
      45,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      43
    ],
    "Psychology": [
      50,
      50,
      47,
      47,
      46,
      46,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      41,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      45,
      45,
      41
    ]
  },
  "Melbourne Girls' College, Richmond": {
    "Applied Computing: Software Development": [
      44,
      40
    ],
    "Art Making and Exhibiting": [
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Biology": [
      47,
      46,
      45,
      44,
      43,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      43,
      41
    ],
    "Dance": [
      48,
      43,
      42
    ],
    "English": [
      46,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      49
    ],
    "Environmental Science": [
      44,
      42,
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      46,
      46,
      45,
      44,
      43,
      43,
      43,
      41,
      40
    ],
    "Health and Human Development": [
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "History Revolutions": [
      45,
      45,
      40
    ],
    "Languages:French": [
      49,
      43,
      42,
      42
    ],
    "Legal Studies": [
      45,
      45,
      42,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      45,
      44,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Media": [
      47,
      46,
      44,
      40,
      40
    ],
    "Music Contemporary Performance": [
      40,
      40
    ],
    "Music Repertoire Performance": [
      45
    ],
    "Outdoor and Environmental Studies": [
      48,
      45,
      45,
      43
    ],
    "Physical Education": [
      47,
      44,
      42,
      41,
      41,
      40
    ],
    "Politics": [
      40
    ],
    "Product Design and Technologies": [
      49,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Psychology": [
      45,
      45,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Sociology": [
      45,
      43,
      43,
      43,
      42,
      42,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      40
    ],
    "Visual Communication Design": [
      49,
      47,
      44
    ]
  },
  "Melbourne Grammar School": {
    "Accounting": [
      47,
      46,
      43,
      42,
      40
    ],
    "Art Making and Exhibiting": [
      44
    ],
    "Australian History": [
      48,
      43
    ],
    "Biology": [
      48,
      47,
      46,
      46,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      49,
      48,
      47,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      50,
      50,
      50,
      50,
      49,
      48,
      48,
      47,
      47,
      47,
      46,
      46,
      46,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Classical Studies": [
      45,
      45,
      44,
      44,
      41,
      41,
      40,
      40
    ],
    "Economics": [
      49,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "English": [
      50,
      50,
      50,
      49,
      49,
      49,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      43,
      43,
      40,
      40
    ],
    "Environmental Science": [
      46,
      44,
      40,
      40
    ],
    "General Mathematics": [
      50,
      48,
      45,
      44,
      43,
      43,
      41,
      41,
      41,
      41,
      40
    ],
    "Geography": [
      47,
      43,
      43,
      42,
      42,
      41
    ],
    "History Revolutions": [
      50,
      50,
      47,
      45,
      45,
      42,
      41,
      41,
      40
    ],
    "Languages:Chinese Second Language": [
      46,
      41
    ],
    "Languages:Chinese Second Language Advanced": [
      43,
      42
    ],
    "Languages:French": [
      45,
      45,
      44,
      43
    ],
    "Languages:Japanese Second Language": [
      43,
      41,
      40
    ],
    "Languages:Latin": [
      47,
      44,
      42
    ],
    "Legal Studies": [
      47,
      46,
      46,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      50,
      49,
      48,
      48,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      50,
      50,
      50,
      48,
      47,
      47,
      47,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Philosophy": [
      50,
      48,
      47,
      45,
      43,
      41,
      41,
      40
    ],
    "Physical Education": [
      49,
      48,
      47,
      46,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      50,
      49,
      48,
      46,
      45,
      45,
      44,
      43,
      42,
      42,
      40
    ],
    "Psychology": [
      50,
      50,
      46,
      45,
      44,
      41,
      41,
      40
    ],
    "Specialist Mathematics": [
      48,
      47,
      46,
      45,
      45,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Systems Engineering": [
      47,
      45,
      40,
      40
    ],
    "Visual Communication Design": [
      45,
      42
    ]
  },
  "Melbourne High School, South Yarra": {
    "Accounting": [
      50,
      49,
      47,
      47,
      46,
      46,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Algorithmics (HESS)": [
      48,
      44,
      42,
      41
    ],
    "Applied Computing: Software Development": [
      50,
      50,
      46,
      45,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      45
    ],
    "Biology": [
      50,
      49,
      49,
      48,
      48,
      47,
      47,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      47,
      45,
      44,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      50,
      48,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      50,
      50,
      50,
      49,
      49,
      48,
      47,
      47,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "English": [
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      48,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      50,
      50,
      48,
      46,
      46,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      45,
      44,
      41
    ],
    "Extended Investigation": [
      44
    ],
    "General Mathematics": [
      50,
      48,
      48,
      48,
      47,
      47,
      47,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Geography": [
      50,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      43
    ],
    "Languages:French": [
      41
    ],
    "Languages:German": [
      41
    ],
    "Languages:Indonesian Second Language": [
      42,
      41,
      40
    ],
    "Languages:Japanese Second Language": [
      50,
      44,
      40,
      40
    ],
    "Legal Studies": [
      42,
      40,
      40
    ],
    "Literature": [
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      50,
      50,
      50,
      50,
      49,
      49,
      49,
      49,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      41
    ],
    "Music Inquiry": [
      43,
      41,
      41
    ],
    "Philosophy": [
      40
    ],
    "Physical Education": [
      50,
      47,
      47,
      46,
      46,
      43,
      43,
      41,
      41,
      41
    ],
    "Physics": [
      50,
      48,
      48,
      48,
      48,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Psychology": [
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      48,
      48,
      47,
      47,
      46,
      46,
      46,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Melbourne Rudolf Steiner School, Warranwood": {
    "Art Making and Exhibiting": [
      41,
      41,
      41
    ],
    "Biology": [
      41
    ],
    "Drama": [
      43
    ],
    "English": [
      40
    ],
    "Music Contemporary Performance": [
      41
    ]
  },
  "Melbourne Swedish Community School Ass Inc., Toorak": {
    "Languages:Swedish": [
      40
    ]
  },
  "Melton Christian College, Brookfield": {
    "General Mathematics": [
      40
    ]
  },
  "Melton Secondary College": {
    "Business Management": [
      42
    ]
  },
  "Mentone Girls' Grammar School": {
    "Art Creative Practice": [
      46,
      45
    ],
    "Biology": [
      46,
      41,
      41,
      40
    ],
    "Business Management": [
      43,
      41,
      40
    ],
    "Creative and Digital Media (VCE VET)": [
      40
    ],
    "English": [
      50,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      50,
      43,
      42,
      42,
      40
    ],
    "Geography": [
      45
    ],
    "Health and Human Development": [
      47,
      45,
      44,
      44,
      43,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      47,
      42,
      41,
      41
    ],
    "Languages:French": [
      45,
      41
    ],
    "Languages:German": [
      41
    ],
    "Legal Studies": [
      49,
      41
    ],
    "Literature": [
      48
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      49,
      48,
      47,
      46,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Politics": [
      45
    ],
    "Psychology": [
      45,
      43,
      42,
      42,
      41
    ],
    "Theatre Studies": [
      44,
      43
    ]
  },
  "Mentone Girls' Secondary College": {
    "Art Creative Practice": [
      40
    ],
    "Biology": [
      44,
      43,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      47,
      45,
      42
    ],
    "Chemistry": [
      40
    ],
    "English": [
      47,
      46,
      44,
      44,
      43,
      41,
      40,
      40,
      40
    ],
    "Food Studies": [
      44
    ],
    "General Mathematics": [
      47,
      44,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      49,
      48,
      43,
      43
    ],
    "Legal Studies": [
      49,
      47,
      47,
      45,
      45,
      44,
      42,
      42
    ],
    "Mathematical Methods": [
      40,
      40
    ],
    "Media": [
      46,
      40
    ],
    "Physics": [
      43,
      40
    ],
    "Psychology": [
      48,
      47,
      46,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Sociology": [
      45,
      44
    ],
    "Theatre Studies": [
      46
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Mentone Grammar School": {
    "Accounting": [
      43,
      43,
      43,
      43
    ],
    "Applied Computing: Software Development": [
      42,
      41
    ],
    "Art Creative Practice": [
      49,
      40
    ],
    "Biology": [
      48,
      45,
      40,
      40,
      40
    ],
    "Business Management": [
      49,
      48,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      44,
      41,
      40,
      40
    ],
    "Drama": [
      44
    ],
    "Economics": [
      50,
      48,
      45,
      44,
      44,
      42,
      41,
      41
    ],
    "English": [
      50,
      50,
      48,
      46,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      44,
      43,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Food Studies": [
      45,
      43
    ],
    "General Mathematics": [
      50,
      50,
      46,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40
    ],
    "Geography": [
      45,
      40
    ],
    "Health and Human Development": [
      50,
      48,
      46,
      46,
      45,
      45,
      44,
      43,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Legal Studies": [
      48,
      47,
      43,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      50,
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      50,
      49,
      44,
      44,
      42,
      42,
      42,
      40
    ],
    "Media": [
      48,
      40
    ],
    "Physical Education": [
      50,
      49,
      46,
      45,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      50,
      44,
      41,
      41,
      40,
      40
    ],
    "Product Design and Technologies": [
      45,
      42
    ],
    "Psychology": [
      48,
      47,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "Sociology": [
      46,
      45,
      43,
      42,
      40,
      40
    ],
    "Specialist Mathematics": [
      43,
      40
    ],
    "Visual Communication Design": [
      44,
      43,
      42,
      41,
      40
    ]
  },
  "Mercy College, Coburg": {
    "English": [
      40
    ],
    "Legal Studies": [
      40
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Mercy Regional College - Camperdown": {
    "Biology": [
      40
    ],
    "English": [
      47
    ],
    "Legal Studies": [
      43
    ],
    "Physical Education": [
      44,
      42
    ]
  },
  "Mernda Central P-12 College": {
    "Business Management": [
      48
    ],
    "General Mathematics": [
      41,
      41
    ],
    "Literature": [
      43
    ],
    "Psychology": [
      40
    ]
  },
  "Mernda Hills Christian College": {
    "Psychology": [
      40
    ]
  },
  "Methodist Ladies' College, Kew": {
    "Accounting": [
      49
    ],
    "Ancient History": [
      42
    ],
    "Art Creative Practice": [
      47,
      42,
      40
    ],
    "Art Making and Exhibiting": [
      43,
      40
    ],
    "Biology": [
      50,
      50,
      50,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Business (VCE VET)": [
      42
    ],
    "Business Management": [
      44,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      47,
      46,
      46,
      45,
      45,
      45,
      43,
      43,
      42,
      42,
      40,
      40
    ],
    "Economics": [
      41
    ],
    "English": [
      50,
      50,
      50,
      50,
      48,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      50,
      46,
      44,
      43,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      49,
      43,
      42,
      41
    ],
    "Food Studies": [
      50,
      47,
      44,
      40
    ],
    "General Mathematics": [
      50,
      50,
      48,
      48,
      45,
      45,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      49,
      46,
      44,
      43,
      43,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      48,
      48,
      47,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      50,
      46,
      45,
      43
    ],
    "Hospitality": [
      49,
      48
    ],
    "Hospitality (Cookery)(VCE VET)": [
      48,
      47,
      46,
      45,
      42,
      40,
      40
    ],
    "Languages:Chinese First Language": [
      42
    ],
    "Languages:Chinese Second Language": [
      42,
      41,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      40
    ],
    "Languages:French": [
      44
    ],
    "Languages:Japanese Second Language": [
      43,
      41
    ],
    "Legal Studies": [
      46,
      46,
      46,
      45,
      44,
      43,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Literature": [
      49,
      47,
      45,
      40
    ],
    "Mathematical Methods": [
      45,
      45,
      44,
      43,
      43,
      43,
      41,
      40,
      40
    ],
    "Media": [
      46,
      45,
      45,
      41,
      41,
      40
    ],
    "Music Repertoire Performance": [
      42
    ],
    "Physical Education": [
      47,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Physics": [
      43,
      42
    ],
    "Politics": [
      42,
      42,
      41,
      40
    ],
    "Product Design and Technologies": [
      45,
      45,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Psychology": [
      50,
      50,
      50,
      47,
      47,
      45,
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      46,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      44,
      41
    ]
  },
  "Mildura Senior College": {
    "Business (VCE VET)": [
      42
    ],
    "Business Management": [
      42
    ],
    "Engineering Studies (VCE VET)": [
      42
    ],
    "English": [
      40,
      40
    ],
    "Food Studies": [
      45
    ],
    "General Mathematics": [
      46,
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Mathematical Methods": [
      43,
      41
    ],
    "Media": [
      40
    ],
    "Music Performance (VCE VET)": [
      40
    ],
    "Psychology": [
      40,
      40
    ],
    "Sociology": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      46
    ],
    "Systems Engineering": [
      40
    ]
  },
  "Mill Park Secondary College, Epping": {
    "Biology": [
      40,
      40
    ],
    "Chemistry": [
      40
    ],
    "English": [
      40,
      40
    ],
    "English as an Additional Language": [
      40,
      40,
      40
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      46,
      43,
      41,
      41
    ],
    "Legal Studies": [
      47
    ],
    "Mathematical Methods": [
      41
    ],
    "Media": [
      42,
      42
    ],
    "Physics": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "Minaret College - Officer Campus": {
    "Biology": [
      44
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      46
    ],
    "Physics": [
      44
    ],
    "Religion and Society": [
      41
    ]
  },
  "Minaret College - Springvale Campus": {
    "Business Management": [
      41,
      41,
      40
    ],
    "English": [
      41,
      40
    ],
    "General Mathematics": [
      43,
      42,
      42,
      41,
      41,
      41
    ],
    "Health and Human Development": [
      40
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Psychology": [
      41
    ]
  },
  "Mirboo North Secondary College": {
    "English": [
      41,
      40
    ],
    "Psychology": [
      42
    ]
  },
  "Monbulk College": {
    "Art Creative Practice": [
      45,
      44
    ],
    "Chemistry": [
      40
    ],
    "English": [
      47
    ],
    "Mathematical Methods": [
      42
    ],
    "Visual Communication Design": [
      50,
      43
    ]
  },
  "Monivae College, Hamilton": {
    "Agricultural and Horticultural Studies": [
      46,
      44
    ],
    "English": [
      40,
      40
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      50,
      43
    ],
    "Religion and Society": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      41
    ]
  },
  "Montmorency Secondary College": {
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      42,
      41,
      40
    ],
    "Business Management": [
      43,
      40
    ],
    "English": [
      48,
      44,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      45,
      42,
      41,
      41
    ],
    "Health and Human Development": [
      45,
      41,
      41,
      41,
      40,
      40
    ],
    "History Revolutions": [
      41,
      41
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Physical Education": [
      41,
      40
    ],
    "Physics": [
      41
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "Mooroolbark College": {
    "Art Making and Exhibiting": [
      40
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      50,
      41,
      41
    ],
    "Health and Human Development": [
      42
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Outdoor and Environmental Studies": [
      44,
      42
    ],
    "Physical Education": [
      40
    ]
  },
  "Mordialloc College": {
    "Art Making and Exhibiting": [
      43,
      41
    ],
    "Biology": [
      50,
      42,
      41,
      40,
      40
    ],
    "Business Management": [
      47
    ],
    "Drama": [
      43
    ],
    "English": [
      48,
      48,
      46,
      46,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Environmental Science": [
      40,
      40
    ],
    "Food Studies": [
      49,
      47,
      42,
      42
    ],
    "General Mathematics": [
      45,
      44,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      46,
      44,
      42
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Media": [
      45,
      43
    ],
    "Music Performance (VCE VET)": [
      48
    ],
    "Physical Education": [
      45
    ],
    "Physics": [
      41
    ],
    "Psychology": [
      42,
      41,
      41
    ],
    "Visual Communication Design": [
      41,
      41,
      41
    ]
  },
  "Mornington Secondary College": {
    "Art Making and Exhibiting": [
      40
    ],
    "English": [
      48
    ],
    "Foundation Mathematics": [
      41
    ],
    "General Mathematics": [
      42,
      40
    ],
    "Health and Human Development": [
      44,
      42,
      41,
      41
    ],
    "Mathematical Methods": [
      43
    ],
    "Psychology": [
      42
    ],
    "Systems Engineering": [
      41,
      40
    ]
  },
  "Mortlake College": {
    "Psychology": [
      42
    ]
  },
  "Mount Alexander 7-12 College, Flemington": {
    "Applied Computing: Software Development": [
      45,
      41
    ],
    "Biology": [
      45
    ],
    "Business Management": [
      43,
      42
    ],
    "English": [
      47,
      42,
      40
    ],
    "English as an Additional Language": [
      46
    ],
    "General Mathematics": [
      50,
      41,
      41,
      41
    ],
    "Mathematical Methods": [
      45
    ],
    "Psychology": [
      42
    ],
    "Systems Engineering": [
      45
    ]
  },
  "Mount Clear College": {
    "English": [
      41
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      43
    ],
    "Health and Human Development": [
      45
    ],
    "Psychology": [
      40
    ]
  },
  "Mount Eliza Secondary College": {
    "Biology": [
      41
    ],
    "Food Studies": [
      42
    ],
    "Foundation Mathematics": [
      42,
      40
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      47
    ],
    "Mathematical Methods": [
      42
    ],
    "Psychology": [
      40
    ]
  },
  "Mount Erin College, Frankston South": {
    "Mathematical Methods": [
      41
    ]
  },
  "Mount Evelyn Christian School": {
    "General Mathematics": [
      45,
      40
    ]
  },
  "Mount Lilydale Mercy College": {
    "English": [
      40
    ],
    "Food Studies": [
      41,
      40
    ],
    "General Mathematics": [
      43,
      41,
      40
    ],
    "Health and Human Development": [
      43,
      42,
      41
    ],
    "Languages:Italian": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      46,
      45,
      42
    ]
  },
  "Mount Ridley P-12 College, Craigieburn": {
    "Art Creative Practice": [
      42
    ],
    "Biology": [
      44
    ],
    "Business Management": [
      42,
      42,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Literature": [
      40
    ],
    "Physics": [
      43,
      42
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Mount Rowan Secondary College, Wendouree": {
    "English": [
      40
    ],
    "Foundation Mathematics": [
      42
    ]
  },
  "Mount Scopus Memorial College, Burwood": {
    "Chemistry": [
      47,
      42,
      40
    ],
    "English": [
      47,
      46,
      45,
      44,
      43,
      41,
      40
    ],
    "General Mathematics": [
      47,
      41,
      40
    ],
    "Health and Human Development": [
      44
    ],
    "History Revolutions": [
      47,
      40
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Literature": [
      46
    ],
    "Mathematical Methods": [
      43,
      41,
      40
    ],
    "Physical Education": [
      42
    ],
    "Physics": [
      44,
      40
    ],
    "Psychology": [
      46,
      40,
      40
    ],
    "Religion and Society": [
      50,
      43,
      41,
      40
    ],
    "Theatre Studies": [
      50
    ]
  },
  "Mount St Joseph Girls' College, Altona": {
    "Accounting": [
      40
    ],
    "Business Management": [
      50,
      40,
      40,
      40
    ],
    "English Language": [
      48
    ],
    "Food Studies": [
      42
    ],
    "Foundation Mathematics": [
      41
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      45,
      42,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Legal Studies": [
      42
    ],
    "Media": [
      40,
      40
    ],
    "Music Performance (VCE VET)": [
      45,
      41
    ],
    "Physical Education": [
      41
    ],
    "Product Design and Technologies": [
      50
    ],
    "Psychology": [
      43,
      42,
      41,
      40
    ]
  },
  "Mount Waverley Secondary College": {
    "Accounting": [
      43,
      41
    ],
    "Art Making and Exhibiting": [
      44,
      42
    ],
    "Biology": [
      50,
      46,
      44,
      44,
      44,
      43,
      40,
      40
    ],
    "Business Management": [
      44,
      41,
      40
    ],
    "Chemistry": [
      50,
      40,
      40
    ],
    "Economics": [
      40
    ],
    "English": [
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      42,
      41
    ],
    "English as an Additional Language": [
      43,
      40,
      40
    ],
    "Foundation Mathematics": [
      50,
      44
    ],
    "General Mathematics": [
      50,
      46,
      46,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Geography": [
      43
    ],
    "Health and Human Development": [
      42,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Languages:German": [
      49
    ],
    "Languages:Japanese Second Language": [
      50,
      45,
      41
    ],
    "Legal Studies": [
      50,
      41,
      40
    ],
    "Literature": [
      46
    ],
    "Mathematical Methods": [
      44,
      43,
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Music Performance (VCE VET)": [
      50
    ],
    "Physical Education": [
      45,
      42,
      42
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      44,
      43,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      50
    ],
    "Systems Engineering": [
      41,
      41,
      40,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Mt Hira College, Keysborough": {
    "Business Management": [
      48,
      48,
      48,
      46,
      42
    ],
    "General Mathematics": [
      50
    ],
    "Health and Human Development": [
      41
    ],
    "Languages:Turkish": [
      43
    ],
    "Psychology": [
      43
    ]
  },
  "Mullauna College, Mitcham": {
    "Accounting": [
      42,
      41
    ],
    "Art Making and Exhibiting": [
      42,
      42,
      41
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      50,
      47,
      44,
      40
    ],
    "Chemistry": [
      41
    ],
    "English": [
      44,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      42
    ],
    "History Revolutions": [
      44,
      42
    ],
    "Legal Studies": [
      46,
      41
    ],
    "Physical Education": [
      44,
      40,
      40,
      40
    ],
    "Physics": [
      49,
      42
    ],
    "Psychology": [
      40
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "Nagle College, Bairnsdale": {
    "Biology": [
      42
    ],
    "English": [
      45
    ],
    "General Mathematics": [
      43,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "History Revolutions": [
      41
    ],
    "Physical Education": [
      45
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "Narre Warren South P-12 College": {
    "Applied Computing: Data Analytics": [
      40
    ],
    "Biology": [
      43
    ],
    "Business Management": [
      40
    ],
    "General Mathematics": [
      50,
      42,
      41
    ],
    "Health and Human Development": [
      42,
      40
    ],
    "Music Performance (VCE VET)": [
      41,
      41
    ]
  },
  "Nazareth College, Noble Park North": {
    "Applied Computing: Data Analytics": [
      44
    ],
    "Biology": [
      40
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      50
    ],
    "Product Design and Technologies": [
      45
    ]
  },
  "Nestoras College, Doncaster": {
    "Languages:Greek": [
      40
    ]
  },
  "New Century Chinese Language School, Burwood East": {
    "Languages:Chinese Second Language": [
      40
    ]
  },
  "New Chinese Language and Culture School, Thornbury": {
    "Languages:Chinese First Language": [
      45,
      43,
      42
    ],
    "Languages:Chinese Second Language": [
      44,
      41,
      41,
      40,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      48,
      41
    ]
  },
  "Newcomb Secondary College": {
    "Art Making and Exhibiting": [
      43
    ]
  },
  "Newhaven College, Rhyll": {
    "Art Creative Practice": [
      45,
      43
    ],
    "Biology": [
      46,
      42,
      42,
      41
    ],
    "Chemistry": [
      42,
      40,
      40
    ],
    "English": [
      46,
      41,
      40,
      40,
      40
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      40,
      40,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      40
    ],
    "Music Contemporary Performance": [
      43,
      40,
      40
    ],
    "Music Performance (VCE VET)": [
      49
    ],
    "Outdoor and Environmental Studies": [
      44,
      43,
      40
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      43,
      42,
      42,
      40
    ],
    "Systems Engineering": [
      48
    ],
    "Theatre Studies": [
      42
    ]
  },
  "Nhill College": {
    "General Mathematics": [
      44
    ]
  },
  "North Geelong Secondary College, Geelong North": {
    "Business Management": [
      43
    ],
    "English": [
      40
    ],
    "Physical Education": [
      41
    ],
    "Psychology": [
      40
    ]
  },
  "Northcote High School": {
    "Biology": [
      50,
      43,
      43,
      41,
      40
    ],
    "Business Management": [
      50,
      45,
      43,
      43,
      41,
      41,
      41,
      40
    ],
    "Chemistry": [
      42,
      40
    ],
    "Economics": [
      42,
      41,
      40,
      40
    ],
    "English": [
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      42
    ],
    "Food Studies": [
      41
    ],
    "Foundation Mathematics": [
      48,
      45
    ],
    "General Mathematics": [
      48,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      43
    ],
    "Health and Human Development": [
      41,
      41
    ],
    "History Revolutions": [
      45,
      40
    ],
    "Legal Studies": [
      46,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Literature": [
      41,
      40
    ],
    "Mathematical Methods": [
      49,
      49,
      48,
      45,
      44,
      43,
      42,
      40,
      40
    ],
    "Media": [
      47,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Philosophy": [
      47,
      46,
      46,
      44,
      42
    ],
    "Physical Education": [
      46,
      45,
      41,
      40,
      40
    ],
    "Physics": [
      47,
      46,
      44,
      44,
      44,
      42,
      42,
      42,
      41,
      41
    ],
    "Politics": [
      42,
      41
    ],
    "Psychology": [
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      45,
      42,
      40
    ],
    "Visual Communication Design": [
      41,
      41,
      40
    ]
  },
  "Northern Bay P-12 College, Corio": {
    "Psychology": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      42
    ]
  },
  "Northern College of the Arts and Technology, Preston East": {
    "Music Inquiry": [
      40
    ],
    "Music Performance (VCE VET)": [
      50
    ]
  },
  "Northside Christian College, Bundoora": {
    "Chemistry": [
      42
    ],
    "English": [
      41,
      40
    ],
    "English as an Additional Language": [
      46
    ],
    "General Mathematics": [
      48,
      48,
      46,
      45,
      43,
      42,
      40
    ],
    "Health and Human Development": [
      45
    ],
    "Literature": [
      44
    ]
  },
  "Norwood Secondary College, Ringwood": {
    "Biology": [
      45
    ],
    "English": [
      41,
      40,
      40
    ],
    "Food Studies": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      42
    ],
    "Health and Human Development": [
      43,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Legal Studies": [
      40
    ],
    "Media": [
      46,
      46
    ]
  },
  "Nossal High School, Berwick": {
    "Accounting": [
      47,
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41
    ],
    "Applied Computing: Software Development": [
      45,
      43,
      41
    ],
    "Biology": [
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      48,
      46,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      50,
      50,
      49,
      49,
      48,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40
    ],
    "Chemistry": [
      48,
      47,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      50,
      43,
      43,
      42,
      42,
      41
    ],
    "English": [
      50,
      49,
      48,
      47,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      50,
      48,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      48,
      47,
      44,
      42,
      42,
      41
    ],
    "General Mathematics": [
      49,
      48,
      48,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      50,
      49,
      48,
      47,
      46,
      46,
      45,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Languages:Japanese Second Language": [
      47,
      40
    ],
    "Legal Studies": [
      47,
      46,
      43,
      42,
      41,
      41,
      41,
      41
    ],
    "Literature": [
      50,
      45,
      43,
      40,
      40
    ],
    "Mathematical Methods": [
      50,
      48,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Philosophy": [
      45,
      42
    ],
    "Physical Education": [
      50,
      49,
      47,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      43,
      42,
      41
    ],
    "Physics": [
      50,
      49,
      47,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Politics": [
      45,
      41,
      40
    ],
    "Psychology": [
      48,
      48,
      46,
      46,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      48,
      46,
      44,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      46
    ]
  },
  "Notre Dame College, Shepparton": {
    "Art Making and Exhibiting": [
      40,
      40
    ],
    "Biology": [
      40,
      40,
      40
    ],
    "Business Management": [
      41,
      40,
      40
    ],
    "Creative and Digital Media (VCE VET)": [
      42
    ],
    "English": [
      43,
      40,
      40
    ],
    "Environmental Science": [
      40
    ],
    "Food Studies": [
      45,
      41,
      41,
      41
    ],
    "Foundation Mathematics": [
      43
    ],
    "Health and Human Development": [
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      41
    ],
    "Mathematical Methods": [
      43
    ],
    "Media": [
      40
    ],
    "Outdoor and Environmental Studies": [
      41
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      40,
      40
    ],
    "Theatre Studies": [
      41
    ]
  },
  "Nunawading Christian College - Secondary Campus": {
    "English": [
      46,
      44,
      44,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      42
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      44
    ],
    "Physics": [
      41,
      40
    ],
    "Sociology": [
      44,
      40
    ],
    "Texts and Traditions": [
      46,
      42,
      40
    ]
  },
  "Oakleigh Grammar": {
    "Biology": [
      45
    ],
    "Business Management": [
      41
    ],
    "English": [
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      47,
      44,
      43,
      41
    ],
    "Languages:Greek": [
      47
    ],
    "Legal Studies": [
      40
    ],
    "Physical Education": [
      44
    ]
  },
  "Oberon High School, Belmont": {
    "Chemistry": [
      40
    ],
    "English": [
      40
    ],
    "Food Studies": [
      44,
      42
    ],
    "General Mathematics": [
      46,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Physical Education": [
      46,
      46
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      40
    ],
    "Systems Engineering": [
      45,
      42,
      40
    ]
  },
  "Officer Secondary College": {
    "Business Management": [
      44,
      43,
      42
    ],
    "Environmental Science": [
      42
    ],
    "General Mathematics": [
      42
    ],
    "Information and Commuications Technology (VCE VET)": [
      41
    ],
    "Physics": [
      46,
      42
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "OneSchool Global Vic, Melton": {
    "Business (VCE VET)": [
      49,
      49,
      48,
      46,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Economics": [
      41
    ],
    "English": [
      40
    ],
    "Food Studies": [
      47
    ],
    "General Mathematics": [
      43,
      40,
      40,
      40
    ],
    "History Revolutions": [
      45
    ],
    "Legal Studies": [
      40
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "Our Lady of Mercy College, Heidelberg": {
    "Art Creative Practice": [
      43,
      43,
      40
    ],
    "Biology": [
      49,
      45,
      44,
      43,
      40,
      40,
      40
    ],
    "Business Management": [
      46,
      45,
      43,
      43,
      43,
      42,
      40,
      40
    ],
    "Chemistry": [
      47,
      45,
      41
    ],
    "Drama": [
      45,
      44,
      41
    ],
    "English": [
      46,
      45,
      44,
      42,
      42,
      42,
      42
    ],
    "English Language": [
      42,
      42
    ],
    "Food Studies": [
      42
    ],
    "Foundation Mathematics": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      45,
      42,
      42,
      42,
      42,
      40,
      40,
      40
    ],
    "Health Services": [
      45,
      41,
      41
    ],
    "Health and Human Development": [
      49,
      43,
      42,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Legal Studies": [
      47,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      44,
      43,
      40,
      40
    ],
    "Media": [
      42,
      42,
      41,
      40,
      40
    ],
    "Music Inquiry": [
      41
    ],
    "Physical Education": [
      46,
      41,
      40
    ],
    "Physics": [
      47,
      43,
      40
    ],
    "Psychology": [
      45,
      45,
      45,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      43
    ],
    "Sport and Recreation (VCE VET)": [
      44,
      44,
      43
    ],
    "Theatre Studies": [
      42
    ],
    "Visual Communication Design": [
      47,
      43,
      42,
      40
    ]
  },
  "Our Lady of Sacred Heart College, Bentleigh": {
    "Biology": [
      46,
      46,
      40
    ],
    "Business Management": [
      40
    ],
    "Community Services (VCE VET)": [
      42
    ],
    "English": [
      41
    ],
    "Food Studies": [
      47,
      45,
      43,
      40
    ],
    "General Mathematics": [
      44,
      40,
      40
    ],
    "Health and Human Development": [
      42,
      41
    ],
    "Physical Education": [
      48
    ],
    "Psychology": [
      44,
      44,
      44,
      43,
      41
    ]
  },
  "Our Lady of Sion College, Box Hill": {
    "Art Creative Practice": [
      50,
      41
    ],
    "Art Making and Exhibiting": [
      45,
      42,
      41,
      41,
      40,
      40
    ],
    "Biology": [
      43,
      42
    ],
    "Business Management": [
      45,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Drama": [
      41
    ],
    "English": [
      47,
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      43,
      40,
      40
    ],
    "General Mathematics": [
      46,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      47,
      46,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41
    ],
    "History Revolutions": [
      41,
      41,
      40
    ],
    "Hospitality": [
      40
    ],
    "Languages:Italian": [
      45,
      43,
      40
    ],
    "Legal Studies": [
      50,
      45,
      44,
      44,
      43,
      43,
      42,
      41,
      40
    ],
    "Literature": [
      41,
      40
    ],
    "Media": [
      41,
      40
    ],
    "Physical Education": [
      40,
      40
    ],
    "Psychology": [
      43,
      43,
      42,
      42,
      42,
      40
    ],
    "Texts and Traditions": [
      41
    ]
  },
  "Ouyen P-12 College": {
    "General Mathematics": [
      45
    ],
    "Legal Studies": [
      40
    ]
  },
  "Overnewton Anglican Community College - Yirramboi Campus, Keilor": {
    "Accounting": [
      46,
      44
    ],
    "Business Management": [
      50,
      45,
      43,
      42,
      41,
      40
    ],
    "Chemistry": [
      50,
      42,
      40
    ],
    "English": [
      47,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      47,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "Geography": [
      40
    ],
    "History Revolutions": [
      46
    ],
    "Legal Studies": [
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Music Inquiry": [
      47,
      40
    ],
    "Physical Education": [
      42,
      41,
      41
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      42,
      42,
      40
    ],
    "Specialist Mathematics": [
      47
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Oxley Christian College, Chirnside Park": {
    "Art Creative Practice": [
      40
    ],
    "Biology": [
      45,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      50,
      46,
      45
    ],
    "Chemistry": [
      46,
      46,
      45,
      42
    ],
    "Drama": [
      41
    ],
    "English": [
      48,
      46,
      44,
      42,
      41,
      41,
      41,
      40
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      40
    ],
    "Literature": [
      43
    ],
    "Mathematical Methods": [
      42,
      42,
      42,
      41
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      47,
      46,
      40,
      40
    ],
    "Specialist Mathematics": [
      41,
      40
    ],
    "Visual Communication Design": [
      46,
      45,
      45,
      44
    ]
  },
  "Ozford College, Melbourne": {
    "Languages:Vietnamese First Language": [
      41
    ]
  },
  "Padua College, Mornington": {
    "Art Creative Practice": [
      42,
      40,
      40
    ],
    "Biology": [
      42
    ],
    "Business Management": [
      47,
      42,
      40,
      40
    ],
    "Chemistry": [
      46
    ],
    "Economics": [
      40
    ],
    "English": [
      45,
      41,
      41,
      41,
      40
    ],
    "English Language": [
      40
    ],
    "Health and Human Development": [
      44,
      43,
      41,
      41,
      40
    ],
    "History Revolutions": [
      41,
      40
    ],
    "Legal Studies": [
      44,
      43,
      42
    ],
    "Mathematical Methods": [
      42,
      42,
      41,
      40
    ],
    "Music Contemporary Performance": [
      42,
      41,
      40
    ],
    "Music Performance (VCE VET)": [
      46,
      40
    ],
    "Outdoor and Environmental Studies": [
      43,
      41,
      41,
      40
    ],
    "Philosophy": [
      40
    ],
    "Physical Education": [
      50
    ],
    "Physics": [
      50
    ],
    "Product Design and Technologies": [
      43
    ],
    "Psychology": [
      41,
      41
    ],
    "Religion and Society": [
      45
    ],
    "Specialist Mathematics": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      42,
      42,
      40
    ],
    "Systems Engineering": [
      44
    ]
  },
  "Parade College, Bundoora": {
    "Accounting": [
      43,
      42,
      40
    ],
    "Applied Computing: Software Development": [
      42,
      40
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      44
    ],
    "Chemistry": [
      42,
      42,
      40,
      40
    ],
    "English": [
      47,
      46,
      43,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Food Studies": [
      47,
      40
    ],
    "General Mathematics": [
      43,
      43,
      42,
      40,
      40,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Legal Studies": [
      50,
      40
    ],
    "Literature": [
      47
    ],
    "Mathematical Methods": [
      46,
      42,
      41,
      41,
      40,
      40
    ],
    "Physical Education": [
      44,
      43,
      42,
      41,
      40
    ],
    "Physics": [
      43,
      42
    ],
    "Psychology": [
      44,
      44,
      41
    ],
    "Systems Engineering": [
      50,
      40
    ],
    "Visual Communication Design": [
      42,
      42
    ]
  },
  "Parkdale Secondary College, Mordialloc": {
    "Applied Computing: Software Development": [
      41
    ],
    "Biology": [
      43
    ],
    "Business Management": [
      42,
      40
    ],
    "Chemistry": [
      49,
      40
    ],
    "English": [
      44,
      41
    ],
    "English as an Additional Language": [
      42
    ],
    "Foundation Mathematics": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      47,
      46,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      41
    ],
    "Media": [
      43,
      41,
      41
    ],
    "Physical Education": [
      44,
      42
    ],
    "Physics": [
      50,
      42
    ],
    "Product Design and Technologies": [
      41
    ],
    "Specialist Mathematics": [
      44
    ],
    "Sport and Recreation (VCE VET)": [
      49,
      40
    ],
    "Theatre Studies": [
      43,
      42
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Pascoe Vale Girls Secondary College": {
    "English": [
      41,
      40
    ],
    "General Mathematics": [
      45
    ],
    "Psychology": [
      45
    ]
  },
  "Patterson River Secondary College, Carrum": {
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      44
    ],
    "General Mathematics": [
      40
    ],
    "History Revolutions": [
      40
    ],
    "Languages:German": [
      43
    ],
    "Outdoor and Environmental Studies": [
      40
    ],
    "Physical Education": [
      43,
      40,
      40
    ]
  },
  "Peninsula Grammar - Heze Number 1 Middle School, Shandong Province": {
    "Languages:Chinese First Language": [
      42
    ],
    "Mathematical Methods": [
      41
    ],
    "Physics": [
      44
    ]
  },
  "Peninsula Grammar - Pudong Foreign Language School, Shanghai 201203": {
    "English as an Additional Language": [
      47,
      42
    ],
    "General Mathematics": [
      43,
      42,
      40
    ]
  },
  "Peninsula Grammar, Mount Eliza": {
    "Accounting": [
      44,
      41
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      45,
      42
    ],
    "Business Management": [
      46,
      46,
      45,
      43,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      40,
      40
    ],
    "Drama": [
      42
    ],
    "Economics": [
      41,
      41
    ],
    "English": [
      47,
      45,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "Food Studies": [
      43
    ],
    "Foundation Mathematics": [
      50,
      45,
      44,
      44,
      43,
      42,
      40
    ],
    "General Mathematics": [
      50,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      45
    ],
    "History Revolutions": [
      47,
      44,
      40
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Mathematical Methods": [
      42,
      41
    ],
    "Media": [
      43,
      41,
      40,
      40
    ],
    "Music Repertoire Performance": [
      40
    ],
    "Physical Education": [
      44,
      43,
      42,
      42
    ],
    "Physics": [
      40,
      40
    ],
    "Product Design and Technologies": [
      50,
      46
    ],
    "Psychology": [
      50,
      43,
      42,
      41,
      41,
      40
    ],
    "Visual Communication Design": [
      50,
      48,
      41,
      40
    ]
  },
  "Peninsula International School Australia - Malaysia Campus": {
    "Business Management": [
      40
    ],
    "English": [
      46
    ],
    "English as an Additional Language": [
      49
    ],
    "General Mathematics": [
      41,
      41
    ],
    "Health and Human Development": [
      43
    ]
  },
  "Penleigh and Essendon Grammar School, Keilor East": {
    "Accounting": [
      45,
      44,
      43,
      42,
      41
    ],
    "Ancient History": [
      44,
      44,
      40
    ],
    "Applied Computing: Software Development": [
      46
    ],
    "Art Creative Practice": [
      45,
      41,
      40,
      40,
      40
    ],
    "Biology": [
      50,
      48,
      47,
      47,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      45,
      42,
      41,
      40,
      40
    ],
    "Chemistry": [
      48,
      47,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Economics": [
      50,
      44,
      40
    ],
    "English": [
      47,
      47,
      46,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      47,
      46,
      44,
      42,
      41,
      40
    ],
    "General Mathematics": [
      47,
      45,
      45,
      44,
      44,
      44,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      45,
      41
    ],
    "Health and Human Development": [
      50,
      46,
      44,
      44,
      43,
      42,
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      46,
      44,
      43,
      40
    ],
    "Languages:French": [
      41
    ],
    "Languages:Latin": [
      41
    ],
    "Legal Studies": [
      50,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      46,
      44,
      41,
      41
    ],
    "Mathematical Methods": [
      48,
      47,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      45,
      41
    ],
    "Music Repertoire Performance": [
      45,
      42,
      41
    ],
    "Physical Education": [
      49,
      47,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Physics": [
      45,
      44,
      43,
      41
    ],
    "Politics": [
      50,
      40
    ],
    "Psychology": [
      46,
      45,
      45,
      45,
      44,
      42,
      42,
      42,
      40
    ],
    "Specialist Mathematics": [
      42,
      42,
      42,
      40,
      40
    ],
    "Visual Communication Design": [
      45,
      41,
      40,
      40
    ]
  },
  "Penola Catholic College, Broadmeadows": {
    "Business Management": [
      43
    ],
    "Engineering Studies (VCE VET)": [
      41
    ],
    "English": [
      41,
      40
    ],
    "Legal Studies": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ],
    "Theatre Studies": [
      40
    ]
  },
  "Philippine Language School of Victoria, Braybrook": {
    "Languages:Filipino": [
      42
    ]
  },
  "Phoenix P-12 Community College, Sebastopol": {
    "Art Making and Exhibiting": [
      42
    ],
    "Business Management": [
      45
    ],
    "English": [
      41,
      41
    ],
    "General Mathematics": [
      42
    ],
    "Media": [
      47
    ]
  },
  "Plenty Valley Christian College, Doreen": {
    "Biology": [
      40
    ],
    "Business Management": [
      41,
      41
    ],
    "General Mathematics": [
      41,
      41
    ],
    "Health and Human Development": [
      45,
      44,
      41,
      41
    ],
    "Legal Studies": [
      40,
      40
    ],
    "Music Performance (VCE VET)": [
      41
    ],
    "Music Sound Production (VCE VET)": [
      42
    ],
    "Physical Education": [
      41
    ]
  },
  "Point Cook Senior Secondary College": {
    "Applied Computing: Data Analytics": [
      40
    ],
    "Business Management": [
      40
    ],
    "General Mathematics": [
      48,
      42,
      41
    ],
    "Health and Human Development": [
      40,
      40
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Physics": [
      43
    ],
    "Psychology": [
      41
    ]
  },
  "Portland Secondary College": {
    "General Mathematics": [
      46
    ],
    "Physical Education": [
      40
    ],
    "Psychology": [
      44
    ]
  },
  "Prahran High School, Windsor": {
    "Art Creative Practice": [
      46,
      42,
      42
    ],
    "Biology": [
      42
    ],
    "English": [
      44,
      42,
      41,
      41
    ],
    "English as an Additional Language": [
      42
    ],
    "Food Studies": [
      45,
      40
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      44
    ],
    "Sociology": [
      45
    ]
  },
  "Presbyterian Ladies' College, Burwood": {
    "Art Creative Practice": [
      47,
      42
    ],
    "Art Making and Exhibiting": [
      47,
      47,
      40
    ],
    "Australian History": [
      41
    ],
    "Biology": [
      45,
      44,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      48,
      42,
      41,
      40,
      40
    ],
    "Chemistry": [
      48,
      48,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Economics": [
      45,
      42,
      42,
      40,
      40
    ],
    "English": [
      50,
      49,
      49,
      49,
      49,
      49,
      48,
      48,
      48,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      50,
      47,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      48,
      47,
      46,
      45,
      45,
      44,
      43,
      41,
      40
    ],
    "Geography": [
      44,
      42,
      40
    ],
    "Health and Human Development": [
      41,
      41,
      40
    ],
    "History Revolutions": [
      50,
      47,
      46,
      45,
      43
    ],
    "Languages:Chinese Second Language": [
      42,
      42,
      41
    ],
    "Languages:French": [
      46
    ],
    "Languages:Indonesian Second Language": [
      46
    ],
    "Languages:Latin": [
      43
    ],
    "Legal Studies": [
      46,
      44,
      43,
      42,
      41,
      40
    ],
    "Literature": [
      42,
      41
    ],
    "Mathematical Methods": [
      48,
      48,
      48,
      46,
      46,
      46,
      46,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Music Repertoire Performance": [
      43
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      43,
      41
    ],
    "Politics": [
      46,
      44,
      40
    ],
    "Psychology": [
      49,
      44,
      44,
      43,
      42,
      42,
      41
    ],
    "Specialist Mathematics": [
      50,
      45,
      41,
      40
    ]
  },
  "Preston High School": {
    "Ancient History": [
      45,
      40,
      40,
      40
    ],
    "Art Creative Practice": [
      44
    ],
    "Business Management": [
      40
    ],
    "Chemistry": [
      41,
      41
    ],
    "English": [
      48,
      44,
      43,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Legal Studies": [
      41
    ],
    "Literature": [
      44,
      41,
      40
    ],
    "Philosophy": [
      42
    ],
    "Physics": [
      40
    ],
    "Politics": [
      46,
      41
    ],
    "Psychology": [
      46,
      41,
      41,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      43,
      41
    ]
  },
  "Princes Hill Secondary College": {
    "Art Creative Practice": [
      42
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Biology": [
      48,
      46,
      45,
      41,
      40,
      40
    ],
    "Business Management": [
      43,
      41
    ],
    "Chemistry": [
      40
    ],
    "English Language": [
      42
    ],
    "English as an Additional Language": [
      40
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      46,
      43,
      42
    ],
    "Legal Studies": [
      40
    ],
    "Literature": [
      42,
      41
    ],
    "Mathematical Methods": [
      43,
      41
    ],
    "Media": [
      49,
      44,
      40
    ],
    "Music Contemporary Performance": [
      48,
      41,
      40
    ],
    "Music Inquiry": [
      42
    ],
    "Music Repertoire Performance": [
      41
    ],
    "Philosophy": [
      40
    ],
    "Psychology": [
      44,
      43,
      41
    ],
    "Visual Communication Design": [
      42,
      40
    ]
  },
  "Protypo Greek School, Oakleigh": {
    "Languages:Greek": [
      46
    ]
  },
  "Rainbow P-12 College": {
    "Physics": [
      49
    ]
  },
  "Reflections Academy of Dance, Cranbourne": {
    "Dance": [
      41
    ]
  },
  "Reservoir High School": {
    "Chemistry": [
      42
    ],
    "English": [
      42
    ],
    "Food Studies": [
      40
    ],
    "Specialist Mathematics": [
      44
    ]
  },
  "Richmond High School": {
    "Accounting": [
      40,
      40
    ],
    "Biology": [
      42
    ],
    "Chemistry": [
      50,
      42
    ],
    "English": [
      41,
      40
    ],
    "English Language": [
      42
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      50,
      42
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "Legal Studies": [
      44
    ],
    "Music Contemporary Performance": [
      42
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      45
    ],
    "Psychology": [
      41,
      40
    ]
  },
  "Ringwood Secondary College": {
    "Applied Computing: Software Development": [
      47,
      40,
      40
    ],
    "Biology": [
      41,
      40
    ],
    "Business Management": [
      50
    ],
    "Chemistry": [
      45,
      41
    ],
    "Classical Studies": [
      42
    ],
    "Drama": [
      43
    ],
    "Economics": [
      44
    ],
    "Engineering Studies (VCE VET)": [
      40
    ],
    "English": [
      45,
      43,
      40,
      40,
      40
    ],
    "English Language": [
      45,
      40
    ],
    "English as an Additional Language": [
      50,
      46
    ],
    "Food Studies": [
      50,
      50,
      50,
      45,
      44,
      44,
      42,
      42,
      42,
      42
    ],
    "General Mathematics": [
      50,
      49,
      44,
      44,
      43,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      43,
      43,
      42,
      42,
      42,
      40,
      40
    ],
    "Languages:French": [
      43
    ],
    "Legal Studies": [
      43,
      41,
      40
    ],
    "Mathematical Methods": [
      45,
      41,
      41,
      40
    ],
    "Media": [
      42,
      41,
      41
    ],
    "Music Contemporary Performance": [
      42
    ],
    "Philosophy": [
      44
    ],
    "Physical Education": [
      43,
      43,
      43
    ],
    "Physics": [
      43,
      41
    ],
    "Product Design and Technologies": [
      50
    ],
    "Psychology": [
      40
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      43,
      42,
      40
    ]
  },
  "Rosebud Secondary College": {
    "Foundation Mathematics": [
      44,
      40
    ],
    "General Mathematics": [
      40
    ],
    "Legal Studies": [
      41
    ],
    "Outdoor and Environmental Studies": [
      42
    ],
    "Philosophy": [
      40
    ],
    "Visual Communication Design": [
      42,
      41
    ]
  },
  "Rosehill Secondary College, Niddrie": {
    "English": [
      45,
      43,
      40,
      40
    ],
    "Environmental Science": [
      41
    ],
    "Food Studies": [
      43
    ],
    "Health and Human Development": [
      45
    ],
    "Mathematical Methods": [
      41
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      41
    ],
    "Sociology": [
      42
    ],
    "Systems Engineering": [
      42
    ]
  },
  "Rowville Secondary College": {
    "Drama": [
      46
    ],
    "History Revolutions": [
      42
    ],
    "Music Performance (VCE VET)": [
      46,
      41
    ]
  },
  "Roxburgh College, Roxburgh Park": {
    "Laboratory Skills (VCE VET)": [
      48
    ]
  },
  "Rushworth P-12 College": {
    "Food Studies": [
      43
    ]
  },
  "Rutherglen High School": {
    "Art Creative Practice": [
      45
    ]
  },
  "Ruyton Girls' School, Kew": {
    "Art Creative Practice": [
      50,
      40
    ],
    "Biology": [
      50,
      48,
      45,
      42
    ],
    "Business Management": [
      45,
      44,
      43,
      42,
      40
    ],
    "Chemistry": [
      50,
      40
    ],
    "Drama": [
      50,
      49,
      45,
      41,
      40
    ],
    "Economics": [
      40
    ],
    "English": [
      50,
      50,
      50,
      49,
      49,
      47,
      47,
      46,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      49
    ],
    "Extended Investigation": [
      45
    ],
    "General Mathematics": [
      50,
      49,
      45,
      43
    ],
    "Health and Human Development": [
      48,
      44,
      43,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      44,
      43,
      42
    ],
    "Hospitality": [
      45
    ],
    "Languages:Chinese Second Language": [
      44,
      40
    ],
    "Languages:French": [
      50,
      46,
      44,
      44,
      44,
      43,
      42,
      41,
      40,
      40
    ],
    "Legal Studies": [
      45,
      42
    ],
    "Literature": [
      48,
      47,
      44,
      43,
      40
    ],
    "Mathematical Methods": [
      46,
      46,
      44,
      41
    ],
    "Physical Education": [
      45,
      44,
      43,
      41,
      41,
      41,
      40
    ],
    "Product Design and Technologies": [
      44
    ],
    "Psychology": [
      50,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      43,
      42,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      41,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      48
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Sacre Coeur, Glen Iris": {
    "Art Making and Exhibiting": [
      43,
      40
    ],
    "Australian History": [
      46,
      41,
      40
    ],
    "Biology": [
      47,
      46,
      44,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      47,
      45,
      41
    ],
    "Chemistry": [
      44,
      44
    ],
    "Economics": [
      42
    ],
    "English": [
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      45,
      40
    ],
    "Health and Human Development": [
      44,
      43,
      43,
      42,
      40
    ],
    "Legal Studies": [
      44,
      42,
      41,
      41,
      40,
      40
    ],
    "Literature": [
      45,
      40
    ],
    "Media": [
      46,
      46,
      43,
      41,
      41,
      40
    ],
    "Physical Education": [
      45,
      41
    ],
    "Physics": [
      43,
      41,
      40,
      40
    ],
    "Psychology": [
      50,
      45,
      42,
      42,
      40,
      40
    ],
    "Visual Communication Design": [
      46,
      42,
      42,
      40
    ]
  },
  "Sacred Heart College Geelong, Newtown": {
    "Art Making and Exhibiting": [
      43,
      42,
      42,
      41
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      41,
      40
    ],
    "Chemistry": [
      40
    ],
    "Dance": [
      40
    ],
    "English": [
      45,
      45,
      44,
      42,
      41,
      41,
      41,
      40
    ],
    "English Language": [
      42
    ],
    "General Mathematics": [
      49,
      45,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      46,
      45,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "History Revolutions": [
      42,
      42,
      40
    ],
    "Languages:French": [
      46,
      44
    ],
    "Legal Studies": [
      41
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      41
    ],
    "Physical Education": [
      44,
      43,
      41
    ],
    "Product Design and Technologies": [
      40
    ],
    "Religion and Society": [
      46,
      41,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Sacred Heart College Kyneton": {
    "Art Creative Practice": [
      42,
      40
    ],
    "English": [
      46,
      42,
      41
    ],
    "English Language": [
      40
    ],
    "Food Studies": [
      46,
      42,
      42
    ],
    "Geography": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ],
    "Visual Communication Design": [
      44,
      41,
      41
    ]
  },
  "Sacred Heart College, Yarrawonga": {
    "Legal Studies": [
      43
    ],
    "Media": [
      42,
      41
    ],
    "Psychology": [
      42
    ]
  },
  "Sacred Heart Girls' College Oakleigh, Hughesdale": {
    "Accounting": [
      42,
      40
    ],
    "Art Creative Practice": [
      43,
      41,
      41
    ],
    "Biology": [
      43,
      40
    ],
    "Business Management": [
      45,
      42,
      40
    ],
    "Chemistry": [
      40
    ],
    "Dance": [
      46,
      42
    ],
    "English": [
      50,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      44,
      41,
      40
    ],
    "General Mathematics": [
      48,
      44,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      45,
      45,
      44,
      44,
      43,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "History Revolutions": [
      46
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      41,
      40,
      40
    ],
    "Politics": [
      43
    ],
    "Visual Communication Design": [
      44,
      42
    ]
  },
  "Saint Ignatius College Geelong, Drysdale": {
    "Art Creative Practice": [
      41,
      40
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      47,
      44,
      41
    ],
    "English": [
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      44,
      43,
      42,
      42,
      40
    ],
    "Health and Human Development": [
      44,
      44,
      44,
      42
    ],
    "Literature": [
      43
    ],
    "Outdoor and Environmental Studies": [
      48,
      43
    ],
    "Physical Education": [
      47,
      42,
      42
    ],
    "Psychology": [
      41
    ],
    "Religion and Society": [
      40
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Salesian College Sunbury": {
    "Art Making and Exhibiting": [
      43,
      40
    ],
    "Economics": [
      43
    ],
    "English": [
      42,
      40
    ],
    "Health and Human Development": [
      45,
      41
    ],
    "Media": [
      41
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Physics": [
      45
    ],
    "Politics": [
      45
    ],
    "Specialist Mathematics": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ]
  },
  "Salesian College, Chadstone": {
    "Accounting": [
      42,
      41
    ],
    "Applied Computing: Software Development": [
      45,
      43
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      43,
      40
    ],
    "Chemistry": [
      41
    ],
    "English": [
      48,
      46,
      46,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "English as an Additional Language": [
      50
    ],
    "Environmental Science": [
      48,
      45,
      42
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      48,
      48,
      46,
      46,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      46
    ],
    "Laboratory Skills (VCE VET)": [
      43
    ],
    "Literature": [
      44,
      42,
      41,
      40
    ],
    "Mathematical Methods": [
      41,
      41,
      40
    ],
    "Physical Education": [
      44,
      43
    ],
    "Physics": [
      48,
      43,
      42,
      42,
      40
    ],
    "Politics": [
      46
    ],
    "Psychology": [
      49,
      42,
      40
    ],
    "Visual Communication Design": [
      43,
      43,
      40
    ]
  },
  "Sandringham College": {
    "Applied Computing: Software Development": [
      40
    ],
    "Art Making and Exhibiting": [
      47,
      40,
      40
    ],
    "Business Management": [
      41,
      40
    ],
    "Chemistry": [
      42,
      42
    ],
    "Dance (VCE VET)": [
      47
    ],
    "English": [
      50,
      45
    ],
    "English Language": [
      44,
      42,
      42,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      42,
      41
    ],
    "Equine Studies (VCE VET)": [
      42
    ],
    "General Mathematics": [
      50,
      41,
      40
    ],
    "Health and Human Development": [
      42,
      41
    ],
    "Literature": [
      50
    ],
    "Mathematical Methods": [
      43,
      40
    ],
    "Media": [
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      40
    ],
    "Physical Education": [
      44
    ],
    "Psychology": [
      50,
      47,
      45,
      45,
      40
    ],
    "Sociology": [
      49,
      42
    ],
    "Visual Communication Design": [
      44,
      40
    ]
  },
  "Santa Maria College, Northcote": {
    "Art Making and Exhibiting": [
      40
    ],
    "Biology": [
      50,
      46,
      42
    ],
    "Business Management": [
      49,
      48,
      45,
      42,
      41
    ],
    "Chemistry": [
      44
    ],
    "English": [
      45,
      45,
      44,
      44,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "English Language": [
      43
    ],
    "Food Studies": [
      44
    ],
    "General Mathematics": [
      46
    ],
    "Health and Human Development": [
      42,
      40,
      40
    ],
    "History Revolutions": [
      46,
      41
    ],
    "Laboratory Skills (VCE VET)": [
      43
    ],
    "Legal Studies": [
      49,
      46
    ],
    "Mathematical Methods": [
      45,
      42,
      40
    ],
    "Media": [
      50,
      46,
      42,
      42,
      42,
      41
    ],
    "Physical Education": [
      46,
      41
    ],
    "Product Design and Technologies": [
      44
    ],
    "Psychology": [
      41,
      41,
      40,
      40
    ],
    "Religion and Society": [
      43,
      42,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      42
    ],
    "Visual Communication Design": [
      44,
      40
    ]
  },
  "Scoresby Secondary College": {
    "Business Management": [
      41,
      40
    ],
    "General Mathematics": [
      46,
      41
    ]
  },
  "Scotch College, Hawthorn": {
    "Ancient History": [
      50,
      48,
      47,
      46,
      45,
      42
    ],
    "Art Making and Exhibiting": [
      42
    ],
    "Australian History": [
      45,
      44,
      43,
      42,
      40
    ],
    "Biology": [
      47,
      46,
      45,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      45,
      44,
      44,
      44,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      50,
      50,
      47,
      46,
      46,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Drama": [
      44,
      43
    ],
    "Economics": [
      42,
      40,
      40,
      40
    ],
    "English": [
      49,
      49,
      49,
      48,
      47,
      47,
      46,
      46,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "English Language": [
      49,
      48,
      48,
      47,
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      41
    ],
    "English as an Additional Language": [
      42,
      42,
      40
    ],
    "Environmental Science": [
      45
    ],
    "General Mathematics": [
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "History Revolutions": [
      50,
      46,
      46,
      45,
      41,
      40,
      40
    ],
    "Languages:Chinese Second Language": [
      50
    ],
    "Languages:French": [
      47,
      44,
      42,
      41,
      41,
      40
    ],
    "Languages:German": [
      50,
      47
    ],
    "Languages:Indonesian Second Language": [
      41
    ],
    "Languages:Italian": [
      42,
      41,
      41,
      41
    ],
    "Languages:Latin": [
      45,
      44,
      41,
      41,
      40,
      40
    ],
    "Legal Studies": [
      43,
      40
    ],
    "Literature": [
      50,
      50,
      49,
      46,
      45,
      44
    ],
    "Mathematical Methods": [
      50,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      42
    ],
    "Music Repertoire Performance": [
      42
    ],
    "Philosophy": [
      41,
      40
    ],
    "Physical Education": [
      47,
      46,
      45,
      45,
      43,
      43,
      43,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      50,
      48,
      47,
      46,
      46,
      45,
      45,
      44,
      43,
      42,
      40,
      40,
      40
    ],
    "Politics": [
      41
    ],
    "Product Design and Technologies": [
      46
    ],
    "Psychology": [
      50,
      42,
      40
    ],
    "Specialist Mathematics": [
      50,
      47,
      46,
      46,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Theatre Studies": [
      44
    ]
  },
  "Seymour College": {
    "General Mathematics": [
      43
    ]
  },
  "Shepparton Christian College": {
    "History Revolutions": [
      41
    ]
  },
  "Siena College, Camberwell": {
    "Accounting": [
      45,
      43,
      40
    ],
    "Business Management": [
      47,
      46,
      45,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      41
    ],
    "Economics": [
      41
    ],
    "English": [
      46,
      45,
      44,
      43,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      49,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "Languages:French": [
      40
    ],
    "Languages:Italian": [
      44,
      41,
      40,
      40
    ],
    "Legal Studies": [
      50,
      45,
      44,
      41,
      40,
      40
    ],
    "Literature": [
      43
    ],
    "Media": [
      42
    ],
    "Physical Education": [
      43
    ],
    "Physics": [
      41
    ],
    "Product Design and Technologies": [
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Psychology": [
      49,
      46,
      44,
      43,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      44,
      43,
      41
    ]
  },
  "Simonds Catholic College, Fitzroy North": {
    "Biology": [
      45
    ],
    "General Mathematics": [
      40
    ],
    "History Revolutions": [
      40
    ],
    "Languages:Italian": [
      44
    ]
  },
  "Sirius College - Eastmeadows Campus, Broadmeadows": {
    "Applied Computing: Data Analytics": [
      42,
      41,
      40
    ],
    "Biology": [
      43
    ],
    "Business Management": [
      40
    ],
    "English": [
      46,
      44,
      43,
      42,
      41
    ],
    "General Mathematics": [
      42,
      42,
      40,
      40
    ],
    "Health and Human Development": [
      40
    ]
  },
  "Sirius College - Ibrahim Dellal Campus, Sunshine West": {
    "Biology": [
      44,
      41,
      40
    ],
    "Business Management": [
      41,
      41,
      40
    ],
    "English": [
      48,
      42,
      40
    ],
    "General Mathematics": [
      47,
      46,
      45,
      45,
      45,
      43,
      42,
      41
    ],
    "Health and Human Development": [
      40
    ],
    "Mathematical Methods": [
      41
    ],
    "Physics": [
      43
    ]
  },
  "Sirius College - Keysborough Campus": {
    "General Mathematics": [
      43
    ]
  },
  "Sirius College - Meadow Fair Campus, Broadmeadows": {
    "Applied Computing: Data Analytics": [
      48,
      45
    ],
    "Applied Computing: Software Development": [
      40
    ],
    "Biology": [
      42,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      45,
      41
    ],
    "English": [
      49,
      45,
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      49
    ],
    "General Mathematics": [
      46,
      46,
      46,
      45,
      43,
      42,
      41,
      41
    ],
    "History Revolutions": [
      40
    ],
    "Mathematical Methods": [
      48,
      44,
      41
    ],
    "Psychology": [
      43,
      43,
      41,
      41,
      41,
      40,
      40
    ]
  },
  "South Oakleigh College, Oakleigh South": {
    "Business Management": [
      50,
      43
    ],
    "English": [
      49,
      42
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      48
    ],
    "Hospitality (Cookery)(VCE VET)": [
      43
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      44
    ]
  },
  "Southern Cross Grammar, Caroline Springs": {
    "Applied Computing: Data Analytics": [
      47,
      41
    ],
    "Biology": [
      43
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      40
    ],
    "English": [
      40
    ],
    "English Language": [
      40,
      40,
      40
    ],
    "General Mathematics": [
      44,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "Legal Studies": [
      45
    ],
    "Physics": [
      42,
      40
    ],
    "Systems Engineering": [
      44
    ],
    "Visual Communication Design": [
      46,
      43
    ]
  },
  "Springside West Secondary College, Fraser Rise": {
    "Biology": [
      43,
      42,
      41
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      44
    ],
    "English": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      42,
      42
    ],
    "Health and Human Development": [
      46,
      41
    ],
    "Legal Studies": [
      42
    ],
    "Literature": [
      47
    ],
    "Media": [
      48
    ],
    "Psychology": [
      48,
      44,
      40
    ]
  },
  "Springvale Indo-Chinese Ethnic School Inc., Springvale South": {
    "Languages:Vietnamese Second Language": [
      47
    ]
  },
  "St Albans Secondary College": {
    "Biology": [
      43,
      40,
      40
    ],
    "Business Management": [
      47,
      43
    ],
    "Chemistry": [
      40
    ],
    "English": [
      41,
      40
    ],
    "Food Studies": [
      41
    ],
    "General Mathematics": [
      50,
      47,
      44,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      42
    ],
    "Information and Commuications Technology (VCE VET)": [
      44
    ],
    "Mathematical Methods": [
      43,
      42,
      41
    ],
    "Physics": [
      44
    ],
    "Psychology": [
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      41
    ]
  },
  "St Aloysius College, North Melbourne": {
    "Art Making and Exhibiting": [
      49,
      40
    ],
    "Business Management": [
      46
    ],
    "English": [
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      42,
      41,
      40
    ],
    "History Revolutions": [
      42,
      40
    ],
    "Legal Studies": [
      42,
      40
    ],
    "Media": [
      43
    ],
    "Physical Education": [
      40
    ],
    "Visual Communication Design": [
      46
    ]
  },
  "St Andrews Christian College, Wantirna South": {
    "Art Creative Practice": [
      44,
      42
    ],
    "Biology": [
      48,
      45,
      45,
      43,
      42,
      41
    ],
    "Chemistry": [
      42,
      40
    ],
    "English": [
      50,
      47,
      43,
      42,
      41,
      40,
      40
    ],
    "General Mathematics": [
      44,
      42,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      47
    ],
    "Legal Studies": [
      45,
      42
    ],
    "Mathematical Methods": [
      43,
      41,
      41,
      40
    ],
    "Music Contemporary Performance": [
      47,
      47,
      46,
      45
    ],
    "Physical Education": [
      44,
      41
    ],
    "Physics": [
      41
    ],
    "Psychology": [
      50,
      47,
      44,
      41
    ]
  },
  "St Anne's College, Kialla": {
    "Business Management": [
      40
    ],
    "Psychology": [
      40
    ]
  },
  "St Arnaud Secondary College": {
    "Physics": [
      41
    ]
  },
  "St Augustine's College, Kyabram": {
    "Biology": [
      43,
      41
    ],
    "Food Studies": [
      40
    ],
    "Foundation Mathematics": [
      41
    ],
    "Health and Human Development": [
      48,
      44,
      44,
      41
    ],
    "Legal Studies": [
      42,
      41
    ],
    "Outdoor and Environmental Studies": [
      47,
      40
    ]
  },
  "St Bede's College, Mentone": {
    "Accounting": [
      47,
      44,
      42,
      42,
      42
    ],
    "Applied Computing: Software Development": [
      42
    ],
    "Biology": [
      44,
      41,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      45,
      45,
      43,
      40,
      40
    ],
    "Chemistry": [
      41
    ],
    "Economics": [
      40,
      40
    ],
    "English": [
      45,
      44,
      42,
      40,
      40
    ],
    "General Mathematics": [
      50,
      45,
      45,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      50,
      41
    ],
    "Health and Human Development": [
      41
    ],
    "History Revolutions": [
      49
    ],
    "Languages:Italian": [
      47
    ],
    "Legal Studies": [
      40
    ],
    "Literature": [
      43
    ],
    "Mathematical Methods": [
      40
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Physical Education": [
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Physics": [
      47,
      46,
      43,
      43
    ],
    "Politics": [
      41
    ],
    "Product Design and Technologies": [
      44
    ],
    "Psychology": [
      42
    ],
    "Religion and Society": [
      43
    ],
    "Specialist Mathematics": [
      44
    ]
  },
  "St Bernard's College, Essendon": {
    "Accounting": [
      40
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      50,
      48,
      47,
      45,
      41,
      41,
      40
    ],
    "Chemistry": [
      41
    ],
    "Economics": [
      41
    ],
    "English": [
      44,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      43
    ],
    "Food Studies": [
      42
    ],
    "General Mathematics": [
      49,
      48,
      47,
      45,
      44,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      48,
      40,
      40
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Literature": [
      42
    ],
    "Mathematical Methods": [
      46,
      41,
      40,
      40
    ],
    "Media": [
      40
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Physical Education": [
      42,
      41,
      40
    ],
    "Physics": [
      41,
      41
    ],
    "Product Design and Technologies": [
      46
    ],
    "Psychology": [
      41,
      41
    ],
    "Specialist Mathematics": [
      49
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ]
  },
  "St Catherine's School, Toorak": {
    "Accounting": [
      49,
      44,
      42
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      48,
      46,
      42,
      41,
      41
    ],
    "Business Management": [
      50,
      48,
      46,
      45,
      44,
      43,
      43,
      41,
      40,
      40
    ],
    "Chemistry": [
      43
    ],
    "Economics": [
      46,
      45,
      40,
      40,
      40,
      40
    ],
    "English": [
      48,
      47,
      45,
      41,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "English as an Additional Language": [
      44,
      42,
      41
    ],
    "General Mathematics": [
      42,
      42,
      41
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      49,
      49,
      44,
      43,
      43,
      42,
      40,
      40,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      42
    ],
    "Languages:French": [
      41
    ],
    "Legal Studies": [
      49,
      48,
      40
    ],
    "Mathematical Methods": [
      43,
      41
    ],
    "Media": [
      44,
      42,
      42,
      41
    ],
    "Physics": [
      41
    ],
    "Politics": [
      42
    ],
    "Psychology": [
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      43
    ],
    "Visual Communication Design": [
      48,
      48
    ]
  },
  "St Columba's College, Essendon": {
    "Biology": [
      48,
      43,
      43,
      41,
      41,
      40
    ],
    "Business Management": [
      45,
      44,
      44,
      43,
      42,
      42,
      40,
      40
    ],
    "Chemistry": [
      40
    ],
    "Drama": [
      41
    ],
    "Economics": [
      42,
      42
    ],
    "English": [
      43,
      43,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      44
    ],
    "General Mathematics": [
      43,
      43,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      49,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      47,
      42,
      40
    ],
    "Legal Studies": [
      42,
      41,
      40
    ],
    "Literature": [
      40
    ],
    "Media": [
      41
    ],
    "Physical Education": [
      47,
      45,
      44,
      41,
      41
    ],
    "Physics": [
      42,
      40
    ],
    "Psychology": [
      44,
      44,
      44,
      41,
      41,
      40
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "St Francis Catholic College, Melton": {
    "Accounting": [
      41
    ],
    "Business Management": [
      44
    ],
    "Chemistry": [
      43
    ],
    "English": [
      40,
      40
    ],
    "English Language": [
      45,
      42
    ],
    "General Mathematics": [
      44,
      42,
      40
    ],
    "Health and Human Development": [
      50,
      48,
      44
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      41,
      40
    ],
    "Literature": [
      41
    ],
    "Music Performance (VCE VET)": [
      40
    ],
    "Psychology": [
      48
    ],
    "Sport and Recreation (VCE VET)": [
      41
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "St Francis Xavier College, Beaconsfield": {
    "Art Creative Practice": [
      45
    ],
    "Biology": [
      42,
      41
    ],
    "Business Management": [
      45,
      43,
      41,
      40,
      40
    ],
    "Chemistry": [
      43,
      40
    ],
    "English": [
      42,
      41
    ],
    "General Mathematics": [
      40,
      40,
      40
    ],
    "Health and Human Development": [
      42,
      41,
      41,
      41
    ],
    "History Revolutions": [
      45
    ],
    "Legal Studies": [
      41,
      41
    ],
    "Mathematical Methods": [
      42
    ],
    "Music Contemporary Performance": [
      43,
      42
    ],
    "Physical Education": [
      44,
      42,
      41,
      41
    ],
    "Physics": [
      44,
      40
    ],
    "Product Design and Technologies": [
      41
    ],
    "Psychology": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      43,
      43
    ],
    "Visual Communication Design": [
      41
    ]
  },
  "St Helena Secondary College, Eltham": {
    "Art Creative Practice": [
      49
    ],
    "Business Management": [
      41,
      40,
      40,
      40
    ],
    "English": [
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Environmental Science": [
      43
    ],
    "Food Studies": [
      42
    ],
    "Health and Human Development": [
      41
    ],
    "Legal Studies": [
      42,
      40
    ],
    "Literature": [
      40
    ],
    "Media": [
      43
    ],
    "Music Contemporary Performance": [
      43
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      40
    ],
    "Product Design and Technologies": [
      40
    ],
    "Psychology": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      45
    ],
    "Visual Communication Design": [
      44,
      41,
      40,
      40
    ]
  },
  "St John's Greek Orthodox College, Preston": {
    "Languages:Greek": [
      47
    ]
  },
  "St John's Regional College, Dandenong": {
    "Business Management": [
      42,
      41
    ],
    "English": [
      40
    ],
    "General Mathematics": [
      44,
      42
    ],
    "Health and Human Development": [
      40
    ],
    "Legal Studies": [
      41
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      40
    ]
  },
  "St Joseph's College - Echuca": {
    "Art Making and Exhibiting": [
      41
    ],
    "Biology": [
      41,
      41
    ],
    "Business Management": [
      42
    ],
    "English": [
      41,
      41,
      40
    ],
    "Foundation Mathematics": [
      44,
      40
    ],
    "General Mathematics": [
      43,
      40
    ],
    "Health and Human Development": [
      43
    ],
    "Media": [
      41
    ]
  },
  "St Joseph's College - Ferntree Gully": {
    "Accounting": [
      44
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      47,
      42,
      41
    ],
    "English": [
      46,
      42,
      41,
      41,
      40
    ],
    "General Mathematics": [
      48
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      41,
      40,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Physics": [
      47,
      45,
      42
    ]
  },
  "St Joseph's College - Mildura": {
    "English": [
      43,
      41,
      41
    ],
    "Food Studies": [
      40,
      40
    ],
    "Health and Human Development": [
      45,
      41
    ],
    "Legal Studies": [
      40
    ],
    "Psychology": [
      42
    ]
  },
  "St Joseph's College Newtown": {
    "Art Creative Practice": [
      48,
      45,
      40
    ],
    "Biology": [
      42,
      40
    ],
    "Business Management": [
      46,
      45,
      42,
      40,
      40
    ],
    "Economics": [
      44
    ],
    "English": [
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      40
    ],
    "Food Studies": [
      42
    ],
    "General Mathematics": [
      44,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      42,
      42
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      44,
      41,
      40
    ],
    "Literature": [
      45
    ],
    "Mathematical Methods": [
      47,
      42,
      41,
      40
    ],
    "Media": [
      44
    ],
    "Music Contemporary Performance": [
      41
    ],
    "Outdoor and Environmental Studies": [
      45,
      44,
      43,
      42,
      41,
      40
    ],
    "Philosophy": [
      45
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      45,
      44
    ],
    "Specialist Mathematics": [
      41
    ],
    "Systems Engineering": [
      49,
      41
    ],
    "Visual Communication Design": [
      43
    ]
  },
  "St Kevin's College Toorak": {
    "Accounting": [
      48,
      45,
      44,
      44,
      44,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Ancient History": [
      45,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      49,
      45
    ],
    "Biology": [
      48,
      47,
      45,
      44,
      44,
      44,
      43,
      42,
      42,
      40
    ],
    "Business Management": [
      48,
      47,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      48,
      47,
      46,
      44,
      44,
      42,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Economics": [
      50,
      45,
      45,
      44,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English": [
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      49,
      49,
      49,
      48,
      48,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      46
    ],
    "General Mathematics": [
      48,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      47,
      46
    ],
    "Health and Human Development": [
      45,
      43,
      42,
      42
    ],
    "History Revolutions": [
      50,
      49,
      48,
      48,
      48,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41
    ],
    "Languages:French": [
      42
    ],
    "Languages:Spanish": [
      41
    ],
    "Legal Studies": [
      48,
      46,
      46,
      45,
      45,
      44,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      48,
      47,
      41,
      40,
      40,
      40
    ],
    "Mathematical Methods": [
      44,
      44,
      43,
      43,
      43,
      43,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Media": [
      41,
      40
    ],
    "Physical Education": [
      46,
      46,
      46,
      45,
      45,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      50,
      46,
      46,
      43,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Politics": [
      42,
      42,
      40,
      40
    ],
    "Product Design and Technologies": [
      44,
      40
    ],
    "Psychology": [
      48,
      47,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Religion and Society": [
      49,
      47,
      44,
      43,
      40
    ],
    "Specialist Mathematics": [
      44
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "St Leonard's College, Brighton East": {
    "Accounting": [
      41,
      40
    ],
    "Applied Computing: Data Analytics": [
      40
    ],
    "Applied Computing: Software Development": [
      45
    ],
    "Biology": [
      48,
      42,
      41
    ],
    "Business Management": [
      46,
      43,
      40,
      40
    ],
    "Economics": [
      43,
      43,
      42,
      41,
      40
    ],
    "English": [
      44,
      43,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      42,
      40
    ],
    "English as an Additional Language": [
      45,
      43,
      41
    ],
    "General Mathematics": [
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Geography": [
      47
    ],
    "Health and Human Development": [
      49,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      42,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      44
    ],
    "Languages:French": [
      43
    ],
    "Legal Studies": [
      47,
      42,
      41
    ],
    "Mathematical Methods": [
      44,
      42,
      40
    ],
    "Media": [
      46,
      45,
      43,
      43,
      40,
      40,
      40
    ],
    "Music Inquiry": [
      40
    ],
    "Music Repertoire Performance": [
      43
    ],
    "Physical Education": [
      44,
      42,
      40
    ],
    "Physics": [
      47,
      45,
      42,
      40
    ],
    "Psychology": [
      50
    ],
    "Specialist Mathematics": [
      40
    ],
    "Systems Engineering": [
      41
    ],
    "Visual Communication Design": [
      43,
      41
    ]
  },
  "St Margarets School, Berwick": {
    "Art Making and Exhibiting": [
      43
    ],
    "Chemistry": [
      43
    ],
    "English": [
      46,
      46,
      45,
      43,
      43
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      49,
      43,
      42,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      43,
      42
    ],
    "Legal Studies": [
      44,
      42,
      42
    ],
    "Literature": [
      45
    ],
    "Mathematical Methods": [
      42
    ],
    "Psychology": [
      41,
      40
    ]
  },
  "St Mary Mackillop College, Swan Hill": {
    "General Mathematics": [
      43,
      40
    ],
    "Health and Human Development": [
      42,
      42,
      41,
      40,
      40
    ],
    "Literature": [
      41
    ],
    "Physical Education": [
      42
    ],
    "Sport and Recreation (VCE VET)": [
      50,
      41
    ]
  },
  "St Mary of the Angels School, Nathalia": {
    "Food Studies": [
      41
    ]
  },
  "St Mary's College Melbourne - St Kilda, St Kilda East": {
    "English": [
      41
    ],
    "Languages:Italian": [
      40
    ]
  },
  "St Mary's College, Seymour": {
    "English": [
      41
    ],
    "General Mathematics": [
      42
    ]
  },
  "St Mary's Coptic Orthodox College, Coolaroo": {
    "Biology": [
      43,
      42,
      40,
      40
    ],
    "Business Management": [
      46,
      42,
      41
    ],
    "English": [
      45,
      42,
      42,
      42,
      40
    ],
    "Foundation Mathematics": [
      47,
      45,
      44,
      44,
      43,
      42,
      42,
      42,
      41
    ],
    "General Mathematics": [
      49,
      44,
      43,
      42
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "Psychology": [
      46,
      44
    ]
  },
  "St Michael's Grammar School, St Kilda": {
    "Accounting": [
      41
    ],
    "Art Creative Practice": [
      50,
      43,
      42
    ],
    "Biology": [
      46,
      43,
      41,
      41
    ],
    "Business Management": [
      45,
      43,
      43,
      42,
      40
    ],
    "Chemistry": [
      41,
      40
    ],
    "Drama": [
      42
    ],
    "Economics": [
      40
    ],
    "English": [
      46,
      43,
      42,
      40,
      40,
      40
    ],
    "English Language": [
      41
    ],
    "Food Studies": [
      48
    ],
    "General Mathematics": [
      45,
      43,
      42,
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      45
    ],
    "History Revolutions": [
      40
    ],
    "Legal Studies": [
      44,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      45,
      41
    ],
    "Mathematical Methods": [
      45,
      40
    ],
    "Media": [
      43,
      41
    ],
    "Music Repertoire Performance": [
      47,
      42,
      40
    ],
    "Physical Education": [
      41,
      41,
      40
    ],
    "Physics": [
      43,
      40,
      40
    ],
    "Product Design and Technologies": [
      44,
      43
    ],
    "Psychology": [
      41,
      41,
      40
    ],
    "Theatre Studies": [
      43,
      43,
      40
    ],
    "Visual Communication Design": [
      40,
      40,
      40
    ]
  },
  "St Monica's College, Epping": {
    "Applied Computing: Data Analytics": [
      46,
      43,
      43
    ],
    "Applied Computing: Software Development": [
      41
    ],
    "Art Making and Exhibiting": [
      48,
      47,
      44,
      40
    ],
    "Biology": [
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Business Management": [
      42,
      41,
      41
    ],
    "Chemistry": [
      43,
      43,
      41,
      40
    ],
    "Community Services (VCE VET)": [
      44,
      40,
      40
    ],
    "Dance (VCE VET)": [
      42,
      40
    ],
    "English": [
      46,
      45,
      44,
      42,
      42,
      42,
      41,
      40
    ],
    "Environmental Science": [
      41
    ],
    "Food Studies": [
      44,
      42
    ],
    "Foundation Mathematics": [
      40
    ],
    "General Mathematics": [
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      44
    ],
    "Information and Commuications Technology (VCE VET)": [
      44,
      42
    ],
    "Physical Education": [
      42
    ],
    "Product Design and Technologies": [
      40
    ],
    "Psychology": [
      47,
      43,
      41,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      41,
      40
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "St Patrick's College, Ballarat": {
    "Biology": [
      42
    ],
    "English": [
      42,
      42,
      41,
      40
    ],
    "General Mathematics": [
      47,
      47,
      43,
      42,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      45
    ],
    "Outdoor and Environmental Studies": [
      40
    ],
    "Physical Education": [
      43
    ],
    "Physics": [
      42
    ],
    "Product Design and Technologies": [
      42
    ]
  },
  "St Paul's Anglican Grammar School, Warragul": {
    "Accounting": [
      41
    ],
    "Art Creative Practice": [
      40
    ],
    "Biology": [
      50,
      50,
      42,
      41,
      40
    ],
    "Business Management": [
      42,
      40
    ],
    "Chemistry": [
      43,
      40,
      40
    ],
    "English": [
      48,
      44,
      42,
      42
    ],
    "English Language": [
      40
    ],
    "Food Studies": [
      47,
      44
    ],
    "General Mathematics": [
      46
    ],
    "Health and Human Development": [
      46,
      41,
      40
    ],
    "History Revolutions": [
      49
    ],
    "Legal Studies": [
      50
    ],
    "Literature": [
      50,
      41,
      41
    ],
    "Mathematical Methods": [
      43
    ],
    "Philosophy": [
      41
    ],
    "Physics": [
      41,
      41
    ],
    "Product Design and Technologies": [
      40
    ],
    "Psychology": [
      44,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ],
    "Visual Communication Design": [
      45,
      41
    ]
  },
  "St Peter's College, Cranbourne": {
    "Engineering Studies (VCE VET)": [
      48
    ],
    "English": [
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      50,
      46
    ],
    "Legal Studies": [
      44
    ],
    "Physics": [
      50
    ],
    "Religion and Society": [
      40
    ],
    "Specialist Mathematics": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      40
    ],
    "Theatre Studies": [
      45
    ]
  },
  "St Thomas Aquinas College, Tynong": {
    "Business Management": [
      43
    ],
    "General Mathematics": [
      41
    ]
  },
  "Star of the Sea College, Brighton": {
    "Art Creative Practice": [
      48,
      43
    ],
    "Australian History": [
      41,
      40
    ],
    "Biology": [
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      50,
      49,
      47,
      47,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Economics": [
      45,
      40,
      40,
      40
    ],
    "English": [
      46,
      45,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Equine Studies (VCE VET)": [
      41
    ],
    "Food Studies": [
      42,
      42,
      40
    ],
    "General Mathematics": [
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      48,
      46,
      44,
      42,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Languages:German": [
      41
    ],
    "Legal Studies": [
      47,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Physical Education": [
      45
    ],
    "Physics": [
      46
    ],
    "Politics": [
      42,
      40
    ],
    "Product Design and Technologies": [
      48,
      44,
      42,
      42,
      41
    ],
    "Psychology": [
      48,
      46,
      45,
      43,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Religion and Society": [
      42
    ],
    "Visual Communication Design": [
      45,
      43,
      43,
      42,
      40,
      40
    ]
  },
  "Stawell Secondary College": {
    "Food Studies": [
      43,
      41
    ]
  },
  "Stott's College, Melbourne": {
    "Languages:Vietnamese First Language": [
      43
    ]
  },
  "Strathcona Baptist Girls Grammar School, Canterbury": {
    "Accounting": [
      41,
      40
    ],
    "Art Creative Practice": [
      46,
      41,
      40
    ],
    "Biology": [
      47,
      42,
      40
    ],
    "Business Management": [
      44,
      44,
      43,
      42
    ],
    "Chemistry": [
      47,
      43,
      43,
      43,
      40
    ],
    "English": [
      48,
      47,
      47,
      46,
      45,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      45,
      44,
      42,
      40
    ],
    "General Mathematics": [
      50,
      46,
      45,
      45,
      43,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      47,
      43,
      42,
      41,
      40
    ],
    "History Revolutions": [
      44
    ],
    "Hospitality (Cookery)(VCE VET)": [
      41
    ],
    "Languages:Chinese First Language": [
      40
    ],
    "Languages:French": [
      50
    ],
    "Languages:Italian": [
      43,
      41
    ],
    "Legal Studies": [
      44,
      42,
      42,
      42,
      40
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      43,
      42,
      42
    ],
    "Music Repertoire Performance": [
      49,
      47
    ],
    "Physical Education": [
      48,
      41,
      41,
      41
    ],
    "Physics": [
      48,
      42,
      40,
      40,
      40
    ],
    "Politics": [
      41
    ],
    "Psychology": [
      44,
      43,
      43,
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      46,
      44,
      42,
      41
    ],
    "Theatre Studies": [
      46,
      41
    ],
    "Visual Communication Design": [
      49,
      44,
      43,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ]
  },
  "Strathmore Secondary College": {
    "Applied Computing: Data Analytics": [
      40
    ],
    "Biology": [
      45
    ],
    "Business Management": [
      43,
      42,
      41,
      41,
      40,
      40
    ],
    "Chemistry": [
      44,
      40
    ],
    "English": [
      49,
      46,
      45,
      45,
      41,
      41,
      40,
      40,
      40
    ],
    "Food Studies": [
      46,
      43,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "General Mathematics": [
      44,
      43,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      46,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      50,
      45,
      43,
      41,
      40
    ],
    "Languages:Greek": [
      47
    ],
    "Languages:Italian": [
      40
    ],
    "Literature": [
      49,
      46,
      43,
      43
    ],
    "Mathematical Methods": [
      46,
      43
    ],
    "Philosophy": [
      43
    ],
    "Physical Education": [
      40,
      40
    ],
    "Physics": [
      50,
      44,
      41
    ],
    "Politics": [
      42,
      40
    ],
    "Product Design and Technologies": [
      47,
      44,
      43,
      40,
      40
    ],
    "Psychology": [
      42,
      40
    ],
    "Visual Communication Design": [
      41,
      41,
      40
    ]
  },
  "Sunbury College": {
    "Geography": [
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Psychology": [
      41
    ],
    "Visual Communication Design": [
      48
    ]
  },
  "Sunbury Downs Secondary College": {
    "Food Studies": [
      40
    ],
    "Mathematical Methods": [
      46
    ],
    "Physics": [
      42
    ],
    "Psychology": [
      42
    ]
  },
  "Sunshine College": {
    "Applied Computing: Data Analytics": [
      40
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Mathematical Methods": [
      40,
      40
    ],
    "Psychology": [
      40
    ]
  },
  "Surf Coast Secondary College, Torquay": {
    "Art Making and Exhibiting": [
      45
    ],
    "Biology": [
      41
    ],
    "Chemistry": [
      45
    ],
    "English": [
      42,
      41,
      40
    ],
    "Food Studies": [
      49,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Music Performance (VCE VET)": [
      41
    ],
    "Physics": [
      42
    ],
    "Product Design and Technologies": [
      46,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      42,
      42
    ]
  },
  "Suzanne Cory High School, Werribee": {
    "Accounting": [
      49,
      48,
      47,
      47,
      46,
      46,
      45,
      45,
      43,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Applied Computing: Software Development": [
      43,
      42,
      40,
      40
    ],
    "Art Making and Exhibiting": [
      45,
      40
    ],
    "Biology": [
      46,
      45,
      45,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      50,
      50,
      49,
      47,
      45,
      43,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "Chemistry": [
      47,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      44,
      40
    ],
    "English": [
      50,
      50,
      50,
      49,
      48,
      48,
      47,
      47,
      47,
      46,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      45,
      45,
      43,
      40,
      40
    ],
    "Food Studies": [
      46,
      46,
      44,
      44,
      43,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      50,
      50,
      50,
      50,
      49,
      48,
      47,
      47,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      50,
      46,
      46,
      46,
      44,
      43,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Languages:French": [
      50,
      40
    ],
    "Legal Studies": [
      50,
      45,
      43,
      42,
      42,
      41,
      41
    ],
    "Literature": [
      44,
      41
    ],
    "Mathematical Methods": [
      46,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      44,
      40
    ],
    "Music Contemporary Performance": [
      43
    ],
    "Physical Education": [
      48,
      46,
      44,
      41,
      40,
      40
    ],
    "Physics": [
      44,
      41,
      40,
      40
    ],
    "Politics": [
      40
    ],
    "Psychology": [
      49,
      49,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Specialist Mathematics": [
      41
    ],
    "Visual Communication Design": [
      47,
      43,
      40
    ]
  },
  "Swan Hill College": {
    "Art Creative Practice": [
      44
    ],
    "Business Management": [
      40
    ],
    "Community Services (VCE VET)": [
      41
    ],
    "Engineering Studies (VCE VET)": [
      46
    ],
    "English": [
      45
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Health and Human Development": [
      40
    ],
    "History Revolutions": [
      40
    ],
    "Media": [
      45
    ],
    "Physical Education": [
      40
    ],
    "Sport and Recreation (VCE VET)": [
      45
    ]
  },
  "Swinburne Senior Secondary College, Hawthorn": {
    "Ancient History": [
      50
    ],
    "Art Creative Practice": [
      41,
      40
    ],
    "Art Making and Exhibiting": [
      45,
      42,
      42,
      41
    ],
    "English": [
      47,
      42,
      41,
      40
    ],
    "Food Studies": [
      43,
      43
    ],
    "Foundation Mathematics": [
      41
    ],
    "General Mathematics": [
      41
    ],
    "History Revolutions": [
      44
    ],
    "Philosophy": [
      49
    ],
    "Product Design and Technologies": [
      42,
      41
    ],
    "Sociology": [
      48,
      45,
      42,
      41,
      40
    ]
  },
  "Tarneit Senior College": {
    "Biology": [
      43
    ],
    "Business Management": [
      41
    ],
    "Geography": [
      44
    ]
  },
  "Taxiarches Greek School of Mentone and District's Incorp.": {
    "Languages:Greek": [
      42
    ]
  },
  "Taylors Lakes Secondary College": {
    "Business Management": [
      42,
      41
    ],
    "Creative and Digital Media (VCE VET)": [
      41
    ],
    "English": [
      48,
      41
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      50,
      44,
      42,
      40
    ],
    "Health and Human Development": [
      48,
      43
    ],
    "Mathematical Methods": [
      42,
      40
    ],
    "Physical Education": [
      42,
      41
    ],
    "Psychology": [
      42,
      40
    ]
  },
  "Templestowe College, Templestowe Lower": {
    "Biology": [
      42,
      40
    ],
    "Business Management": [
      42
    ],
    "Chemistry": [
      42,
      41
    ],
    "Community Services (VCE VET)": [
      43
    ],
    "English": [
      43,
      43,
      41
    ],
    "English Language": [
      43
    ],
    "English as an Additional Language": [
      40
    ],
    "Environmental Science": [
      42
    ],
    "General Mathematics": [
      48,
      47,
      45,
      43,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      47,
      40
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      50,
      45,
      43
    ],
    "Music Contemporary Performance": [
      45
    ],
    "Physics": [
      50,
      45,
      43,
      41,
      41,
      40,
      40
    ],
    "Psychology": [
      47,
      45
    ],
    "Specialist Mathematics": [
      46,
      42
    ],
    "Visual Communication Design": [
      42,
      42
    ]
  },
  "The Geelong College, Newtown": {
    "Accounting": [
      45
    ],
    "Ancient History": [
      43,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      47,
      45,
      44,
      41
    ],
    "Biology": [
      44,
      43,
      41,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      46,
      46,
      46,
      45,
      44,
      44,
      44,
      43,
      43,
      42,
      41,
      40,
      40
    ],
    "Chemistry": [
      42,
      41,
      41,
      41,
      41,
      40
    ],
    "Drama": [
      45
    ],
    "Economics": [
      46,
      42
    ],
    "English": [
      46,
      46,
      45,
      44,
      44,
      44,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Environmental Science": [
      42
    ],
    "General Mathematics": [
      50,
      50,
      46,
      45,
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      40
    ],
    "Health and Human Development": [
      47,
      47,
      46,
      46,
      43,
      42,
      42,
      41,
      41,
      40,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Languages:French": [
      40
    ],
    "Legal Studies": [
      47,
      46
    ],
    "Media": [
      43
    ],
    "Music Contemporary Performance": [
      40
    ],
    "Music Performance (VCE VET)": [
      46,
      42
    ],
    "Music Repertoire Performance": [
      44
    ],
    "Physical Education": [
      48,
      43,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "Physics": [
      46,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Product Design and Technologies": [
      42,
      40,
      40
    ],
    "Psychology": [
      50,
      50,
      46,
      46,
      45,
      43,
      42,
      41
    ],
    "Specialist Mathematics": [
      44
    ],
    "Systems Engineering": [
      42
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "The Grange P-12 College, Hoppers Crossing": {
    "English": [
      47
    ],
    "General Mathematics": [
      41,
      40
    ],
    "Health and Human Development": [
      44,
      42,
      42,
      41
    ],
    "Legal Studies": [
      40
    ],
    "Physics": [
      43
    ],
    "Psychology": [
      45,
      41,
      40
    ]
  },
  "The Hamilton and Alexandra College": {
    "Applied Computing: Software Development": [
      42
    ],
    "Art Making and Exhibiting": [
      47,
      41
    ],
    "Biology": [
      45,
      43,
      43,
      43
    ],
    "Chemistry": [
      40
    ],
    "Engineering Studies (VCE VET)": [
      41
    ],
    "English": [
      40,
      40
    ],
    "General Mathematics": [
      40
    ],
    "Literature": [
      44
    ],
    "Physics": [
      43
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "The Hungarian Language School, Wantirna": {
    "Languages:Hungarian": [
      41,
      40
    ]
  },
  "The King David School - Senior School, Armadale": {
    "Art Making and Exhibiting": [
      48
    ],
    "Business Management": [
      40,
      40
    ],
    "Chemistry": [
      44,
      44,
      42,
      40
    ],
    "English": [
      42,
      42,
      40
    ],
    "General Mathematics": [
      45,
      45,
      42,
      42,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      44,
      42
    ],
    "History Revolutions": [
      50,
      47,
      42
    ],
    "Legal Studies": [
      49
    ],
    "Literature": [
      47,
      47
    ],
    "Mathematical Methods": [
      43,
      40
    ],
    "Media": [
      44,
      42,
      40
    ],
    "Physical Education": [
      43,
      40
    ],
    "Physics": [
      44,
      42,
      41
    ],
    "Psychology": [
      47,
      46,
      45
    ],
    "Religion and Society": [
      41,
      40
    ],
    "Specialist Mathematics": [
      40,
      40
    ]
  },
  "The Knox School, Wantirna South": {
    "Applied Computing: Software Development": [
      47
    ],
    "Biology": [
      40
    ],
    "Business Management": [
      44,
      40
    ],
    "Chemistry": [
      48,
      45,
      44,
      43,
      40
    ],
    "Economics": [
      40
    ],
    "English": [
      48,
      47,
      45,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41
    ],
    "English as an Additional Language": [
      41,
      41,
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      47,
      44,
      43,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      49,
      42
    ],
    "History Revolutions": [
      40
    ],
    "Languages:German": [
      43
    ],
    "Mathematical Methods": [
      50
    ],
    "Media": [
      41,
      41
    ],
    "Music Contemporary Performance": [
      50,
      43
    ],
    "Physical Education": [
      47,
      40
    ],
    "Physics": [
      50,
      43,
      42,
      41
    ],
    "Psychology": [
      44,
      44,
      43,
      43,
      40
    ],
    "Specialist Mathematics": [
      46
    ],
    "Visual Communication Design": [
      45,
      45,
      42
    ]
  },
  "The Lakes South Morang College": {
    "Applied Computing: Software Development": [
      43
    ]
  },
  "The Melbourne International School of Japanese, Oakleigh South": {
    "Languages:Japanese Second Language": [
      48,
      46,
      46,
      46,
      44,
      44,
      43,
      43,
      41,
      40,
      40
    ]
  },
  "The Pushkin Lyceum Russian Community School, Elwood": {
    "Languages:Russian": [
      41
    ]
  },
  "Thomas Carr College - Hailiang Foreign Language School, Zhejiang": {
    "Languages:Chinese First Language": [
      43
    ]
  },
  "Thomas Carr College - Wenzhou No 21 Middle School, Wenzhou Zhejiang": {
    "Mathematical Methods": [
      41
    ]
  },
  "Thomas Carr College, Tarneit": {
    "Applied Computing: Data Analytics": [
      41
    ],
    "Business Management": [
      42,
      41
    ],
    "Foundation Mathematics": [
      42
    ],
    "General Mathematics": [
      42,
      42,
      40
    ],
    "Legal Studies": [
      42
    ],
    "Physical Education": [
      41
    ]
  },
  "Thomastown Secondary College": {
    "Biology": [
      44
    ],
    "Mathematical Methods": [
      42
    ],
    "Psychology": [
      40
    ]
  },
  "Thornbury High School": {
    "Accounting": [
      41
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      46,
      43,
      42,
      41,
      40
    ],
    "General Mathematics": [
      44,
      43,
      43,
      41,
      41,
      40,
      40
    ],
    "Hospitality (Cookery)(VCE VET)": [
      40
    ],
    "Legal Studies": [
      40
    ],
    "Mathematical Methods": [
      46
    ],
    "Media": [
      42,
      41,
      40
    ],
    "Music Contemporary Performance": [
      47
    ],
    "Psychology": [
      41,
      40,
      40
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ],
    "Theatre Studies": [
      40
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Tintern Grammar, Ringwood East": {
    "Biology": [
      42,
      41,
      40
    ],
    "Business Management": [
      45,
      45,
      42,
      42
    ],
    "Chemistry": [
      45,
      45
    ],
    "Creative and Digital Media (VCE VET)": [
      47,
      43
    ],
    "English": [
      50,
      44,
      44,
      43,
      42,
      42,
      42,
      41
    ],
    "English Language": [
      41
    ],
    "Food Studies": [
      41,
      40,
      40
    ],
    "General Mathematics": [
      48,
      44,
      43,
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      47
    ],
    "History Revolutions": [
      46,
      43
    ],
    "Languages:Chinese Second Language Advanced": [
      40
    ],
    "Literature": [
      44,
      42
    ],
    "Mathematical Methods": [
      47,
      46,
      44,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      49,
      45,
      41
    ],
    "Physical Education": [
      47,
      45,
      43,
      42,
      42,
      40,
      40
    ],
    "Physics": [
      40,
      40
    ],
    "Psychology": [
      48,
      42,
      41
    ]
  },
  "Toorak College, Mount Eliza": {
    "Accounting": [
      40
    ],
    "Business Management": [
      45,
      40,
      40
    ],
    "Chemistry": [
      45,
      43
    ],
    "English": [
      45,
      45,
      44,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "English as an Additional Language": [
      47,
      41
    ],
    "Equine Studies (VCE VET)": [
      45,
      44
    ],
    "Food Studies": [
      45,
      44,
      43
    ],
    "General Mathematics": [
      48,
      45,
      43,
      43,
      42,
      42,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      50,
      46,
      44,
      44,
      44,
      42,
      42,
      42,
      41,
      40
    ],
    "History Revolutions": [
      50,
      42
    ],
    "Languages:Chinese First Language": [
      40
    ],
    "Languages:Japanese Second Language": [
      41,
      40
    ],
    "Legal Studies": [
      42,
      40
    ],
    "Mathematical Methods": [
      45,
      41
    ],
    "Media": [
      44,
      44,
      41
    ],
    "Physical Education": [
      45,
      45,
      40
    ],
    "Physics": [
      41
    ],
    "Product Design and Technologies": [
      49,
      41,
      41
    ],
    "Psychology": [
      43,
      41,
      41
    ],
    "Visual Communication Design": [
      41,
      40
    ]
  },
  "Trafalgar High School": {
    "English": [
      41
    ],
    "General Mathematics": [
      43,
      41,
      40
    ],
    "Mathematical Methods": [
      41
    ]
  },
  "Traralgon College": {
    "Art Making and Exhibiting": [
      45
    ],
    "Business Management": [
      42,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "Literature": [
      40
    ],
    "Psychology": [
      40
    ]
  },
  "Trinity College Colac": {
    "Biology": [
      45
    ],
    "Business Management": [
      40,
      40
    ],
    "English": [
      43,
      40
    ],
    "General Mathematics": [
      41
    ],
    "Health and Human Development": [
      41
    ],
    "Literature": [
      45,
      42
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      50
    ]
  },
  "Trinity Grammar School, Kew": {
    "Accounting": [
      43,
      42,
      41,
      40
    ],
    "Algorithmics (HESS)": [
      46,
      42
    ],
    "Ancient History": [
      46,
      46,
      42,
      42
    ],
    "Biology": [
      42,
      42,
      41,
      40
    ],
    "Business Management": [
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      48,
      46,
      44,
      41,
      40
    ],
    "Economics": [
      45,
      44,
      43,
      43,
      42,
      41
    ],
    "English": [
      50,
      50,
      49,
      49,
      49,
      47,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      40
    ],
    "General Mathematics": [
      50,
      46,
      46,
      45,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      44,
      43
    ],
    "History Revolutions": [
      47,
      45,
      41
    ],
    "Hospitality": [
      46
    ],
    "Languages:Chinese First Language": [
      49
    ],
    "Languages:Chinese Second Language Advanced": [
      45
    ],
    "Languages:French": [
      48,
      43
    ],
    "Languages:German": [
      43
    ],
    "Languages:Latin": [
      48,
      43,
      40
    ],
    "Legal Studies": [
      46,
      44,
      42,
      42,
      42,
      40,
      40
    ],
    "Mathematical Methods": [
      50,
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      48,
      46,
      46,
      45,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      50,
      45,
      44,
      44,
      43,
      40
    ],
    "Music Repertoire Performance": [
      45,
      43,
      41
    ],
    "Physical Education": [
      42,
      42
    ],
    "Physics": [
      47,
      47,
      45,
      45,
      44,
      42,
      41,
      40,
      40,
      40
    ],
    "Politics": [
      47,
      45,
      45,
      44,
      42,
      40
    ],
    "Product Design and Technologies": [
      48,
      44,
      43,
      41,
      41,
      41,
      40,
      40
    ],
    "Psychology": [
      50,
      46,
      42,
      41,
      40
    ],
    "Specialist Mathematics": [
      50,
      47,
      45,
      45,
      44,
      44,
      42,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Systems Engineering": [
      47,
      47,
      43
    ],
    "Theatre Studies": [
      42
    ],
    "Visual Communication Design": [
      41,
      40
    ]
  },
  "University High School, Parkville": {
    "Biology": [
      46,
      43,
      42
    ],
    "Business Management": [
      40,
      40
    ],
    "Chemistry": [
      45,
      43,
      43,
      41,
      41
    ],
    "Economics": [
      50,
      44
    ],
    "English": [
      42,
      42,
      41,
      40,
      40
    ],
    "English Language": [
      47,
      47,
      43,
      42,
      41,
      41
    ],
    "Extended Investigation": [
      41
    ],
    "General Mathematics": [
      42,
      41,
      40
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      50,
      45
    ],
    "Legal Studies": [
      49,
      43
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      46,
      44,
      43,
      40,
      40,
      40
    ],
    "Media": [
      40
    ],
    "Physical Education": [
      50,
      46,
      43
    ],
    "Physics": [
      45,
      43,
      42,
      40
    ],
    "Politics": [
      40
    ],
    "Psychology": [
      49,
      45,
      44,
      44,
      44,
      43,
      42,
      41,
      41,
      41,
      41,
      40,
      40
    ]
  },
  "Upper Yarra Secondary College, Yarra Junction": {
    "Business Management": [
      47
    ],
    "General Mathematics": [
      47,
      40
    ],
    "Health and Human Development": [
      40,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Outdoor and Environmental Studies": [
      43
    ],
    "Product Design and Technologies": [
      43
    ],
    "Psychology": [
      41
    ]
  },
  "Upwey High School": {
    "English": [
      42
    ],
    "History Revolutions": [
      40
    ],
    "Literature": [
      42
    ]
  },
  "VSL - Altona North/Sunshine/Creekside/Truganina, Footscray": {
    "Languages:Arabic": [
      45
    ],
    "Languages:Bengali": [
      43
    ],
    "Languages:Chin Hakha": [
      49
    ],
    "Languages:Punjabi": [
      44
    ]
  },
  "VSL - Box Hill/Blackburn/Doncaster": {
    "Languages:Chinese First Language": [
      47,
      40
    ],
    "Languages:Hindi": [
      44,
      42,
      41,
      40
    ],
    "Languages:Japanese Second Language": [
      43,
      42
    ],
    "Languages:Korean Second Language": [
      43
    ],
    "Languages:Persian": [
      48,
      47,
      46,
      44,
      44,
      44,
      43,
      43,
      43,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Languages:Vietnamese First Language": [
      41,
      40
    ]
  },
  "VSL - Craigieburn/Keilor Downs/Taylors Lakes/Melton": {
    "Languages:Croatian": [
      43,
      40
    ],
    "Languages:Macedonian": [
      46,
      45
    ],
    "Languages:Punjabi": [
      40
    ],
    "Languages:Vietnamese First Language": [
      42
    ]
  },
  "VSL - Croydon/Shepparton/Bendigo/Ballarat/Mildura, Thornbury": {
    "Languages:Chin Hakha": [
      48,
      45
    ]
  },
  "VSL - Dandenong/Hampton Park/Berwick": {
    "Languages:Filipino": [
      42
    ],
    "Languages:Hungarian": [
      47,
      45,
      42,
      40
    ],
    "Languages:Persian": [
      40,
      40
    ],
    "Languages:Punjabi": [
      42,
      41
    ],
    "Languages:Serbian": [
      43,
      43,
      40
    ]
  },
  "VSL - Epping/Lalor/Roxburgh/Thomastown": {
    "Languages:Arabic": [
      42
    ],
    "Languages:Macedonian": [
      40
    ],
    "Languages:Punjabi": [
      43
    ],
    "Languages:Sinhala": [
      45,
      43,
      43
    ]
  },
  "VSL - Glen Waverley/Carwatha/Brentwood": {
    "Languages:Bosnian": [
      46,
      42
    ],
    "Languages:Chinese First Language": [
      42,
      40
    ],
    "Languages:Hindi": [
      47,
      43
    ],
    "Languages:Indonesian Second Language": [
      50,
      44,
      43,
      43,
      43,
      42,
      41,
      41
    ],
    "Languages:Japanese First Language": [
      44
    ],
    "Languages:Japanese Second Language": [
      44,
      43
    ]
  },
  "VSL - North Geelong/Matthew Flinders/Werribee/Point Cook": {
    "Languages:Hindi": [
      40
    ],
    "Languages:Karen": [
      40
    ],
    "Languages:Turkish": [
      41
    ]
  },
  "VSL - University/Brunswick/Collingwood/Footscray, Parkville": {
    "Languages:German": [
      40,
      40
    ],
    "Languages:Italian": [
      50,
      47,
      43
    ],
    "Languages:Japanese Second Language": [
      47
    ],
    "Languages:Polish": [
      42
    ],
    "Languages:Portuguese": [
      43
    ],
    "Languages:Spanish": [
      42,
      41
    ],
    "Languages:Vietnamese First Language": [
      47,
      44,
      43
    ],
    "Languages:Vietnamese Second Language": [
      41,
      41
    ]
  },
  "VSL - Westall/South Oakleigh/Mckinnon/Mentone, Clayton South": {
    "Languages:Croatian": [
      44
    ],
    "Languages:German": [
      44
    ],
    "Languages:Hebrew": [
      40
    ],
    "Languages:Khmer": [
      40
    ],
    "Languages:Vietnamese First Language": [
      41,
      40
    ],
    "Languages:Vietnamese Second Language": [
      45,
      43
    ]
  },
  "VSL Distance Education, Thornbury": {
    "Languages:Arabic": [
      48,
      44,
      43,
      41
    ],
    "Languages:Chinese Second Language Advanced": [
      40
    ],
    "Languages:French": [
      41,
      41,
      40,
      40
    ],
    "Languages:German": [
      46,
      45,
      44,
      44,
      43,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Languages:Indonesian First Language": [
      40
    ],
    "Languages:Italian": [
      49,
      48,
      48,
      47,
      43,
      42,
      42,
      41
    ],
    "Languages:Japanese Second Language": [
      50,
      47,
      45,
      43,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      40
    ],
    "Languages:Spanish": [
      46,
      43,
      43,
      41,
      40
    ]
  },
  "Vermont Secondary College": {
    "Accounting": [
      41,
      40
    ],
    "Art Creative Practice": [
      41
    ],
    "Biology": [
      45,
      44,
      43,
      41,
      40,
      40,
      40
    ],
    "Business Management": [
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      46,
      42,
      42,
      42
    ],
    "Economics": [
      42
    ],
    "English": [
      47,
      45,
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "English Language": [
      41,
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "Foundation Mathematics": [
      45,
      43
    ],
    "General Mathematics": [
      42,
      42,
      41,
      40,
      40,
      40,
      40
    ],
    "History Revolutions": [
      44,
      40
    ],
    "Languages:German": [
      41
    ],
    "Legal Studies": [
      41,
      41,
      40
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      47,
      44,
      43,
      42,
      41,
      41,
      40
    ],
    "Outdoor and Environmental Studies": [
      40
    ],
    "Physical Education": [
      46,
      45,
      45,
      44,
      44,
      44,
      42,
      41,
      40
    ],
    "Physics": [
      42,
      41,
      41,
      40
    ],
    "Product Design and Technologies": [
      45,
      45,
      43
    ],
    "Psychology": [
      45,
      44,
      42
    ],
    "Specialist Mathematics": [
      43,
      40
    ]
  },
  "Victoria University Secondary College - Cairnlea Campus, St Albans": {
    "Applied Computing: Data Analytics": [
      43,
      42
    ],
    "English": [
      49,
      46,
      44,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      41
    ],
    "General Mathematics": [
      43,
      40,
      40
    ],
    "Health and Human Development": [
      46
    ],
    "Philosophy": [
      43,
      40
    ],
    "Psychology": [
      44
    ]
  },
  "Victorian College for the Deaf, Melbourne": {
    "Languages:Auslan": [
      44,
      42,
      41
    ]
  },
  "Victorian College of the Arts Secondary School, Southbank": {
    "Art Creative Practice": [
      44,
      42,
      40,
      40,
      40
    ],
    "Art Making and Exhibiting": [
      50,
      44,
      43,
      43,
      42,
      42,
      41,
      40,
      40
    ],
    "Dance": [
      43,
      41,
      40,
      40
    ],
    "Dance (VCE VET)": [
      49,
      48,
      43,
      41,
      41,
      40,
      40
    ],
    "Drama": [
      42,
      41,
      40
    ],
    "English": [
      41
    ],
    "History Revolutions": [
      48,
      41
    ],
    "Literature": [
      40
    ],
    "Mathematical Methods": [
      47
    ],
    "Music Composition": [
      48,
      47,
      43,
      42,
      40
    ],
    "Music Contemporary Performance": [
      46,
      45,
      42
    ],
    "Music Repertoire Performance": [
      45,
      42,
      41,
      40,
      40,
      40
    ],
    "Theatre Studies": [
      42
    ]
  },
  "Victorian Tamil Association, Glen Waverley": {
    "Languages:Tamil": [
      50,
      48,
      47,
      46,
      44,
      43,
      43,
      42
    ]
  },
  "Victory Christian College, Strathdale": {
    "Biology": [
      40
    ],
    "Business Management": [
      43,
      42
    ],
    "Chemistry": [
      40
    ],
    "Food Studies": [
      48
    ],
    "General Mathematics": [
      40
    ],
    "Mathematical Methods": [
      40
    ],
    "Media": [
      45
    ],
    "Physical Education": [
      42
    ],
    "Physics": [
      43,
      42
    ]
  },
  "Victory Lutheran College, West Wodonga": {
    "Drama": [
      41
    ],
    "General Mathematics": [
      40
    ],
    "Health and Human Development": [
      49
    ],
    "History Revolutions": [
      41
    ],
    "Hospitality (Cookery)(VCE VET)": [
      42
    ],
    "Legal Studies": [
      40
    ],
    "Physical Education": [
      42
    ],
    "Psychology": [
      43,
      43,
      42
    ],
    "Sport and Recreation (VCE VET)": [
      47,
      43,
      42
    ]
  },
  "Viewbank College, Rosanna": {
    "Art Creative Practice": [
      47,
      40
    ],
    "Biology": [
      46,
      41,
      40
    ],
    "Business Management": [
      49,
      44,
      43,
      42,
      41,
      41,
      41
    ],
    "Chemistry": [
      44,
      43,
      40
    ],
    "English": [
      43,
      41,
      40
    ],
    "English Language": [
      45,
      44,
      42
    ],
    "General Mathematics": [
      47,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      40
    ],
    "Health and Human Development": [
      42
    ],
    "History Revolutions": [
      43,
      43,
      42,
      40
    ],
    "Languages:Japanese Second Language": [
      44
    ],
    "Legal Studies": [
      46,
      41
    ],
    "Literature": [
      44,
      43,
      41,
      40
    ],
    "Mathematical Methods": [
      49,
      44,
      42,
      41,
      40
    ],
    "Music Contemporary Performance": [
      41
    ],
    "Outdoor and Environmental Studies": [
      47,
      46,
      44
    ],
    "Philosophy": [
      40
    ],
    "Physical Education": [
      43,
      41,
      41,
      40
    ],
    "Physics": [
      41,
      40
    ],
    "Product Design and Technologies": [
      42,
      41,
      40,
      40
    ],
    "Psychology": [
      47,
      43,
      41,
      40,
      40
    ],
    "Systems Engineering": [
      45,
      44,
      43
    ],
    "Visual Communication Design": [
      45,
      42
    ]
  },
  "Virtual School Victoria, Thornbury": {
    "Accounting": [
      43
    ],
    "Agricultural and Horticultural Studies": [
      41,
      40
    ],
    "Algorithmics (HESS)": [
      47,
      44,
      43,
      41,
      41,
      40,
      40,
      40
    ],
    "Ancient History": [
      42,
      41,
      40
    ],
    "Applied Computing: Data Analytics": [
      41
    ],
    "Applied Computing: Software Development": [
      43,
      43,
      41,
      41,
      40
    ],
    "Art Creative Practice": [
      42,
      41
    ],
    "Art Making and Exhibiting": [
      43
    ],
    "Biology": [
      42,
      41
    ],
    "Business Management": [
      43,
      42,
      41,
      41,
      40
    ],
    "Classical Studies": [
      40
    ],
    "Dance": [
      47
    ],
    "Dance (VCE VET)": [
      50,
      41
    ],
    "Economics": [
      43
    ],
    "English": [
      40
    ],
    "English Language": [
      42,
      41,
      40
    ],
    "English as an Additional Language": [
      40
    ],
    "Environmental Science": [
      48,
      44,
      43,
      40
    ],
    "Extended Investigation": [
      41
    ],
    "Food Studies": [
      43,
      41,
      41,
      41
    ],
    "Foundation Mathematics": [
      50,
      49,
      46,
      46,
      45,
      45,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40
    ],
    "General Mathematics": [
      47,
      45,
      45,
      43,
      40
    ],
    "Geography": [
      45,
      40
    ],
    "Health and Human Development": [
      41,
      40
    ],
    "History Revolutions": [
      42
    ],
    "Industry and Enterprise": [
      43
    ],
    "Legal Studies": [
      50,
      41,
      41
    ],
    "Literature": [
      41
    ],
    "Media": [
      43,
      41,
      40,
      40
    ],
    "Music Composition": [
      41,
      40,
      40
    ],
    "Music Contemporary Performance": [
      41
    ],
    "Music Repertoire Performance": [
      43
    ],
    "Philosophy": [
      42,
      41
    ],
    "Physical Education": [
      40,
      40
    ],
    "Psychology": [
      44
    ],
    "Sociology": [
      44,
      40
    ],
    "Specialist Mathematics": [
      40
    ],
    "Systems Engineering": [
      47,
      42,
      41,
      40,
      40
    ],
    "Theatre Studies": [
      48,
      41
    ]
  },
  "Wallan Secondary College": {
    "Health and Human Development": [
      41
    ]
  },
  "Wangaratta High School - Edwards Street Campus": {
    "Biology": [
      48
    ],
    "Chemistry": [
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      50,
      48
    ],
    "Physical Education": [
      50
    ]
  },
  "Wantirna College": {
    "Applied Computing: Software Development": [
      41
    ],
    "Biology": [
      43
    ],
    "Business Management": [
      40
    ],
    "Dance": [
      44
    ],
    "English": [
      43
    ],
    "Environmental Science": [
      44,
      41,
      40
    ],
    "General Mathematics": [
      42
    ],
    "Geography": [
      49,
      44
    ],
    "Health and Human Development": [
      46,
      44,
      42,
      40
    ],
    "History Revolutions": [
      40
    ],
    "Media": [
      41
    ],
    "Psychology": [
      42
    ],
    "Visual Communication Design": [
      49
    ]
  },
  "Warragul Regional College": {
    "Health and Human Development": [
      40
    ],
    "Outdoor and Environmental Studies": [
      43,
      42,
      41
    ],
    "Product Design and Technologies": [
      44
    ]
  },
  "Warrandyte High School": {
    "General Mathematics": [
      40
    ]
  },
  "Warrnambool College": {
    "English": [
      46
    ],
    "Health and Human Development": [
      40
    ],
    "Physical Education": [
      40,
      40
    ],
    "Psychology": [
      40
    ]
  },
  "Waverley Christian College - Narre Warren Campus, Narre Warren South": {
    "Accounting": [
      40
    ],
    "Art Creative Practice": [
      43,
      41
    ],
    "Business Management": [
      46,
      42
    ],
    "Chemistry": [
      43
    ],
    "English": [
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "General Mathematics": [
      50,
      41
    ],
    "Health and Human Development": [
      40
    ],
    "Mathematical Methods": [
      45,
      40
    ],
    "Media": [
      42
    ],
    "Physical Education": [
      42
    ],
    "Physics": [
      43
    ],
    "Psychology": [
      43,
      41
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Waverley Christian College, Wantirna South": {
    "Applied Computing: Software Development": [
      48,
      48,
      45,
      43
    ],
    "Biology": [
      41
    ],
    "Business Management": [
      45,
      44,
      44,
      43,
      43,
      42,
      41,
      40
    ],
    "Chemistry": [
      48,
      46,
      45,
      44,
      41
    ],
    "Economics": [
      46,
      40
    ],
    "English": [
      46,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      46,
      40
    ],
    "Food Studies": [
      50,
      48,
      46,
      45
    ],
    "General Mathematics": [
      49,
      48,
      48,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      47,
      43,
      42,
      40,
      40,
      40
    ],
    "History Revolutions": [
      41
    ],
    "Legal Studies": [
      50,
      42
    ],
    "Mathematical Methods": [
      47,
      46,
      46,
      45,
      43,
      41,
      40,
      40,
      40
    ],
    "Music Contemporary Performance": [
      42
    ],
    "Music Repertoire Performance": [
      44
    ],
    "Physical Education": [
      45,
      44,
      42,
      40
    ],
    "Physics": [
      47,
      41
    ],
    "Psychology": [
      45,
      45,
      43,
      43,
      42,
      42,
      42,
      41,
      40,
      40
    ],
    "Specialist Mathematics": [
      45,
      45,
      42,
      40
    ],
    "Texts and Traditions": [
      41
    ]
  },
  "Wedderburn College": {
    "Physics": [
      41
    ]
  },
  "Wellington Secondary College, Mulgrave": {
    "Biology": [
      40,
      40
    ],
    "Business Management": [
      43,
      40
    ],
    "Chemistry": [
      50,
      48,
      46,
      45,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "English": [
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English Language": [
      49,
      43,
      41
    ],
    "English as an Additional Language": [
      40
    ],
    "Environmental Science": [
      49
    ],
    "General Mathematics": [
      48,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41
    ],
    "Health and Human Development": [
      48,
      41,
      41
    ],
    "Legal Studies": [
      44,
      43
    ],
    "Mathematical Methods": [
      45,
      42,
      42,
      40
    ],
    "Physics": [
      40
    ],
    "Psychology": [
      45,
      43,
      40,
      40,
      40,
      40
    ],
    "Visual Communication Design": [
      40
    ]
  },
  "Werribee Secondary College": {
    "Applied Computing: Software Development": [
      46,
      41,
      40,
      40
    ],
    "Biology": [
      46,
      41
    ],
    "Chemistry": [
      41,
      40
    ],
    "English": [
      49,
      42,
      41,
      41,
      40
    ],
    "English Language": [
      45,
      40,
      40
    ],
    "Environmental Science": [
      41
    ],
    "General Mathematics": [
      50,
      45,
      42,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      42
    ],
    "Mathematical Methods": [
      45,
      41
    ],
    "Physics": [
      42,
      41
    ],
    "Psychology": [
      42,
      40
    ],
    "Specialist Mathematics": [
      40
    ]
  },
  "Wesley College - Glen Waverley Campus": {
    "Accounting": [
      40
    ],
    "Business Management": [
      40
    ],
    "Chemistry": [
      41
    ],
    "English": [
      49,
      47,
      44,
      44,
      44,
      42,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      42
    ],
    "General Mathematics": [
      45,
      43,
      43,
      41,
      40,
      40
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      44,
      41
    ],
    "Languages:French": [
      40
    ],
    "Literature": [
      43,
      42,
      41
    ],
    "Mathematical Methods": [
      44,
      42,
      40
    ],
    "Music Contemporary Performance": [
      44,
      44,
      42
    ],
    "Physical Education": [
      44,
      41,
      41
    ],
    "Physics": [
      46
    ],
    "Product Design and Technologies": [
      47,
      42,
      40
    ],
    "Psychology": [
      43,
      42,
      42,
      41
    ],
    "Specialist Mathematics": [
      41
    ],
    "Theatre Studies": [
      45
    ]
  },
  "Wesley College, Melbourne": {
    "Business Management": [
      50,
      49,
      48
    ],
    "Chemistry": [
      40
    ],
    "English": [
      44,
      44,
      42,
      42,
      41,
      41,
      41
    ],
    "General Mathematics": [
      40
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      46
    ],
    "History Revolutions": [
      44
    ],
    "Literature": [
      40
    ],
    "Media": [
      50,
      44,
      43,
      42,
      41
    ],
    "Music Contemporary Performance": [
      50,
      41
    ],
    "Philosophy": [
      41
    ],
    "Physical Education": [
      41
    ],
    "Physics": [
      48
    ],
    "Psychology": [
      50,
      43,
      42,
      40
    ],
    "Theatre Studies": [
      43
    ]
  },
  "Westall Secondary College, Clayton South": {
    "Accounting": [
      42
    ],
    "Art Making and Exhibiting": [
      42
    ],
    "Chemistry": [
      41
    ],
    "English": [
      44
    ],
    "General Mathematics": [
      44,
      42,
      41
    ],
    "Physics": [
      40
    ]
  },
  "Westbourne Grammar School - Hoppers Crossing Campus, Truganina": {
    "Accounting": [
      47
    ],
    "Applied Computing: Software Development": [
      44,
      42,
      41,
      41,
      40
    ],
    "Art Making and Exhibiting": [
      50
    ],
    "Biology": [
      42,
      42,
      42,
      41,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Business Management": [
      44,
      42,
      42,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      45,
      44,
      43,
      43,
      42,
      42,
      42
    ],
    "Economics": [
      46,
      44,
      42,
      41
    ],
    "English": [
      49,
      45,
      45,
      44,
      44,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      43,
      42
    ],
    "General Mathematics": [
      46,
      44,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      43,
      42,
      41,
      40,
      40
    ],
    "History Revolutions": [
      43
    ],
    "Languages:Japanese Second Language": [
      40,
      40
    ],
    "Legal Studies": [
      42,
      42,
      42,
      40
    ],
    "Mathematical Methods": [
      44,
      44,
      43,
      43
    ],
    "Media": [
      45
    ],
    "Physical Education": [
      41,
      41,
      40
    ],
    "Physics": [
      44,
      42,
      42,
      41
    ],
    "Specialist Mathematics": [
      42,
      40
    ]
  },
  "Western Chinese Language School, Braybrook": {
    "Languages:Chinese Second Language Advanced": [
      41
    ]
  },
  "Western Heights Secondary College, Hamlyn Heights": {
    "Mathematical Methods": [
      45
    ],
    "Physics": [
      49
    ]
  },
  "Western Port Secondary College, Hastings": {
    "Ancient History": [
      41
    ],
    "English": [
      43
    ]
  },
  "Wheelers Hill Secondary College": {
    "Biology": [
      40
    ],
    "Chemistry": [
      42
    ],
    "General Mathematics": [
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      43
    ],
    "Legal Studies": [
      42
    ],
    "Psychology": [
      49
    ]
  },
  "Whitefriars College, Donvale": {
    "Biology": [
      41
    ],
    "Business Management": [
      44,
      44,
      43,
      43,
      42
    ],
    "Economics": [
      41
    ],
    "English": [
      45,
      42,
      41,
      40,
      40,
      40
    ],
    "English Language": [
      44
    ],
    "General Mathematics": [
      48,
      47,
      46,
      46,
      45,
      44,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Health and Human Development": [
      44,
      41
    ],
    "History Revolutions": [
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      44
    ],
    "Legal Studies": [
      42,
      40
    ],
    "Literature": [
      44
    ],
    "Mathematical Methods": [
      43,
      41,
      40
    ],
    "Media": [
      40,
      40
    ],
    "Physical Education": [
      45
    ],
    "Physics": [
      45
    ],
    "Psychology": [
      41
    ],
    "Religion and Society": [
      41
    ],
    "Sport and Recreation (VCE VET)": [
      44
    ]
  },
  "Whittlesea Secondary College": {
    "Physical Education": [
      43
    ]
  },
  "William Ruthven Secondary College, Reservoir": {
    "Business Management": [
      43,
      40
    ],
    "General Mathematics": [
      41
    ]
  },
  "Williamstown High School": {
    "Accounting": [
      42,
      41
    ],
    "Applied Computing: Software Development": [
      41
    ],
    "Art Making and Exhibiting": [
      46,
      42,
      40,
      40
    ],
    "Biology": [
      43,
      42,
      41
    ],
    "Business Management": [
      41,
      41
    ],
    "Chemistry": [
      46,
      43,
      42,
      41,
      40
    ],
    "Drama": [
      40
    ],
    "English": [
      46,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      46,
      45,
      44,
      44,
      43,
      43,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      41
    ],
    "Health and Human Development": [
      46,
      40,
      40,
      40
    ],
    "History Revolutions": [
      45,
      41,
      41,
      40
    ],
    "Languages:French": [
      41
    ],
    "Languages:Indonesian Second Language": [
      40
    ],
    "Legal Studies": [
      44,
      43,
      41,
      40
    ],
    "Literature": [
      47,
      46,
      43,
      42
    ],
    "Mathematical Methods": [
      44,
      43,
      43
    ],
    "Media": [
      48,
      43
    ],
    "Music Performance (VCE VET)": [
      50
    ],
    "Outdoor and Environmental Studies": [
      47,
      44,
      40
    ],
    "Physical Education": [
      40
    ],
    "Physics": [
      44,
      42
    ],
    "Product Design and Technologies": [
      41
    ],
    "Psychology": [
      47,
      44,
      42,
      41,
      41,
      41,
      40
    ],
    "Specialist Mathematics": [
      40
    ]
  },
  "Wimmera Litheran College - Horsham": {
    "Food Studies": [
      40
    ],
    "General Mathematics": [
      50,
      45,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      43
    ],
    "Outdoor and Environmental Studies": [
      47
    ],
    "Physical Education": [
      47
    ]
  },
  "Woodleigh School, Langwarrin South": {
    "Art Creative Practice": [
      40,
      40
    ],
    "Biology": [
      47,
      42
    ],
    "Chemistry": [
      42,
      41,
      40
    ],
    "Drama": [
      40,
      40
    ],
    "English": [
      41,
      41,
      41,
      40,
      40
    ],
    "General Mathematics": [
      42,
      41,
      41,
      40
    ],
    "Health and Human Development": [
      41
    ],
    "Hospitality (Cookery)(VCE VET)": [
      40
    ],
    "Languages:Indonesian Second Language": [
      40
    ],
    "Mathematical Methods": [
      41
    ],
    "Music Contemporary Performance": [
      42,
      40
    ],
    "Outdoor and Environmental Studies": [
      48,
      42,
      40
    ],
    "Physics": [
      44,
      41
    ],
    "Psychology": [
      44
    ],
    "Visual Communication Design": [
      45
    ]
  },
  "Woodmans Hill Secondary College, Ballarat East": {
    "Business Management": [
      40
    ],
    "English": [
      45
    ],
    "General Mathematics": [
      46
    ],
    "History Revolutions": [
      40
    ],
    "Information and Commuications Technology (VCE VET)": [
      45
    ]
  },
  "Wycheproof P-12 College": {
    "Business Management": [
      41
    ]
  },
  "Wyndham Central Secondary College, Werribee": {
    "Accounting": [
      49
    ],
    "Business Management": [
      41
    ],
    "English": [
      46,
      45,
      42,
      40,
      40,
      40
    ],
    "General Mathematics": [
      44,
      41
    ],
    "Health and Human Development": [
      48
    ],
    "Psychology": [
      42
    ],
    "Visual Communication Design": [
      44
    ]
  },
  "Xavier College, Kew": {
    "Accounting": [
      50,
      41,
      41
    ],
    "Art Making and Exhibiting": [
      41
    ],
    "Australian History": [
      47,
      42
    ],
    "Biology": [
      45,
      42,
      42,
      42,
      40,
      40,
      40
    ],
    "Business Management": [
      47,
      47,
      46,
      44,
      44,
      44,
      43,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Chemistry": [
      43,
      43,
      41,
      41,
      40,
      40
    ],
    "Drama": [
      41
    ],
    "Economics": [
      46,
      44,
      43,
      43,
      42,
      40,
      40
    ],
    "English": [
      50,
      49,
      47,
      47,
      47,
      46,
      45,
      44,
      44,
      43,
      43,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      40
    ],
    "Extended Investigation": [
      50
    ],
    "Foundation Mathematics": [
      48,
      45,
      40
    ],
    "General Mathematics": [
      48,
      47,
      46,
      46,
      46,
      45,
      45,
      43,
      42,
      42,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      42
    ],
    "Health and Human Development": [
      43,
      43,
      42,
      42,
      41,
      41,
      41
    ],
    "History Revolutions": [
      45,
      44,
      44,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Languages:French": [
      42
    ],
    "Languages:Italian": [
      41,
      40
    ],
    "Languages:Japanese Second Language": [
      44,
      41
    ],
    "Legal Studies": [
      43,
      42,
      41,
      41,
      40,
      40,
      40
    ],
    "Literature": [
      41
    ],
    "Mathematical Methods": [
      49,
      48,
      45,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "Media": [
      40
    ],
    "Music Repertoire Performance": [
      50,
      41,
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      42
    ],
    "Physical Education": [
      50,
      44,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40
    ],
    "Physics": [
      45,
      44,
      43,
      41,
      41
    ],
    "Politics": [
      42,
      41
    ],
    "Psychology": [
      40
    ],
    "Specialist Mathematics": [
      43,
      42,
      42,
      41
    ],
    "Texts and Traditions": [
      50,
      47,
      43,
      42
    ],
    "Visual Communication Design": [
      42
    ]
  },
  "Xinjinshan Chinese Language and Culture School Inc, Mount Waverley": {
    "Languages:Chinese Culture and Society": [
      43
    ],
    "Languages:Chinese First Language": [
      41
    ],
    "Languages:Chinese Second Language": [
      47,
      46,
      45,
      44,
      43,
      43,
      42,
      41,
      40
    ],
    "Languages:Chinese Second Language Advanced": [
      42,
      40
    ]
  },
  "Yarra Valley Grammar School, Ringwood": {
    "Accounting": [
      46,
      45,
      44,
      42,
      41,
      40,
      40
    ],
    "Art Creative Practice": [
      46,
      43,
      43,
      43,
      42,
      40
    ],
    "Biology": [
      47,
      46,
      46,
      43,
      43,
      43,
      42,
      42,
      42,
      40
    ],
    "Business Management": [
      46,
      46,
      44,
      42,
      42,
      42,
      40,
      40,
      40,
      40
    ],
    "Chemistry": [
      44,
      43,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      40,
      40,
      40,
      40,
      40
    ],
    "Economics": [
      43,
      41
    ],
    "English": [
      50,
      50,
      50,
      50,
      50,
      49,
      49,
      49,
      48,
      47,
      47,
      47,
      47,
      46,
      46,
      46,
      46,
      46,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      44,
      44,
      44,
      44,
      44,
      44,
      43,
      43,
      43,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40
    ],
    "English as an Additional Language": [
      48,
      48,
      48,
      45,
      45,
      44,
      44,
      44,
      43,
      41,
      40
    ],
    "Food Studies": [
      48,
      41,
      41
    ],
    "General Mathematics": [
      48,
      47,
      46,
      45,
      45,
      44,
      44,
      43,
      43,
      42,
      42,
      42,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Geography": [
      43,
      41,
      41,
      40,
      40
    ],
    "Health and Human Development": [
      45,
      44,
      43,
      40,
      40,
      40
    ],
    "History Revolutions": [
      48,
      44,
      43,
      42,
      41,
      41,
      40
    ],
    "Languages:Chinese Culture and Society": [
      48,
      43
    ],
    "Languages:Chinese First Language": [
      43,
      41,
      41
    ],
    "Languages:Chinese Second Language": [
      44
    ],
    "Languages:French": [
      44,
      43,
      41,
      40
    ],
    "Legal Studies": [
      49,
      46,
      43,
      42,
      42,
      42,
      40
    ],
    "Literature": [
      42,
      42,
      42,
      42,
      41
    ],
    "Mathematical Methods": [
      46,
      46,
      46,
      46,
      45,
      43,
      43,
      42,
      42,
      42,
      42,
      42,
      41,
      41,
      41,
      40,
      40,
      40,
      40,
      40,
      40,
      40
    ],
    "Media": [
      50,
      44,
      43,
      40,
      40
    ],
    "Outdoor and Environmental Studies": [
      50,
      46,
      43,
      43,
      42,
      42,
      41
    ],
    "Physical Education": [
      41,
      40
    ],
    "Physics": [
      47,
      44,
      44,
      44,
      44,
      44,
      42,
      41
    ],
    "Product Design and Technologies": [
      50,
      50,
      47,
      46,
      45,
      43,
      42,
      42,
      42,
      41,
      40
    ],
    "Psychology": [
      45,
      43,
      42,
      40,
      40
    ],
    "Specialist Mathematics": [
      44,
      43,
      40,
      40
    ],
    "Visual Communication Design": [
      48,
      47,
      44,
      44,
      40,
      40
    ]
  },
  "Yarrawonga College P-12 - Pinniger Street Campus": {
    "Physical Education": [
      43
    ]
  },
  "Yea High School": {
    "English": [
      41
    ],
    "Health and Human Development": [
      42
    ]
  },
  "Yeshivah College, St Kilda East": {
    "Business Management": [
      46
    ],
    "English": [
      50,
      48,
      46,
      43,
      43,
      41,
      41
    ],
    "General Mathematics": [
      45,
      43
    ],
    "Legal Studies": [
      45,
      42
    ],
    "Religion and Society": [
      46
    ]
  },
  "Yesodei Hatorah College - Ormond Campus, Brighton": {
    "General Mathematics": [
      41
    ]
  }
};

export function getHonourRollSchoolName(schoolName: string): string | null {
  if (HONOUR_ROLL_2025_SCORES[schoolName]) {
    return schoolName;
  }
  return HONOUR_ROLL_2025_SCHOOL_ALIASES[schoolName] ?? null;
}

export function getHonourRollStudyScores(
  schoolName: string,
  subjectCode: string,
): readonly number[] {
  const sourceSchoolName = getHonourRollSchoolName(schoolName);
  const sourceSubjectName = HONOUR_ROLL_2025_SUBJECT_BY_CODE[subjectCode];
  if (sourceSchoolName === null || sourceSubjectName === undefined) {
    return [];
  }
  return HONOUR_ROLL_2025_SCORES[sourceSchoolName]?.[sourceSubjectName] ?? [];
}
