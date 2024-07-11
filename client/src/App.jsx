import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from "./components/Products";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import Addproduct from './components/Addproduct';
import Student from './components/Student';
import Cart from './components/Cart';
import EditProduct from './components/EditProduct';
import Homeproducts from './components/Homeproducts';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/login' element={< Login />}></Route>
      <Route path='/dashboard' element={< Dashboard />}></Route>
      <Route path='/addproduct' element={< Addproduct />}></Route>
      <Route path='/student' element={< Student />}></Route>
      <Route path='/cart' element={< Cart />}></Route>
      <Route path='product/:id' element={< EditProduct />}></Route>
      <Route path='/home' element={< Homeproducts />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
