export const tagNews = (data = [], action) => {
    switch (action.type) {
        case 'getTagNews':
            return action.payload
        default:
            return data
    }
}