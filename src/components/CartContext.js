import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (item, qty) => {
        let encuentra = cartList.find(item => item.id === item.id);
        if (encuentra === undefined){
            setCartList([
                    ...cartList, {
                    id: item.id,
                    titulo: item.titulo,
                    img: item.img,
                    precio: item.precio,
                    qty: qty
                }
            ])
        }else{
            encuentra.qty += qty;
        }
    }    

/*     const addItem = (item, qty) => {
        let itemDeCarrito = {...item, qty}
        setCartList([
            ...cartList, 
            itemDeCarrito
        ])
        console.log(itemDeCarrito)
           
        } */
    

    const eliminarItem = (id) =>{
        let eliminado = cartList.filter(item => item.id !== id);
        setCartList(eliminado)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, eliminarItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;