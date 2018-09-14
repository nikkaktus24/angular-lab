import { Item } from '../../../../core/models';
import { ITEMS } from './constants';
import { PutItems } from './actions';

const defaultState: Item[] = [];

export function itemsReducer(state = defaultState, action: PutItems): any {
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
