const animals = [
  {
    name: "Aardvark",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 330,
      landAdd: 60,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 0.5,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Orycteropus afer",
    category: "Mammal",
    desc:
      "The aardvark (or Orycteropus afer) is a medium-sized insectivore that lives throughout Sub-Saharan Africa. They have pink-grey skin with sparse, coarse hair, large slender ears and an elongated head that ends in a pig-like snout. Males are slightly larger than females, but both sexes are generally between 105 and 130cm long, have a tail between 60 and 70cm, and weigh between 40 and 65kg.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_aardvark.jpg",
  },
  {
    name: "African Buffalo",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Near Threatened",
    exhibit: false,
    dominance: "Dominant male bull, Female herds with age based dominance",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 22,
      female: 22,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 420,
      landAdd: 90,
      waterAdd: 10,
      climbableAdd: 0,
      water: 20,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 5,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 15,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 15,
        },
        male: 1,
        female: 14,
      },
    },
   latinName: "Syncerus caffer caffer",
    category: "Mammal",
    desc:
      "Living throughout Sub-Saharan Africa, the African buffalo (or Syncerus caffer caffer) is the largest member of the cow family – bovids – found in the African wild. They are typically between 1.7 and 3.4m in length, measure 1.0 to 1.7m tall, and are identifiable by their distinctive horns, which are broad, curved and unite in a ‘boss’ in the centre of their forehead. The dominant male in a herd will often have the largest horns.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/AfricanBuffalo.jpg",
  },
  {
    name: "African Elephant",
    continent: ["Africa"],
    biome: ["Desert", "Grassland", "Tropical"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance:
      "Stable dominant female in female herd. Male dominance in bachelor pods changes dependingon age/aggression",
    relationship_human: "Confident",
    mating:
      "Polygynous males have multiple female mates, females have one male mate",
    lifeExpectancy: {
      male: 65,
      female: 65,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 2151,
      landAdd: 667,
      waterAdd: 72,
      climbableAdd: 0,
      water: 148,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 42,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 5,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 15,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 15,
        },
        male: 1,
        female: 14,
      },
    },
   latinName: "Loxodonta africana",
    category: "Mammal",
    desc:
      "The African elephant is native to Sub Saharan Africa and lives in savannahs, forests and mountains. African elephants are large and thickset with thick grey skin and a characteristic trunk that they use for vocalising, drinking and grasping food. Both male and female African elephants have tusks. Elephants are known for their intelligence and strong social bonds. Female herds bond for life and will remember and communicate with family members even if herds split up. Bonds are especially strong between mothers and their babies.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/AfricanElephant.jpg",
  },
  {
    name: "African Wild Dog",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "Alpha male and alpha female",
    relationship_human: "Confident",
    mating: "Monogamous - alphas only",
    lifeExpectancy: {
      male: 11,
      female: 11,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1162,
      landAdd: 92,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 27,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 27,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 27,
        },
        male: 27,
        female: 9,
      },
    },
   latinName: "Lycaon pictus",
    category: "Mammal",
    desc:
      "African wild dogs (or Lycaon pictus) are also known as African hunting dogs or painted wolves. They live throughout sub-Saharan Africa – the continent has several different populations and five subspecies in total. The dogs are slim and tall in comparison to other canines, with extremely large rounded ears and distinctive colouration. Generally they have yellow and black mottled fur with white patches on their legs, chest and tail, however this varies on the subspecies. Some may also have a spot-like patterning on parts of their body.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_africanwilddog.jpg",
  },
  {
    name: "Aldabra Giant Tortoise",
    continent: ["Africa"],
    biome: ["Grassland", "Temperate"],
    swim: false,
    status: "Vulnerable",
    exhibit: false,
    dominance: "None",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 119,
      female: 119,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 230,
      landAdd: 5,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 42,
      },
      fence: {
        grade: 1,
        height: 0.5,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 4,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 4,
        },
        male: 1,
        female: 3,
      },
    },
   latinName: "Aldabrachelys gigantea",
    category: "Reptile",
    desc:
      "Endemic to the Seychelle Islands, an Indian Ocean archipelago east of the African coast, the Aldabra giant tortoise (or Aldabrachelys gigantea) is a reptilian species capable of growing to extremely large sizes. Males average between 200 and 250 kg, while the smaller females still average between 121 and 159kg. Their shells are a dull, grey-brown colour made up of peaked keratinous plates and their skin is scaly and grey.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_aldabragianttortoise.jpg",
  },
  {
    name: "Amazonian Giant Centipede",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 10,
      female: 10,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 84,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Scolopendra gigantea",
    category: "Arthropod",
    desc:
      "The Amazonian giant centipede (or Scolopendra gigantea) is a large, fearsome and predatory arthropod that is native to the forests of South America and the Caribbean. It is capable of catching, envenoming and killing many animals, and has learned specific techniques for catching particular prey. The centipede can reach 12in in length and can occur in a variety of colours - typically red, yellow, brown or black - with yellow legs and dark stripes between body segments.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0FtYXpvbkdpYW50Q2VudGlwZWRlXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "American Bison",
    continent: ["North America"],
    biome: ["Grassland"],
    swim: true,
    status: "Near Threatened",
    exhibit: false,
    dominance: "Matriarchal, one dominant bull",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 26,
      female: 26,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 420,
      landAdd: 90,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 0,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 15,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 15,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 15,
        },
        male: 1,
        female: 14,
      },
    },
    imageLink: "https://cms-cdn.zaonce.net/2019-10/AmericanBison.jpg",
   latinName: "Bison bison bison",
    category: "Mammal",
    desc:
      "The American plains bison (or Bison bison bison) is a large ungulate native to the USA and Canada. Bison are characterised by their large head, shoulder hump and forequarters, all of which are covered in a shaggy coat. Their hind-quarters are comparatively less muscled with a thinner coat. Both sexes have horns are similar in size, but males are much heavier due to having more muscle.",
  },
  {
    name: "Arctic Wolf",
    dlc: "Arctic",
    continent: ["North America"],
    biome: ["Taiga", "Tundra"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Alpha male and alpha female",
    relationship_human: "Confident",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 15,
      female: 15,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1162,
      landAdd: 92,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -12,
        max: 16,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 8,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 8,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 8,
        },
        male: 8,
        female: 8,
      },
    },
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEyL19hcmN0aWN3b2xmLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
   latinName: "Canis lupus arctos",
    category: "Mammal",
    desc:
      "Arctic wolves (or Canis lupus arctos) are a large canid species that live in Northern Canada and Greenland. Also known as white wolves, they are large pack predators that feed primarily on muskoxen and arctic hares, although they may also eat foxes, birds and bear cubs, as well as occasionally scavenging carrion.",
  },
  {
    name: "Bactrian Camel",
    continent: ["Asia"],
    biome: ["Desert", "Temperate"],
    swim: true,
    status: "Domesticated",
    exhibit: false,
    dominance: "Dominant male",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 40,
      female: 40,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 650,
      landAdd: 100,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 5,
        max: 44,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 11,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 11,
        },
        male: 1,
        female: 10,
      },
    },
   latinName: "Camelus bactrianus",
    category: "Mammal",
    desc:
      "Domestic Bactrian camels (or Camelus bactrianus) are large ungulates native to Central Asia. They have two humps and thick sandy-coloured wool coats, although they can also be dark brown or white. On average they are 2m tall at the shoulder with an extra 30cm of height added by their humps, and males are significantly larger than females.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/BactrianCamel.jpg",
  },
  {
    name: "Baird's Tapir",
    continent: ["Central America", "South America"],
    biome: ["Grassland", "Temperate", "Tropical"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 24,
      female: 24,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 430,
      landAdd: 56,
      waterAdd: 19,
      climbableAdd: 0,
      water: 37,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 16,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Tapirus bairdii",
    category: "Mammal",
    desc:
      "Baird’s tapir (or Tapirus bairdii) is an endangered mammal native to the woodlands of Central America. It’s one of five species of tapir – four of which live in Central and/or South America. Males and females are similar sizes,  although females are slightly larger, and both have a dark brown to black coat, as well as a pale chin and chest when fully grown. Calves, meanwhile, are tan with white spots and stripes; their colouration provides them with camouflage in the dappled light of the woodland where they live.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/BairdsTapir.jpg",
  },
  {
    name: "Bengal Tiger",
    continent: ["Asia"],
    biome: ["Grassland", "Temperate", "Tropical"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Confident",
    mating:
      "Polygynous (males have multiple female mates, females hace one male mate)",
    lifeExpectancy: {
      male: 15,
      female: 15,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Panthera tigris tigris",
    category: "Mammal",
    desc:
      "The Bengal tiger (or Panthera tigris tigris) is native to India, Bangladesh, Nepal, Bhutan and Western China. It can live in all kinds of environments, including grassland, forests and mangroves, and will hunt large prey such as cloven-hoofed animals like goats, deer and cows (collectively known as ungulates). The Bengal tiger can be identified by its bright orange coat and brown or black stripes, along with a large head, muscular limbs and large teeth.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/bengaltiger.jpg",
  },
  {
    name: "Black Wildebeest",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Territory bulls, female hierarchy within herd",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 19,
      female: 19,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 410,
      landAdd: 40,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 7,
          max: 16,
        },
      },
      groupFemale: {
        size: {
          min: 7,
          max: 32,
        },
      },
      groupMixed: {
        size: {
          min: 7,
          max: 32,
        },
        male: 1,
        female: 31,
      },
    },
   latinName: "Connochaetes gnou",
    category: "Mammal",
    desc:
      "The black wildebeest (or Connochaetes gnou) is a large ungulate species native to Southern Africa, also known as the ‘gnu’ after the distinctive noise they make when alarmed. The species is recognisable by a brown-black coat and L-shaped horns, and males can be distinguished from females due to their darker colour and larger size. Both sexes have thick, bushy manes and a long horse-like tail, measuring between 1.7 and 2.2m long, 1.06 to 1.21m tall at the shoulder, and weighing 120 to 193kg.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_blackwildebeest.jpg",
  },
  {
    name: "Boa Constrictor",
    continent: ["Central America", "South America"],
    biome: ["Grassland", "Tropical"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 30,
      female: 30,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 60,
        max: 80,
      },
      temperature: {
        min: 23,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Boa constrictor",
    category: "Reptile",
    desc:
      "The boa constrictor is a large species of snake native to Central and South America. They are a ubiquitous species split into 9 subspecies, all of which are capable of living in most environments but mostly found in rainforests, coastal areas, and semi-deserts. Although there are many different colors and patterns among these snakes, the typical appearance is pale brown, dark brown and black scales in a rhomboid pattern down the length of the body. The species exhibits sexual dimorphism; the males and females look different. Males are an average length between 1.8 and 2.4m, with pelvic spurs around their cloaca that are used to facilitate mating. Females are larger, with an average length of between 2.1 and 3m, whilst they have pelvic spurs, they are smaller than the male's.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0JvYUNvbnN0cmljdG9yXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Bongo",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: true,
    status: "Near Threatened",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 240,
      landAdd: 30,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 5,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 5,
        },
        male: 1,
        female: 4,
      },
    },
   latinName: "Tragelaphus erycerus",
    category: "Mammal",
    desc:
      "The bongo (or Tragelaphus erycerus) is a secretive, forest-dwelling antelope that lives in the woodlands of Central Africa. They have a tan-to-red coloured coat, white vertical stripes on their torso and pale inner legs, large ears, and a yellow chevron under their eyes. Their main distinguishing features are their large, spiraling, vertical horns. While males and females are a similar size – between 1.1 and 1.3m tall at the shoulder, and 2.15 and 3.15m long – the males are much heavier, averaging 310kg compared to a female’s 190kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Bongo.jpg",
  },
  {
    name: "Bonobo",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Endangered",
    exhibit: false,
    dominance: "Matriarchal",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 40,
      female: 40,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 780,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 30,
      water: 0,
      climbable: 80,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 5,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 2,
          max: 10,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 10,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 10,
        },
        male: 7,
        female: 7,
      },
    },
   latinName: "Pan paniscus",
    category: "Mammal",
    desc:
      "Bonobos (or Pan paniscus) live in the forests and wetlands of the Democratic Republic of Congo, and are most closely related to the common chimpanzee (or Pan troglodytes). Out of any species in nature, these two types of ape have the most DNA in common with humans. Bonobos have pink lips and dark, forward-facing eyes, small ears, a flat nose with wide nostrils, as well as black hair. Male bonobos are larger than females – averaging 73 to 83cm tall and weighing 39kg – whereas a female stands 70 to 76cm tall and weighs 31kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Bonobo.jpg",
  },
  {
    name: "Bornean Orangutan",
    continent: ["Asia"],
    biome: ["Tropical"],
    swim: false,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "Male dominance",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 44,
      female: 44,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 780,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 40,
      water: 0,
      climbable: 120,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 5,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 6,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 6,
        },
        male: 1,
        female: 5,
      },
    },
   latinName: "Pongo pygmaeus",
    category: "Mammal",
    desc:
      "The orangutan (or Pongo pygmaeus) is native to the island of Borneo, their range also spanning areas of Bornean Indonesia and Malaysia. They are large apes identifiable by their red fur and brown skin, while mature males also have distinct, large cheek pads and throat pouches used for making loud vocalizations to attract females. They are incredibly intelligent animals and have been observed creating and using tools in the wild to acquire food. However, they cannot swim and their range is often limited by rivers that they cannot cross in the wild.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_borneanorangutan.jpg",
  },
  {
    name: "Brazilian Salmon Pink Tarantula",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polyandrous",
    lifeExpectancy: {
      male: 12,
      female: 12,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 84,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Lasiodora parahybana",
    category: "Arthropod",
    desc:
      "The Brazilian salmon pink tarantula (or Lasiodora parahybana) is a large species of spider exclusively endemic to the Atlantic Forest area of East Brazil. They are black in color, with pink or red hairs on their legs and abdomen. When looked at as a whole, the males are slightly larger than females with a leg span that can reach 11.2 in, but females are heavier with a larger abdomen. Males also often have brighter coloration than females.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0JyYXppbGxpYW5TYWxtb25QaW5rVGFyYW50dWxhLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Brazilian Wandering Spider",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polyandrous",
    lifeExpectancy: {
      male: 4,
      female: 4,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 84,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Phoneutria nigriventer",
    category: "Arthropod",
    desc:
      "The Brazilian wandering spider (or Phoneutria nigriventer) is a species of arachnid native to South America - predominantly in the rainforests, although it does often live in urban areas alongside humans. The spiders are large, venomous and pale brown in colour, with a hairy body and black striations on their legs. Males are slightly smaller than females with a much smaller abdomen, and also have swollen bulbs on the end of their palps, which are the segmented appendages near the mouth are often used to distinguish the sexes. They have an average leg span of between 130 and 150mm, and an average body size of 17x48mm. A classic behaviour of the Brazilian wandering spider is its defensive posture, whereby it raises its front two sets of legs and leans from side to side.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0JyYXppbGlhbldhbmRlcmluZ1NwaWRlcl8wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Cheetah",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 14,
      female: 14,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 3,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 3,
        },
        male: 2,
        female: 1,
      },
    },
   latinName: "Acinonyx jubatus",
    category: "Mammal",
    desc:
      "The cheetah (or Acinonyx jubatus) lives in the savannahs and dry woodlands of Central and Southern Africa. They can be recognised by their slim body, deep chest, thin legs and tail, as well as dark ‘tear marks’ on the face. Not to mention their most distinctive feature – their spots. Cheetahs are famous for being the fastest land animal, reaching up to 70mph when pursuing their prey. This is generally medium-sized mammals such as gazelle and impala.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_cheetah.jpg",
  },
  {
    name: "Chinese Pangolin",
    continent: ["Asia"],
    biome: ["Temperate", "Tropical"],
    swim: true,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 13,
      female: 13,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 182,
      landAdd: 16,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 3,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 3,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 3,
        },
        male: 3,
        female: 3,
      },
    },
   latinName: "Manis pentadactyla",
    category: "Mammal",
    desc:
      "The Chinese pangolin (or Manis pentadactyla) is a critically endangered insectivorous species native to India, Nepal, Bhutan, Bangladesh, Myanmar, Taiwan and Southern China. They are small, secretive and slow-moving animals, their most distinguishing feature being their layered armour-like keratinous scales. Chinese pangolins are between 40 and 58cm long with a tail measuring 25 to 38cm. They spend their days sleeping in their burrows, and their nights foraging for ants, termites and other insects.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_chinesepangolin.jpg",
  },
  {
    name: "Colombian White-Faced Capuchin Monkey",
    dlc: "South America",
    continent: ["South America", "North America"],
    biome: ["Temperate", "Tropical"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance: "Dominant male in charge of troop",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 51,
      female: 51,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 210,
      landAdd: 8,
      waterAdd: 0,
      climbableAdd: 4,
      water: 0,
      climbable: 20,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 42,
      },
      fence: {
        grade: 1,
        height: 1.25,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 8,
          max: 40,
        },
      },
      groupFemale: {
        size: {
          min: 8,
          max: 40,
        },
      },
      groupMixed: {
        size: {
          min: 8,
          max: 40,
        },
        male: 13,
        female: 39,
      },
    },
   latinName: "Cebus capucinus",
    category: "Mammal",
    desc:
      "The Colombian white-faced capuchin monkey (or Cebus capucinus) is an arboreal primate that lives in the forests of Colombia, Panama and Ecuador. There are 11 species of capuchin and even more subspecies, and the Colombian white-faced variant can be distinguished by its black body fur and distinctive white fur on the shoulders, upper chest and around the face. They also have a 'cap' of black fur on the top of their head and a pale pink face covered in sparse hair, as well as forward facing brown eyes. White-faced capuchins are between 33 and 45cm in length with a 35 to 55cm long tail, weighing between 1.5 and 4kg. Males are larger and heavier than females.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA0L2NhcHVjaGluLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Common Death Adder",
    continent: ["Oceania"],
    biome: ["Grassland", "Temperate"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 10,
      female: 10,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 60,
        max: 80,
      },
      temperature: {
        min: 23,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 5,
        },
      },
    },
   latinName: "Acanthophis antarcticus",
    category: "Reptile",
    desc:
      "The common death adder (or Acanthophis antarcticus) is a venomous snake that lives in the grasslands, forests, and bushlands of Eastern and Southern Australia. It has a flat, triangular head, a squat body, and a rapidly tapering tail, as well as a banded pattern of light brown, dark brown, and grey in order for it be well disguised in leaf litter and other debris. On average, the common death adder is between 28in and 40in long.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0NvbW1vbkRlYXRoQWRkZXJfMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Common Ostrich",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance:
      "Top hen leads nomadic groups when grazing, Alpha males in breeding groups",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 46,
      female: 46,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 675,
      landAdd: 75,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 8,
        },
        male: 1,
        female: 7,
      },
    },
   latinName: "Struthio camelus",
    category: "Bird",
    desc:
      "The common ostrich (or Struthio camelus) is the largest known bird species in the world. Males have black body feathers and white feathers on their wing-tips and tails, while females have grey-brown body feathers. On both sexes, the head, neck and legs are pink to white in colour, and there is some variation in appearance depending on the bird’s original location in Africa. The males have an average height of 2.1 to 2.8m, whereas females are smaller, measuring between 1.7 and 2.0m.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_commonostrich.jpg",
  },
  {
    name: "Common Warthog",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance:
      "Males fight for right to mate. Females have rank in groups based on age",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 290,
      landAdd: 10,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 7,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 7,
        },
        male: 1,
        female: 6,
      },
    },
   latinName: "Phacochoerus africanus",
    category: "Mammal",
    desc:
      "The common warthog (or Phacochoerus africanus) lives throughout Sub-Saharan Africa in a wide variety of environments. Although not currently endangered, the species is vulnerable to drought and hunting, as they’re often viewed by humans as pests. The reason for this is twofold. Firstly, they can spread disease to livestock. Secondly, they can destroy crops on farmland when rooting with their tusks. This has resulted in some pockets of the population being wiped out.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_commonwarthog.jpg",
  },
  {
    name: "Dall Sheep",
    dlc: "Arctic",
    continent: ["North America"],
    biome: ["Taiga", "Tundra"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Dominant alpha male, Hierarchy by age and horn size",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 425,
      landAdd: 55,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -12,
        max: 16,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 15,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 40,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 40,
        },
        male: 1,
        female: 39,
      },
    },
   latinName: "Ovis dalli",
    category: "Mammal",
    desc:
      "The Dall sheep (or Ovis dalli) – also known as ‘Dall’s sheep’ or ‘thinhorn sheep’ –  is a species of wild sheep that lives on the mountain meadows of Alaska (USA), Yukon and British Colombia (Canada). They are white to pale brown in colour, with yellow-brown horns, and are sexually dimorphic; the males being significantly larger than the females and with much thicker, curlier horns. Males measure between 1.3 and 1.8m long and weigh between 73 and 113kg, while females measure between 1.3 and 1.6m and weigh 46 to 50kg.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEyL19kYWxsc2hlZXAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Dingo",
    dlc: "Australia",
    continent: ["Oceania"],
    biome: ["Grassland", "Desert"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Aplha male and alpha female",
    relationship_human: "Confident",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1162,
      landAdd: 0,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 12,
        },
        male: 12,
        female: 12,
      },
    },
   latinName: "Canis lupus dingo",
    category: "Mammal",
    desc:
      "The dingo (or Canis lupus dingo) is a large species of canid that lives throughout Australia. With sandy-coloured fur, a white underside, pointed ears and a long, blunt snout, the dingo is skinny in appearance, averaging between 52 and 60cm in height and measuring 1.2 to 1.5m long. They weigh between 14 and 19kg, with males being slightly larger than females. They are opportunistic predators but also scavengers, resulting in a varied diet of mammals, birds, reptiles, carrion, fruit and vegetables.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA4L0RpbmdvXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Eastern Blue Tongued Lizard",
    dlc: "Australia",
    continent: ["Oceania"],
    biome: ["Temperate", "Grassland", "Tropical"],
    swim: false,
    status: "Data Deficient",
    exhibit: true,
    dominance: "No dominance structure",
    relationship_human: "",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 12,
      female: 12,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: true,
      land: 0,
      landAdd: 0,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 50,
        max: 60,
      },
      temperature: {
        min: 25,
        max: 35,
      },
      fence: {
        grade: 0,
        height: 0,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 0,
          max: 0,
        },
      },
      groupFemale: {
        size: {
          min: 0,
          max: 0,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 0,
        female: 0,
      },
    },
   latinName: "Tiliqua scincoides scincoides",
    category: "Reptile",
    desc:
      "The eastern blue-tongued lizard, or eastern blue-tongued skink is a species of reptile that lives in the woodland, scrubland and semi-desert areas of Australia. They are broad and squat animals, with a triangular head and a thick tail. It has various colour morphs but typically has tan, beige and black scales arranged in a striped pattern. As its name suggests, it has a bright blue tongue. Adult eastern blue-tongued lizards are between 45 and 60cm in length.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA4L0Vhc3Rlcm5CbHVlVG9uZ3VlZExpemFyZF8wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Eastern Brown Snake",
    continent: ["Oceania"],
    biome: ["Desert", "Grassland", "Temperate"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 11,
      female: 11,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 60,
        max: 85,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 5,
        },
      },
    },
   latinName: "Pseudonaja textilis",
    category: "Reptile",
    desc:
      "The Eastern Brown Snake (or Pseudonaja textilis) is a venomous species of reptile that lives in Australia and New Guinea. It prefers to live in dry areas so can be found in the grassland, scrubland and sparse forests. The snakes are pale to dark brown in colour, often with a paler underside, and they may have slightly darker brown mottling on their scales as camouflage. Eastern brown snakes usually measure between 1.5 and 2m in length, and the species is known for its defensive displays, whereby it will lift much of its head and body off the ground and coil it into an S-shape with its mouth open. These displays are often mistaken for aggression.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0Vhc3Rlcm5Ccm93blNuYWtlXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Formosan Black Bear",
    continent: ["Asia"],
    biome: ["Taiga", "Temperate"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 31,
      female: 31,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 950,
      landAdd: 140,
      waterAdd: 0,
      climbableAdd: 16,
      water: 0,
      climbable: 40,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 0,
        max: 40,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Ursus thibetanus formosanus",
    category: "Mammal",
    desc:
      "The Formosan black bear (or Ursus thibetanus formosanus) is a subspecies of the Asiatic black bear that’s endemic to Taiwan. They have a stocky build with black fur, rounded ears and a long straight snout; plus their most characteristic and distinct visual feature, which is a V-shaped white patch on their chest. The Formosan black bears are sexually dimorphic; in this case the males are much larger than females. The former weigh and measure an average of 135kg and 1.7m, and the latter average 70kg and 1.35m.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/FormosanBlackBear.jpg",
  },
  {
    name: "Galapagos Giant Tortoise",
    continent: ["South America"],
    biome: ["Tropical"],
    swim: false,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Largest males",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 100,
      female: 100,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 230,
      landAdd: 5,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 14,
        max: 40,
      },
      fence: {
        grade: 1,
        height: 0.5,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 4,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 4,
        },
        male: 1,
        female: 3,
      },
    },
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_galapagosgianttortoise.jpg",
   latinName: "Chelonoidas nigra",
    category: "Reptile",
    desc:
      "The Giant Galapagos tortoise (or Chelonoidas nigra) is a species of reptile endemic to the Galapagos Islands and does not appear anywhere else in the world. They come in two types – saddleback shelled and dome shelled – and both variants have a dull grey-brown shell and scaly, grey coloured skin. Saddleback shell tortoises have long necks and live in dry lowland areas, while dome shell tortoises have short necks and live in humid highland areas. Both can grow to extremely large sizes, with the average male weighing between 272 and 317kg, and the average female weighing between 136 and 181kg.",
  },
  {
    name: "Gemsbok",
    continent: ["Africa"],
    biome: ["Desert"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "1 dominant male per group",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 270,
      landAdd: 40,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 14,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 5,
          max: 10,
        },
      },
      groupFemale: {
        size: {
          min: 5,
          max: 10,
        },
      },
      groupMixed: {
        size: {
          min: 5,
          max: 10,
        },
        male: 1,
        female: 9,
      },
    },
   latinName: "Oryx gazella",
    category: "Mammal",
    desc:
      "The gemsbok (or Oryx gazella) is a species of antelope that lives in the Kalahari and Namib deserts of Southern Africa. They are characterised by several visual features: long, slim and spiral horns; a black face with white markings over the eyes and muzzle; a grey-brown coat with black markings on the upper legs and back; as well as white ‘socks’. On average, Gemsbok stand between 1.1 and 1.3m tall at the shoulder, measure 1.9 to 2.4m long and have an average horn length of 85cm. The males are also slightly larger and significantly heavier than the females.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_gemsbok.jpg",
  },
  {
    name: "Gharial",
    continent: ["Asia"],
    biome: ["Aquatic", "Temperate", "Tropical"],
    swim: true,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "Male dominance",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 50,
      female: 50,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 210,
      landAdd: 16,
      waterAdd: 30,
      climbableAdd: 0,
      water: 300,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 14,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 7,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 7,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 7,
        },
        male: 7,
        female: 7,
      },
    },
   latinName: "Gavialis gangeticus",
    category: "Reptile",
    desc:
      "Gharials (or Gavialis gangeticus) are a critically endangered species of crocodile native to the rivers of the Indian subcontinent. With recent estimations stating there are just 200 left in the wild, the dwindling population is now restricted to just four stretches of river in Nepal and North India. Their collapse in numbers has been caused by the increase in river pollution reducing the amount of fish in the water, as well as by sand-mining destroying sandbanks that are essential for egg-laying females.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_gharial.jpg",
  },
  {
    name: "Giant Anteater",
    dlc: "South America",
    continent: ["South America", "North America"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Unknown",
    relationship_human: "Neutral",
    mating: "Unknown",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 660,
      landAdd: 60,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Myrmecophaga tridactyla",
    category: "Mammal",
    desc:
      "The giant anteater (or Myrmecophaga tridactyla) is a medium sized mammal that lives in the grasslands and forests of Central and South America. As the name suggests, the species feeds almost exclusively on ants and termites, detecting ant colonies by smell, before digging a hole to feed using its long, sticky tongue. The giant anteater has a very distinctive appearance, with a long, tubular snout, small eyes and ears, stocky limbs, a coarse mane and a thick bushy tail. They also have a characteristic pattern across their bodies; white front legs, a grey muzzle and a black strip across their chest, throat and shoulders, with bristly, black to brown tails and manes.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA0L2dpYW50YW50ZWF0ZXIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Giant Burrowing Cockroach",
    continent: ["Oceania"],
    biome: ["Temperate"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 9,
      female: 9,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 60,
        max: 80,
      },
      temperature: {
        min: 25,
        max: 30,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Macropanesthia rhinoceros",
    category: "Arthropod",
    desc:
      "The Giant burrowing cockroach (or Macropanesthia rhinoceros) is a large insect native to the scrublands and dry forests of Northern Australia. They measure approximately 8cm long, weigh 30g, and are dark reddish-brown in color. They are so named for their habit of digging burrows in the sandy earth, often delving up to 1m into the ground. They are popular pet because of the ease of care and their positive response to being handled.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dpYW50QnVycm93aW5nQ29ja3JvYWNoLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Giant Desert Hairy Scorpion",
    continent: ["North America"],
    biome: ["Desert"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 17,
      female: 17,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 20,
        max: 35,
      },
      temperature: {
        min: 25,
        max: 37,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Hadrurus arizonensis",
    category: "Arthropod",
    desc:
      "A large species of arachnid native to the deserts of the Southern USA and Mexico, the giant desert hairy scorpion (or Hadrurus arizonensis) is a predator specialising in ambush. Typically yellow, tan or pale green and with darker areas of colour on its back, the scorpion spends its time burried beneath the sand or under rocks, attacking insects and small vertebrates with its stinger. This immobilses its prey before the scorpion can then grab it with its jaws. Once fully grown, the scorpion can be between 10 and 18 cm in length and, despite the pain caused, the sting is not usually dangerous to humans.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dpYW50RGVzZXJ0SGFpcnlTY29ycGlvbl8wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Giant Forest Scorpion",
    continent: ["Asia"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 7,
      female: 7,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 65,
        max: 85,
      },
      temperature: {
        min: 21,
        max: 30,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Heterometrus swammerdami titanicus",
    category: "Arthropod",
    desc:
      "The giant forest scorpion (or Heterometrus swammerdami titanicus) is a large species of arachnid that lives in the tropical rainforests of India and Sri Lanka. It's a stout, black coloured animal with thick chitinous body plates and very large pincers. It may also have a blue or green sheen to its cuticle. The giant forest scorpion's pincers are strong and capable of catching and crushing prey, whereas its venom is relatively weak; most likely because it relies more on the strength of its pincers than the potency of its sting.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dpYW50Rm9yZXN0U2NvcnBpb25fMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Giant Panda",
    continent: ["Asia"],
    biome: ["Temperate"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "None",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 900,
      landAdd: 150,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 2,
        max: 29,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 10,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 10,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 10,
        },
        male: 10,
        female: 10,
      },
    },
   latinName: "Ailuropoda melanoleuca",
    category: "Mammal",
    desc:
      "The giant panda (or Ailuropoda melanoleuca) is a species of bear native to the mountains of Central China. They have black and white fur in a distinctive pattern, with black legs, ears and circles around their eyes. Pandas feed almost exclusively on bamboo and, as a result, are extremely dependent on rich bamboo forests to survive. This is a low energy food, so pandas must eat a lot of it to live and spend most of their waking hours foraging and eating. Their low energy intake also means they produce very tiny and vulnerable cubs.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/GiantPanda.jpg",
  },
  {
    name: "Giant Tiger Land Snail",
    continent: ["Africa"],
    biome: ["Tropical", "Grassland"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous, self fertilization",
    lifeExpectancy: {
      male: 7,
      female: 7,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 40,
        max: 60,
      },
      temperature: {
        min: 23,
        max: 36,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Achatina achatina",
    category: "Arthropod",
    desc:
      "The giant tiger land snail (or Achatina achatina) is a large species of gastropod that lives in the woodland areas of West Africa; specifically Sierra Leone, Liberia, Ivory Coast, Ghana and Nigeria, among others. They have a grey body and a conical shell that's yellow, orange or tan with black stripes - the distinctive pattern being the inspiration for their name. The species is hermaphroditic, possessing both male and female reproductive parts, so there are no distinct 'males' and 'females'. However, small or sub-adult individuals have often not yet developed the reproductive parts and so may be considered 'males'.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dpYW50VGlnZXJMYW5kU25haWxfMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Gila Monster",
    continent: ["North America"],
    biome: ["Desert"],
    status: "Near Threatened",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 25,
      female: 25,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 15,
        max: 25,
      },
      temperature: {
        min: 35,
        max: 42,
      },
      groupSize: {
        size: {
          min: 1,
          max: 4,
        },
      },
    },
   latinName: "Heloderma suspectum",
    category: "Reptile",
    desc:
      "The Gila monster (or Heloderma suspectum) is a large species of venomous lizard native to the arid regions of the Southern United States and Northern Mexico. It has orange and black scales arranged in a banded and reticulated pattern, measures 20in to24in long, and weighs between 12.25oz and 24.5oz. The Gila monster has a very keen sense of smell that it uses for hunting, and can often be seen scenting the air by flicking its tongue in and out of its mouth. The species is near threatened, often killed by humans out of fear, despite the fact it is too slow moving for it to be a serious threat to people.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dpbGFNb25zdGVyXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Golden Poison Frog",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Endangered",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 12,
      female: 12,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 80,
        max: 90,
      },
      temperature: {
        min: 26,
        max: 31,
      },
      groupSize: {
        size: {
          min: 4,
          max: 11,
        },
      },
    },
   latinName: "Phyllobates terribilis",
    category: "Amphibian",
    desc:
      "The golden poison frog (or Phyllobates terribilis) is a species of poison dart frog endemic to the rainforests of the Pacific Coast of Colombia. Although being called 'golden' frogs, they are actually found in mint green, yellow and orange color morphs. All variants measure an average of 2in to 2.2in and have extremely poisonous skin that's used as a defense mechanism against predators, while their bright coloration acts as a warning signal to potentional threats. They live on the forest floor and, unlike other frog species, do not require to live in or near water, though they do need water source in which to deposit their eggs.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dvbGRlblBvaXNvbkZyb2dfMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Goliath Beetle",
    continent: ["Africa"],
    biome: ["Tropical", "Grassland"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 2,
      female: 2,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 40,
        max: 60,
      },
      temperature: {
        min: 23,
        max: 36,
      },
      groupSize: {
        size: {
          min: 1,
          max: 8,
        },
      },
    },
   latinName: "Goliathus goliatus",
    category: "Arthropod",
    desc:
      "The Goliath beetle (or Goliathus goliatus) is a large species of insect that lives in the savannah and rainforests of Central Africa. The males and females are different in appearance and size; the males being larger - between 2.4in and 4in - with a dark brown abdomen, a brown thorax with white stripes, black legs, as well as a white head with a Y-shaped horn. The females have shorter, thinner stripes on the thorax, are smaller in size - between 2in and 3.2in - and do not have a horn. Little is known about the life cycle of this species in the wild, but it is threatened by habitat loss due to destruction of the rainforests that it lives.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dvbGlhdGhCZWV0bGVfMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Goliath Birdeater",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 15,
      female: 15,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 84,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 3,
        },
      },
    },
   latinName: "Theraphosa blondi",
    category: "Arthropod",
    desc:
      "The Goliath birdeater (or Theraphosa blondi) is an extremely large species of tarantula native to the tropical rainforests, swamps and marshes of Suriname, Guyana, French Guiana, Brazil and Venezuela. It is tan brown in color, covered in red-brown hair, has a large abdomen with a large, round thorax, thick segmented legs, and elongated pedipalps (mouth parts). The female is larger than the male, and both sexes have pronounced appendages on the end of their abdomen known as 'spinnerets' that aid in web deposition. The web of the Goliath birdeater is used for making egg sacs and for sperm transfer, but they do not spin webs for hunting.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dvbGlhdGhCaXJkZWF0ZXJfMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Goliath Frog",
    continent: ["Africa"],
    biome: ["Aquatic", "Tropical"],
    status: "Endangered",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 74,
        max: 86,
      },
      temperature: {
        min: 26,
        max: 32,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Conraua goliath",
    category: "Amphibian",
    desc:
      "The Goliath frog (or Conraua goliath) is an extremely large species that lives in the African rainforests of Cameroon and Equatorial Guinea, specifically in the fast-flowing rivers and streams. It can be green to dark brown in colour, with a paler underbelly, large yellow eyes, and may also have small, ridged bumps on its skin. Males are larger than females, weighing between 0.6 and 3kg and measuring between 17 and 30cm long. The species is endangered due to being over-hunted for food, as trophies and by the pet trade.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dvbGlhdGhGcm9nXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Greater Flamingo",
    continent: ["Africa", "Asia", "Europe"],
    biome: ["Aquatic", "Grassland", "Temperate", "Tropical"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "None",
    relationship_human: "Neutral",
    mating: "Monogamous and Polygynous",
    lifeExpectancy: {
      male: 59,
      female: 59,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 300,
      landAdd: 9,
      waterAdd: 12,
      climbableAdd: 0,
      water: 125,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 1,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 10,
          max: 500,
        },
      },
      groupFemale: {
        size: {
          min: 10,
          max: 500,
        },
      },
      groupMixed: {
        size: {
          min: 10,
          max: 500,
        },
        male: 500,
        female: 500,
      },
    },
   latinName: "Phoenicopterus roseus",
    category: "Bird",
    desc:
      "The greater flamingo (or Phoenicopterus roseus) is a large species of migratory bird that is widespread across Europe, the Middle East, Asia and Africa. It lives on the mudflats and coastal lagoons of temperate and warm environments, and is a filter feeder which uses its beak to stir up mud and filter out algae, invertebrates and seeds. Male and female flamingos look the same with pale-pink to orange-pink feathers, pink legs, a pink beak with a black tip, and often brighter pink patches on their wings. They also have black flight feathers, measure between 110 and 150cm tall, and weigh between 2 and 4kg.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_greaterflamingo.jpg",
  },
  {
    name: "Green Iguana",
    continent: ["South America", "Central America"],
    biome: ["Tropical", "Grassland"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 14,
      female: 14,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 60,
      },
      temperature: {
        min: 26,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Iguana iguana",
    category: "Reptile",
    desc:
      "The green iguana (or Iguana iguana) is a large species of lizard that lives throughout Central America, Northern South America and the Caribbean. It has a long tail with a serrated crest that goes from its head to the base of its spine, as well as muscular legs with long toes and claws. They may also have striations on their tail and body.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0dyZWVuSWd1YW5hXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Grizzly Bear",
    continent: ["North America"],
    biome: ["Taiga", "Temperate", "Tundra"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Male bears will fight over foraging grounds and mates",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 26,
      female: 26,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 750,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -10,
        max: 28,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Ursus arctos horribilis",
    category: "Mammal",
    desc:
      "Native to northern USA and Canada, the grizzly bear is in fact a subspecies of brown bear (or Ursus arctos horribilis) and is often called the North American brown bear to prevent confusion. A Grizzly can be identified by its thick, brown fur, a large shoulder hump, a straight snout and rounded ears. They have strong front legs with long claws used for digging and hunting. They can also grow extremely large, but there’s often a lot of variation in size between different populations – the average male weighs around 240kg and measures 2.2m long, while an average female weighs 160kg and measures 1.8m.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/GrizzlyBear.jpg",
  },
  {
    name: "Himalayan Brown Bear",
    continent: ["Asia"],
    biome: ["Taiga", "Tundra"],
    swim: true,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 29,
      female: 29,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 550,
      landAdd: 40,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -10,
        max: 22,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Ursus arctos isabellinus",
    category: "Mammal",
    desc:
      "The Himalayan brown bear (or Ursus arctos isabellinus) is a subspecies of brown bear that lives in the mountains of Afghanistan, Pakistan, Northern India, West China, Nepal, Kazakhstan and Tibet. They are very rare and extremely endangered – the size of the population left in the wild are unknown, but they are threatened by numerous factors including habitat fragmentation through human development, as well as poaching for their fur and other body parts. They have thick reddish-brown fur and males are larger than females, with an average length of 1.9m and weight of 135kg, in comparison to the female averages of 1.6m and 70kg. They live at high altitudes – often above the tree line – and spend the summer months foraging, hunting and mating. The winter months are spent hibernating.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/HimalayanBrownBear.jpg",
  },
  {
    name: "Hippopotamus",
    continent: ["Africa"],
    biome: ["Aquatic", "Grassland"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Males are dominant",
    relationship_human: "Confident",
    mating:
      "Polygynous; a dominant male will mate with his harem of females",
    lifeExpectancy: {
      male: 51,
      female: 51,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1004,
      landAdd: 502,
      waterAdd: 502,
      climbableAdd: 0,
      water: 1004,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 10,
        max: 37,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 3,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 30,
        },
        male: 1,
        female: 29,
      },
    },
   latinName: "Hippopotamus amphibius",
    category: "Mammal",
    desc:
      "The common hippopotamus (or Hippopotamus amphibius) is a large mammal native to the rivers of Sub-Saharan Africa. They are large, water dwelling animals with long protruding teeth, nostrils on the top of their snout, small ears and thick grey-brown skin. Males are 4 to 5m long and weigh between 1500 and 2000kg, whereas females measure between 3.3 and 4.2m, and weigh 1000 to 1500kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/hippopotamus.jpg",
  },
  {
    name: "Indian Elephant",
    continent: ["Asia"],
    biome: ["Grassland", "Temperate", "Tropical"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "Matriarchal",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 61,
      female: 61,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 882,
      landAdd: 204,
      waterAdd: 34,
      climbableAdd: 0,
      water: 67,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 5,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 30,
        },
        male: 1,
        female: 29,
      },
    },
   latinName: "Elephas maximus indicus",
    category: "Mammal",
    desc:
      "Native to both Central and Southeast Asia, the Indian or Asian elephant (or Elephas maximus indicus) is a species distinguishable by a distinctive trunk, small ears, and grey skin with pink mottling around the face. They are smaller than their African counterparts, with males reaching an average height of 2.75m and weighing 4000kg, compared to the female average of 2.40m and 2400kg. They are large herbivores and live in a variety of different environments, including forests, grasslands and mountains, wherein they feed on tree leaves, bark and grasses.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_indianelephant.jpg",
  },
  {
    name: "Indian Peafowl",
    continent: ["Asia"],
    biome: ["Temperate"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance: "Male territorial",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 23,
      female: 23,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 312,
      landAdd: 12,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 3,
        max: 40,
      },
      fence: {
        grade: 1,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 4,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 4,
          max: 16,
        },
      },
      groupMixed: {
        size: {
          min: 4,
          max: 20,
        },
        male: 4,
        female: 16,
      },
    },
   latinName: "Pavo cristatus",
    category: "Bird",
    desc:
      "Colloquially known as the peacock, the Indian peafowl (or Pavo cristatus) is a large bird native to Southern Asia but which humans have introduced worldwide. The males – peacocks – are famous for their bright blue shiny feathers and extremely large ornamental tail, which they fan out to show off the size and distinctive appearance of their eye-spotted feathers. This is designed both to impress females and intimidate other males. Female peafowl – peahens – look very different to their male counterparts, sporting brown feathers, a flash of blue on the back of their necks, and no tail fan. However, both sexes have a feathered crest on their head.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/indianpeafowl.jpg",
  },
  {
    name: "Indian Rhinoceros",
    continent: ["Asia"],
    biome: ["Grassland", "Temperate"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Alpha male dominates territory",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 39,
      female: 39,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1000,
      landAdd: 250,
      waterAdd: 19,
      climbableAdd: 0,
      water: 37,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 13,
        max: 40,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Rhinoceros unicornis",
    category: "Mammal",
    desc:
      "Also known as the ‘Greater One-Horned Rhinoceros’, the Indian Rhinoceros (or Rhinoceros unicornis) is a large grazing ungulate native to the river basins of Northern India, Nepal and Bhutan. The species can be distinguished by its short, thick horn and brown-grey bumpy skin, which is often likened to plate armour. Male rhinos are bigger than females – the former averaging 2100kg and 3.7m long, compared to the latter’s average of 1600kg and 3.2m. As well as their difference in size, males look different thanks to their large neck folds.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/indianrhinoceros.jpg",
  },
  {
    name: "Jaguar",
    dlc: "South America",
    continent: ["South America", "North America"],
    biome: ["Grassland", "Tropical", "Temperate"],
    swim: true,
    status: "Near Threatened",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 23,
      female: 23,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 12,
      water: 0,
      climbable: 80,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 42,
      },
      fence: {
        grade: 3,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Panthera onca",
    category: "Mammal",
    desc:
      "The jaguar (or Panthera onca) is a species of big cat that lives throughout South America, Central America and Mexico, with rare individual sightings in southern USA. Although they can live in multiple environment types, they prefer to be in dense forests, near swamps and rivers. They are stockily built compared to the other big cat species, weighing an average of between 56 and 96kg, and measuring 112 to 185cm long. They have yellow to orange fur with black rosette patterning, and a white underside.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA0L2phZ3Vhci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Japanese Macaque",
    continent: ["Asia"],
    biome: ["Taiga", "Temperate"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance: "Matriarchal group with single alpha male",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 30,
      female: 30,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 300,
      landAdd: 6,
      waterAdd: 0,
      climbableAdd: 8,
      water: 0,
      climbable: 20,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -15,
        max: 29,
      },
      fence: {
        grade: 1,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 8,
          max: 50,
        },
      },
      groupFemale: {
        size: {
          min: 8,
          max: 50,
        },
      },
      groupMixed: {
        size: {
          min: 8,
          max: 50,
        },
        male: 17,
        female: 33,
      },
    },
   latinName: "Macaca fuscata",
    category: "Mammal",
    desc:
      "The Japanese macaque (or Macaca fuscata) is a species of monkey endemic to the islands of Japan. It lives in a variety of environments, including the sub-arctic forests of Japan’s northern regions, and is therefore also known as the snow monkey. It has a thick beige fur coat, white belly and pink face, with males measuring an average of 57cm long and weighing 11kg. Females are slightly smaller, averaging 52cm long and weighing 8kg. Both sexes live in groups of between 10 to 160 individuals, comprising related females with strong bonds, as well as unrelated males that have immigrated in from other groups. The species is not endangered and is surviving well in the wild – so much so that, when numbers get too high, macaques may be culled to prevent damage to crops and trees.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_japanesemacaque.jpg",
  },
  {
    name: "Koala",
    dlc: "Australia",
    continent: ["Oceania"],
    biome: ["Tropical", "Temperate"],
    swim: false,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Males fight for access to females",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 13,
      female: 13,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 180,
      landAdd: 0,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 20,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 42,
      },
      fence: {
        grade: 1,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 3,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 4,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 4,
        },
        male: 1,
        female: 3,
      },
    },
   latinName: "Phascolarctos cinereus",
    category: "Mammal",
    desc:
      "The Queensland koala bear (or Phascolarctos cinereus) is an arboreal marsupial that lives in the eucalyptus forests of Eastern Australia. They have grey to brown fur, stocky limbs with dexterous claws, rounded fluffy ears, and a face with a bulbous black nose. They are a sexually dimorphic species, meaning the males are significantly bigger than the females; Queensland koalas are between 60 to 75cm long, with males weighing between 4.2 and 9.1kg, and females weighing 4.1 to 7.3kg. Both sexes feed almost exclusively on eucalyptus leaves.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA4L0tvYWxhXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Komodo Dragon",
    continent: ["Asia"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Feeding order based on size",
    relationship_human: "Confident",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 26,
      female: 26,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 600,
      landAdd: 80,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Varanus komodoensis",
    category: "Reptile",
    desc:
      "The Komodo dragon (or Varanus komodoensis) is a large species of reptile that lives on the Indonesian isles of Komodo, Rinca, Flores and Gili Motang. They are a dull green-brown in colour with wide set limbs with a wide gape, have a long, muscular tail, and a yellow forked tongue. The males reach an average length of 2.59m and usually weigh between 79 and 91kg, whereas the females are smaller, averaging 2.29m long and between 68 and 73kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/komododragon.jpg",
    dlc: "Deluxe upgrade",
  },
  {
    name: "Lehmann's Poison Frog",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Critically Endangered",
    exhibit: true,
    dominance: "None",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 10,
      female: 10,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 80,
        max: 90,
      },
      temperature: {
        min: 26,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 6,
        },
      },
    },
   latinName: "Oophaga lehmanni",
    category: "Amphibian",
    desc:
      "Lehmann's poison frog (or Oophaga lehmanni) is a species of amphibian endemic to the Colombian rainforests of the Anchicaya valley, and cannot be found anywhere else in the world. Preferring to live on the forest floor, the frog can occasionally be found residing on low branches and bushes, distinguished by the thick dark brown to black banding on its back, head and legs. In between these are bright lines of coloration that can occur in red, yellow, and orange color morphs. The frogs are an average of 1.24in-1.44in in length when fully grown.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0xlaG1hbm5zUG9pc29uRnJvZ18wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Lesser Antillean Iguana",
    continent: ["South America", "Central America"],
    biome: ["Tropical"],
    status: "Critically Endangered",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 14,
      female: 14,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 60,
      },
      temperature: {
        min: 26,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Iguana delicatissima",
    category: "Reptile",
    desc:
      "The Lesser Antilean Iguana (or Iguana delicatissima) is a large species of lizard endemic to the Lesser Antilles Islands of the Carribbean - specifically Anguilla, Guadeloupe, Martinique and Dominica. It is a critically endangered scpecies, threatened by habitat loss, hunting by feral animals, and hybridization with the invasive green iguana. The Lesser Antilean Iguana is grey with a green belly and has a short, blunted face with white scales around the jaw; males have pink jowls and blue scales around the eyes, whereas females lack this colouration and are about two thirds of the size of their male counterparts.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX0FudGlsbGVhbklndWFuYV8wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Llama",
    dlc: "South America",
    continent: ["South America"],
    biome: ["Taiga", "Grassland", "Temperate"],
    swim: true,
    status: "Domesticated",
    exhibit: false,
    dominance: "Social hierarchy is constantly in flux based on small fights",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 550,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -5,
        max: 40,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 30,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 30,
        },
        male: 30,
        female: 30,
      },
    },
   latinName: "Lama glama",
    category: "Mammal",
    desc:
      "The llama (or Lama glama) is a species of camelid native to the mountains and steppes of Western South America. Naturally found in Ecuador, Peru, Bolivia, Chile and Argentina, llamas have since been introduced all over the world as livestock because of the high-quality wool they produce. They are domesticated animals and have lived alongside humans as livestock and pack animals for 4000 years. They have a long neck, long legs and a stocky body covered in thick, shaggy wool, and they can be white, tan, piebald, black or grey in colour. Both sexes are between 1.6 and 1.8m tall and 92 to 160cm long, weighing between 130 and 200kg.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA0L2xsYW1hLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Mandrill",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Matriarchal + hierarchy within male group",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 32,
      female: 32,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 400,
      landAdd: 8,
      waterAdd: 0,
      climbableAdd: 8,
      water: 0,
      climbable: 40,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 5,
          max: 5,
        },
      },
      groupFemale: {
        size: {
          min: 5,
          max: 10,
        },
      },
      groupMixed: {
        size: {
          min: 5,
          max: 10,
        },
        male: 1,
        female: 9,
      },
    },
   latinName: "Mandrillus sphinx",
    category: "Mammal",
    desc:
      "The mandrill (or Mandrillus sphinx) is a species of large monkey that lives in the rainforests and plateaus of Cameroon, Gabon, Equatorial Guinea and Congo. They have olive to dark grey fur, a white stomach, and distinctive coloration on the face; a long pink strip runs down the middle of their muzzle to their nostrils, with blue pads on either side. They also have a yellow beard. Mandrill males are much larger than – and look very different from – females, with extremely bright colours on their faces and hindquarters. Males measure between 75 and 95cm, weighing 19 to 40kg, whereas females average between 55 and 66cm and weigh 15 to 30kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Mandrill.jpg",
  },
  {
    name: "Mexican Red Knee Tarantula",
    continent: ["Central America"],
    biome: ["Tropical", "Desert", "Temperate"],
    status: "Vulnerable",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 50,
        max: 84,
      },
      temperature: {
        min: 23,
        max: 29,
      },
      groupSize: {
        size: {
          min: 1,
          max: 5,
        },
      },
    },
   latinName: "Brachypelma hamorii",
    category: "Arthropod",
    desc:
      "The Mexican redknee tarantula (or Brachypelma hamorii) is a species of spider that lives in the scrublands, deserts and forests of Mexico. It has a black body and legs, orange-red coloration on the joints and, like all tarantula species, a body that's covered in sensitive hairs. They measure around 10cm long with a leg span of 15cm and are nocturnal, living in burrows during the day and spending their nights hunting for prey. They feed on insects, small amphibians and small mammals.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX01leGljYW5SZWRrbmVlVGFyYW50dWxhXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Nile Monitor",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Data Deficient",
    exhibit: false,
    dominance: "None",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 15,
      female: 15,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 300,
      landAdd: 25,
      waterAdd: 19,
      climbableAdd: 0,
      water: 75,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 0.5,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 3,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 3,
        },
        male: 1,
        female: 2,
      },
    },
   latinName: "Varanus niloticus",
    category: "Reptile",
    desc:
      "The Nile monitor (or Varanus niloticus) is a large species of reptile that lives in the non-desert area of Sub-Saharan Africa. They have also been introduced to the USA – specifically California and Florida – where they are regarded as an invasive species. Nile monitors much prefer environments close to water, tending to live near rivers. Both sexes look the same and are between 120 and 220cm long, with more than half of this length being their tail. Adults tend to be brown to green, with dark stripes on their body and yellow spots on their legs and head. Meanwhile, juveniles are black with bright yellow spots.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/nilemonitor.jpg",
  },
  {
    name: "Nyala",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 16,
      female: 16,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 300,
      landAdd: 30,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 5,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 5,
        },
        male: 1,
        female: 4,
      },
    },
   latinName: "Tragelaphus angasii",
    category: "Mammal",
    desc:
      "The nyala (or Tragelaphus angasii) is a secretive antelope that lives in the thick undergrowth of the South-Eastern African savannah. They are sexually dimorphic, with males much larger than females; the former has a dark grey shaggy coat, yellow legs and twisted, yellow tipped horns, whereas the latter are tan in colour. Both sexes also have vertical white stripes on their back. Males measure between 0.9 and 1.1m tall, 1.35 to 1.95m long, and weigh 98 to 125 kg. Females are between 0.75 and 0.9m tall, 1.35m to 1.95m long, and weigh between 50 and 68kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Nyala.jpg",
  },
  {
    name: "Okapi",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 26,
      female: 26,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 1081,
      landAdd: 125,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Okapia johnstoni",
    category: "Mammal",
    desc:
      "The okapi (or Okapia johnstoni) is a secretive species native to the dense forests of the Democratic Republic of Congo. They have a distinctive appearance with a grey-white face, dark brown coat across their torso, as well as bright white stripes across their legs and hindquarters. The sexes differ slightly as the males also have small horns, whereas females have whorls of hair in the equivalent area. Both average 1.4 to 1.6m tall and 2.4 to 26m long.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Okapi.jpg",
  },
  {
    name: "Plains Zebra",
   latinName: "Equus quagga",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Near Threatened",
    exhibit: false,
    dominance: "1 dominant male per group, females ranked by age",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 25,
      female: 25,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 510,
      landAdd: 180,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 6,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 6,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 6,
        },
        male: 1,
        female: 5,
      },
    },
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_plainszebra.jpg",
    desc:
      "The plains zebra (or Equus quagga) is native to Eastern and Southern Africa, preferring to live in easy reach of water sources on the savannah. The species is divided into six subspecies, separated due to different features, usually varying strip patterns, and lack of interbreeding between groups. Plains zebra have the black and white stripes famous of all zebra, but are smaller than Grevy’s zebra and larger than mountain zebra. Males and females can both be 1.10 to 1.45m in height, and between 2.17 and 2.46m in length, although males are generally 10% larger than females.",
    category: "Mammal",
  },
  {
    name: "Polar Bear",
    dlc: "Arctic",
   latinName: "Ursus maritimus",
    continent: ["Europe", "North America"],
    biome: ["Aquatic", "Tundra"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "Male bears will fight over mate",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 35,
      female: 35,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 6000,
      landAdd: 1000,
      waterAdd: 250,
      climbableAdd: 0,
      water: 2000,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -20,
        max: 10,
      },
      fence: {
        grade: 4,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEyL19wb2xhcmJlYXIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
    desc:
      "The polar bear (or Ursus maritimus) is a large ursine species that lives in the Arctic Circle and the sub-Arctic regions. With a completely white coat, dark eyes and a dark nose, they are stocky in build, with sturdy legs and large feet that are well adapted to swimming. To minimise heat loss, the bears have small ears and a short tail. Males are between 2.4 and 3.0m long, weighing between 350 and 750kg; females are between 1.8 and 2.4m long, weighing 150 to 250kg. Both sexes feed on both ringed and bearded seals.",
    category: "Mammal",
  },
  {
    name: "Pronghorn Antelope",
    continent: ["North America"],
    biome: ["Grassland", "Temperate"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Dominant solitary males, dominant herd females",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 11,
      female: 11,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 370,
      landAdd: 60,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 2,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 5,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 11,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 11,
        },
        male: 1,
        female: 10,
      },
    },
   latinName: "Antilocapra americana",
    category: "Mammal",
    desc:
      "The pronghorn antelope (or Antilocapra americana) is, in fact, not a true antelope. While the North American mammal occupies a similar environmental niche to antelopes – hence the same name being used – for this reason it is often simply referred to as the ‘pronghorn’. It has a tan coloured coat on its back and sides, a white underbelly, and white chevron-shaped markings on its neck. The species stands an average of 81 to 104cm tall at the shoulder, measuring between 1.3 and 1.5m in length. The males are also 10% larger than the females, have a distinct dark streak down their muzzle, and boast longer, thicker horns.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/pronghornantelope.jpg",
  },
  {
    name: "Puff Adder",
    continent: ["Africa"],
    biome: ["Grassland"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 14,
      female: 14,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 60,
        max: 80,
      },
      temperature: {
        min: 23,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 5,
        },
      },
    },
   latinName: "Bitis arietans",
    category: "Reptile",
    desc:
      "The Puff adder (or Bitis arietans) is a species of venomous snake that is widespread throughout sub-Saharan Africa and the Southern Middle East. It distinguishable by its squat body, broad head and and dull scales; these are beige, brown and black, and formed in a reticulated pattern to provide it with excellent camouflage on the savannahs and grasslands where it prefers to live. It's a slow moving snake, but can reach great speeds when disturbed. Their average length is 1m - although some specimenscan reach almost 2m - and males tend to be larger than females , with a wider girth and longer tail.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX1B1ZmZBZGRlcl8wLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Pygmy Hippo",
    dlc: "Deluxe upgrade",
    continent: ["Africa"],
    biome: ["Aquatic", "Tropical"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Confident",
    mating: "Monogamous (in captivity)",
    lifeExpectancy: {
      male: 30,
      female: 30,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 270,
      landAdd: 30,
      waterAdd: 30,
      climbableAdd: 0,
      water: 270,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 37,
      },
      fence: {
        grade: 3,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 4,
        },
        male: 1,
        female: 3,
      },
    },
   latinName: "Hexaprotodon liberiensis",
    category: "Mammal",
    desc:
      "The pygmy hippopotamus (or Hexaprotodon liberiensis) is a species of medium-sized mammal that lives in the rainforests and swamps of Sierra Leone, Liberia, Guinea and the Ivory Coast. They have grey-brown skin, small ears and sturdy legs with four-toed feet, and can usually be found near rivers, where they spend most of their time wallowing and sleeping. On average they are between 75 to 100cm tall, 150 to 175cm long and weigh between 180 and 275kg.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/PygmyHippo.jpg",
  },
  {
    name: "Red Kangaroo",
    dlc: "Australia",
    continent: ["Oceania"],
    biome: ["Desert", "Grassland"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance: "1 dominant male per group",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 23,
      female: 23,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 330,
      landAdd: 0,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 3,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 10,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 10,
        },
        male: 1,
        female: 9,
      },
    },
   latinName: "Macropus rufus",
    category: "Mammal",
    desc:
      "The red kangaroo (or Macropus rufus) is a large species of marsupial mammal that lives throughout Australia, found everywhere except coastal regions and rainforests. Red kangaroos have large L-shaped back legs and small arms, large rabbit-like ears and a long face with a blunt snout. They are a sexually dimorphic species, meaning the males and females look different; the former being significantly larger, standing between 1.3 and 1.6m tall, with a 1.3m long tail, and weighing between 55 and 90kg; the latter are smaller, standing 0.85 - 1.05m tall and weighing 18 to 40kg. Males have red fur and a pale underside, as well as well-muscled legs, chest and arms, while females have grey fur and do not have large muscles.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA4L1JlZEthbmdhcm9vXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Red Panda",
    continent: ["Asia"],
    biome: ["Taiga", "Temperate"],
    swim: false,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 10,
      female: 10,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 220,
      landAdd: 10,
      waterAdd: 0,
      climbableAdd: 16,
      water: 0,
      climbable: 40,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 0,
        max: 29,
      },
      fence: {
        grade: 2,
        height: 2,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 2,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Ailurus fulgens",
    category: "Mammal",
    desc:
      "The red panda (or Ailurus fulgens) is a small mammal that lives in the woodlands of the Himalayas and multiple areas of China. Despite its name, it is not closely related to the giant panda, however it does share some characteristics such as a diet mainly consisting of bamboo. With red fur, black legs, a ringed tail, and white ears and snout, the red panda averages between 50 and 64cm from head to body, with a tail 28 to 59cm long. They are excellent climbers and good swimmers that enjoy living in a varied environment.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_redpanda.jpg",
  },
  {
    name: "Red Ruffed Lemur",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "Matriarchal",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 26,
      female: 26,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 210,
      landAdd: 8,
      waterAdd: 0,
      climbableAdd: 4,
      water: 0,
      climbable: 20,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 10,
        max: 40,
      },
      fence: {
        grade: 1,
        height: 1.25,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 30,
        },
        male: 1,
        female: 29,
      },
    },
   latinName: "Varecia rubra",
    category: "Mammal",
    desc:
      "The red-ruffed lemur (or Varecia rubra) is a critically endangered species of primate native to the Northern Masoala rainforests of Madagascar. With yellow eyes and a black pointed face surrounded by the distinctive red ruff, the lemur’s body is covered in thick red fur and it has a black tail, hands and feet. It also has a white patch on the top of its head.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_redruffedlemur.jpg",
  },
  {
    name: "Red-Eyed Tree Frog",
    dlc: "South America",
    continent: ["South America", "North America"],
    biome: ["Tropical"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None, but males may be aggressive during the mating season",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 5,
      female: 5,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 80,
        max: 90,
      },
      temperature: {
        min: 26,
        max: 31,
      },
      groupSize: {
        size: {
          min: 1,
          max: 8,
        },
      },
    },
   latinName: "Agalychnis callidryas",
    category: "Amphibian",
    desc:
      "The red-eyed tree frog is a species of arboreal amphibian that lives in the tropical rainforest regions of Central America. Female frogs are larger than males, but both have the same markings. As the name suggests, the red-eyed tree frog has vivid red eyes with black pupils. The upper body and upper legs of the frog are pale green, and as such when the frog curls up and closes its eyes it is well camouflaged against the leaves on which it lives. The red-eyed tree frog has bright blue sides with yellow reticulation and blue thighs. It has orange feet and a pale underbelly.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA0L3JlZGV5ZWR0cmVlZnJvZy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Reindeer",
    dlc: "Arctic",
    continent: ["Europe", "North America"],
    biome: ["Taiga", "Tundra"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "1 dominant male per breeding group",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 17,
      female: 17,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 370,
      landAdd: 60,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -12,
        max: 16,
      },
      fence: {
        grade: 2,
        height: 1.5,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 12,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 12,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 12,
        },
        male: 1,
        female: 11,
      },
    },
   latinName: "Rangifer tarandus",
    category: "Mammal",
    desc:
      "The reindeer (or Rangifer tarandus) is a species of ungulate that lives throughout the Arctic and Sub Arctic – specifically in Canada, The USA (Alaska), Russia, Norway, Finland and Greenland. A reindeer’s appearance changes depending on their origin and the time of year, but generally they have a brown and white coat, and a face with a white underside and muzzle, often with darker coloration on the snout. They also have large antlers, multiple points of which are covered in brown velvet. The males are between 1.8 and 2.1m long, weighing between 159 and 182kg. Females are between 1.6 and 2.05m long, weighing between 80 and 120kg.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEyL19yZWluZGVlci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjk2MH19fQ==",
  },
  {
    name: "Reticulated Giraffe",
    continent: ["Africa"],
    biome: ["Grassland", "Tropical"],
    swim: false,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 25,
      female: 25,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1306,
      landAdd: 332,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 2,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 12,
        },
        male: 4,
        female: 8,
      },
    },
   latinName: "Giraffa camelopardalis reticulata",
    category: "Mammal",
    desc:
      "Also known as the Somali giraffe, the reticulated giraffe (or Giraffa camelopardalis reticulata) is a subspecies that lives in the savannahs and open forests of Kenya, Somalia and Ethiopia. The reticulated giraffe is distinguishable from other subspecies thanks to its large, polygonal spots, tan to red in colour, that are divided by white interconnecting lines on the animal’s fur. While both sexes are extremely tall, the males are significantly taller than females and have well developed bony horns on their head; the horns of the female are smaller and thinner. Giraffes are famous for their long neck, which is used for accessing leaves that are out of reach to other animals.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/reticulatedgiraffe.jpg",
  },
  {
    name: "Ring Tailed Lemur",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Endangered",
    exhibit: false,
    dominance: "Matriarchal",
    relationship_human: "Neutral",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 21,
      female: 21,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 210,
      landAdd: 8,
      waterAdd: 0,
      climbableAdd: 4,
      water: 0,
      climbable: 20,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 10,
        max: 40,
      },
      fence: {
        grade: 1,
        height: 1.25,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 30,
        },
        male: 1,
        female: 29,
      },
    },
   latinName: "Lemur catta",
    category: "Mammal",
    desc:
      "Like all species of lemur, the ring-tailed lemur (or Lemur catta) is native to Madagascar and is not naturally found anywhere else in the world. Ring-tailed lemurs have a pointed muzzle, cat-like ears, and a long tail that has 12 or 13 white rings, 13 or 14 black rings, and a tip that is always black. They are usually between 39 and 46cm in size with a tail of 56 to 63cm and live in groups called ‘troops’ that will travel and forage together. Ring-tailed lemurs are omnivorous and will eat fruit, leaves, insects and most other food they can find.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/ringtailedlemur.jpg",
  },
  {
    name: "Sable Antelope",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Dominant alpha male, female family hierarchy",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 450,
      landAdd: 60,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 6,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 11,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 11,
        },
        male: 1,
        female: 10,
      },
    },
   latinName: "Hippotragus niger",
    category: "Mammal",
    desc:
      "The sable antelope (or Hippotragus niger) is a species of ungulate that lives in South-Eastern Africa. They have long, notched horns that curve backwards from their face, a tan-to-black coat with a white underbelly, chin and throat, as well as white tear-marks on their face. Males are larger, darker and have longer horns than females. Both sexes graze and browse on the savannah, preferring lightly wooded areas to completely open ones.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_sableantelope.jpg",
  },
  {
    name: "Saltwater Crocodile",
    continent: ["Asia", "Oceania"],
    biome: ["Aquatic", "Tropical"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Males are territorial",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 72,
      female: 72,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 210,
      landAdd: 50,
      waterAdd: 105,
      climbableAdd: 0,
      water: 210,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Crocodylus porosus",
    category: "Reptile",
    desc:
      "The saltwater crocodile (or Crocodylus porosus) is an extremely large species of reptile native to the coastal areas of South-east Asia, North Australia and East India. It is an effective and dangerous apex predator, with the males capable of growing between 3.5 to 6m long, and weighing between 200 and 1000kg. Females are significantly smaller, averaging 2.7 to 3.4m and 120-200kg. Both sexes have a broader snout and body compared to other crocodile species, and are tan to greenish grey in colour; there is variation in colour among different populations.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_saltwatercrocodile.jpg",
  },
  {
    name: "Siberian Tiger",
    continent: ["Asia"],
    biome: ["Taiga", "Temperate"],
    swim: true,
    status: "Endangered",
    exhibit: false,
    dominance: "None",
    relationship_human: "Confident",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 18,
      female: 18,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -4,
        max: 28,
      },
      fence: {
        grade: 3,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Panthera tigris altaica",
    category: "Mammal",
    desc:
      "The Siberian tiger (or Panthera tigris altaica) – also known as the Amur tiger – is the largest of the cat species. It is characterised by orange-yellow fur with thin, black stripes and a paler undercoat on its belly. Its head is also very large, with strong jaws containing large canines.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/SiberianTiger.jpg",
  },
  {
    name: "Snow Leopard",
    continent: ["Asia"],
    biome: ["Taiga"],
    swim: true,
    status: "Vulnerable",
    exhibit: false,
    dominance: "None",
    relationship_human: "Shy",
    mating: "Monogamous (Seasonal)",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -4,
        max: 22,
      },
      fence: {
        grade: 2,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Panthera uncia",
    category: "Mammal",
    desc:
      "Identifiable by its white to grey fur, black rosettes across its body, and black spots on its face, the snow leopard (or Panthera uncia) lives in the mountains of Nepal, Tibet, Northern India, Southern Siberia, Pakistan, Bhutan and Mongolia. The animal’s fur is extremely thick and well insulated, which helps it comfortably withstand sub-zero temperatures as low as -25oC. They mostly feed on mountain goats and sheep, but also hunt birds and rodents.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/snowleopard.jpg",
  },
  {
    name: "Southern Cassowary",
    dlc: "Australia",
    continent: ["Oceania", "Asia"],
    biome: ["Tropical"],
    swim: false,
    status: "Least Concern",
    exhibit: false,
    dominance: "No dominance structure",
    relationship_human: "Confident",
    mating: "Polyandrous",
    lifeExpectancy: {
      male: 40,
      female: 40,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 400,
      landAdd: 0,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 12,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.8,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupFemale: {
        size: {
          min: 1,
          max: 1,
        },
      },
      groupMixed: {
        size: {
          min: 1,
          max: 2,
        },
        male: 1,
        female: 1,
      },
    },
   latinName: "Casuarius casuarius",
    category: "Bird",
    desc:
      "The southern cassowary is a large flightless bird that lives in the rainforests, mangroves and grasslands of Papua New Guinea, Indonesia and Northern Australia. They have black plumage with a shaggy fur-like appearance and robust, grey legs and feet. The southern cassowary has a distinctive brown casque on top of their head, a brown-black curved beak, a royal blue throat and a pale blue crown. The back of its neck is orange and it has two red wattles hanging down from its throat. Although males and females look similar, females are significantly larger than males, have bigger crests, beaks and brighter coloration. Male Southern cassowaries measure between 112-136cm and weigh between 29-34kg on average. Females measure between 140-170cm and weigh between 46-69kg on average.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIwLTA4L1NvdXRoZXJuQ2Fzc293YXJ5XzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "Spotted Hyena",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Matriarchal, nepotistic",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1162,
      landAdd: 92,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 4,
        },
        male: 2,
        female: 2,
      },
    },
   latinName: "Crocuta crocuta",
    category: "Mammal",
    desc:
      "The spotted hyena, also known as the laughing hyena (Crocuta crocuta), is native to Sub-Saharan Africa. They are generalist predators that can live in most environments – although they are not found in rainforests or deserts – and their strong forelimbs, well-muscled neck, and comparatively weaker hindlimbs give them a distinctive appearance. Their head is broad with a wide snout and they have sandy fur with black spots, as well as a mane down their neck to their mid back.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/SpottedHyena.jpg",
  },
  {
    name: "Springbok",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Territorial males with female harem",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 10,
      female: 10,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 425,
      landAdd: 55,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 42,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 35,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 35,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 35,
        },
        male: 1,
        female: 34,
      },
    },
   latinName: "Antidorcas marsupialis",
    category: "Mammal",
    desc:
      "The springbok (or Antidorcas marsupialis) is a small species of antelope native to the savannahs of Southern Africa. They have lyre-shaped black horns, a tan coat with dark brown markings, a white belly and face, with dark brown tear marks from their eyes to their muzzle. Males and females are a similar size and both have horns, although the male’s are more robust.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/Springbok.jpg",
  },
  {
    name: "Thomson's Gazelle",
    dlc: "Deluxe upgrade",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Territorial bulls",
    relationship_human: "Shy",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 11,
      female: 11,
    },
    habitatInfo: {
      guestCanEnter: true,
      exhibit: false,
      land: 425,
      landAdd: 55,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 3,
          max: 36,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 36,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 36,
        },
        male: 1,
        female: 35,
      },
    },
   latinName: "Eudorcas thomsonii",
    category: "Mammal",
    desc:
      "Thomson’s gazelle (or Eudorcas thomsonii) is a small species of grazing mammal that lives in Africa’s Serengeti regions of Tanzania and Kenya. It prefers to live in dry grassland – although is also found in woodland – and has a tan coloured back, white underside and a dark stripe on their flank. They also have a tan muzzle, white cheeks and eye region, as well as black streaks running from their eyes to the start of the muzzle. Both sexes have dark, heavily ridged horns – although the male’s are longer and more robust – they both measure an average of 55 to 82cm tall, 80 to 120cm long, and weigh between 20 and 35kg.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_thomsonsgazelle.jpg",
  },
  {
    name: "Timber Wolf",
    continent: ["Asia", "Europe", "North America"],
    biome: ["Taiga", "Temperate", "Tundra"],
    swim: true,
    status: "Least Concern",
    exhibit: false,
    dominance: "Alpha male and alpha female",
    relationship_human: "Confident",
    mating: "Monogamous",
    lifeExpectancy: {
      male: 12,
      female: 12,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 1162,
      landAdd: 92,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: -8,
        max: 29,
      },
      fence: {
        grade: 2,
        height: 1.25,
        climbproof: false,
      },
      groupMale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 12,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 12,
        },
        male: 12,
        female: 12,
      },
    },
   latinName: "Canis lupus",
    category: "Mammal",
    desc:
      "Timber wolves (or Canis lupus) are a large canid species that live across most of the Northern hemisphere. Also known as grey wolves, they are large generalist predators that will eat most prey they can catch, and which are capable of living in a wide variety of different environments. The appearance of timber wolves can vary widely and is mostly dependent on which population is being observed. There are 38 subspecies, each with adaptations to their specific environments, thus causing their varied appearance. In general, they have a mottled grey-brown fur coat, pointed ears and a long straight snout. In terms of size, the wolves have a slim build with a deep rib cage and long legs.",
    imageLink:
      "https://cms-cdn.zaonce.net/2019-10/speciesimagezoopedia_timberwolf.jpg",
  },
  {
    name: "Titan Beetle",
    continent: ["South America"],
    biome: ["Tropical"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Unknown",
    lifeExpectancy: {
      male: 1,
      female: 1,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 40,
        max: 60,
      },
      temperature: {
        min: 23,
        max: 26,
      },
      groupSize: {
        size: {
          min: 1,
          max: 7,
        },
      },
    },
   latinName: "Titanus giganteus",
    category: "Arthropod",
    desc:
      "The titan beetle (or Titanus giganteus) is an extremely large species that lives in the tropical rainforests of South America. It has a large reddish-brown and black abdomen, black colouration on its legs, antennae and thorax, and pale wings with brown vein structures. The beetle's robust mandibles are strong enough to snap through twigs and, while both sexes have wings, only the males are capable of flight. Like many species, it is threatened by the ongoing destruction of the rainforest habitat that it calls home.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX1RpdGFuQmVldGxlXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
  {
    name: "West African Lion",
    continent: ["Africa"],
    biome: ["Grassland"],
    swim: true,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "Male",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 14,
      female: 14,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 705,
      landAdd: 111,
      waterAdd: 0,
      climbableAdd: 0,
      water: 0,
      climbable: 0,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 3,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 2,
          max: 4,
        },
      },
      groupFemale: {
        size: {
          min: 2,
          max: 30,
        },
      },
      groupMixed: {
        size: {
          min: 2,
          max: 30,
        },
        male: 1,
        female: 29,
      },
    },
   latinName: "Panthera leo",
    category: "Mammal",
    desc:
      "Although there are an estimated 20,000 lions in the African wilderness today, the West African lion (or Panthera leo senegalensis) numbers far, far fewer. Only 250 still remain across the entire continent, making the subspecies one of the most threatened of its kind in the world. It currently falls under the ‘critically endangered’ conservation status.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/WestAfricanLion.jpg",
  },
  {
    name: "Western Chimpanzee",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "Patriarchal",
    relationship_human: "Confident",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 51,
      female: 51,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 780,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 30,
      water: 0,
      climbable: 80,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 5,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 5,
          max: 10,
        },
      },
      groupFemale: {
        size: {
          min: 5,
          max: 15,
        },
      },
      groupMixed: {
        size: {
          min: 5,
          max: 15,
        },
        male: 10,
        female: 10,
      },
    },
   latinName: "Pan troglodytes verus",
    category: "Mammal",
    desc:
      "The Western chimpanzee (or Pan troglodytes verus) is a subspecies of the common chimpanzee native to the forests of Guinea, Liberia, Senegal, Sierra Leone and the Ivory Coast. Along with bonobos, they are the closest living relatives of human beings, sharing more than 98% of our DNA. ",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/WesternChimpanzee.jpg",
  },
  {
    name: "Western Diamondback Rattlesnake",
    continent: ["North America", "Central America"],
    biome: ["Desert", "Temperate", "Grassland"],
    status: "Least Concern",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 17,
      female: 17,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 40,
        max: 60,
      },
      temperature: {
        min: 24,
        max: 30,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Crotalus atrox",
    category: "Reptile",
    desc:
      "The Western diamondback rattlesnake (or Crotalus atrox) is a species of venomous snake native to the deserts, grassland and scrubland of the USA and Mexico; so named for the pattern of grey and brown scales on its back. It reaches an average length of 4ft - although a specimen of 7ft in length has been reported - and males are larger than females. It is a dangerous species that will strike if it perceives threat.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX1dlc3Rlcm5EaWFtb25kQmFja1JhdHRsZXNuYWtlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTYwfX19",
  },
  {
    name: "Western Lowland Gorilla",
    continent: ["Africa"],
    biome: ["Tropical"],
    swim: false,
    status: "Critically Endangered",
    exhibit: false,
    dominance: "1 alpha male per group",
    relationship_human: "Neutral",
    mating: "Polygynous",
    lifeExpectancy: {
      male: 41,
      female: 41,
    },
    habitatInfo: {
      guestCanEnter: false,
      exhibit: false,
      land: 780,
      landAdd: 50,
      waterAdd: 0,
      climbableAdd: 20,
      water: 0,
      climbable: 40,
      humidity: {
        min: 0,
        max: 0,
      },
      temperature: {
        min: 8,
        max: 40,
      },
      fence: {
        grade: 3,
        height: 5,
        climbproof: true,
      },
      groupMale: {
        size: {
          min: 3,
          max: 3,
        },
      },
      groupFemale: {
        size: {
          min: 3,
          max: 6,
        },
      },
      groupMixed: {
        size: {
          min: 3,
          max: 6,
        },
        male: 1,
        female: 5,
      },
    },
   latinName: "Gorilla gorilla gorilla",
    category: "Mammal",
    desc:
      "The Western lowland gorilla (or Gorilla gorilla gorilla) is native to Cameroon, Equatorial Guinea, Gabon, Republic of the Congo and Southern Niger, living and foraging in the rainforests, swamp forests and abandoned farmland there. They have black skin, dark forward-facing eyes, a prominent brow ridge, large nostrils and coarse hair which covers most of their body except the face, ears, hands and feet. Males are much larger than females and, when they mature, the hair on their backs becomes grey and they are identified as ‘silverbacks’. Gorillas live in small groups with a silverback in control of the females, younger males and juveniles.",
    imageLink: "https://cms-cdn.zaonce.net/2019-10/WesternLowlandGorilla.jpg",
  },
  {
    name: "Yellow Anaconda",
    continent: ["South America"],
    biome: ["Tropical", "Aquatic"],
    status: "Data Deficient",
    exhibit: true,
    dominance: "None",
    mating: "Promiscuous",
    lifeExpectancy: {
      male: 20,
      female: 20,
    },
    habitatInfo: {
      exhibit: true,
      humidity: {
        min: 80,
        max: 90,
      },
      temperature: {
        min: 25,
        max: 30,
      },
      groupSize: {
        size: {
          min: 1,
          max: 2,
        },
      },
    },
   latinName: "Eunectes notaeus",
    category: "Reptile",
    desc:
      "The yellow anaconda (or Eunectes notaeus) is a large, yellow-scaled species of constrictor snake with brown-black saddles across its back. It can primarily be found in the tributaries, swamps and marshes of the Paraguay river basin, but can also be located in Bolivia, Argentina and Brazil. As generalist predators, the yellow anaconda will feed on most small to medium sized animals that they are able to catch. The species is known for reaching large sizes - adults can reach an average length of 3.3 to 4.4m, as well as an average weight of 25 to 35kg. The largest specimen ever recorded was 4.6m long and weighed 55kg.",
    imageLink:
      "https://d1zb04s4od4oai.cloudfront.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDE5LTEwL1NwZWNpZXNJbWFnZVpvb3BlZGlhX1llbGxvd0FuYWNvbmRhXzAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NjB9fX0=",
  },
];

export default animals;
