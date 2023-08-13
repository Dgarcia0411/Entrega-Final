import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { datab } from '../../firebase/config';




export const  ItemDetailContainer = () => {
          const [item, setItem] = useState ({}) 

         const { itemId } = useParams()


          useEffect(() =>{
            const itemRef = doc (datab, "productos", itemId)
            getDoc (itemRef)
            .then ((doc) => {
               setItem({
                id: doc.id,
                ...doc.data() 
              })
            })
            
          },[])  


    return(
        <div>
          <ItemDetail item={item}/>
        </div>
    )
}   


