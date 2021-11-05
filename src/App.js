import React, { useRef, useReducer, useState } from 'react';
import BookContextProvider from './Context/BookContext';
import Header from './Components/Header';
import Todos from './Components/Todo';

import Books from './Components/Books';

function reducer(state, dispatch) {
  if (dispatch.type === 'add') {
    let object = { name: dispatch.payload, id: Math.random() }
    let newArray = [...state, object]
    return newArray;
  }
  else if (dispatch.type === 'delete') {
    let arr = state.filter((element) => element.id !== dispatch.payload)
    return arr;
  }
  else if (dispatch.type === 'edit') {
    for (var i = 0; i < state.length; i++) {
      if (dispatch.payload.id === state[i].id) {
        state[i].name = dispatch.payload.name
      }
    }
    return state;
  }
  else {
    return [];
  }
}

function App(props) {
  return (
    <BookContextProvider>
      <div className="App">
        {/* <Header /> */}
        {/* <Books /> */}
        <Todos />
      </div>
    </BookContextProvider>
    
  );
}

export default App;


