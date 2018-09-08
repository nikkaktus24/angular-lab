import { ICheckBoxsState } from '../../models';
import { DASHBOARD } from '../constants';

const defaultState: ICheckBoxsState = { man: true, woman: true, children: true };

export function dashBoardReducer(state: ICheckBoxsState = defaultState, action: any): any {
    switch (action.type) {
        case DASHBOARD.TOGGLE:
            return {
                ...state,
                ...action.payload
            };
        case DASHBOARD.CHECKALL:
            return {
                ...state,
                man: true,
                woman: true,
                children: true,
            };
        default:
            return state;
    }
}
