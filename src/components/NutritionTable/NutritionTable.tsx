import React from "react";
import './NutritionTable.scss';
import VMtypes from "../../utils/types/types"

interface NutritionValue {
    name: string;
    rdi?: number;
    value?: number;
    units?: string;
}

// Based on a male 19-30

const NutritionValuesRDI: NutritionValue[] = [
    {
        name: 'kcal',
        rdi: 2000,
    },
    {
        name: 'kJ',
        rdi: 10000,
    },
    {
        name: 'water',
        rdi: 100,
        units: 'gr/day'
    },
    {
        name: 'protein',
        rdi: 100,
    },
    {
        name: 'carbonhydrates',
        rdi: 100,
    },
    {
        name: 'sugars',
        rdi: 100,
    },
    {
        name: 'fat',
        rdi: 100,
    },
    {
        name: 'saturated',
        rdi: 100,
    },
    {
        name: 'cholesterol',
        rdi: 100,
    },
    {
        name: 'fibers',
        rdi: 100,
    },
    {
        name: 'Vitamin A',
        rdi: 800,
        units: 'µg/day '
    },
    {
        name: 'Vitamin B1',
        rdi: 1.1,
        units: 'mg/day'
    },
    {
        name: 'Vitamin B2',
        rdi: 1.2,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B3',
        rdi: 16,
        units: 'mg/day'

    },
    // {
    //     name: 'Vitamin B4',
    //     rdi: 100,
    // },
    {
        name: 'Vitamin B5',
        rdi: 5,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B6',
        rdi: 1.7,
        units: 'mg/day'
    },
    // {
    //     name: 'Vitamin B11',
    //     rdi: 100,
    // },
    {
        name: 'Vitamin B12',
        rdi: 2.4,
        units: 'µg/day '
    },
    {
        name: 'Vitamin C',
        rdi: 60,
        units: 'mg/day'
    },
    {
        name: 'Vitamin D',
        rdi: 20,
        units: 'µg/day '
    },
    {
        name: 'Vitamin E',
        rdi: 15,
        units: 'mg/day'
    },
    {
        name: 'Vitamin K',
        rdi: 120,
        units: 'µg/day '
    },
    {
        name: 'Natrium',
        rdi: 100,
    },
    {
        name: 'Phosphorus',
        rdi: 700,
        units: 'mg/day'
    },
    {
        name: 'Iron',
        rdi: 18,
        units: 'mg/day'
    },
    {
        name: 'Magnesium',
        rdi: 400,
        units: 'mg/day'
    },
    {
        name: 'Copper',
        rdi: 900,
        units: 'µg/day '
    },
    {
        name: 'Zinc',
        rdi: 11,
        units: 'mg/day'
    }
];

const NutritionValuesDummy: NutritionValue[] = [
    {
        name: 'kcal',
        value: 1111,
    },
    {
        name: 'kJ',
        value: 2222,
    },
    {
        name: 'water',
        value: 3,
        units: 'gr/day'
    },
    {
        name: 'protein',
        value: 3,
    },
    {
        name: 'carbonhydrates',
        value: 3,
    },
    {
        name: 'sugars',
        value: 3,
    },
    {
        name: 'fat',
        value: 3,
    },
    {
        name: 'saturated',
        value: 3,
    },
    {
        name: 'cholesterol',
        value: 3,
    },
    {
        name: 'fibers',
        value: 3,
    },
    {
        name: 'Vitamin A',
        value: 3,
        units: 'µg/day '
    },
    {
        name: 'Vitamin B1',
        value: 3,
        units: 'mg/day'
    },
    {
        name: 'Vitamin B2',
        value: 3,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B3',
        value: 3,
        units: 'mg/day'

    },
    // {
    //     name: 'Vitamin B4',
    //     rdi: 100,
    // },
    {
        name: 'Vitamin B5',
        value: 3,
        units: 'mg/day'

    },
    {
        name: 'Vitamin B6',
        value: 3,
        units: 'mg/day'
    },
    // {
    //     name: 'Vitamin B11',
    //     rdi: 100,
    // },
    {
        name: 'Vitamin B12',
        value: 3,
        units: 'µg/day '
    },
    {
        name: 'Vitamin C',
        value: 3,
        units: 'mg/day'
    },
    {
        name: 'Vitamin D',
        value: 3,
        units: 'µg/day '
    },
    {
        name: 'Vitamin E',
        value: 3,
        units: 'mg/day'
    },
    {
        name: 'Vitamin K',
        value: 3,
        units: 'µg/day '
    },
    {
        name: 'Natrium',
        value: 3,
    },
    {
        name: 'Phosphorus',
        value: 333,
        units: 'mg/day'
    },
    {
        name: 'Iron',
        value: 33,
        units: 'mg/day'
    },
    {
        name: 'Magnesium',
        value: 33,
        units: 'mg/day'
    },
    {
        name: 'Copper',
        value: 33,
        units: 'µg/day '
    },
    // {
    //     name: 'Zinc',
    //     value: 33,
    //     units: 'mg/day'
    // }
];


interface NutritionTableProps {
    machineItem: VMtypes.MachineItemType
}



function NutritionTable(props: NutritionTableProps) {
   const mergeNutritionInfo = (completeNutriValues: NutritionValue[], itemValues:  NutritionValue[]) => {
       return completeNutriValues.map(completeNutriValue => {
           const itemValue = itemValues[completeNutriValues.findIndex(value => value.name === completeNutriValue.name)];
           if(itemValue) completeNutriValue.value = itemValue.value
           return completeNutriValue
       });
    };

    const mergedNutritionInfo = mergeNutritionInfo(NutritionValuesRDI, NutritionValuesDummy);
    const item = props.machineItem;
    return <table>
        <thead>
        <tr>
            <td width="159">Per 100 g / ml</td>
            <td width="96">{item.name_en}</td>
            <td width="53">ADH*</td>
        </tr>
        </thead>
        <tbody>
        {mergedNutritionInfo.map((nutritionValue) => {
            return <React.Fragment>
                <tr>
                    <td>
                        {nutritionValue.name}
                    </td>
                    <td>
                        {nutritionValue.value ? nutritionValue.value : "---"}
                    </td>
                    <td>
                        {nutritionValue.rdi} <span>{nutritionValue.units} </span>
                    </td>

                </tr>

            </React.Fragment>
        })
        }


        </tbody>

    </table>
}

export default NutritionTable