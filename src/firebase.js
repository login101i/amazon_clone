// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD4TJTbVjXiV_Hpyak4FrHWeMfsNb7ujlc",
  authDomain: "clone-mckrus.firebaseapp.com",
  projectId: "clone-mckrus",
  storageBucket: "clone-mckrus.appspot.com",
  messagingSenderId: "440516302638",
  appId: "1:440516302638:web:ae215ab13475a9499e8cbf",
  measurementId: "G-TC7W1V0MM5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()


export {db, auth}