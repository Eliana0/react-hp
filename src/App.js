import './App.css';
import NavBar from './components/NavBar';
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <body>
    <NavBar />
    {/* {<ItemListContainer greeting="Hola Mundo"/>} */}
    <ItemDetailContainer />
    
    </body>
  );
}

export default App;