import { createAction } from 'redux-actions';
import * as i from '../constants/entryConstants';

export const enterVehicleNumber = createAction<string>(i.ENTER_VEHICLE_NUMBER);
export const getLocation = createAction<string>(i.GET_LOCATION);
export const getNoLocation = createAction(i.SET_NO_LOCATION);