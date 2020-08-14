import React from "react";
import './NutritionTable.scss'

interface NutritionValues {
    kcal: number,
    kJ: number,
    water: number,
    protein: number,
    carbonhydrates: number,
    sugars: number,
    fat: number,
    saturated: number,
    cholesterol: number,
    fibers: number,
    vitaminA: number,
    vitaminB1: number,
    vitaminB2: number,
    vitaminB3: number,
    vitaminB4: number,
    vitaminB5: number,
    vitaminB6: number,
    vitaminB11: number,
    vitaminB12: number,
    vitaminC: number,
    vitaminD: number,
    vitaminE: number,
    vitaminK: number,
    natrium: number,
    phosphor: number,
    iron: number,
    magnesium: number,
    copper: number,
    zinc: number
}

const ADH: NutritionValues = {
    kcal: 2000,
    kJ: 12,
    water: 4,
    protein: 5,
    carbonhydrates: 7,
    sugars: 5,
    fat: 7,
    saturated: 7,
    cholesterol: 7,
    fibers: 7,
    vitaminA: 5,
    vitaminB1: 7,
    vitaminB2: 8,
    vitaminB3: 6,
    vitaminB4: 5,
    vitaminB5: 4,
    vitaminB6: 2,
    vitaminB11: 4,
    vitaminB12: 2,
    vitaminC: 6,
    vitaminD: 4,
    vitaminE: 3,
    vitaminK: 2,
    natrium: 3,
    phosphor: 5,
    iron: 9,
    magnesium: 4,
    copper: 3,
    zinc: 2
};

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
        {Object.keys(ADH).map((key) => {
            return <React.Fragment>
                <tr>
                    <td>
                        {key}
                    </td>
                    <td>

                    </td>
                    <td>
                    </td>

                </tr>

            </React.Fragment>
        })
        }


        </tbody>

    </table>
}

export default NutritionTable