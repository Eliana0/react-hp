import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{

    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }

    return(

    <>
    <div className='cardItem'>
    <div >
    <div className="blockCard">
    <div>
        <img src={item.img} alt="pack" className="packItem" />
    </div>
    <div>
        <h2 className="itemTitulo">{item.title}</h2>
        <h3 className="itemPrecio">{item.precio}</h3>
        <h5>Stock: {item.stock}</h5>
        <h5>3, 6 y 12 cuotas sin interés</h5>
        <h6>{item.description}</h6>
        <h6>{item.descriptionII}</h6>
    </div>
    </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
    </div>
    </>
    )
}



export default ItemDetail;