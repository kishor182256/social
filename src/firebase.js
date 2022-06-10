import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyABclQZiRqBEY-nm1SFewaJap--DYChIlc",
    authDomain: "fir-bc8f5.firebaseapp.com",
    projectId: "fir-bc8f5",
    storageBucket: "fir-bc8f5.appspot.com",
    messagingSenderId: "507887213039",
    appId: "1:507887213039:web:404c3fb8f1539fb77e3e1a"
  };


firebase.initializeApp(firebaseConfig)

export default firebase.auth();

