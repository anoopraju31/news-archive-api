export const tagList = (data = [], action) => {
    switch (action.type) {
        case 'getTagList':
            return action.payload
        default:
            return data
    }
}