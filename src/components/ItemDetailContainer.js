import { useEffect, useState } from "react";
import ItemDetails from "./ItemDetail"
/* import promise from "../utils/promise"; */
import { firestoreFetchOne } from "../utils/firebaseFetch"
import { useParams } from "react-router-dom";
/* import Data from "../utils/Data"; */

const ItemDetailContainer = () =>{
    const[dato, setDato] = useState({});
    const {idCategory} = useParams();

    useEffect(()=> {

        firestoreFetchOne(idCategory)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[]);
    return(
        <ItemDetails item={dato}/>
    )
}

export default ItemDetailContainer;