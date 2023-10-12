import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/counter/todolist/Todolist';
import Countries from './features/counter/countries/Countries';
import Products from './features/counter/products/Products';

function App() {
  return (
    <div className='mybox'>
      <h1>app</h1>
      <Countries></Countries>
      <Products></Products>
     <Todolist></Todolist>
     <Counter></Counter>
      
      
    </div>
  );
}

export default App;
