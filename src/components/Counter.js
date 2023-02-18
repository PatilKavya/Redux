import React from 'react'
// import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
const dispatch=useDispatch()
const counter=useSelector(state=>state.counter)

  const toggleCounterHandler = () => {};

const incrementHandler=()=>{
  dispatch({type:'increment',amount:2});
}

const decrementHandler=()=>{
  dispatch({type:'decrement',amount:2});
}




  return (
    <main >
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
