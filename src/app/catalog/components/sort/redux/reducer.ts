import { ISortKey } from '../../../../core/models';
import { SORT } from './constants';

const defaultState: ISortKey = { key: 'price' };

export function sortReducer(state: ISortKey = defaultState, action: any): any {
    switch (action.type) {
        case SORT.SORTKEY_CHANGE:
            return {
                ...state,
                key: action.payload,
            };
        default:
            return state;
    }
}
