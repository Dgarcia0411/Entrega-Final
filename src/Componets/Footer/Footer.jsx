export const  Footer = () => {
    return(

     <footer>
        <div className="footer__1">
           <div className="footer__box">
               <figure>
                   <img src="./src/assets/Logo.png" alt="Logo Marca" />
               </figure>
           </div>
           <div className="footer__box">
           <h2>Sobre Nosotros</h2>
               <p>Somos una tienda en línea colombiana de cosméticos que ofrece las mejores marcas en productos para el cabello, uñas, maquillaje, tintes y mucho más.</p>
           <p>Nos encargamos de distribuir gran variedad de maquillaje de alta calidad, 100% originales.</p>
          </div>
          <div className="footer__box">
           <h2>Siguenos</h2>
         
          <div>
                <a href="https://api.whatsapp.com/send/?phone=573045269682&text=Hola Pymark Makeup, me gustaria mas información" target="blank"><img className="footer__img-redes d-grid gap-4 col-1 mx-auto" src="./public/logo whatsapp.png" alt="Whatsapp" /></a>
                <a href="https://www.facebook.com/Pymarkmakeup?mibextid=ZbWKwL" target="blank"><img className="footer__img-redes d-grid gap-4 col-1 mx-auto" src="./public/logo facebook.png" alt="Facebook" /></a>
                <a href="https://instagram.com/pymarkmakeup?igshid=YmMyMTA2M2Y=" target="blank"><img className="footer__img-redes d-grid gap-4 col-1 mx-auto" src="./public/logo instagram.png" alt="Instagram" /></a>
          </div>
               </div>




            </div>
            
          </footer> 
        
    )
}    
