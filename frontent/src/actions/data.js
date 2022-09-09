import * as api from '../api/index.js';

export const getData = (d) => async (dispatch) => {
    try {
        const {data} = await api.fetchData(d)
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}