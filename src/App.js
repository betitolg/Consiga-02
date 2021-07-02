
import './App.css';
import Text from './components/Text'
import ItemListContainer from '../src/components/ItemListContainer'
import NavBar from './components/NavBar';
function App() {
  return (

    <div className='container'>
      <NavBar />
      <Text />
      <ItemListContainer />
    </div>
  );
}

export default App;
