import { createContext, useEffect, useState } from "react";



export const CartContext =createContext() 

const inicio = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(inicio)
   
   
    const AgregarAlCarrito =(item) => {
     setCart([...cart,item])
    }

    const borrarDelCarrito = (id) => {
      setCart ( cart.filter((item)=> item.id !== id))
    }
   
   const isInCart = (id) => {
     return cart.some ((item) => item.id ===id)
   }
   const totalCompra = () => {
    return cart.reduce ((acumulado, item) => acumulado + item.precio * item.cantidad, 0)
  }
   
  const totalCantidad = () => {
    return cart.reduce ((acumulado, item) => acumulado + item.cantidad, 0)

  }

   const vaciarCarrito = () => {
    setCart([])
   }

    useEffect(() =>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])




    return (
        <CartContext.Provider value={{
            cart,
             AgregarAlCarrito,
             isInCart,
             totalCompra,
             vaciarCarrito,
             totalCantidad,
             borrarDelCarrito,
            }}>
            {children}
        </CartContext.Provider>
    )
}