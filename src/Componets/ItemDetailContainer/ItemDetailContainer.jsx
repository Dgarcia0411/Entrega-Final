import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"








export const  ItemDetailContainer = () => {
          const [item, setItem] = useState ({}) 

         const { itemId } = useParams()


          useEffect(() =>{
            pedirDatos()
            .then (resp =>{
                setItem (resp.find (prod => prod.id === Number(itemId)))
            })

            
          },[])  


    return(
        <div>
          <ItemDetail item={item}/>
        </div>
    )
}   


