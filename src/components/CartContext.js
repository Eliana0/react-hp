import { createContext, useState } from "react";
import { doc, serverTimestamp, collection, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from '../utils/firebasesConfig';
import swal from 'sweetalert';

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
                        idCategory: item.idCategory,
                        stock: item.stock
                    }
                ])
            }else{
                encuentra.qty += qty;
        }
    }   
    
    const subtotal = [];
    console.log(subtotal)
    
    
    const eliminarItem = (id) =>{
        let eliminado = cartList.filter(item => item.id !== id);
        setCartList(eliminado)
    }

    const clear = () => {
        setCartList([])
    }
    
    const totalItem = (id) => {
       let x= cartList.map(e => e.id).indexOf(id);
       let totalPorItem= (cartList[x].precio * cartList[x].qty);
       subtotal.push(totalPorItem / 2)
       return totalPorItem;
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
        let suma = cartList.map(item => totalItem(item.id));
        return suma.reduce((prevValue, currValue) => prevValue + currValue)
    }

    const descuento =() => {
        let suma = cartList.map(item => totalItem(item.id));
        let total = suma.reduce((prevValue, currValue) => prevValue + currValue)
        if ((total >= 10000) && (total < 20000)){
           return Math.round(total / 100 * 10)
        } else if ((total >= 20000)&& (total < 30000)) {
            return  Math.round(total / 100 * 15)
        } else if (total > 30000){
            return Math.round(total / 100 * 20)
        }
    }

    const porcentaje =() => {
        let suma = cartList.map(item => totalItem(item.id));
        let total = suma.reduce((prevValue, currValue) => prevValue + currValue)
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

    const createOrder = () => {
        let itemDB = cartList.map(item => ({
            id: item.id,
            title: item.title,
            precio: item.precio,
            qty: item.qty
        }))
        let order = {
            cliente:{
                name: "Juanita",
                mail: "juanita@gmail.com",
                tel: "12345678"
            },
            date: serverTimestamp(),
            items: itemDB,
            totla: totalCart()
        }
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFirestore()
            .then(result => {
                swal("Gracias!!", "Su pedido es la orden " + result.id, "success");
                cartList.forEach(async(item) => {
                    const itemRef = doc(db, "Data", item.id);
                    await updateDoc(itemRef, {stock: increment(-item.qty)})
                });
                clear()
            })
            .catch(err => console.log(err))
    }
    const verificaStock0 = (stock) => {
        if (stock === 0){
            return <img src={"https://www.albertmotosbicis.com/wp-content/uploads/2018/03/AGOTADO.png"} alt="pack" className="proximamente" />
        }
    }

    return (
        <CartContext.Provider value={{cartList, addItem, eliminarItem, clear, totalItem, numberCart, subtotalCart, descuento, porcentaje, totalCart, createOrder, verificaStock0}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;