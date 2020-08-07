export const clearSearch = () => {
    return {
        type: "CLEAR_RESULT",
    }
};

export const closeModalDispatch = (stat) => {
    return {
        type: "CLOSE_MODAL",
        status: stat
    }
};
