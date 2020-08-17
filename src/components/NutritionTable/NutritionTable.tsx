import React from "react";
import './NutritionTable.scss';

interface NutritionValue {
    name: string;
    value: number;
    units?: string;
}

const NutritionValues: NutritionValue[] = [
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
        value: 	1.5,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B3',
        value: 17,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B4',
        value: 100,
    },
    {
        name: 'Vitamin B5',
        value: 100,
    },
    {
        name: 'Vitamin B6',
        value: 100,
    },
    {
        name: 'Vitamin B11',
        value: 100,
    },
    {
        name: 'Vitamin B12',
        value: 100,
    },
    {
        name: 'Vitamin C',
        value: 100,
    },
    {
        name: 'Vitamin D',
        value: 100,
    },
    {
        name: 'Vitamin E',
        value: 100,
    },
    {
        name: 'Vitamin K',
        value: 100,
    },
    {
        name: 'Natrium',
        value: 100,
    },
    {
        name: 'Phosphor',
        value: 100,
    },
    {
        name: 'Iron',
        value: 100,
    },
    {
        name: 'Magnesium',
        value: 100,
    },
    {
        name: 'Copper',
        value: 100,
    },
    {
        name: 'Zinc',
        value: 100,
    }
];


function NutritionTable() {
    return <table>
        <thead>
        <tr>
            <td width="159">Per 100 g / ml</td>
            <td width="96">Asperges</td>
            <td width="53">ADH*</td>
        </tr>
        </thead>
        <tbody>
        {NutritionValues.map((value) => {
            return <React.Fragment>
                <tr>
                    <td>
                        {value.name}
                    </td>
                    <td>

                    </td>
                    <td>
                        {value.value}
                    </td>

                </tr>

            </React.Fragment>
        })
        }


        </tbody>

    </table>
}

export default NutritionTable