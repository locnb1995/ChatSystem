const userData = {
    _id: null,
    username: '',
    password: '',
    role: 0,
    socket_id : '',
};
const user = (state = userData, action) => {
    switch (action.type) {
        case 'ADD_USER_INFO':
            return action.user
        case 'USER_DISCONNECTED':
            return userData
        default:
            return state
    }
}

export default user