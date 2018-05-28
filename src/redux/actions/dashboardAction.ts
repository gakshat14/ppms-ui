import { createAction } from 'redux-actions';
import { Moment } from 'moment';
import * as i from '../constants/dashboardConstant';

export interface ILocation {
    location: string;
    date: Moment;
    requestedCarNumber: string;
}

export const setLocation1 = createAction<ILocation>(i.GET_LOC_1);
export const setLocation2 = createAction<ILocation>(i.GET_LOC_2);
export const setLocation3 = createAction<ILocation>(i.GET_LOC_3);