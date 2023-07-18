import React from "react"
import { Link } from "react-router-dom"


export const Header = () => {
    return(

    <header className="header">
        
        <div className="header_container">

          <div className="header_logo">
         <img src="./src/assets/Logo.png" alt="Logo Marca" />
         </div>

        <nav className="navbar">
            <ul className="menu">
                <li><Link  className="navbar_link"to="/">Inicio</Link></li>
                <li> <Link className="navbar_link" to="/">Productos</Link>
                <ul className="submenu">
                   <li><Link className="navbar_link" to="/productos/rostro">Rostro</Link> </li>
                   <li><Link className="navbar_link" to="/productos/labios">Labios</Link> </li>
                   <li><Link className="navbar_link" to="/productos/ojos">Ojos</Link> </li>
                </ul>
            </li>
                <li> <Link className="navbar_link" to="/contacto">Contacto</Link></li>
                <li className="carrito">🛒</li>
            </ul>
        </nav>
    </div>
    </header>
    )
}
