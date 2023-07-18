import { useEffect, useState } from 'react'
import {pedirDatos} from "../../helpers/PedirDatos";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {
        const [productos, setProductos] = useState([])
      
        const { categoryId } = useParams()
        


     useEffect(()=>{

            pedirDatos()
            .then((resp) =>{
                if (categoryId) {
                    setProductos (resp.filter(prod => prod.category === categoryId))
                } else{
                    setProductos(resp)
                }
                
            })
           /*  .catch((error) =>{
                console.log(error);
            })
     */
        },[categoryId])   


    return (
        <div className='contenedor'>
          <ItemList productos={productos}/>
        </div>
    )
}