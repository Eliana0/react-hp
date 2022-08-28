import { useEffect, useState } from "react";

const ItemCount = (props, stock=0, initial=1, onAdd) => {
    const [Carrito, contadorCarrito] = useState(0);

    useEffect(() => {
        contadorCarrito(initial);
    },[]);

    const sumaCarrito = () => {
        if (Carrito < stock){
            contadorCarrito(Carrito+1);
        }
    }

    const restaCarrito = () => {
        if (Carrito > stock){
            contadorCarrito(Carrito-1);
        }
    }

    return (
        <div className='card'>
            <img src={props.img} alt="pack" className="pack" />
        <div>
            <h4>{props.title}</h4>
            <h5>{props.precio}</h5>
            <p>{props.description}</p>
        </div>
        <div>
            <button onClick={sumaCarrito}>+</button>
            <p>{Carrito}</p>
            <button onClick={restaCarrito}>-</button>
        </div>
        </div>
    );
}

export default ItemCount;