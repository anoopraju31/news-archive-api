export const load = (data = false, action) => {
    switch (action.type) {
        case 'loadOn':
            return true
        case 'loadOff':
            return false 
        default:
            return data
    }
}