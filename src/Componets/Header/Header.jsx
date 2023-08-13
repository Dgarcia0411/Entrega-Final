import React from "react"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"





export const Header = () => {
    const {totalCantidad} = useContext(CartContext)
    return(

    <header className="header">
         <a href="https://api.whatsapp.com/send/?phone=573045269682&text=Hola Pymark Makeup, me gustaria mas información" target="blank"><img className="wts" src="./public/logo whatsapp.png" alt="Whatsapp" /></a>
        
        <div className="header_container">

          <div className="header_logo">
             <img src="./src/assets/Logo.png" alt="Logo Marca" />
         </div>

        <nav className="navbar">
            <ul className="menu">
                <li><Link  className="navbar_link"to="/">Inicio</Link></li>
                <li> <Link className="navbar_link" to="/productos">Productos</Link>
                <ul className="submenu">
                   <li><Link className="navbar_link" to="/productos/rostro">Rostro</Link> </li>
                   <li><Link className="navbar_link" to="/productos/labios">Labios</Link> </li>
                   <li><Link className="navbar_link" to="/productos/ojos">Ojos</Link> </li>
                </ul>
            </li>
                <li> <Link className="navbar_link" to="/contacto">Contacto</Link></li>
                <li> <Link className="carrito" to="/cart">🛒</Link></li>
                <span>{totalCantidad()}</span>
            
            </ul>
        </nav>
        </div>
       
    </header>
    )
}
