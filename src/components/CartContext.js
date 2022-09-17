import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (item, qty) => {
        let encuentra = cartList.find(card => card.id === item.id);
            if (encuentra === undefined){
                setCartList([
                        ...cartList, {
                        id: item.id,
                        title: item.title,
                        img: item.img,
                        precio: item.precio,
                        qty: qty
                    }
                ])
            }else{
                encuentra.qty += qty;
        }
    }    
    
    const eliminarItem = (id) =>{
        let eliminado = cartList.filter(item => item.id !== id);
        setCartList(eliminado)
    }

    const clear = () => {
        setCartList([])
    }
    
    const totalPorItem = (id) => {
       let x= cartList.map(e => e.id).indexOf(id);
       return cartList[x].precio * cartList[x].qty;
    }

    const numberCart = () => {
        let total= cartList.reduce((acc, e) => acc + e?.qty, 0);
        if (total === 0){
            return [] 
        } else{
            return total
        }
    }

    const totalCart = () => {
        let total= cartList.reduce((acc, e) => acc + e?.precio, 0);
        console.log(total)
    }

    return (
        <CartContext.Provider value={{cartList, addItem, eliminarItem, clear, totalPorItem, numberCart, totalCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;