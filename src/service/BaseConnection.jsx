import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Importando getFirestore para acessar o Firestore
import { getStorage } from "firebase/storage";  // Importando getStorage corretamente

const firebaseConfig = {
  apiKey: "AIzaSyCY6ywiGTfbNu98XH1aMG0feBu1qI39-CI",
  authDomain: "chamados-18afb.firebaseapp.com",
  projectId: "chamados-18afb",
  storageBucket: "chamados-18afb.firebasestorage.app",
  messagingSenderId: "689021630058",
  appId: "1:689021630058:web:a9aff6f291d8303e3ebc13",
  measurementId: "G-GE0P47J6R9",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);  // Inicializando o Auth corretamente
const db = getFirestore(firebaseApp);  // Inicializando o Firestore corretamente
const storage = getStorage(firebaseApp);  // Inicializando o Storage corretamente

export { auth, db, storage };
