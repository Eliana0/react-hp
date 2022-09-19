import { useState, useEffect } from "react";
/* import promise from "../utils/promise"; */
/* import Data from "../utils/Data"; */
import { useParams } from 'react-router-dom';
import Item from "../utils/Item";
import { firestore } from '../utils/firebasesConfig'

const ItemList = () => {
    const [Items, setItems] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        firestore(idCategory)
        .then(result => setItems(result))
        },[idCategory])

    return (
        <>
        {Items.map(item => <Item idCtegory={item.idCategory} id={item.id} img={item.img} title={item.title} precio={item.precio} description={item.description} />

            )}
        </>
    );
}

export default ItemList;