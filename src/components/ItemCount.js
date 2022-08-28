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
        <div>
        <div className='card'>
            <img src={props.img} alt="pack" className="pack" />
        <div>
            <h4>{props.title}</h4>
            <h5>{props.precio}</h5>
            <p>{props.description}</p>
        </div>
        </div>
{        <div className="botonesCarrito">
            <button onClick={sumaCarrito} className="buttonRS"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg></button>
            <p>{Carrito}</p>
            <button onClick={restaCarrito} className="buttonRS"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
             <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg></button>
        </div>}
        </div>
    );
}

export default ItemCount;