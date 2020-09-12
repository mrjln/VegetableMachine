import MachineItem from "../utils/types/types"


// interface Specification {
//     title: string,
//     description: string
//     icon: any
// }
//
// interface Vegetable {
//     id: number,
//     name: {eng: string, nl: string},
//     description: string,
//     specs: Specification[]
// }

const Vegetables: MachineItem[] = [
    {
        id: 1,
        slug: 'artichoke',
        camelCase: 'artichoke',
        name: {eng: 'artichoke', nl: 'artichoke'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 2,
        slug: 'aubergine',
        camelCase: 'aubergine',
        name: {eng: 'aubergine', nl: 'aubergine'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]

    },
    {
        id: 3,
        slug: 'asparagus',
        camelCase: 'asparagus',
        name: {eng: 'asparagus', nl: 'asperges'},
        description: 'Asparagus, officially known as Asparagus officinalis. This awesome nutrient richt veggie comes in different colours: green, white and even purple. It’s low in calories an very rich in vitamins, minerals and anti-oxidants. ',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 4,
        slug: 'broccoli',
        camelCase: 'broccoli',
        name: {eng: 'broccoli', nl: 'broccoli'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 5,
        slug: 'mushroom',
        camelCase: 'mushroom',
        name: {eng: 'mushroom', nl: 'champignon'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 6,
        slug: 'lettuce',
        camelCase: 'lettuce',
        name: {eng: 'lettuce', nl: 'sla'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 7,
        slug: 'paprika',
        camelCase: 'paprika',
        name: {eng: 'paprika', nl: 'paprika'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 8,
        slug: 'leek',
        camelCase: 'leek',
        name: {eng: 'leek', nl: 'prei'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 9,
        slug: 'brussels-sprouts',
        camelCase: 'brusselsSprouts',
        name: {eng: 'brussels sprouts', nl: 'spruitjes'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]

    },
    {
        id: 10,
        slug: 'pumpkin',
        camelCase: 'pumpkin',
        name: {eng: 'pumpkin', nl: 'pompoen'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 11,
        slug: 'onion',
        camelCase: 'onion',
        name: {eng: 'onion', nl: 'ui'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs:[{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    },
    {
        id: 12,
        slug: 'sweet-potato',
        camelCase: 'sweetPotato',
        name: {eng: 'Sweet Potato', nl: 'zoeteAardappel'},
        description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            icon: 'hangover',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            icon: 'bloodPressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Building Strength',
            icon: 'muscularArmOutline',
            description: 'Lots of protein to strengthen your muscles',
        },  ]
    }

];

export default Vegetables