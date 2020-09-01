import React from "react";
import './NutritionTable.scss';
import MachineItem from "../../utils/types/types"

interface NutritionValue {
    name: string;
    value: number;
    units?: string;
}
// Based on a male 19-30

const NutritionValuesRDI: NutritionValue[] = [
    {
        name: 'kcal',
        value: 2000,
    },
    {
        name: 'kJ',
        value: 10000,
    },
    {
        name: 'water',
        value: 100,
        units: 'gr/day'
    },
    {
        name: 'protein',
        value: 100,
    },
    {
        name: 'carbonhydrates',
        value: 100,
    },
    {
        name: 'sugars',
        value: 100,
    },
    {
        name: 'fat',
        value: 100,
    },
    {
        name: 'saturated',
        value: 100,
    },
    {
        name: 'cholesterol',
        value: 100,
    },
    {
        name: 'fibers',
        value: 100,
    },
    {
        name: 'Vitamin A',
        value: 800,
        units: 'µg/day '
    },
    {
        name: 'Vitamin B1',
        value: 1.1,
        units: 'mg/day'
    },
    {
        name: 'Vitamin B2',
        value: 	1.2,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B3',
        value: 16,
        units: 'mg/day'

    },
    // {
    //     name: 'Vitamin B4',
    //     value: 100,
    // },
    {
        name: 'Vitamin B5',
        value: 5,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B6',
        value: 1.7,
        units: 'mg/day'
    },
    // {
    //     name: 'Vitamin B11',
    //     value: 100,
    // },
    {
        name: 'Vitamin B12',
        value: 	2.4,
        units: 'µg/day '
    },
    {
        name: 'Vitamin C',
        value: 60,
        units: 'mg/day'
    },
    {
        name: 'Vitamin D',
        value: 20,
        units: 'µg/day '
    },
    {
        name: 'Vitamin E',
        value: 15,
        units: 'mg/day'
    },
    {
        name: 'Vitamin K',
        value: 120,
        units: 'µg/day '
    },
    {
        name: 'Natrium',
        value: 100,
    },
    {
        name: 'Phosphorus',
        value: 700,
        units: 'mg/day'
    },
    {
        name: 'Iron',
        value: 18,
        units: 'mg/day'
    },
    {
        name: 'Magnesium',
        value: 400,
        units: 'mg/day'
    },
    {
        name: 'Copper',
        value: 900,
        units: 'µg/day '
    },
    {
        name: 'Zinc',
        value: 11,
        units: 'mg/day'
    }
];

interface NutritionTableProps {
    machineItem: MachineItem
}


function NutritionTable(props: NutritionTableProps) {
    const item = props.machineItem;
    return <table>
        <thead>
        <tr>
            <td width="159">Per 100 g / ml</td>
            <td width="96">{item.name.eng}</td>
            <td width="53">ADH*</td>
        </tr>
        </thead>
        <tbody>
        {NutritionValuesRDI.map((value) => {
            return <React.Fragment>
                <tr>
                    <td>
                        {value.name}
                    </td>
                    <td>

                    </td>
                    <td>
                        {value.value} <span>{value.units} </span>
                    </td>

                </tr>

            </React.Fragment>
        })
        }


        </tbody>

    </table>
}

export default NutritionTable