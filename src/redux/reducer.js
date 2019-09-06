const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

export const INFO = 'INFO'

export function info(username, id, profile_pic){
    return {
        type: INFO,
        payload: {
            username,
            id,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action){
    const {payload} = action
    switch(action.type){
        case INFO:
            return Object.assign({}, state, {username: state.username + payload, id: state.id + payload, profile_pic: state.profile_pic + payload})
        default:
            return state
    }
}