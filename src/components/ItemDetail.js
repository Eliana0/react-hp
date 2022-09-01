import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{

    const onAdd = (qty) => {
        alert("Tiene " + qty + " elementos")
    }

    return(

    <>
    <div>
    <div className='card'>
        <img src={item.img} alt="pack" className="pack" />
    <div>
        <h4>{item.title}</h4>
        <h5>{item.precio}</h5>
        <p>{item.description}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
    </div>
    </div>
    </>
    )
}



export default ItemDetail;