export const tag = (data = '', action) => {
    switch (action.type) {
        case 'getTag':
            return action.payload
        default:
            return data
    }
}