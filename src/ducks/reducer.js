const initialState = {
    username: '',
    password: '',
    users: [],
    propertyList: [],
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    url: '',
    loanAmount: 0,
    mortgage: 0,
    desiredRent: 0,


}

// CONSTANTS

let GET_USERS = 'GET_USERS'
let UPDATE_USERNAME = 'UPDATE_USERNAME'
let UPDATE_PASSWORD = 'UPDATE_PASSWORD'
let GET_PROPERTY_INFO = 'GET_PROPERTY_INFO'

// ACTION BUILDERS

export function getUsers( users ) {
    return {
        type: GET_USERS,
        payload: users
    }
}

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

export function getPropertyInfo( info ) {
    return {
        type: GET_PROPERTY_INFO,
        payload: info
  } 
}

// REDUCER

function reducer(state = initialState, action) {
    switch (action.type) {
            case  GET_USERS:
            return Object.assign({}, state, {users: action.payload})
        
            case  UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.payload})

            case UPDATE_PASSWORD:
                return Object.assign({}, state, {password: action.payload})

            case GET_PROPERTY_INFO:
                return Object.assign({}, state, {propertyList: action.payload})
            
            default:
            return state
    }

}

export default reducer
