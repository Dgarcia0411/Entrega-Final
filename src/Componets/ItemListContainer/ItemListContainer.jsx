import { useEffect, useState } from 'react'
import {pedirDatos} from "../../helpers/PedirDatos";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { datab } from '../../firebase/config';


export const ItemListContainer = () => {
        const [productos, setProductos] = useState([])
        const { categoryId } = useParams()



     useEffect(()=>{

            const productosRef = collection(datab, "productos" )
            const filtro = categoryId 
            ? query(productosRef, where('category', '==',categoryId ))
            : productosRef
            getDocs(filtro)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                         id: doc.id,
                        ...doc.data() 
                    }
                  
                })
                setProductos(docs);
            })

        
        },[categoryId])    


    return (
        <div className='contenedor'>
          <ItemList productos={productos}/>
        </div>
    )
}