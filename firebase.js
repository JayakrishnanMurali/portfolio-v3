// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeq3HKINLQlvJs7AP91a0jzuSfFpgJ4As',
  authDomain: 'portfolio-55e0a.firebaseapp.com',
  projectId: 'portfolio-55e0a',
  storageBucket: 'portfolio-55e0a.appspot.com',
  messagingSenderId: '759336516184',
  appId: '1:759336516184:web:366e906ea2d7d6c9df682d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
