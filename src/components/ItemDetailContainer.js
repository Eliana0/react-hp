import { useEffect, useState } from "react";
import ItemDetails from "./ItemDetail"
import { firestoreFetchOne } from "../utils/firestoreFetch"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const[dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(()=> {

        firestoreFetchOne(id)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[id]);
    return(
        <ItemDetails item={dato}/>
    )
}

export default ItemDetailContainer;