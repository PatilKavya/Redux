import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialCounterState={counter:0,showCounter:true};

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increse(state,action){
            state.counter+=action.payload;
        },
        toggleCounter(state){
state.showCounter=!state.showCounter;
        }
    }
})

const initialAuthState={authntication:false};

const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.authntication=true;
        },
        logout(state){
            state.authntication=false;
        }
    }
})
const store=configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})

export const counterACtions=counterSlice.actions;
export const authActions=authSlice.actions;
export default store;


