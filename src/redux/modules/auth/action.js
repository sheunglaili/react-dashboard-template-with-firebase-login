export const actionType = {
    'AUTH': 'AUTH',
    'LOGOUT':'LOGOUT',
    'AUTH_SUCCESS': 'AUTH_SUCCESS',
    'CHECK_AUTH': 'CHECK_AUTH',
    'AUTHORIZED': 'AUTHORIZED',
    'UNAUTHORIZED': 'UNAUTHORIZEd'
}


export const auth = (credentials) => ({ type: actionType.AUTH, payload: credentials });

export const logout = () => ({type: actionType.LOGOUT})

export const authSuccess = (res) => ({ type: actionType.AUTH_SUCCESS, payload: res.data });

export const checkAuth = (payload) => ({ type: actionType.CHECK_AUTH, payload: payload });

export const authorized = (res) => ({ type: actionType.AUTHORIZED })

export const unauthorized = (res) => ({ type: actionType.UNAUTHORIZED })