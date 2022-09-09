export const getTag = (tag) => async (dispatch) => {
    try {
        dispatch({ type: 'getTag', payload: tag})
    } catch (error) {
        console.log(error.message)
    }
}

