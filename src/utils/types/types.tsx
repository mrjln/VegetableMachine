namespace VMtypes {
    export interface VegetableFeatureType {
        name: string,
        description: string
        icon?: any
    }

    export interface IconType {
        url: string, 
        alternativeText: string
    }

    export interface MachineItemType {
        id: number,
        name_en: string,
        name_nl: string,
        description: string,
        icon: IconType,
        coverPhoto: any,
        vegetable_features: VegetableFeatureType[]
    }
}

export default VMtypes
