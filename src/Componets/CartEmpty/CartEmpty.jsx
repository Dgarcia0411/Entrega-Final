import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"



export const CartEmpty = () =>{

    const { cart} =useContext (CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5  col text-center">
                
                <img className="bg-light img2" src="https://www.distritomoda.com.ar/sites/all/themes/omega_btob/images/cartEmpty-20-10-2020.png" alt="Carrito vacio" />
                <Link to="/productos" className ="btn btn-light m-5 btn-lg">Ir a comprar</Link>
            </div>
    
        )
    }
}