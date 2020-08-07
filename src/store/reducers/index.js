import {combineReducers} from "redux";
import {SearchState} from "./reducer/search.reducer";

const allReducers = combineReducers(
    {
        SearchState
    }
);

export default allReducers;
