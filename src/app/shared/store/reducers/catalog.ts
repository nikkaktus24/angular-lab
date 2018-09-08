import { ICheckBoxsState } from '../../models';
import { CATALOG } from '../constants';

const defaultState: ICheckBoxsState = { man: true, woman: true, children: true };

export function catalogReducer(state: ICheckBoxsState = defaultState, action: any): any {
    switch (action.type) {
        default:
            return state;
    }
}
