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
                        qty: qty,
                        idCategory: item.idCategory
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

    const subtotalCart = () => {
        let total= cartList.reduce((acc, e) => acc + e?.precio, 0);
        return total
    }

    const descuento =() => {
        let total= cartList.reduce((acc, e) => acc + e?.precio, 0);
        if ((total >= 10000) && (total < 20000)){
           return Math.round(total / 100 * 10)
        } else if ((total >= 20000)&& (total < 30000)) {
            return  Math.round(total / 100 * 15)
        } else if (total > 30000){
            return Math.round(total / 100 * 20)
        }
    }

    const porcentaje =() => {
        let total= cartList.reduce((acc, e) => acc + e?.precio, 0);
        if ((total >= 10000) && (total <= 20000)){
            return "-10%"
         } else if ((total >= 20000)&& (total < 30000)) {
            return "-15%"
        } else if (total > 30000){
            return "-20%"
        }
    }

    const totalCart = () => {
        if (subtotalCart() >= 10000){
            return subtotalCart() - descuento();
        }else {
            return subtotalCart()
        }
    }

    return (
        <CartContext.Provider value={{cartList, addItem, eliminarItem, clear, totalPorItem, numberCart, subtotalCart, descuento, porcentaje, totalCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;