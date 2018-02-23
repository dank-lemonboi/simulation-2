const initialState = {
    id: 1,
    username: 'dougie',
    password: 'thisisapassword',

}

// CONSTANTS

let UPDATE_USERNAME = 'UPDATE_USERNAME'
let UPDATE_PASSWORD = 'UPDATE_PASSWORD'

// ACTION BUILDERS

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updatePassword(password) {
    return{
        type: UPDATE_PASSWORD,
        payload: password
    }
}

// REDUCER

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.payload})

            case UPDATE_PASSWORD:
                return Object.assign({}, state, {password: action.payload})
            
            default:
            return state
    }

}

export default reducer

