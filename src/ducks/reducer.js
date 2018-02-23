const initialState = {
    id: 1,
    username: '',
    password: '',

}

// CONSTANTS

let UPDATE_USERNAME = 'UPDATE_USERNAME'
let GET_PASSWORD = 'GET_PASSWORD'

// ACTION BUILDERS

export function(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function(password) {
    return{
        type: UPDATE_PASSWORD,
        payload: password
    }
}

// REDUCER

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.payload})

            case UPDATE_PASSWORD:
                return Object.assign({}, state, {password: action.payload})
    }

}