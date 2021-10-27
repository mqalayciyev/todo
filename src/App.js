import React, { useRef, useReducer, useState } from 'react';

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

function App() {

  const [text, setText] = useState();
  const [id, setId] = useState(0);


  const [string, dispatch] = useReducer(reducer, [])

  // const ad = useRef();


  const add = () => {
    console.log(id, text)
    if (id > 0) {
      dispatch({ type: 'edit', payload: { id: id, name: text } })
    }
    else {
      dispatch({ type: 'add', payload: text })
    }

    setText('')
    setId(0)
  }

  const sil = (id) => {
    dispatch({ type: 'delete', payload: id })
  }

  const edit = (name, id) => {
    setText(name)
    setId(id)
  }





  const inputChange = (e) => {
    setText(e.target.value)
  }


  return (
    <div className="App">
      <input type="text" name="ad" value={text} onChange={inputChange} />

      <button onClick={() => add()}>Add</button>
      {
        string.map((value, key) => {
          return <p key={key}>{value.name} <button onClick={() => edit(value.name, value.id)}>Edit</button> <button onClick={() => sil(value.id)}>SIL</button></p>
        })
      }
    </div>
  );
}

export default App;
