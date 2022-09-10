import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart"
import CartContextProvider from './components/CartContext';


function App() {
  return (
    <body>
      <CartContextProvider>
      <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
      </BrowserRouter>
      </CartContextProvider>
    
    </body>
  );
}


export default App;