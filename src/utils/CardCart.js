import { useContext } from "react";
import { CartContext } from "../components/CartContext"

const CardCart = () => {
    const test = useContext(CartContext);
    return(
        <div>
            <h2>Total: </h2><p>{test.totalPorItem()}</p>
        </div>
    )
}

export default CardCart;