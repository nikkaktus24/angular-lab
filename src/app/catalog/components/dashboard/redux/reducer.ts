import { IcheckBoxesState } from '../../../../core/models';
import { DASHBOARD } from './constants';
import { CheckAllAction, ToggleAction } from './actions';

const defaultState: IcheckBoxesState = {};

export function dashBoardReducer(state: IcheckBoxesState = defaultState, action: ToggleAction | CheckAllAction) {
    switch (action.type) {
        case DASHBOARD.TOGGLE:
            return {
                ...state,
                ...action.payload
            };
        case DASHBOARD.CHECKALL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
