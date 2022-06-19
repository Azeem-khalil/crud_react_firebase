
import  firebase from "firebase/compat/app"
import "firebase/compat/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD03A1gG25Z7dAPLK5tNkKZ-YFf3164e3g",
  authDomain: "crud-react-firebase-579e2.firebaseapp.com",
  databaseURL: "https://crud-react-firebase-579e2-default-rtdb.firebaseio.com",
  projectId: "crud-react-firebase-579e2",
  storageBucket: "crud-react-firebase-579e2.appspot.com",
  messagingSenderId: "735707021056",
  appId: "1:735707021056:web:b47cef9e080b74273cfde5"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const dataref=firebase.database();
export default firebase;