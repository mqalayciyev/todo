import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount = () => {
        if (localStorage.hasOwnProperty('cart')) {
            this.setState({ cart: JSON.parse(localStorage.getItem('cart')) })
        }
    }

    removeCart = (id) => {
        // let newCart = this.state.cart.find(item => item.id === id)
        // console.log(newCart)
        // localStorage.setItem('cart', JSON.stringify(newCart));
        // this.setState({cart: newCart})
    }

    render() {

        return (
            <>
                <div className="row">
                    {
                        this.state.cart.length > 0 ? this.state.cart.map((item) => {
                            return (
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={item.image} alt="card" />
                                    <div className="card-body" >
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.price} AZN</p>
                                        <button type="button" className="btn btn-primary" onClick={() => this.removeCart(item.id)}>Remove Cart</button>

                                    </div>
                                    <div className="position-relative">
                                        <p className="content">{item.content}</p>
                                    </div>
                                </div>
                            )
                        }) : <h2>Sebetde Mehsul yoxdur</h2>
                    }
                </div>

            </>
        );
    }
}

export default Cart;