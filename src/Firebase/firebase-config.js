
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD3G-VTZSGLzn_mOMbayBpcxeWrr5Nn0oM",
  authDomain: "nuevos-8744e.firebaseapp.com",
  projectId: "nuevos-8744e",
  storageBucket: "nuevos-8744e.appspot.com",
  messagingSenderId: "23730616794",
  appId: "1:23730616794:web:fe369514ab515c9ec168e3",
  measurementId: "G-XPRMZZ2K48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

/*
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAZJiOnzcuObYVnPorp1_lveHpkEfCbbV0",
    authDomain: "audio-2506d.firebaseapp.com",
    projectId: "audio-2506d",
    storageBucket: "audio-2506d.appspot.com",
    messagingSenderId: "841643577177",
    appId: "1:841643577177:web:d98da5dd4650b2e0c74648",
    measurementId: "G-KJFNB5C2VK"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);*/