import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/counter/todolist/Todolist';

function App() {
  return (
    <div className='mybox'>
      <Todolist></Todolist>
      <h1>app</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
