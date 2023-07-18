import './App.css'
import { Header } from "./Componets/Header/Header"
import{ItemListContainer} from "./Componets/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import { Contacto } from './Componets/Contacto/Contacto';
import  {ItemDetailContainer} from './Componets/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (


    <BrowserRouter>
     
      <Header/>

      <Routes>
        <Route path="/"element={ <ItemListContainer/>}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        
        {<Route path="*" element={ <h2>Esta pagina no existe</h2> }/>}
      </Routes>
     
     
  
    </BrowserRouter>
   
  )
}

export default App

