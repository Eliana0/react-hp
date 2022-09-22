import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebasesConfig";
import { query, where } from "firebase/firestore";

export const firestoreFetch = async (idCategory) =>{
    let q;
    if(idCategory){
        q = query(collection(db, "Data"), where("idCategory", "==", idCategory));
    }else{
        q = query(collection(db, "Data"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id, ...document.data()
    }))
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idCategory) => {
    const docRef = doc(db, "Data", idCategory);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return {
            id: idCategory, ...docSnap.data()
        }
    }
}