import { IDashBoardState } from '../dashboard';
import { ISortState } from '../sort';
import { IItemsState } from '../items';

export interface ICatalogState extends IItemsState, IDashBoardState, ISortState { }
