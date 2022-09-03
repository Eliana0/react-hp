import { useState, useEffect } from "react";
import promise from "../utils/promise";
import Data from "../utils/Data";
import { useParams } from 'react-router-dom';
import Item from "../utils/Item";

const ItemList = () => {
    const [Items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if(id){
        promise(Data.filter(item => item.category.id === parseInt(id)), 2000)
        .then(result => setItems(result))
        .catch(err => console.log(err))
        }else{
            promise(Data, 2000)
            .then(result => setItems(result))
            .catch(err => console.log(err))
        }
    },[id])

    return (
        <>
        {Items.map(item => <Item id={item.id} img={item.img} title={item.title} precio={item.precio} description={item.description} />

            )}
        </>
    );
}

export default ItemList;