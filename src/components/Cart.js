import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
        <Link to='/'><button className="buttonCarrito">Continuar compra</button></Link>
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
            test.cartList.length === 0 ?
            <h1 className="msjVacio">El carrito está vacío</h1>
            : <div className="cartTotal">
                <div><h4>Subtotal: </h4><h4>${test.subtotalCart()}</h4></div>
                <div><h4>{test.porcentaje()}</h4><h4>${test.descuento()}</h4></div>
                <div><h4>Total: </h4><h4>${test.totalCart()}</h4></div>
            </div>
        }
        </>
    )
}

export default Cart;