// firebaseConfig.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  setPersistence
} from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyANbTHADH9CsR9RS8rh0a1uKtKyEUfR3qs",
  authDomain: "lets-chat-app-5eab0.firebaseapp.com",
  projectId: "lets-chat-app-5eab0",
  storageBucket: "lets-chat-app-5eab0.firebasestorage.app",
  messagingSenderId: "960766217824",
  appId: "1:960766217824:web:77c70f1c63577245007d05",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

let auth;

if (Platform.OS === "web") {
  auth = getAuth(app);
  setPersistence(auth, browserLocalPersistence);
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth, db };

