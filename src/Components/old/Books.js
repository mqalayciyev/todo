import React, { Component } from 'react';
import { BookContext } from '../Context/BookContext';
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


class Books extends Component {
    static contextType = BookContext;
    render() {
        console.log(this.props)
        return (
            <>
            <BookContext.Consumer>
                {
                    (contextBook) => {
                        const { books } = contextBook;
                        return (
                            <div className="row">
                            {
                                books.map((item) => {
                                    return (
                                        <div class="card" style={{ width: '18rem'}}>
                                            <img class="card-img-top" src={item.imageURL} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">{item.topic}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        )
                        
                    } 
                }
            </BookContext.Consumer>
                
            </>
        );
    }
}

export default Books;