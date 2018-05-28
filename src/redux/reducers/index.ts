import entryState, {IEntry} from './entryReducer';
import { combineReducers } from 'redux';
import dahsboardState,{IDashboard} from './dashboardReducer';

export interface IStateReduced {
    entryState: IEntry;
    dahsboardState: IDashboard;
}

export const mappedReducer = {
    entryState,
    dahsboardState
};

const rootReducer = combineReducers(mappedReducer);

export default rootReducer;
