export const getTagNews = (tagNews) => async (dispatch) => {
    try {
        dispatch({ type: 'getTagNews', payload: tagNews})
    } catch (error) {
        console.log(error.message)
    }
}
