export const data = (data = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload
        default:
            return data
    }
}