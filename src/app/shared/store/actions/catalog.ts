import {Injectable} from '@angular/core';
import { CATALOG } from '../constants';

@Injectable()
export default class DashBoardActions {
    public getItems = () => ({type: CATALOG.GET });
}
