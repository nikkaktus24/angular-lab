import {Injectable} from '@angular/core';
import { DASHBOARD } from '../constants';

@Injectable()
export default class DashBoardActions {
     public toggle = (payload: any) => ({type: DASHBOARD.TOGGLE, payload});
     public checkAll = () => ({type: DASHBOARD.CHECKALL});
}
