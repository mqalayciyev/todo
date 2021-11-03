import React, { Component } from 'react';
import { BookContext } from '../Context/BookContext';



class Books extends Component {
    static contextType = BookContext;
    render() {
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