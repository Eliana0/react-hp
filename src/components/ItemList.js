import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Item from "../utils/Item";
import { firestoreFetch } from '../utils/firebasesConfig'

const ItemList = () => {
    const [Items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        firestoreFetch(id)
        .then(result => setItems(result))
        },[id])

    return (
        <>
        {Items.map(item => <Item idCtegory={item.idCategory} id={item.id} img={item.img} title={item.title} precio={item.precio} description={item.description} />

            )}
        </>
    );
}

export default ItemList;