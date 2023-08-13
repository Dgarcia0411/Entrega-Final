import { Link } from "react-router-dom"






export const Home = () => {


    return(
        
        <main className="contenedor">
            <section>
                <article>
                 <h1 className="titulo-home">Emprende con nosotros</h1>
                 <p className="texto_home">
                 Inicia tu propio negocio y genera ingreso con nosotros,te ofrecemos una gran variedad de productos en excelente calidad y 100% originales. Te brindamos toda nuestra asesoría para ayudarnos a crecer juntos, contáctanos dando clic <Link className="link-home" to="/contacto">aquí.</Link>
                 </p>
                 <p className="texto_home">
                 Pymark Makeup ofrece a nuestros clientes la oportunidad de encontrar en una plataforma digital, todas sus marcas de belleza favoritas. El compromiso con nuestros clientes, quienes están en la búsqueda constante de marcas y tendencias de belleza hace que este espacio cumpla con su estrategia inicial por la cual fue diseñada y es “hace tu vida más fácil”.
                 </p>
                </article>
            </section>

            <section className="galeria">
                <h2 className="sub-home">Galería</h2>
                <div className="seccion_galeria">
            
                    <div className="bordes"><Link to="/productos/rostro"><img src="./public/Rostro.jpg" alt="Rostro" /></Link></div>
                    <div className="bordes"><Link to="/productos/labios"><img src="./public/Labios.jpeg" alt="Labios" /> </Link></div>
                    <div className="bordes"><Link to="/productos/ojos"><img src="./public/Ojos.jpg" alt="Ojos" /></Link></div>
                    <div className="bordes"><Link to="/productos/rostro"><img src="./public/Corporal.jpg" alt="Corporal" /> </Link></div>
              
                </div>
            </section>

                  </main>
    )

}