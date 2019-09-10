export const addUserInfo = (user) => ({
    type: 'ADD_USER_INFO',
    user
});

export const userDisconnected = (user) => ({
    type: 'USER_DISCONNECTED',
    user
});