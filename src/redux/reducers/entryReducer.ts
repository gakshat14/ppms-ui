import * as i from '../constants/entryConstants';
import { createReducer } from './utils';
import { Action } from 'redux-actions';

export interface IEntry{
    vehicleNumber?: string;
    location?: string;
    noLocation?: boolean;
}

const initialEntry: IEntry = {
    vehicleNumber: '',
    location: '',
    noLocation: false
};

const entryState = createReducer<IEntry>(initialEntry, {
    [i.ENTER_VEHICLE_NUMBER]: (
        state: IEntry,
        action: Action<string>
    ): IEntry => {
        const newState: IEntry = {
            vehicleNumber: action.payload
        };
        return Object.assign({}, state, newState);
    },
    [i.GET_LOCATION]: (
        state: IEntry,
        action: Action<string>
    ): IEntry => {
        const newState: IEntry = {
            location: action.payload
        };

        return Object.assign({}, state, newState);
    },
    [i.SET_NO_LOCATION]: (
        state: IEntry,
    ): IEntry => {
        const newState: IEntry = {
            noLocation: true
        };
        return Object.assign({}, state, newState);
    }
});

export default entryState;