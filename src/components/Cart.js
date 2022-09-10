import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);
    console.log(test)
    return (
        <>
        <button onClick={test.clear} className="buttonCarrito">Vaciar Carrito</button>
        {
            test.cartList.map(item => <h5>{item.title} {item.qty} unidades <button onClick={() => test.eliminarItem(item.id)}>Eliminar</button></h5>)
        }
        </>
    )
}

export default Cart;