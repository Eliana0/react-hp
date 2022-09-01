import { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import promise from "../utils/promise";
import Data from "../utils/Data";

const ItemList = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        promise(Data, 2000)
        .then(result => setItems(result))
        .catch(err => console.log(err))
    },[])

    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }

    return (
        <>
        {Items.map(item => ( 
                <>
                <div>
                <div className='card'>
                <img src={item.img} alt="pack" className="pack" />
            <div>
                <h4>{item.title}</h4>
                <h5>{item.precio}</h5>
                <p>{item.description}</p>
            </div>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
            </>
            ))}
        </>
    );
}

export default ItemList;