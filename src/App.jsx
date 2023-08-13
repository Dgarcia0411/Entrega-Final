import './App.css'
import { Header } from "./Componets/Header/Header"
import { Footer } from "./Componets/Footer/Footer"
import{ItemListContainer} from "./Componets/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  {ItemDetailContainer} from './Componets/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Componets/Contacto/Contacto';
import { CartProvider } from './Context/CartContext';
import { CartView } from './Componets/CartView/CartView';
import {Checkout} from './Componets/Checkout/Checkout';
import { Home } from './Componets/Home/Home';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/"element={ <Home/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="/cart" element={ <CartView /> }/>
          <Route path="/checkout" element={ <Checkout /> }/>
          {<Route path="*" element={ <h2>Esta pagina no existe</h2> }/>}
        </Routes>
    
         <Footer/>
      </BrowserRouter>

    </CartProvider>
   
      
  

    
   
  )
}

export default App

