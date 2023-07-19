import './App.css'
import { Header } from "./Componets/Header/Header"
import { Footer } from "./Componets/Footer/Footer"
import{ItemListContainer} from "./Componets/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  {ItemDetailContainer} from './Componets/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Componets/Contacto/Contacto';

function App() {
  

  return (


    <BrowserRouter>
     
      <Header/>

      <Routes>
        <Route path="/"element={ <ItemListContainer/>}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>

        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={ <Contacto /> }/>
        {<Route path="*" element={ <h2>Esta pagina no existe</h2> }/>}
      </Routes>
     
      <Footer/>
  
    </BrowserRouter>
   
  )
}

export default App

