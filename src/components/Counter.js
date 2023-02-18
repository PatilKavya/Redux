import React from 'react'
// import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
const dispatch=useDispatch()
const counter=useSelector(state=>state.counter)

  const toggleCounterHandler = () => {};

const incrementHandler=()=>{
  dispatch({type:'increment',amount:5});
}

const decrementHandler=()=>{
  dispatch({type:'decrement',amount:5});
}




  return (
    <main >
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
