import React from "react"


export const Header = () => {
    return(

    <header class="header">
        
        <div class="header_container">

          <div class="header_logo">
         <img src="./src/assets/Logo.png" alt="Logo Marca" />
         </div>

        <nav class="navbar">
            <li class="navbar_link"><a href="#"></a>Inicio</li>
            <li class="navbar_link"> <a href="#"></a>Nosotros</li>
            <li class="navbar_link"> <a href="#"></a>Productos</li>
            <li class="navbar_link"> <a href="#"></a>Contacto</li>
            <li class="carrito">🛒</li>
      
        </nav>
    </div>
    </header>
    )
}
