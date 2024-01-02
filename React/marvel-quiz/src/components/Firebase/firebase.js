import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC4HEsdvzlsrdj03Ci_UX07fWhbWyvr064",
  authDomain: "marvel-quiz-ded2c.firebaseapp.com",
  projectId: "marvel-quiz-ded2c",
  storageBucket: "marvel-quiz-ded2c.appspot.com",
  messagingSenderId: "1055889652770",
  appId: "1:1055889652770:web:c51b3ae6c3cc2330619e7b",
  measurementId: "G-JVMNM5FNYJ"
}

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }


  
}


export default Firebase