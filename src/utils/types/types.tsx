namespace VMtypes {
  export interface VegetableFeatureType {
    name: string;
    description: string;
    icon?: any;
  }

  export interface IconType {
    url: string;
    alternativeText: string;
  }

  export interface SpecsVegetable {
    name: string;
    icon: string;
    description: string;
  }

  export interface MachineItemType {
    id: number;
    camelCase: string;
    name_en: string;
    name_nl: string;
    description: string;
    icon: IconType;
    coverPhoto: any;
    vegetable_features?: VegetableFeatureType[];
    specs: SpecsVegetable[];
  }
}

export default VMtypes;
