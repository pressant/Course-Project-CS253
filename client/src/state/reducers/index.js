import { combineReducers } from 'redux';
import prescriptionsReducer from './prescriptionsReducer';

const reducers = combineReducers({
    presriptions: prescriptionsReducer
});

export default reducers;