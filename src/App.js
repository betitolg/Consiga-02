
import './App.css';
import ItemListContainer from './components/ItemListContainer'

import NavBar from './components/NavBar';
import Products from './components/Products';
function App() {




  return (

    <div className='container'>
      <NavBar />
      <br/>
      <ItemListContainer greetings='Daniel'/>
      <Products />
    </div>
  );
}

export default App;
