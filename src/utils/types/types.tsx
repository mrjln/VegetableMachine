interface VegetableFeature {
    name: string,
    description: string
    icon?: any
}

export default interface MachineItem {
    id: number,
    camelCase: string,
    name_en: string,
    name_nl: string,
    description: string,
    icon: any,
    coverPhoto: any,
    vegetable_features: VegetableFeature[]
}
