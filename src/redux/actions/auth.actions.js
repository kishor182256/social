import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import auth  from '../../firebase'
import { LOAD_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'


export const login = () =>async dispatch => {

    try {
        dispatch({
            type: LOGIN_REQUEST,
         })
         const provider = new firebase.auth.GoogleAuthProvider();
         provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

    

   const response = await auth.signInWithPopup(provider)
   const token = response.credential.accessToken
   const profile = {
       name:response.additionalUserInfo.profile.name,
       photoUrl:response.additionalUserInfo.profile.picture
   }

   
   sessionStorage.setItem('access-token', token)
   sessionStorage.setItem('profile', JSON.stringify(profile))


      dispatch({
          type:LOGIN_SUCCESS,
          payload:token
      })
      dispatch({
          type:LOAD_PROFILE,
          payload:profile
      })
//    console.log('GoogleAuthProviderresponse',token);
    }catch(error) {
        console.error(error);           
    }
}


export const logout= () => async dispatch=>{
   await  auth.signOut();
   dispatch({
    type:'LOG_OUT'
   })
   sessionStorage.removeItem('access-token')
   sessionStorage.removeItem('profile')
}