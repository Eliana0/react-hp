import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";


const Item = ({id, img, title, precio, description}) =>{
    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }
    return(
        <>
        <div>
            <div className='card'>
                <img src={img} alt="pack" className="pack" />
            <div>
                <h4>{title}</h4>
                <div className="cardMas">
                <h5>{precio}</h5>
        <Link to={'/item/' + id} className="linkMas">
                <button className="buttonMas"><h5>Más</h5></button>
        </Link>
                </div>
                <p>{description}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
            </div>
        </div>
        </>
    )
}

export default Item;