/* import ItemCount from './ItemCount'; */
import Data from './Data';
import ItemCount from './ItemCount';

const ItemListContainer = () =>{

    const onAdd = (qty) => {
        alert("Tenes" +qty+ "elementos")
    }

    return(
        <div>
            <h2 className="ItemListContainer">Bienvenido a la Tienda de Harry Potter</h2>
        <div className="galeria">
        {Data.map(item => (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} img={item.img} title={item.title} precio={item.precio} description={item.description} />
        ))}
        </div>
        </div>
    );
}
export default ItemListContainer;