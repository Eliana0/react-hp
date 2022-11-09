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
        <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid"  id='toggler'>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul>
                      <Link to='/category/1'><a>Muñecos</a></Link>
                      <Link to='/category/2'><a>Casas</a></Link>
                      <Link to='/category/3'><a>Varitas</a></Link>
                      <Link to='/category/4'><a>otros</a></Link>
                      <Link to='/cart'><a><CartWidget /></a></Link>
                    </ul>
                   </div>
              </div>
          </nav>
      </header>
    );
  }
  
  export default NavBar;
{/*         <nav>
          <ul>
            <Link to='/category/1'><a>Muñecos</a></Link>
            <Link to='/category/2'><a>Casas</a></Link>
            <Link to='/category/3'><a>Varitas</a></Link>
            <Link to='/category/4'><a>otros</a></Link>
            <Link to='/cart'><a><CartWidget /></a></Link>
          </ul>
        </nav> */}