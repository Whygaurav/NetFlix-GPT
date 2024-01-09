// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzVHbwy-VY2J1LJwRKzX1uKAnfnx2KcvA",
  authDomain: "netflix-gpt-49bdc.firebaseapp.com",
  projectId: "netflix-gpt-49bdc",
  storageBucket: "netflix-gpt-49bdc.appspot.com",
  messagingSenderId: "541181753649",
  appId: "1:541181753649:web:cfeb83d3443b2a879a5810",
  measurementId: "G-W3Z49B7G06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);