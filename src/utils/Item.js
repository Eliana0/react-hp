import { Link } from "react-router-dom";


const Item = ({id, img, title, precio, description}) =>{
    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }
    return(
        <>
        <div className="divCard">
            <div className='card'>
                <div className="img">
                    <img src={img} alt="pack" className="pack" />
                </div>
            <div className="divBlock">
                <h4>{title}</h4>
                <div className="cardMas">
                <h5>${precio}</h5>
        <Link to={'/item/' + id} className="linkMas">
                <button className="buttonMas"><h5>Más</h5></button>
        </Link>
                </div>
                <p>{description}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Item;