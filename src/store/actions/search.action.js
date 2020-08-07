import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const searchProgress = (state) => {
    return {
        type: "SEARCHING",
        loading: state,
    }
};

export const searchResult = ({data}) => {
    return {
        type: "SEARCH_RESULT",
        payload: data,
    }
};

export const searchError = (message, loading) => {
    return {
        type: "SEARCH_ERROR",
        payload: message,
        loading: loading,
    }
};

export const getResults = ({search, offset, count}) => {


    return dispatch => {
        if (offset < 1 || offset === undefined) {
            dispatch(searchProgress(true));
            dispatch(searchError('', true));
        }

        axios.get(BASE_URL, {params: {api_key: API_KEY, limit: '5', q: search, offset: offset || 0},})
            .then((res) => {
                if (offset < count || offset === undefined) {
                    if (res.data.data.length === 0) {
                        dispatch(searchError('no match found', false));
                    } else {
                        dispatch(searchResult(res))
                    }
                }
            }).catch((err) => {
            dispatch(searchError(err.message))
        });
    }
};