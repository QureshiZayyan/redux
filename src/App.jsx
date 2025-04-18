import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';
import { addText } from './store/addName';

function App() {

  const count = useSelector((state) => state.counter.value);
  const text = useSelector((state) => state.names.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(addText())}>update</button>
      <p>{text}</p>
    </>
  )
}

export default App
