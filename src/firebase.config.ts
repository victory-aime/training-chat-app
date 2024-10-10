// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getMessaging} from '@firebase/messaging';
import {getAuth} from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyB6Egdmcf31fGhMenz6kRNs2XSLdzrgkME',
  authDomain: 'deep-linking-bff29.firebaseapp.com',
  projectId: 'deep-linking-bff29',
  storageBucket: 'deep-linking-bff29.appspot.com',
  messagingSenderId: '793141261321',
  appId: '1:793141261321:web:d474c4edb8fbd8e8b3b4d8',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_MESSAGING = getMessaging(FIREBASE_APP);
export const VAPID_KEY =
  'BFj8Jvf793SeiwLPzkokwdjn_8t8Ygr2222CiWWsbJTrpy4tU_Sc27VdBwKoul9BIIcsRpsowUMbLubtK9qmPlo';
