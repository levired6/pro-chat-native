// firebaseConfig.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANbTHADH9CsR9RS8rh0a1uKtKyEUfR3qs",
  authDomain: "lets-chat-app-5eab0.firebaseapp.com",
  projectId: "lets-chat-app-5eab0",
  storageBucket: "lets-chat-app-5eab0.firebasestorage.app",
  messagingSenderId: "960766217824",
  appId: "1:960766217824:web:77c70f1c63577245007d05",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize DB
const db = getFirestore(app);

// Initialize Auth with Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };

