export class Item {
    constructor(
        public name: string,
        public sex: string,
        public size: any[] | string,
        public price: number,
        public images: string[] | string,
        public colors: string[] | null,
    ) { }
}

export interface IItemsState {
    items: Item[];
}
