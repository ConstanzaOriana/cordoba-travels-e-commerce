
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8fgtLZqWIVQhhvRFi_YwFSyRcxau0Oac",
  authDomain: "cordoba-travels-ecommerce.firebaseapp.com",
  projectId: "cordoba-travels-ecommerce",
  storageBucket: "cordoba-travels-ecommerce.appspot.com",
  messagingSenderId: "176798357941",
  appId: "1:176798357941:web:0080911f422a8b95cb61fc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)