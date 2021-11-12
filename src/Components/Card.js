import React, { Component } from 'react';

class Card extends Component {

    addCart = (item) => {
        let cart = []
        if(localStorage.hasOwnProperty('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        // console.log(cart.includes(item))
        let count = cart.find(product => product.id === item.id)

        if(!count){
            cart.push(item)
        }
        
        

        
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    render() {
        let item = this.props.item
        return (
            <>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top"  src={item.image} alt="card" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price} AZN</p>
                        <button type="button" className="btn btn-primary" onClick={() => this.addCart(item)}>Add Cart</button>
                        
                    </div>
                    <div className="position-relative">
                        <p className="content">{item.content}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;