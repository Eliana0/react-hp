import { useEffect, useState } from "react";
import Data from "../utils/Data";
import ItemDetails from "./ItemDetail"
import promise from "../utils/promise";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const[dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        promise(Data.find(item => item.id === parseInt(id)), 2000)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[]);
    return(
        <ItemDetails item={dato}/>
    )
}

export default ItemDetailContainer;