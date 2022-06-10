import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import auth  from '../../firebase'
import { LOAD_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'


export const login = () =>async dispatch => {

    try {
        dispatch({
            type: LOGIN_REQUEST,
         })
         const provider = new firebase.auth.GoogleAuthProvider()

    

   const response = await auth.signInWithPopup(provider)
   const token = response.credential.accessToken
   const profile = {
       name:response.additionalUserInfo.profile.name,
       photoUrl:response.additionalUserInfo.profile.picture
   }

      dispatch({
          type:LOGIN_SUCCESS,
          payload:token
      })
      dispatch({
          type:LOAD_PROFILE,
          payload:profile
      })
   console.log('GoogleAuthProviderresponse',token);
    }catch(error) {
        console.error(error);           
    }
}