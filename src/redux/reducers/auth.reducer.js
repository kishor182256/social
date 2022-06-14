import { LOAD_PROFILE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionTypes"

const initialState = {
   accessToken: sessionStorage.getItem('access-token')
      ? sessionStorage.getItem('access-token')
      : null,
   user: sessionStorage.getItem('profile')
      ? JSON.parse(sessionStorage.getItem('profile'))
      : null,
   loading: false,
}

export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action
 
    switch (type) {
       case LOGIN_REQUEST:
          return {
             ...prevState,
             loading: true,
          }
        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false,
            }
            case LOGIN_FAILURE:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }
            case LOAD_PROFILE:
                return {
                   ...prevState,
                   user: payload,
                }
       
             case LOG_OUT:
                return {
                   ...prevState,
                   accessToken: null,
                   user: null,
                }
          default:
            return prevState
        }
     
}