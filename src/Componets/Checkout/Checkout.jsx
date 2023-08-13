import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { datab } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'



const Validacion = Yup.object ().shape({

    nombre: Yup.string()
        .min(3, "El nombre es demasiado corto")
        .max(10, "Máximo 10 caracteres")
        .required("Este campo es obligatorio"),
    contacto: Yup.number()
        .min(7, "El número no es válido")
      
        .required("Este campo es obligatorio"),
    direccion: Yup.string()
        .min(6, "La direccion es demasiado corta")
        .max(20, "Máximo 20 caracteres")
        .required("Este campo es obligatorio"),
    email: Yup.string()
        .required("Este campo es obligatorio")
        .email("El email es inválido")


}) 

export const Checkout = () => {
   const {cart, totalCompra, vaciarCarrito} = useContext (CartContext)

   const [loading, setLoading] = useState(false)
   const [ordenId, setOrdenId] = useState(null)

    
   const handleSubmit = async (values) => {
        setLoading (true)

        const orden ={
            cliente: values,
            items: cart.map(item => ({id:item.id, nombre: item.nombre, cantidad: item.cantidad, precio: item.precio})),
            total: totalCompra(),
            fyh: new Date()
        }

  

        const batch = writeBatch(datab)
        const ordersRef = collection (datab, "orden")
        const productosRef = collection (datab, "productos")
        const qry = query(productosRef, where(documentId(), "in", cart.map(item => item.id) ))

        const resp = await getDocs(qry) 
        const sinStock = []

        resp.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                sinStock.push(item)
            }
        })
        if (sinStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)
            vaciarCarrito()
            setOrdenId(doc.id)

        } else {
            alert(" Este producto no esta disponible")
        }

        setLoading(false)
        

   }

   if (ordenId){
    return (
    <div className="div-padre">
      <div className="conte">
        <div className="card2">
        <h2 className="titulo2">Compra Exitosa</h2>
        </div>
        <div className="informacion">
        <p>Tu número de orden es: <strong >{ordenId}</strong></p>
        </div>
        <img className="img3" src="https://i.etsystatic.com/20504667/r/il/649831/3015212116/il_1140xN.3015212116_pyyi.jpg" alt="Gracias por tu compra" />
        
     </div>
        <div>
           <Link className="btn btn-danger btn-lg" to="/">Volver</Link>
        </div>
    </div>
    
            
            
            )
   }
   if (cart.length === 0 ) {
    return <Navigate to="/"/>
}

 

    return(

    
         <div className="container my-5">
            <h2>Terminar Compra</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    contacto: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={Validacion}
            >
                {() => (
                    <Form>
                        <Field placeholder="Nombre" className="form-control my-2" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Télefono" className="form-control my-2" type="text" name="contacto"/>
                        <ErrorMessage name="contacto" component="p"/>
                        <Field placeholder="Dirección" className="form-control my-2" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field placeholder="Correo" className="form-control my-2" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <button className="btn btn-danger" disabled={loading}>Enviar</button>
                    </Form>
                )}
            </Formik>


            
        </div> 
    )}