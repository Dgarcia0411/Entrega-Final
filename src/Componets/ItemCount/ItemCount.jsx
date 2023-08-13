import { useState } from "react"




export const  ItemCount = ({max, cantidad, setCantidad, agregar}) => {

   /*  const [cantidad, setcantidad] = useState(1) */

    const handleRestar = () => {
       cantidad > 1 && setCantidad(cantidad - 1 )
    }


    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1 )
    }


    return(
      <div>
         <div className="col text-center">
            <button onClick={handleRestar} className="btn btn-light regular-button" disabled ={cantidad ===1}> - </button>
            <span className="mx-3"> {cantidad} </span>
            <button onClick={handleSumar} className="btn btn-light regular-button "> + </button>
        </div>
        <div>
        <button onClick={agregar} className="boton m-4" type="button">Agregar al carrito</button>
        </div>
      </div>
       
      
    
    )
}    
