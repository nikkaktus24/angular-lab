import { ISortKey } from '../../models';
import { SORT } from '../constants';

const defaultState: ISortKey = { key: 'price' };

export function sortReducer(state: ISortKey = defaultState, action: any): any {
    switch (action.type) {
        case SORT.CHANGE:
            return {
                ...state,
                key: action.payload,
            };
        default:
            return state;
    }
}
