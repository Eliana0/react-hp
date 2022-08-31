import Data from '../utils/Data';
import ItemList from './ItemList';

const ItemListContainer = () =>{

    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }

    return(
        <div>
            <h1 className="ItemListContainer">Bienvenido a la Tienda de Harry Potter</h1>
        <div className="galeria">
        {Data.map(item => (
            <ItemList  stock={item.stock} initial={item.initial} onAdd={onAdd} img={item.img} title={item.title} precio={item.precio} description={item.description} />
        ))}  
        </div>
        </div>
    );
}
export default ItemListContainer;