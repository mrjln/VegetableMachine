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
        name: {eng: 'artichoke', nl: 'artichoke'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },
            {
                title: 'Lowers Blood Pressure',
                description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
            }]

    },
    {
        id: 2,
        slug: 'aubergine',
        name: {eng: 'aubergine', nl: 'aubergine'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }, {
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]

    },
    {
        id: 3,
        slug: 'asparagus',
        name: {eng: 'asparagus', nl: 'asperge'},
        description: 'Asparagus, officially known as Asparagus officinalis. This awesome nutrient richt veggie comes in different colours: green, white and even purple. It’s low in calories an very rich in vitamins, minerals and anti-oxidants. ',
        specs: [{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }, {
            title: 'Digestive Health',
            description: 'Very fiber rich! Promotes regularity and digestive health.',
        }, {
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]
    },
    {
        id: 4,
        slug: 'broccoli',
        name: {eng: 'broccoli', nl: 'broccoli'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },
            {
                title: 'Lowers Blood Pressure',
                description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
            }]
    },
    {
        id: 5,
        slug: 'mushroom',
        name: {eng: 'mushroom', nl: 'champignon'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]
    },
    {
        id: 6,
        slug: 'lettuce',
        name: {eng: 'lettuce', nl: 'sla'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]
    },
    {
        id: 7,
        slug: 'paprika',
        name: {eng: 'paprika', nl: 'paprika'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]
    },
    {
        id: 8,
        slug: 'leek',
        name: {eng: 'leek', nl: 'prei'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]
    },
    {
        id: 9,
        slug: 'brussels-sprouts',
        name: {eng: 'brusselsSprouts', nl: 'spruitjes'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        },{
            title: 'Lowers Blood Pressure',
            description: 'Great source of Potassium, a mineral which relaxes the walls of blood vessels and excretes excess salt through urine. ',
        }]

    },
    {
        id: 10,
        slug: 'pumpkin',
        name: {eng: 'pumpkin', nl: 'pompoen'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }]
    },
    {
        id: 11,
        slug: 'onion',
        name: {eng: 'onion', nl: 'ui'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }]
    },
    {
        id: 12,
        slug: 'sweet-potato',
        name: {eng: 'sweetPotato', nl: 'zoeteAardappel'},
        description: 'Artichoke is a plant. The leaf, stem, and root are used to make "extracts." "Extracts" contain a higher concentration of certain chemicals that are found naturally in the plant. These extracts are used as medicine..\n' +
        '\n' +
        'Artichoke is used to stimulate the flow of bile from the liver. This is thought to help reduce symptoms of heartburn and alcohol "hangover." Artichoke is also used for high cholesterol, irritable bowel syndrome (IBS), kidney problems, anemia, fluid retention (edema), arthritis, bladder infections, and liver problems, including hepatitis C.\n' +
        '\n' +
        'Some people use artichoke for treating snakebites, preventing gallstones, lowering blood pressure, lowering blood sugar, to increase urine flow, and as a tonic or stimulant.\n' +
        '\n' +
        'In foods, artichoke leaves and extracts are used to flavor beverages. Cynarin and chlorogenic acid, which are chemicals found in artichoke, are sometimes used as sweeteners.',
        specs: [{
            title: 'Hangover reducer',
            description: 'Artichoke has chemicals that can reduce nausea and vomiting, spasms, and intestinal gas',
        }]
    }

];

export default Vegetables