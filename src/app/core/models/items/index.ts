export class Item {
    constructor(
        public id: string,
        public name: string,
        public sex: string,
        public size: any[] | string,
        public price: number,
        public recources: any,
    ) { }
}

export interface IItemsState {
    catalog: Item[];
}
