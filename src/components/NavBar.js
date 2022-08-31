import logo from './R.png';
import CartWidget from './CartWidget';

const NavBar=() => {
    return (
      <header>
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <a>Inicio</a>
            <a>Tienda</a>
            <a>Contacto</a>
            <a><CartWidget /></a>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavBar;