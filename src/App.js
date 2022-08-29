import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <body>
    <NavBar />
    {<ItemListContainer greeting="Hola Mundo"/>}
    </body>
  );
}

export default App;