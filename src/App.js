/*import logo from './logo.svg';*/
import './App.css';
import Home from "./Screens/Home";
import Catalogo from "./Screens/Catalogo";
import Carrito from "./Screens/Carrito";
import Contacto from "./Screens/Contacto";
import Blog from "./Screens/Blog";
import Navbar from './Components/Navbar';

function App() {
  return(
  <div className="App">
    <Navbar />
    <Home />
    <Catalogo />
    <Carrito />
    <Contacto />
    <Blog />  
      </div>
  );
}

export default App;
















