import { useEffect, useState } from "react";
import Data from "../utils/Data";
import ItemDetails from "./ItemDetail"
import promise from "../utils/promise";

const ItemDetailContainer = () =>{
    const[dato, setDato] = useState({});

    useEffect(()=> {
        promise(Data[4], 2000)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[]);
    return(
        <ItemDetails item={dato}/>
    )
}

export default ItemDetailContainer;