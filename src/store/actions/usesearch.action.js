export const selectedGif = (payload) => {
    return {
        type: "LOAD_GIF",
        payload: payload,
    }
};