// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, where, query } from "firebase/firestore";

// Your web app's Firebase configuration
const firebasesConfig = {
  apiKey: "AIzaSyBKEW1Z6MZg4WEBA5UWPX63A4v-Nai2t3c",
  authDomain: "react-hp-cristaldo.firebaseapp.com",
  projectId: "react-hp-cristaldo",
  storageBucket: "react-hp-cristaldo.appspot.com",
  messagingSenderId: "497119532967",
  appId: "1:497119532967:web:0c63caf3f2f738fbadc882"
};

// Initialize Firebase
const app = initializeApp(firebasesConfig);
export const db = getFirestore(app);
export const firestore = async (idCategory) => {
    let q;
    if(idCategory){
        //traer solo los elementos de esa categoria
        q = query(collection(db, "Data"), where('idCategory', '==', idCategory));
    }else{
        q = query(collection(db, "Data"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }))
    return dataFromFirestore
};