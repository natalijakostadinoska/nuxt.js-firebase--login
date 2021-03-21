 import firebase from 'firebase/app'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCu2Sgu-9B_XIRWMNs6LvyIDy3D_b5FtYQ",
    authDomain: "first-project-84d1f.firebaseapp.com",
    projectId: "first-project-84d1f",
    storageBucket: "first-project-84d1f.appspot.com",
    messagingSenderId: "251002254392",
    appId: "1:251002254392:web:c0ecbfbc15788ae86222cd",
    measurementId: "G-6XLWSEK443"
  };
  // Initialize Firebase
 

  let app = null;
  if(!firebase.apps.length){
      app=firebase.initializeApp(firebaseConfig)
  }

  export default firebase