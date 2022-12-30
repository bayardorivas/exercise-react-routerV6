export const getAllUsers = () => users;

export const getOneUser =  (id) => 
  users.find((user) => user.id === id);

export const deleteUser =  (id) =>
  users = users.filter((user) => user.id !== id);

export const concatenateNameAndLastName = (users) => {
  const fullName = users.first_name + users.last_name;
  return fullName;
}

let users = [
  {
    id: 1,
    first_name: "Oren",
    last_name: "Llorens",
    email: "ollorens0@free.fr",
    gender: "Male",
    phone: "607-840-7956",
    website: "MY",
  },
  {
    id: 2,
    first_name: "Billie",
    last_name: "Izat",
    email: "bizat1@businesswire.com",
    gender: "Male",
    phone: "390-197-9629",
    website: "CN",
  },
  {
    id: 3,
    first_name: "Kennie",
    last_name: "Gloves",
    email: "kgloves2@redcross.org",
    gender: "Male",
    phone: "231-406-2316",
    website: "ID",
  },
  {
    id: 4,
    first_name: "Lani",
    last_name: "de Bullion",
    email: "ldebullion3@amazon.com",
    gender: "Female",
    phone: "193-590-7193",
    website: "FR",
  },
  {
    id: 5,
    first_name: "Giffie",
    last_name: "Alleyne",
    email: "galleyne4@youku.com",
    gender: "Male",
    phone: "943-598-4665",
    website: "ID",
  },
  {
    id: 6,
    first_name: "Javier",
    last_name: "Gadsdon",
    email: "jgadsdon5@sciencedirect.com",
    gender: "Male",
    phone: "639-197-6766",
    website: "TH",
  },
  {
    id: 7,
    first_name: "Mommy",
    last_name: "Greaterex",
    email: "mgreaterex6@dyndns.org",
    gender: "Female",
    phone: "704-673-6217",
    website: "PL",
  },
  {
    id: 8,
    first_name: "Garrard",
    last_name: "Rosenqvist",
    email: "grosenqvist7@printfriendly.com",
    gender: "Male",
    phone: "979-872-4506",
    website: "AM",
  },
  {
    id: 9,
    first_name: "Kristen",
    last_name: "Adame",
    email: "kadame8@thetimes.co.uk",
    gender: "Female",
    phone: "108-559-8882",
    website: "PL",
  },
  {
    id: 10,
    first_name: "Fernanda",
    last_name: "Radish",
    email: "fradish9@so-net.ne.jp",
    gender: "Female",
    phone: "123-209-4691",
    website: "RU",
  },
  {
    id: 11,
    first_name: "Henri",
    last_name: "Duffyn",
    email: "hduffyna@flavors.me",
    gender: "Male",
    phone: "269-907-8481",
    website: "DO",
  },
  {
    id: 12,
    first_name: "Marleen",
    last_name: "Javes",
    email: "mjavesb@mail.ru",
    gender: "Female",
    phone: "185-205-9290",
    website: "KZ",
  },
  {
    id: 13,
    first_name: "Chester",
    last_name: "Yallowley",
    email: "cyallowleyc@xrea.com",
    gender: "Male",
    phone: "628-837-9179",
    website: "ID",
  },
  {
    id: 14,
    first_name: "Bartholomeo",
    last_name: "Flageul",
    email: "bflageuld@springer.com",
    gender: "Male",
    phone: "852-123-6524",
    website: "FR",
  },
  {
    id: 15,
    first_name: "Susana",
    last_name: "Carlesi",
    email: "scarlesie@trellian.com",
    gender: "Female",
    phone: "124-391-9770",
    website: "TT",
  },
  {
    id: 16,
    first_name: "Eveline",
    last_name: "Annis",
    email: "eannisf@alexa.com",
    gender: "Female",
    phone: "236-729-4413",
    website: "CN",
  },
  {
    id: 17,
    first_name: "Chantalle",
    last_name: "Schruurs",
    email: "cschruursg@ask.com",
    gender: "Female",
    phone: "448-237-6118",
    website: "PT",
  },
  {
    id: 18,
    first_name: "Rafael",
    last_name: "Cawdron",
    email: "rcawdronh@istockphoto.com",
    gender: "Male",
    phone: "685-177-8523",
    website: "RU",
  },
  {
    id: 19,
    first_name: "Christina",
    last_name: "Laird",
    email: "clairdi@1und1.de",
    gender: "Female",
    phone: "629-862-7784",
    website: "ID",
  },
  {
    id: 20,
    first_name: "Nikos",
    last_name: "Castagnet",
    email: "ncastagnetj@icio.us",
    gender: "Male",
    phone: "880-823-7885",
    website: "JP",
  },
  {
    id: 21,
    first_name: "Morten",
    last_name: "Jacox",
    email: "mjacoxk@php.net",
    gender: "Male",
    phone: "454-893-7260",
    website: "CN",
  },
  {
    id: 22,
    first_name: "Julianne",
    last_name: "Cutchie",
    email: "jcutchiel@shinystat.com",
    gender: "Female",
    phone: "399-416-0216",
    website: "ID",
  },
  {
    id: 23,
    first_name: "Denice",
    last_name: "Sharplin",
    email: "dsharplinm@house.gov",
    gender: "Female",
    phone: "818-644-3588",
    website: "TJ",
  },
  {
    id: 24,
    first_name: "Lucia",
    last_name: "Wankel",
    email: "lwankeln@4shared.com",
    gender: "Female",
    phone: "235-435-4657",
    website: "UA",
  },
  {
    id: 25,
    first_name: "Kleon",
    last_name: "Izak",
    email: "kizako@live.com",
    gender: "Male",
    phone: "374-790-0100",
    website: "GR",
  },
  {
    id: 26,
    first_name: "Ainslie",
    last_name: "Fanthom",
    email: "afanthomp@nationalgeographic.com",
    gender: "Genderfluid",
    phone: "923-690-4341",
    website: "FI",
  },
  {
    id: 27,
    first_name: "Shirleen",
    last_name: "Buttfield",
    email: "sbuttfieldq@eventbrite.com",
    gender: "Female",
    phone: "838-906-6845",
    website: "FR",
  },
  {
    id: 28,
    first_name: "Aluino",
    last_name: "Johansen",
    email: "ajohansenr@exblog.jp",
    gender: "Male",
    phone: "383-783-3809",
    website: "PT",
  },
  {
    id: 29,
    first_name: "Thorny",
    last_name: "Lars",
    email: "tlarss@jimdo.com",
    gender: "Male",
    phone: "567-460-9849",
    website: "CN",
  },
  {
    id: 30,
    first_name: "Brana",
    last_name: "Sleightholme",
    email: "bsleightholmet@eepurl.com",
    gender: "Female",
    phone: "489-923-9082",
    website: "RU",
  },
  {
    id: 31,
    first_name: "Edgardo",
    last_name: "Ghion",
    email: "eghionu@smh.com.au",
    gender: "Male",
    phone: "614-270-6460",
    website: "CN",
  },
  {
    id: 32,
    first_name: "Jazmin",
    last_name: "Ashall",
    email: "jashallv@dion.ne.jp",
    gender: "Female",
    phone: "931-409-3477",
    website: "PT",
  },
  {
    id: 33,
    first_name: "Kipp",
    last_name: "Carrigan",
    email: "kcarriganw@umich.edu",
    gender: "Male",
    phone: "548-311-9459",
    website: "MM",
  },
  {
    id: 34,
    first_name: "Paten",
    last_name: "Burris",
    email: "pburrisx@bluehost.com",
    gender: "Male",
    phone: "590-461-5204",
    website: "RU",
  },
  {
    id: 35,
    first_name: "Donall",
    last_name: "Guyers",
    email: "dguyersy@theglobeandmail.com",
    gender: "Male",
    phone: "331-333-9809",
    website: "CN",
  },
  {
    id: 36,
    first_name: "Donovan",
    last_name: "Weinberg",
    email: "dweinbergz@aol.com",
    gender: "Male",
    phone: "966-431-5951",
    website: "CA",
  },
  {
    id: 37,
    first_name: "Francisca",
    last_name: "Buckenham",
    email: "fbuckenham10@e-recht24.de",
    gender: "Female",
    phone: "131-189-0316",
    website: "ID",
  },
  {
    id: 38,
    first_name: "Brenn",
    last_name: "Schulz",
    email: "bschulz11@xrea.com",
    gender: "Female",
    phone: "445-433-9685",
    website: "GR",
  },
  {
    id: 39,
    first_name: "Odessa",
    last_name: "Drew-Clifton",
    email: "odrewclifton12@mtv.com",
    gender: "Female",
    phone: "957-613-4621",
    website: "NA",
  },
  {
    id: 40,
    first_name: "Brody",
    last_name: "Brinkman",
    email: "bbrinkman13@ucsd.edu",
    gender: "Male",
    phone: "444-644-7177",
    website: "ID",
  },
  {
    id: 41,
    first_name: "Becki",
    last_name: "Gwilym",
    email: "bgwilym14@hao123.com",
    gender: "Agender",
    phone: "509-853-7918",
    website: "CN",
  },
  {
    id: 42,
    first_name: "Blondy",
    last_name: "Abba",
    email: "babba15@posterous.com",
    gender: "Non-binary",
    phone: "481-946-9874",
    website: "CN",
  },
  {
    id: 43,
    first_name: "Svend",
    last_name: "Collison",
    email: "scollison16@google.pl",
    gender: "Male",
    phone: "396-164-0450",
    website: "CN",
  },
  {
    id: 44,
    first_name: "Joey",
    last_name: "Stockney",
    email: "jstockney17@seesaa.net",
    gender: "Female",
    phone: "452-772-7773",
    website: "JM",
  },
  {
    id: 45,
    first_name: "Cicily",
    last_name: "Durkin",
    email: "cdurkin18@twitter.com",
    gender: "Female",
    phone: "443-709-4312",
    website: "CN",
  },
  {
    id: 46,
    first_name: "Ruddie",
    last_name: "Petticrew",
    email: "rpetticrew19@miitbeian.gov.cn",
    gender: "Male",
    phone: "556-358-2430",
    website: "CN",
  },
  {
    id: 47,
    first_name: "Tammy",
    last_name: "Pinkerton",
    email: "tpinkerton1a@so-net.ne.jp",
    gender: "Male",
    phone: "670-896-1825",
    website: "MX",
  },
  {
    id: 48,
    first_name: "Dane",
    last_name: "Munnis",
    email: "dmunnis1b@artisteer.com",
    gender: "Male",
    phone: "424-864-5602",
    website: "PL",
  },
  {
    id: 49,
    first_name: "Myrna",
    last_name: "Shury",
    email: "mshury1c@google.co.jp",
    gender: "Female",
    phone: "469-686-3264",
    website: "PH",
  },
  {
    id: 50,
    first_name: "Babette",
    last_name: "Nunns",
    email: "bnunns1d@oakley.com",
    gender: "Genderqueer",
    phone: "106-115-1646",
    website: "CN",
  },
];