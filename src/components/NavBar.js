import logo from './R.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const NavBar=() => {
  const test = useContext(CartContext);
    return (
      <header>
        <div>
          <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
        </div>
        <nav>
          <ul>
            <Link to='/idCategory/1'><a>Muñecos</a></Link>
            <Link to='/idCategory/2'><a>Casas</a></Link>
            <Link to='/idCategory/3'><a>Varitas</a></Link>
            <Link to='/idCategory/4'><a>otros</a></Link>
            <Link to='/cart'><a><CartWidget /></a></Link>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavBar;