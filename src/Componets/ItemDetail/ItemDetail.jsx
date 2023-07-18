




export const  ItemDetail = ({item}) => {
    return(
        <div>
              <figure>
               <img src={item.img} alt={item.nombre}/>
           </figure>
               <h4 >{item.nombre}</h4>
               <p >{item.descripcion}</p>
               <p >Precio: ${item.precio}</p>
              <div>
              <button >Comprar</button>
              </div>
        </div>
       
          
          
    
)}
