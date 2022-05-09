import './App.css';
import StartImage from './shopping.jpg';
import EndImage from './man.jpg';
import { GroceryList } from './GroceryList';



function App() {
  return (
    <div className='app'>
    <div className="container">
      <img src={ StartImage } alt='shopping' width='200px' />
    </div>
    <div className="container">
      <h1>Grocery LIST</h1>
    </div>
    <GroceryList/>
    <div className="container">
      <img src={ EndImage } alt='man' width='200px' />
    </div>
    </div>



  );
}

export default App;
