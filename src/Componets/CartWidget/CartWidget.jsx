import { useContext } from "react"
import { CartContext} from "../../Context/CartContext"
import { Link } from 'react-router-dom'




export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
       <div>
         <li> <Link to="/cart">🛒</Link></li>
                <span>{totalCantidad()}</span>
            
       </div>
    )
}