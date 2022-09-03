import logo from './R.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar=() => {
    return (
      <header>
        <div>
          <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
        </div>
        <nav>
          <ul>
            <Link to='/category/1'><a>Muñecos</a></Link>
            <Link to='/category/2'><a>Casas</a></Link>
            <Link to='/category/3'><a>Varitas</a></Link>
            <Link to='/category/4'><a>otros</a></Link>
            <a><CartWidget /></a>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavBar;