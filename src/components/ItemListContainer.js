import ItemList from './ItemList';

const ItemListContainer = () =>{

    return(
        <div>
            <h1 className="ItemListContainer">Bienvenido a la Tienda de Harry Potter</h1>
        <div className="galeria">
        <ItemList />
        </div>
        </div>
    );
}
export default ItemListContainer;