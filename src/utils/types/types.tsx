interface Specification {
    title: string,
    description: string
    icon: any
}

export default interface MachineItem {
    id: number,
    slug: string,
    name: {eng: string, nl: string},
    description: string,
    specs: Specification[]
}
