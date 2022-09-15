import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);
    return (
        <>
        <button onClick={test.clear} className="buttonCarrito">Vaciar Carrito</button>
        {
            test.cartList.map(item => 
            <div className="listCart">
                <img src={item.img} alt="" className="imgListCart"></img>
                <div className="listCartBody">
                <h4>{item.title}</h4>
                <h4>{item.precio}</h4> {item.qty} unidades 
                <button onClick={() => test.eliminarItem(item.id)} className="listCartButtom">Eliminar</button>
                </div>
            </div>)
        }
        </>
    )
}

export default Cart;