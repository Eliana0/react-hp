import { useContext } from "react";
import { CartContext } from "./CartContext";
import CardCart from "../utils/CardCart";

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
                <h4>${test.totalPorItem(item.id)} Total</h4> 
                {item.qty} unidades ${item.precio}/cu
                <button onClick={() => test.eliminarItem(item.id)} className="listCartButtom">Eliminar</button>
                </div>
            </div>)
        }
        {
            test.cartList.length === 0 &&  <h1 className="msjVacio">El carrito está vacío</h1>
        }
        {/*<CardCart /> */}
        </>
    )
}

export default Cart;