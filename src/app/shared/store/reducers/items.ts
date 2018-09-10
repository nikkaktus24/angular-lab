import { Item } from '../../models';
import { ITEMS } from '../constants';

const defaultState: Item[] = [];

export function dashBoardReducer(state: Item[] = defaultState, action: any): any {
    switch (action.type) {
        case ITEMS.PUT:
            return {
                ...state,
                items: [...action.payload],
            };
        default:
            return state;
    }
}
