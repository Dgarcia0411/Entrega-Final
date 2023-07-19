export const Contacto = () => {
    return(

   <main>
    <h1>Contactános</h1>

    <section>
        <div className="contacto">
        <form class="formulario" action="#" method="POST">
                    <div class="contenedor-campos">
                        <div class="campo">
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Nombre" required/>
                        </div>
                        <div class="campo">
                            <label>Teléfono</label>
                            <input type="tel" name="telefono" placeholder="Teléfono"/>
                        </div>
                        <div class="campo w-100">
                            <label>Correo</label>
                            <input type="mail" name="correo" placeholder="Mail" required/>
                        </div>
                        <div class="campo w-100">
                            <label>Mensaje:</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div class="enviar">
                        <input class="boton" type="submit" value="Enviar"/>
                    </div>

                </form>
        </div>
    </section>
   </main>
    )
}
