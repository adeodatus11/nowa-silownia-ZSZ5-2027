const equipment = [
  {
    category: "silownia",
    section: "Siłownia",
    name: "Power Rack",
    quantity: "1",
    price: "4 000 zł",
    source: "Marbo Sport MS-U112 2.0 lub Kangoogym",
    url: "https://www.marbo-sport.pl/product-pol-29631-Wielofunkcyjna-klatka-treningowa-Power-Rack-MS-U112-2-0-Marbo-Sport.html",
    image: "assets/images/equipment/power-rack.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Ławka regulowana",
    quantity: "2",
    price: "1 300 zł",
    source: "Marbo Sport MS-L102 2.0",
    url: "https://www.marbo-sport.pl/product-pol-29165-Dwustronnie-regulowana-lawka-treningowa-MS-L102-2-0-Marbo-Sport.html",
    image: "assets/images/bench-marbo.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Gryf olimpijski",
    quantity: "2",
    price: "900 zł",
    source: "Marbo Sport",
    url: "https://www.marbo-sport.pl/product-pol-28615-Gryf-olimpijski-220cm-700kg-Professional-UF700-UpForm.html",
    image: "assets/images/equipment/barbell.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Gryfy krótkie olimpijskie do hantli",
    quantity: "8 szt. (4 pary)",
    price: "1 900 zł",
    source: "Marbo Sport / UpForm, gryf krótki 50 cm",
    url: "https://www.marbo-sport.pl/product-pol-28851-Gryf-krotki-olimpijski-50-cm-UF-G50-OLI-CH-UpForm.html",
    image: "assets/images/equipment/short-dumbbell-bar.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Obciążenia olimpijskie ok. 180 kg",
    quantity: "1 komplet",
    price: "4 500 zł",
    source: "Marbo Sport",
    url: "https://www.marbo-sport.pl/product-pol-16003-Zestaw-obciazen-olimpijskich-85kg-Marbo-Sport.html",
    image: "assets/images/equipment/plates.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Hantle 2-20 kg + stojak",
    quantity: "1 komplet",
    price: "9 000 zł",
    source: "HMS Premium lub Marbo Sport",
    url: "https://hms-fitness.pl/oferta/gryfy-i-obciazenia/hantle-i-sztangielki/hantle",
    image: "assets/images/equipment/dumbbells.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Kettlebells 4-20 kg",
    quantity: "komplet",
    price: "2 500 zł",
    source: "HMS Premium",
    url: "https://hms-fitness.pl/produkt/kzg-kettlebell-zeliwny-hms",
    image: "assets/images/equipment/kettlebell.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "TRX GO",
    quantity: "2",
    price: "1 100 zł",
    source: "TRX Training",
    url: "https://www.trxtraining.com",
    image: "assets/images/equipment/trx.png",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Piłki lekarskie",
    quantity: "8",
    price: "1 200 zł",
    source: "HMS, piłki lekarskie",
    url: "https://hms-fitness.pl/produkt/nk-pilka-lekarska-hms",
    image: "assets/images/equipment/medicine-ball.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Gumy oporowe",
    quantity: "komplet",
    price: "700 zł",
    source: "HMS Premium, zestaw gum",
    url: "https://hms-fitness.pl/produkt/gu04-mix-set-pro-ii-zestaw-gum-do-cwiczen-hms-premium",
    image: "assets/images/equipment/resistance-bands.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Skakanki",
    quantity: "10",
    price: "300 zł",
    source: "HMS, szybka skakanka",
    url: "https://hms-fitness.pl/produkt/sk54-szybka-skakanka-hms",
    image: "assets/images/equipment/jump-rope.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Mata gumowa",
    quantity: "ok. 30 m²",
    price: "6 000 zł",
    source: "Mata gumowa puzzle",
    url: "https://elevatestore.pl/mata-na-silownie-fitness-puzzle-102x102-cm",
    image: "assets/images/equipment/rubber-floor.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Lustra",
    quantity: "ok. 8 m²",
    price: "3 000 zł",
    source: "Lustra fitness",
    url: "https://mojeszklo.pl/duze-lustro-na-sciane/",
    image: "assets/images/equipment/mirror.jpg",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Szafa / stojaki",
    quantity: "1",
    price: "2 000 zł",
    source: "Szafa sportowa na sprzęt",
    url: "https://szafymetalowe.pl/pl/p/Szafa-sportowa-Sbm-212-na-sprzet-sportowy-1200-mm/522",
    image: "assets/images/equipment/sports-cabinet.webp",
  },
  {
    category: "silownia",
    section: "Siłownia",
    name: "Timer treningowy LED",
    quantity: "1",
    price: "700 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/led-timer.png",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Materace",
    quantity: "16",
    price: "3 200 zł",
    source: "SportPlus",
    url: "https://sportplus.pl",
    image: "assets/images/equipment/exercise-mat.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Maty fitness / do ćwiczeń na podłodze",
    quantity: "20",
    price: "1 600 zł",
    source: "HMS Premium",
    url: "https://hms-fitness.pl/produkt/mfk03-mata-fitness-klubowa-z-otworami-hms-premium",
    image: "assets/images/equipment/exercise-mat.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Drabinki gimnastyczne",
    quantity: "2",
    price: "4 500 zł",
    source: "BenchK",
    url: "https://benchk.com",
    image: "assets/images/equipment/wall-bars.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Piłki rehabilitacyjne",
    quantity: "12",
    price: "900 zł",
    source: "HMS",
    url: "https://hms-fitness.pl/produkt/yb01-new-65cm-pilka-gimnastyczna-hms",
    image: "assets/images/equipment/therapy-ball.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "BOSU",
    quantity: "4",
    price: "3 200 zł",
    source: "BOSU Balance Trainer",
    url: "https://www.bosu.com",
    image: "assets/images/equipment/bosu.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Rollery",
    quantity: "10",
    price: "700 zł",
    source: "4FIZJO",
    url: "https://4fizjo.pl",
    image: "assets/images/equipment/roller.webp",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Wałki rehabilitacyjne",
    quantity: "8",
    price: "800 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/rehab-roller.webp",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Dyski sensoryczne",
    quantity: "10",
    price: "700 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/sensory-disc.webp",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Taśmy TheraBand",
    quantity: "komplet",
    price: "800 zł",
    source: "TheraBand",
    url: "https://www.theraband.com",
    image: "assets/images/equipment/theraband.png",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Laski gimnastyczne",
    quantity: "15",
    price: "500 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/gym-stick.webp",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Kostki do jogi",
    quantity: "20",
    price: "600 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/yoga-block.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Pasy do rozciągania",
    quantity: "15",
    price: "600 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/stretch-strap.png",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Stepy",
    quantity: "10",
    price: "1 000 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/step.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Lustro",
    quantity: "6 m²",
    price: "2 500 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/mirror.jpg",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Szafa",
    quantity: "1",
    price: "2 000 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/sports-cabinet.webp",
  },
  {
    category: "korekcyjna",
    section: "Sala korekcyjna",
    name: "Materac zeskokowy",
    quantity: "1",
    price: "3 800 zł",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/crash-mat.webp",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Stojak na maty",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/mat-rack.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Stojak na piłki",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/ball-rack.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Stojak na hantle",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/dumbbells.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Wieszak na TRX",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/trx.png",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Tablica z instrukcją ćwiczeń",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/exercise-mat.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Apteczka",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/first-aid.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Gaśnica",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/fire-extinguisher.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Zegar interwałowy LED",
    quantity: "1",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/led-timer.png",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Uchwyty do gum treningowych",
    quantity: "zestaw",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/resistance-bands.jpg",
  },
  {
    category: "dodatkowe",
    section: "Dodatkowe",
    name: "Kosze na drobny sprzęt",
    quantity: "zestaw",
    price: "do wyceny",
    source: "Dostawca do wyboru",
    url: "",
    image: "assets/images/equipment/ball-rack.jpg",
  },
];

const kamilEquipment = [
  {
    group: "Maszyna wielofunkcyjna nr 1",
    name: "Half rack z suwnicą Smitha PROUD EDGE",
    quantity: "1",
    priceRaw: 12999,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/half-rack-z-suwnica-smitha/3452-test-half-rack-z-suwnica-smitha.html",
    image: "assets/images/kamil/kamil-half-rack-smith.jpg",
  },
  {
    group: "Maszyna wielofunkcyjna nr 1",
    name: "Ławka regulowana L PROUD EDGE",
    quantity: "1",
    priceRaw: 2499,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/proud-edge/3533-lawka-regulowana-l-proud-edge.html",
    image: "assets/images/kamil/kamil-bench.png",
  },
  {
    group: "Maszyna wielofunkcyjna nr 1",
    name: "Stacja do dipów PROUD EDGE",
    quantity: "1",
    priceRaw: 799,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/proud-edge/3497-stacja-do-dipow-proud-edge.html",
    image: "assets/images/kamil/kamil-dips.jpg",
  },
  {
    group: "Maszyna wielofunkcyjna nr 1",
    name: "Talerze Competition + gryf Weightlifting 20 kg PROUD",
    quantity: "2 zestawy",
    priceRaw: 11560,
    unitNote: "5 780,00 zł za zestaw",
    source: "Training Showroom",
    url: "https://trainingshowroom.com/promocje/3537-promo-talerze-competition-gryf-weightlifting-20kg-proud.html",
    image: "assets/images/kamil/kamil-plates-bar.png",
  },
  {
    group: "Maszyna wielofunkcyjna nr 1",
    name: "Osłona na gryf PROUD Barbell Pad",
    quantity: "1",
    priceRaw: 62.61,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/akcesoria/2488-ochraniacz-na-gryf-proud-barbell-pad.html",
    image: "assets/images/kamil/kamil-bar-pad.jpg",
  },
  {
    group: "Maszyna wielofunkcyjna nr 2",
    name: "Wyciąg górny / dolny PROUD Champion Outlet",
    quantity: "1",
    priceRaw: 15081.31,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/outlet/3506-wyciag-gorny-wyciag-dolny-proud-champion-outlet.html",
    image: "assets/images/kamil/kamil-lat-pulldown.jpg",
  },
  {
    group: "Maszyna wielofunkcyjna nr 2",
    name: "Podwójny uchwyt do wyciągu, trójkąt PROUD",
    quantity: "1",
    priceRaw: 109.07,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/maszyny-silowe/2581-podwojny-uchwyt-do-wyciagu-ogumowany-trojkat-proud.html",
    image: "assets/images/kamil/kamil-cable-handle.jpg",
  },
  {
    group: "Maszyna do treningu nóg",
    name: "Maszyna do przysiadów Hack PROUD Champion",
    quantity: "1",
    priceRaw: 13269.37,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/maszyny-silowe/2939-maszyna-do-przysiadow-proud-champion.html",
    image: "assets/images/kamil/kamil-hack-squat.jpg",
  },
  {
    group: "Maszyna nr 2 na nogi",
    name: "Seated Leg Extension Plate Loaded PROUD Champion",
    quantity: "1",
    priceRaw: 11108.99,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/maszyny-na-wolny-ciezar/3404-maszyna-seated-leg-extension-plate-loaded-proud-champion.html",
    image: "assets/images/kamil/kamil-leg-extension.png",
  },
  {
    group: "Hantle",
    name: "Hantle poliuretanowe Studio PROUD, zestaw 1-10 kg",
    quantity: "1 zestaw",
    priceRaw: 4120.79,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/hantle-i-kettlebells/3467-hantle-poliuretanowe-studio-zestaw-proud.html",
    image: "assets/images/kamil/kamil-dumbbells.png",
  },
  {
    group: "Cardio",
    name: "Ergometr wioślarski AIR 2.0 PROUD",
    quantity: "1",
    priceRaw: 5360.06,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/ergometry/2782-ergometr-wioslarski-air-proud-20.html?hsCtaAttrib=186811937891",
    image: "assets/images/kamil/kamil-rower.jpg",
  },
  {
    group: "Cardio",
    name: "Air Runner, bieżnia treningowa 2.0 Elite PROUD Outlet",
    quantity: "1",
    priceRaw: 16905.12,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/bieznie/3501-air-runner-bieznia-treningowa-20-elite-proud-outlet.html",
    image: "assets/images/kamil/kamil-air-runner.jpg",
  },
  {
    group: "Drabinka i akcesoria",
    name: "Poręcze do drabinki PROUD Champion Outlet",
    quantity: "1",
    priceRaw: 1225.93,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/outlet/3584-porecze-do-drabinki-proud-champion-outlet.html",
    image: "assets/images/kamil/kamil-wall-bars-dips.jpg",
  },
  {
    group: "Drabinka i akcesoria",
    name: "Drabinka gimnastyczna PROUD",
    quantity: "1",
    priceRaw: 969.59,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/sprzet-gimnastyczny/2272-drabinka-gimnastyczna-proud.html",
    image: "assets/images/kamil/kamil-wall-bars.jpg",
  },
  {
    group: "Drabinka i akcesoria",
    name: "Drążek do podciągania do drabinki PROUD Champion Outlet",
    quantity: "1",
    priceRaw: 625.69,
    source: "Training Showroom",
    url: "https://trainingshowroom.com/outlet/3585-drazek-do-podciagania-do-drabinki-proud-champion-outlet.html",
    image: "assets/images/kamil/kamil-pullup-bar.jpg",
  },
  {
    group: "Opcjonalnie",
    name: "Gryf olimpijski treningowy 20 kg PROUD",
    quantity: "1",
    priceRaw: 799.99,
    optional: true,
    source: "Training Showroom, niewliczony przy wyborze zestawów z gryfem",
    url: "https://trainingshowroom.com/sztangi/2787-gryf-olimpijski-treningowy-20kg-220cm-gym-silver-proud.html",
    image: "assets/images/kamil/kamil-barbell.jpg",
  },
];

const furnitureRooms = [
  {
    id: "pielegniarka",
    room: "Gabinet pielęgniarki",
    location: "Parter, pom. 0.02",
    image: "assets/images/furniture-plans/01_gabinet_pielegniarki.png",
    note: "Układ medyczny z kozetką, parawanem, biurkiem, szafą medyczną i urządzeniem A3.",
    items: [
      {
        name: "Biurko elektryczne 140x70 cm",
        quantity: 1,
        unitPrice: 1899,
        source: "Kenoko HIRA, 2 silniki, 5 lat gwarancji",
        url: "https://kenoko.pl/pl/products/biurko-elektryczne-czarny-hira-140x70-cm-368",
      },
      {
        name: "Krzesło ergonomiczne z podparciem lędźwi i zagłówkiem",
        quantity: 1,
        unitPrice: 1397,
        source: "Nowy Styl NAVIGO MESH HRUA lub równoważne",
        url: "https://kamilameble.pl/tanie-krzesla-biurowe-obrotowe/3478-krzeslo-navigo-mesh-hrua-fs-black.html",
      },
      {
        name: "Krzesła gościnne",
        quantity: 2,
        unitPrice: 161,
        source: "Nowy Styl ISO Chrome lub równoważne",
        url: "https://modnekrzesla.pl/krzeslo-iso-chrome-basic-nowy-styl",
      },
      {
        name: "Kozetka lekarska",
        quantity: 1,
        unitPrice: 1327,
        source: "Juventas RIVA lub równoważna",
        url: "https://www.juventas.pl/kozetki-lekarskie/",
      },
      {
        name: "Parawan medyczny",
        quantity: 1,
        unitPrice: 722,
        source: "Malow, parawan do gabinetu lekarskiego",
        url: "https://metalowy-tony.pl/meble-medyczne",
      },
      {
        name: "Szafka ze zlewem 800 mm",
        quantity: 1,
        unitPrice: 1477,
        source: "Szafka do gabinetu lekarskiego",
        url: "https://sklep.eduko.pl/collections/meble-do-gabinetow-lekarskich",
      },
      {
        name: "Szafa medyczna zamykana",
        quantity: 1,
        unitPrice: 1647,
        source: "Szafa medyczna MDW/1",
        url: "https://e-cezal.pl/pl/c/Szafy-medyczne/33",
      },
      {
        name: "Szafa aktowa metalowa",
        quantity: 1,
        unitPrice: 1150.05,
        source: "Malow SBM 202M lub równoważna",
        url: "https://galter.pl/pl/p/Metalowa-szafa-Sbm-202M-szer.-80-cm-4-polki-MALOW/11",
      },
      {
        name: "Urządzenie wielofunkcyjne Epson A3",
        quantity: 1,
        unitPrice: 1288,
        source: "Epson WorkForce WF-7840DTWF, duplex, ADF",
        url: "https://www.123drukuj.pl/Epson-WorkForce-WF-7840DTWF-urzadzenie-wielofunkcyjne-atramentowe-A3-z-wifi-4w1-C11CH67402-i62808.html",
      },
    ],
  },
  {
    id: "magazyn-gimnastyczny",
    room: "Magazyn sali gimnastycznej",
    location: "Parter, pom. 0.05",
    image: "assets/images/furniture-plans/02_magazyn_sali_gimnastycznej.png",
    note: "Trwałe regały i mobilne przechowywanie sprzętu sportowego przy zachowaniu wolnego pasa manewrowego.",
    items: [
      {
        name: "Regał magazynowy 200x100x50 cm",
        quantity: 3,
        unitPrice: 556.75,
        source: "Hard Metal 5 półek, 1125 kg",
        url: "https://www.e-regaly.pl/product-pol-25825-Regal-metalowy-Hard-Metal-200x100x50-5P-1125-kg.html",
      },
      {
        name: "Wózek na piłki zamykany",
        quantity: 1,
        unitPrice: 769,
        source: "VINEX, metalowy kosz",
        url: "https://powerman.com.pl/stojaki-wozki-na-pilki-worki-na-pilki/5039-wozek-na-pilki-zamykany-vinex-metalowy-kosz-5903175206756.html",
      },
      {
        name: "Pionowy stojak na materace",
        quantity: 1,
        unitPrice: 589,
        source: "Sportmann",
        url: "https://sport-mag.eu/pl/maty-do-cwiczen/6101-pionowy-wieszak-na-materace-sportmann.html",
      },
    ],
  },
  {
    id: "szatnia-01",
    room: "Szatnia 01",
    location: "Piętro +1, pom. 1.04",
    image: "assets/images/furniture-plans/03_szatnia_01.png",
    note: "Połowa wspólnego układu 24 skrytek: 12 skrytek w tej szatni i ławka 200 cm.",
    items: [
      {
        name: "Szafka szkolna metalowa 6-skrytkowa",
        quantity: 2,
        unitPrice: 1361.61,
        source: "Malow, wariant szkolny 6 uczniów",
        url: "https://profesmeb.pl/pl/c/Szafki-szkolne/66",
      },
      {
        name: "Ławka szatniowa BHP 200 cm",
        quantity: 1,
        unitPrice: 1402.2,
        source: "Metalowy stelaż, drewniane siedzisko",
        url: "https://mebiuro.pl/pl/p/Lawka-metalowa-do-szatni-BHP-200-cm-LO-20-z-siedziskiem-drewnianym-laweczka-szatniowa-socjalna/809",
      },
    ],
  },
  {
    id: "szatnia-02",
    room: "Szatnia 02",
    location: "Piętro +1, pom. 1.06",
    image: "assets/images/furniture-plans/04_szatnia_02.png",
    note: "Druga połowa wspólnego układu 24 skrytek: 12 skrytek w tej szatni i ławka 200 cm.",
    items: [
      {
        name: "Szafka szkolna metalowa 6-skrytkowa",
        quantity: 2,
        unitPrice: 1361.61,
        source: "Malow, wariant szkolny 6 uczniów",
        url: "https://profesmeb.pl/pl/c/Szafki-szkolne/66",
      },
      {
        name: "Ławka szatniowa BHP 200 cm",
        quantity: 1,
        unitPrice: 1402.2,
        source: "Metalowy stelaż, drewniane siedzisko",
        url: "https://mebiuro.pl/pl/p/Lawka-metalowa-do-szatni-BHP-200-cm-LO-20-z-siedziskiem-drewnianym-laweczka-szatniowa-socjalna/809",
      },
    ],
  },
  {
    id: "socjalne",
    room: "Pomieszczenie socjalne",
    location: "Poddasze, pom. 2.02",
    image: "assets/images/furniture-plans/05_pomieszczenie_socjalne.png",
    note: "Większy stół dla 6-8 osób, 8 krzeseł oraz osobne ergonomiczne krzesło przy stanowisku biurowym.",
    items: [
      {
        name: "Aneks kuchenny 240 cm",
        quantity: 1,
        unitPrice: 2499,
        source: "Leroy Merlin Acari Long 240 cm lub równoważny",
        url: "https://www.leroymerlin.pl/produkty/kuchnia-i-jadalnia/meble-kuchenne/zestawy-mebli-kuchennych/zestawy-mebli/meble-kuchenne-240-cm-p.html",
      },
      {
        name: "Lodówka podblatowa",
        quantity: 1,
        unitPrice: 1449,
        source: "Beko BU1154HCN lub równoważna",
        url: "https://mediamarkt.pl/pl/category/lodowki-podblatowe-do-zabudowy-70141.html",
      },
      {
        name: "Stół 6-8 osobowy, ok. 200x90 cm",
        quantity: 1,
        unitPrice: 1200,
        source: "Stół konferencyjny / socjalny na metalowym stelażu",
        url: "https://www.selprim.pl/stoly-konferencyjne%2Cc632.html",
      },
      {
        name: "Krzesła do stołu",
        quantity: 8,
        unitPrice: 161,
        source: "Nowy Styl ISO Chrome lub równoważne",
        url: "https://modnekrzesla.pl/krzeslo-iso-chrome-basic-nowy-styl",
      },
      {
        name: "Krzesło ergonomiczne z podparciem lędźwi i zagłówkiem",
        quantity: 1,
        unitPrice: 1397,
        source: "Nowy Styl NAVIGO MESH HRUA lub równoważne",
        url: "https://kamilameble.pl/tanie-krzesla-biurowe-obrotowe/3478-krzeslo-navigo-mesh-hrua-fs-black.html",
      },
      {
        name: "Szafa gospodarcza metalowa",
        quantity: 1,
        unitPrice: 1260.75,
        source: "Umstahl SGP 80, 80x49x180 cm",
        url: "https://umstahl.pl/metalowa-szafa-gospodarcza-sg80-24h%2Cid546.html",
      },
    ],
  },
  {
    id: "psycholog",
    room: "Gabinet psychologa",
    location: "Poddasze, pom. 2.05",
    image: "assets/images/furniture-plans/06_gabinet_psychologa.png",
    note: "Układ konsultacyjny z dwoma fotelami STRANDMON, biurkiem, szafami aktowymi i drukarką A3.",
    items: [
      {
        name: "Biurko elektryczne 140x70 cm",
        quantity: 1,
        unitPrice: 1899,
        source: "Kenoko HIRA, 2 silniki, 5 lat gwarancji",
        url: "https://kenoko.pl/pl/products/biurko-elektryczne-czarny-hira-140x70-cm-368",
      },
      {
        name: "Krzesło ergonomiczne z podparciem lędźwi i zagłówkiem",
        quantity: 1,
        unitPrice: 1397,
        source: "Nowy Styl NAVIGO MESH HRUA lub równoważne",
        url: "https://kamilameble.pl/tanie-krzesla-biurowe-obrotowe/3478-krzeslo-navigo-mesh-hrua-fs-black.html",
      },
      {
        name: "Fotel IKEA STRANDMON",
        quantity: 2,
        unitPrice: 799,
        source: "IKEA STRANDMON, uszak",
        url: "https://www.ikea.com/pl/pl/p/strandmon-fotel-uszak-nordvalla-ciemnoszary-20343224/",
      },
      {
        name: "Stolik niski 60x60 cm",
        quantity: 1,
        unitPrice: 407.99,
        source: "Stolik kawowy 60x60 lub równoważny",
        url: "https://proroomfurni.com/p/nowoczesny-sredni-stolik-kawowy-60x60-cm-bialy-polysk-moon/",
      },
      {
        name: "Szafa aktowa metalowa",
        quantity: 2,
        unitPrice: 1150.05,
        source: "Malow SBM 202M lub równoważna",
        url: "https://galter.pl/pl/p/Metalowa-szafa-Sbm-202M-szer.-80-cm-4-polki-MALOW/11",
      },
      {
        name: "Urządzenie wielofunkcyjne Epson A3",
        quantity: 1,
        unitPrice: 1288,
        source: "Epson WorkForce WF-7840DTWF, duplex, ADF",
        url: "https://www.123drukuj.pl/Epson-WorkForce-WF-7840DTWF-urzadzenie-wielofunkcyjne-atramentowe-A3-z-wifi-4w1-C11CH67402-i62808.html",
      },
    ],
  },
  {
    id: "pedagog",
    room: "Gabinet pedagoga",
    location: "Poddasze, pom. 2.06",
    image: "assets/images/furniture-plans/07_gabinet_pedagoga.png",
    note: "Układ pracy z uczniem i rodzicem: stół konsultacyjny, dwa fotele STRANDMON i większy zapas szaf aktowych.",
    items: [
      {
        name: "Biurko elektryczne 140x70 cm",
        quantity: 1,
        unitPrice: 1899,
        source: "Kenoko HIRA, 2 silniki, 5 lat gwarancji",
        url: "https://kenoko.pl/pl/products/biurko-elektryczne-czarny-hira-140x70-cm-368",
      },
      {
        name: "Krzesło ergonomiczne z podparciem lędźwi i zagłówkiem",
        quantity: 1,
        unitPrice: 1397,
        source: "Nowy Styl NAVIGO MESH HRUA lub równoważne",
        url: "https://kamilameble.pl/tanie-krzesla-biurowe-obrotowe/3478-krzeslo-navigo-mesh-hrua-fs-black.html",
      },
      {
        name: "Fotel IKEA STRANDMON",
        quantity: 2,
        unitPrice: 799,
        source: "IKEA STRANDMON, uszak",
        url: "https://www.ikea.com/pl/pl/p/strandmon-fotel-uszak-nordvalla-ciemnoszary-20343224/",
      },
      {
        name: "Stół konsultacyjny 120x80 cm",
        quantity: 1,
        unitPrice: 749,
        source: "Nowy Styl SIMPLE lub równoważny",
        url: "https://superkrzesla.pl/stol-konferencyjny-120x80-simple-nowy-styl%2Cid10951.html",
      },
      {
        name: "Krzesła gościnne",
        quantity: 2,
        unitPrice: 161,
        source: "Nowy Styl ISO Chrome lub równoważne",
        url: "https://modnekrzesla.pl/krzeslo-iso-chrome-basic-nowy-styl",
      },
      {
        name: "Szafa aktowa metalowa",
        quantity: 3,
        unitPrice: 1150.05,
        source: "Malow SBM 202M lub równoważna",
        url: "https://galter.pl/pl/p/Metalowa-szafa-Sbm-202M-szer.-80-cm-4-polki-MALOW/11",
      },
      {
        name: "Urządzenie wielofunkcyjne Epson A3",
        quantity: 1,
        unitPrice: 1288,
        source: "Epson WorkForce WF-7840DTWF, duplex, ADF",
        url: "https://www.123drukuj.pl/Epson-WorkForce-WF-7840DTWF-urzadzenie-wielofunkcyjne-atramentowe-A3-z-wifi-4w1-C11CH67402-i62808.html",
      },
    ],
  },
  {
    id: "wf",
    room: "Gabinet WF",
    location: "Poddasze / zaplecze nauczycieli WF",
    image: "assets/images/equipment/sports-cabinet.webp",
    note: "Mały gabinet biurowo-magazynowy dla nauczycieli WF z drukarką A3 i dodatkowymi szafami aktowymi.",
    items: [
      {
        name: "Biurko elektryczne 140x70 cm",
        quantity: 1,
        unitPrice: 1899,
        source: "Kenoko HIRA, 2 silniki, 5 lat gwarancji",
        url: "https://kenoko.pl/pl/products/biurko-elektryczne-czarny-hira-140x70-cm-368",
      },
      {
        name: "Krzesło ergonomiczne z podparciem lędźwi i zagłówkiem",
        quantity: 1,
        unitPrice: 1397,
        source: "Nowy Styl NAVIGO MESH HRUA lub równoważne",
        url: "https://kamilameble.pl/tanie-krzesla-biurowe-obrotowe/3478-krzeslo-navigo-mesh-hrua-fs-black.html",
      },
      {
        name: "Krzesła gościnne",
        quantity: 2,
        unitPrice: 161,
        source: "Nowy Styl ISO Chrome lub równoważne",
        url: "https://modnekrzesla.pl/krzeslo-iso-chrome-basic-nowy-styl",
      },
      {
        name: "Szafa aktowa metalowa",
        quantity: 2,
        unitPrice: 1150.05,
        source: "Malow SBM 202M lub równoważna",
        url: "https://galter.pl/pl/p/Metalowa-szafa-Sbm-202M-szer.-80-cm-4-polki-MALOW/11",
      },
      {
        name: "Urządzenie wielofunkcyjne Epson A3",
        quantity: 1,
        unitPrice: 1288,
        source: "Epson WorkForce WF-7840DTWF, duplex, ADF",
        url: "https://www.123drukuj.pl/Epson-WorkForce-WF-7840DTWF-urzadzenie-wielofunkcyjne-atramentowe-A3-z-wifi-4w1-C11CH67402-i62808.html",
      },
    ],
  },
  {
    id: "strych",
    room: "Strych jako magazyn",
    location: "Poddasze, pom. 2.07",
    image: "assets/images/furniture-plans/08_strych_magazyn.png",
    note: "Regały po obwodzie, pojemniki Euro i zamykane szafy archiwalne dla dokumentów oraz drobnego sprzętu.",
    items: [
      {
        name: "Regał magazynowy 200x100x50 cm",
        quantity: 5,
        unitPrice: 556.75,
        source: "Hard Metal 5 półek, 1125 kg",
        url: "https://www.e-regaly.pl/product-pol-25825-Regal-metalowy-Hard-Metal-200x100x50-5P-1125-kg.html",
      },
      {
        name: "Pojemnik magazynowy Euro 60x40x32 cm",
        quantity: 20,
        unitPrice: 69.99,
        source: "Pojemnik transportowy pełny",
        url: "https://erli.pl/produkt/plastikowy-pojemnik-magazynowy-transportowy-przemyslowy-skrzynka-60x40x32%2C27339272",
      },
      {
        name: "Szafa aktowa metalowa",
        quantity: 2,
        unitPrice: 1150.05,
        source: "Malow SBM 202M lub równoważna",
        url: "https://galter.pl/pl/p/Metalowa-szafa-Sbm-202M-szer.-80-cm-4-polki-MALOW/11",
      },
    ],
  },
];

const grid = document.querySelector("#equipmentGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const resetButton = document.querySelector("#resetFilters");
const filterButtons = Array.from(document.querySelectorAll(".filter"));
const pageCategory = document.body.dataset.page || "all";
const kamilGrid = document.querySelector("#kamilGrid");
const kamilTable = document.querySelector("#kamilTable");
const kamilBaseTotal = document.querySelector("#kamilBaseTotal");
const kamilReserveTotal = document.querySelector("#kamilReserveTotal");
const kamilOptionalTotal = document.querySelector("#kamilOptionalTotal");
const furnitureRoomsContainer = document.querySelector("#furnitureRooms");
const furnitureTable = document.querySelector("#furnitureTable");
const furnitureBaseTotal = document.querySelector("#furnitureBaseTotal");
const furnitureReserveValue = document.querySelector("#furnitureReserveValue");
const furnitureReserveTotal = document.querySelector("#furnitureReserveTotal");
const furnitureRoomCount = document.querySelector("#furnitureRoomCount");
const furnitureItemCount = document.querySelector("#furnitureItemCount");

let activeFilter = pageCategory === "all" ? "all" : pageCategory;

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatPln(value) {
  return value.toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " zł";
}

function itemTotal(item) {
  return item.quantity * item.unitPrice;
}

function roomTotal(room) {
  return room.items.reduce((sum, item) => sum + itemTotal(item), 0);
}

function furnitureTotal() {
  return furnitureRooms.reduce((sum, room) => sum + roomTotal(room), 0);
}

function getFilteredEquipment() {
  const query = normalize(searchInput?.value.trim() || "");
  return equipment.filter((item) => {
    const matchesPage = pageCategory === "all" || item.category === pageCategory;
    const matchesFilter = pageCategory !== "all" || activeFilter === "all" || item.category === activeFilter;
    const haystack = normalize(`${item.name} ${item.section} ${item.source}`);
    return matchesPage && matchesFilter && (!query || haystack.includes(query));
  });
}

function renderFurniture() {
  if (!furnitureRoomsContainer && !furnitureTable) return;

  const baseTotal = furnitureTotal();
  const reserveValue = baseTotal * 0.2;
  const reserveTotal = baseTotal * 1.2;
  const itemCount = furnitureRooms.reduce((sum, room) => sum + room.items.length, 0);

  if (furnitureBaseTotal) furnitureBaseTotal.textContent = formatPln(baseTotal);
  if (furnitureReserveValue) furnitureReserveValue.textContent = formatPln(reserveValue);
  if (furnitureReserveTotal) furnitureReserveTotal.textContent = formatPln(reserveTotal);
  if (furnitureRoomCount) furnitureRoomCount.textContent = String(furnitureRooms.length);
  if (furnitureItemCount) furnitureItemCount.textContent = String(itemCount);

  if (furnitureRoomsContainer) {
    furnitureRoomsContainer.innerHTML = furnitureRooms
      .map((room) => {
        const items = room.items
          .map((item) => {
            const link = item.url
              ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">link</a>`
              : "<span>do ustalenia</span>";

            return `
              <tr>
                <td>${item.name}<span>${item.source}</span></td>
                <td>${item.quantity}</td>
                <td>${formatPln(item.unitPrice)}</td>
                <td>${formatPln(itemTotal(item))}</td>
                <td>${link}</td>
              </tr>
            `;
          })
          .join("");

        return `
          <article id="${room.id}" class="room-card">
            <div class="room-media">
              <img src="${room.image}" alt="${room.room}">
            </div>
            <div class="room-content">
              <div class="room-heading">
                <div>
                  <span>${room.location}</span>
                  <h3>${room.room}</h3>
                </div>
                <strong>${formatPln(roomTotal(room))}</strong>
              </div>
              <p>${room.note}</p>
              <div class="pricing-table-wrap room-table-wrap">
                <table class="pricing-table room-table">
                  <thead>
                    <tr>
                      <th>Pozycja</th>
                      <th>Ilość</th>
                      <th>Cena jedn.</th>
                      <th>Razem</th>
                      <th>Oferta</th>
                    </tr>
                  </thead>
                  <tbody>${items}</tbody>
                </table>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (furnitureTable) {
    furnitureTable.innerHTML = furnitureRooms
      .map((room) => {
        const base = roomTotal(room);
        return `
          <tr>
            <td>${room.room}<span>${room.location}</span></td>
            <td>${room.items.length}</td>
            <td>${formatPln(base)}</td>
            <td>${formatPln(base * 0.2)}</td>
            <td>${formatPln(base * 1.2)}</td>
          </tr>
        `;
      })
      .join("");
  }
}

function renderEquipment() {
  if (!grid || !resultCount) return;

  const items = getFilteredEquipment();
  resultCount.textContent = `${items.length} ${items.length === 1 ? "pozycja" : "pozycji"}`;

  if (!items.length) {
    grid.innerHTML = '<p class="empty">Brak pozycji dla wybranych filtrów.</p>';
    return;
  }

  grid.innerHTML = items
    .map((item) => {
      const link = item.url
        ? `<a class="equipment-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Otwórz stronę</a>`
        : '<span class="equipment-link disabled" aria-disabled="true">Link do ustalenia</span>';

      return `
        <article class="equipment-card">
          <img src="${item.image}" alt="${item.name}">
          <div class="equipment-body">
            <div>
              <div class="equipment-category">${item.section}</div>
              <h3 class="equipment-title">${item.name}</h3>
            </div>
            <div class="equipment-details">
              <div>
                <span>Ilość</span>
                <strong>${item.quantity}</strong>
              </div>
              <div>
                <span>Cena</span>
                <strong>${item.price}</strong>
              </div>
            </div>
            <div class="source-note">${item.source}</div>
            ${link}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderKamilOption() {
  if (!kamilGrid && !kamilTable) return;

  const includedItems = kamilEquipment.filter((item) => !item.optional);
  const baseTotal = includedItems.reduce((sum, item) => sum + item.priceRaw, 0);
  const reserveTotal = baseTotal * 1.2;
  const optionalTotal = kamilEquipment
    .filter((item) => item.optional)
    .reduce((sum, item) => sum + item.priceRaw, 0);

  if (kamilBaseTotal) kamilBaseTotal.textContent = formatPln(baseTotal);
  if (kamilReserveTotal) kamilReserveTotal.textContent = formatPln(reserveTotal);
  if (kamilOptionalTotal) kamilOptionalTotal.textContent = formatPln(optionalTotal);

  if (kamilGrid) {
    kamilGrid.innerHTML = kamilEquipment
      .map((item) => {
        const priceLabel = item.optional ? "Opcjonalnie" : "Cena +20%";
        const reservePrice = item.optional ? item.priceRaw : item.priceRaw * 1.2;
        const optionalBadge = item.optional ? '<span class="tag">niewliczone</span>' : "";

        return `
          <article class="equipment-card kamil-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="equipment-body">
              <div>
                <div class="equipment-category">${item.group} ${optionalBadge}</div>
                <h3 class="equipment-title">${item.name}</h3>
              </div>
              <div class="equipment-details">
                <div>
                  <span>Ilość</span>
                  <strong>${item.quantity}</strong>
                </div>
                <div>
                  <span>${priceLabel}</span>
                  <strong>${formatPln(reservePrice)}</strong>
                </div>
              </div>
              <div class="source-note">${item.unitNote || item.source}</div>
              <a class="equipment-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Otwórz stronę</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (kamilTable) {
    kamilTable.innerHTML = kamilEquipment
      .map((item) => {
        const base = formatPln(item.priceRaw);
        const reserve = item.optional ? "niewliczone" : formatPln(item.priceRaw * 1.2);
        const note = item.optional ? "opcjonalnie" : item.unitNote || "";

        return `
          <tr>
            <td>${item.name}<span>${item.group}${note ? `, ${note}` : ""}</span></td>
            <td>${item.quantity}</td>
            <td>${base}</td>
            <td>${reserve}</td>
            <td><a href="${item.url}" target="_blank" rel="noopener noreferrer">link</a></td>
          </tr>
        `;
      })
      .join("");
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderEquipment();
  });
});

searchInput?.addEventListener("input", renderEquipment);

resetButton?.addEventListener("click", () => {
  activeFilter = "all";
  if (searchInput) searchInput.value = "";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderEquipment();
});

renderEquipment();
renderKamilOption();
renderFurniture();
