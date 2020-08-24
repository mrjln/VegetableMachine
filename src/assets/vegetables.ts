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
    },
    {
        id: 2,
        slug: 'aubergine',
        name: {eng: 'aubergine', nl: 'aubergine'}

    },
    {
        id: 3,
        slug: 'asparagus',
        name: {eng: 'asparagus', nl: 'asperge'},
    },
    {
        id: 4,
        slug: 'broccoli',
        name: {eng: 'broccoli', nl: 'broccoli'}
    },
    {
        id: 5,
        slug: 'mushroom',
        name: {eng: 'mushroom', nl: 'champignon'}
    },
    {
        id: 6,
        slug: 'lettuce',
        name: {eng: 'lettuce', nl: 'sla'}
    },
    {
        id: 7,
        slug: 'paprika',
        name: {eng: 'paprika', nl: 'paprika'}
    },
    {
        id: 8,
        slug: 'leek',
        name: {eng: 'leek', nl: 'prei'}
    },
    {
        id: 9,
        slug: 'brussels-sprouts',
        name: {eng: 'brusselsSprouts', nl: 'spruitjes'}

    },
    {
        id: 10,
        slug: 'pumpkin',
        name: {eng: 'pumpkin', nl: 'pompoen'}
    },
    {
        id: 11,
        slug: 'onion',
        name: {eng: 'onion', nl: 'ui'}
    },
    {
        id: 12,
        slug: 'sweet-potato',
        name: {eng: 'sweetPotato', nl: 'zoeteAardappel'}
    }

];

export default Vegetables