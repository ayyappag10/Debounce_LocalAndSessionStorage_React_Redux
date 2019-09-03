import React,{useEffect} from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Cart from "./Cart"
import store from "./Store"
import AddAndRemove from "./AddAndRemove"
import ErrorBoundarie from './ErrorBoundarie'

function App() {

  useEffect(
    ()=>{
      console.log("here")
      fetch('/express_backend')
      .then(
        (res)=>res.text(),
        (err)=>console.log("error", err)

      )
      .then(
        (data)=>console.log(data)
      )
    }
    ,[]
  )

  return (
    <>
    <div className="App">
      welcome to react
    </div>
    <div
    id="rect1">
    </div>
    <div
    id="rect2">
    </div>
    <Provider store = {store}>
    <Cart></Cart>
    <ErrorBoundarie>
    <AddAndRemove></AddAndRemove>
    </ErrorBoundarie>
    </Provider>
    </>
  );
}

export default App;
