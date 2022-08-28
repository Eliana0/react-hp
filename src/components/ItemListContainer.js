import Data from "./Data";
import ItemCount from './ItemCount';

const ItemListContainer = () =>{

    const onAdd = () => {
        alert("holis")
    }

    return(
        <div>
            <h2 className="ItemListContainer">Bienvenido a la Tienda de Harry Potter</h2>
        <div className="galeria">
        {ItemCount.map(item => (
            <ItemCount stock={45} initial={1} onAdd={onAdd} img={Data.img} title={Data.title} precio={Data.precio} description={Data.description}/>
        ))}
        </div>
        </div>
    );
}
export default ItemListContainer;