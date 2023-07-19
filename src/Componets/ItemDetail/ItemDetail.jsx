




export const  ItemDetail = ({item}) => {
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
                            <button className="boton" type="button">Agregar al carrito</button>
                            <button className="boton" type="button">Comprar Ahora</button>

                        </div>
                    </div>
                </div>
        </div>
       
          
          
    
)}
