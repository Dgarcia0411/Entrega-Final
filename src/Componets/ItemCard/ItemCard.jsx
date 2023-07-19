import { Link } from "react-router-dom"




const ItemCard = ({item}) => {
//contenedor_items
    return (
    <div className="col-4 sm-2 p-3"> 
        <div className='item'>
           
       
        <figure>
            <img className="img" src={item.img} alt={item.nombre}/>
        </figure>
            <h4 className="titulo">{item.nombre}</h4>
            <p className="precio">Precio: ${item.precio}</p>
           <div>
        
           <Link to={`/detail/${item.id}`} className='btn btn-light d-grid gap-4 col-12 mx-auto'>Ver Producto</Link>
           </div>
            
        </div>
    </div>
    )
}

export default ItemCard

