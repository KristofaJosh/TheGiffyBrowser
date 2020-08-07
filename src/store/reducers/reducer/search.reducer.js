export const SearchState = function (
    state = {
        loading: false,
        data: [],
        pagination: {offset: 0, total_count: 0},
        gif_details: {},
        modal: true,
        error: ''
    }, action) {
    
    switch (action.type) {
        case "SEARCH_RESULT":
            const {data, pagination} = action.payload;
            return state = {...state, data: state.data.concat(data), pagination: {...pagination}, loading: false};
        case "SEARCHING":
            return state = {...state, loading: action.loading};
        case "CLEAR_RESULT":
            return state = {...state, data: []};
        case "LOAD_GIF":
            return state = {...state, gif_details: action.payload};
        case "SEARCH_ERROR":
            return state = {...state, loading: action.loading, error: action.payload};
        case "CLOSE_MODAL":
            return state = {...state, modal: action.status};
        default:
            return state;
    }
};
