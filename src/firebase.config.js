import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-VNXUUEnhA5hM6LTAq4I2VHdyW2Neb0M",
  authDomain: "food-delivery-app-ba3cc.firebaseapp.com",
  databaseURL: "https://food-delivery-app-ba3cc.firebaseio.com",
  projectId: "food-delivery-app-ba3cc",
  storageBucket: "food-delivery-app-ba3cc.appspot.com",
  messagingSenderId: "554609725100",
  appId: "1:554609725100:web:2feb70edde4a1acfcb5909",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
