import { createReducer } from './utils';
import {ILocation} from '../actions/dashboardAction';
import * as i from '../constants/dashboardConstant';
import { Action } from 'redux-actions';

export interface IDashboard{
    loc1?: ILocation,
    loc2?: ILocation,
    loc3?: ILocation
}

const intialLocation: ILocation = {
    location: '',
    date: null,
    requestedCarNumber: ''
};

const initialDashboardState: IDashboard = {
    loc1: intialLocation,
    loc2: intialLocation,
    loc3: intialLocation
};

const dashboardState = createReducer<IDashboard>(initialDashboardState, {
    [i.GET_LOC_1]: (
        state: IDashboard,
        action: Action<ILocation>
    ): IDashboard => {
        const newState: IDashboard = {
            loc1: action.payload
        };

        return Object.assign({}, state, newState);
    },
    [i.GET_LOC_2]: (
        state: IDashboard,
        action: Action<ILocation>
    ): IDashboard => {
        const newState: IDashboard = {
            loc2: action.payload
        };

        return Object.assign({}, state, newState);
    },
    [i.GET_LOC_3]: (
        state: IDashboard,
        action: Action<ILocation>
    ): IDashboard => {
        const newState: IDashboard = {
            loc3: action.payload
        };

        return Object.assign({}, state, newState);
    }
});

export default dashboardState;
