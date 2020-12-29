import { combineReducers } from 'redux';
import food from './food_Reducer';

const rootReducer = combineReducers(
    {
        food
    }
)

export default rootReducer;