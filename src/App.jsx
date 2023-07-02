import { Header } from "./Componets/Header"
import{ItemListContainer} from "./Componets/ItemListContainer"
import './styles/style.scss'

function App() {
  

  return (
    <div>
     <Header/>
     <ItemListContainer saludo={"Bienvenidos al mundo de react"} />
    </div>
  )
}

export default App

