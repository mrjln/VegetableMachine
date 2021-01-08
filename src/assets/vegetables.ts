import MachineItem from "../utils/types/types"


// interface Specification {
//     name: string,
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
    // {
    //     id: 1,
    //     camelCase: 'artichoke',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 2,
    //     camelCase: 'aubergine',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]

    // },
    // {
    //     id: 3,
    //     camelCase: 'asparagus',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'Asparagus, officially known as Asparagus officinalis. This awesome nutrient richt veggie comes in different colours: green, white and even purple. It’s low in calories an very rich in vitamins, minerals and anti-oxidants. ',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 4,
    //     camelCase: 'broccoli',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 5,
    //     camelCase: 'mushroom',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 6,
    //     camelCase: 'lettuce',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 7,
    //     camelCase: 'paprika',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 8,
    //     camelCase: 'leek',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 9,
    //     camelCase: 'brusselsSprouts',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]

    // },
    // {
    //     id: 10,
    //     camelCase: 'pumpkin',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 11,
    //     camelCase: 'onion',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs:[{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // },
    // {
    //     id: 12,
    //     camelCase: 'sweetPotato',
    //     name_en: 'artichoke',
    //     name_nl: 'artichoke', 
    //     description: 'This is an example text. This is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
    //     '\n' +
    //     'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
    //     '\n' +
    //     'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
    //     '\n' +
    //     'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
    //     specs: [{
    //         name: 'Hangover reducer',
    //         icon: 'hangover',
    //         description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
    //     }, {
    //         name: 'Lowers Blood Pressure',
    //         icon: 'bloodPressure',
    //         description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
    //     }, {
    //         name: 'Building Strength',
    //         icon: 'muscularArmOutline',
    //         description: 'Lots of protein to strengthen your muscles',
    //     },  ]
    // }

];

export default Vegetables