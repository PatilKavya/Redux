import React from 'react'
// import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterACtions } from '../Store/redux';

const Counter = () => {
const dispatch=useDispatch()
const counter=useSelector(state=>state.counter.counter)
const toggle=useSelector(state=>state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterACtions.toggleCounter());
  };

const incrementHandler=()=>{
  dispatch(counterACtions.increment());
}

const decrementHandler=()=>{
  dispatch(counterACtions.decrement());
}

const increseHandler=()=>{
  dispatch(counterACtions.increse(5));
}



  return (
    <main >
      <h1>Redux Counter</h1>
      <div>{counter}</div>
     { toggle&&<div>
        <button onClick={incrementHandler}>Increment </button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandler}>increse by 5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
