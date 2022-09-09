export const loadOn = () => async (dispatch) => {
    try {
        dispatch({ type: 'loadOn', payload: true})
    } catch (error) {
        console.log(error.message)
    }
}

export const loadOff = () => async (dispatch) => {
    try {
        dispatch({ type: 'loadOff', payload: false})
    } catch (error) {
        console.log(error.message)
    }
}
