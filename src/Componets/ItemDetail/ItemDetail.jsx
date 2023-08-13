import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"




export const  ItemDetail = ({item}) => {
    const {AgregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] =useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        AgregarAlCarrito(newItem)
    }

    return(
        
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 order-md-1">
                        <img className="img_detail" src={item.img} alt={item.nombre}/>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <h2 className="titulo_detail" >{item.nombre}</h2>
                        <p  className="precio_detail" >Precio: ${item.precio}</p>
                        <p className="lead info_producto" >{item.descripcion}</p>
                        <div className="d-grid gap-4 col-12 mx-auto">

                            {
                                isInCart(item.id)
                                ? <Link className="btn btn-light d-grid gap-4 col-12 mx-auto boton" to ="/cart">Terminar mi compra</Link>
                                :  <ItemCount 
                                max={item.stock} 
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                agregar= {handleAgregar}
                            />
                            }

                        </div>
                    </div>
                </div>
        </div>
       
          
          
    
)}
