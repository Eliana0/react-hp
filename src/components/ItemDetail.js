import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext"
import swal from 'sweetalert';


const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty, stock) => {
        if(stock > 0){
            swal("Genial!!", "Tiene " + qty + " elementos", "success");
            setItemCount(qty);
            test.addItem(item, qty);
        }else{
            swal("Lo sentimos. El producto no está disponible en este momento");
        }
    }


    return(

    <>
    <div className='cardItem'>
    <div >
    <div className="blockCard">
    <div>
        {test.verificaStock0(item.stock)}
        <img src={item.img} alt="pack" className="packItem" />
    </div>
    <div>
        <h2 className="itemTitulo">{item.title}</h2>
        <h3 className="itemPrecio">${item.precio}</h3>
        <h5>Stock: {item.stock}</h5>
        <h5>3, 6 y 12 cuotas sin interés</h5>
        <h6>{item.description}</h6>
        <h6>{item.descriptionII}</h6>
    </div>
    </div>

    {
        itemCount === 0
        ?<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        :<Link to='/cart'><button className="buttonCarrito">Ir a Carrito</button></Link>
    }
    

    </div>
    </div>
    </>
    )
}



export default ItemDetail;