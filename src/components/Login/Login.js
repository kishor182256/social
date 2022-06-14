import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.actions';
import './_login.scss';

const Login = () => {
       const dispatch = useDispatch();
      //  const token  = useSelector((state)=>state.authReducer.accessToken)
        const token = sessionStorage.getItem('access-token')
       const history = useHistory()
       console.log('token', sessionStorage.getItem('access-token'));
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login())
  }

  useEffect(()=>{
     if(token){
         history.push('/')        
     }
  },[token,history])

  if(token){
    setTimeout(()=>{
      window.location.reload()
     },3000)
  }

  return (
    <div className='login'>
       <div className='login__container'>
           <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt=''/>
           <button onClick={handleLogin}> Login </button>
           <p></p>
       </div>
    </div>
  )
}

export default Login