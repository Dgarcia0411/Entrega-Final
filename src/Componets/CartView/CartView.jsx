import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { CartEmpty } from "../CartEmpty/CartEmpty"







export const CartView = () => {
    const { cart, totalCompra,vaciarCarrito, borrarDelCarrito } =useContext (CartContext)
    
        if (cart.length === 0) {
        return (
          <CartEmpty/>
        )
    }



    return(
        <div className="container my-5">
           <h2 className="Sub-vista" >Tu compra es la siguiente: </h2>
           {
            cart.map((item) => (
                
                    <div key={item.id} className="container">
            <div className="row">
                <div className="col-md-6 order-md-1">
                        <img className="w-50 " src={item.img} alt={item.nombre}/>
                        <hr />
                    </div>
                    <div className="col-md-6 order-md-2 col text-left p-5">
                        <h2 className="titulo_vista text-center p-3" >{item.nombre}</h2>
                        <p  className="precio_vista" >Precio Und: ${item.precio}</p>
                        <p className="cant-vista">Cantidad: {item.cantidad}</p>
                        <p  className="precio_vista" >Precio Total: ${item.precio * item.cantidad}</p>
                        <p className="info_vista" >{item.descripcion}</p>
                        <div className="d-grid gap-4 col-12 mx-auto"></div>
                        <button onClick={() => borrarDelCarrito(item.id)} className="btn btn-danger btn-lg "><FaTrashAlt/></button>
                        
                </div>
                </div>
                </div> 

            ))
           }
           <div className="text-right">
            <h4 className="text-right text-uppercase text-bold "> Total Compra: ${totalCompra()}</h4>
            <button onClick={vaciarCarrito} className="btn btn-danger m-5">Vaciar Carrito</button>
            <Link className="btn btn-danger"  to="/checkout" >Terminar compra</Link>
           </div>
    
        </div>


    )
}