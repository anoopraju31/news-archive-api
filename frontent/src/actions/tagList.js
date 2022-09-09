export const getTagList = (tagList) => async (dispatch) => {
    try {
        dispatch({ type: 'getTagList', payload: tagList})
    } catch (error) {
        console.log(error.message)
    }
}

