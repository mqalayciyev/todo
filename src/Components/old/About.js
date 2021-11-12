import React, { Component } from 'react';

class About extends Component {
    componentDidMount = () => {
        console.log('shife yklendi/')
    }
    componentDidUpdate =() => {
        console.log('sehife updae olundu')
    }
    componentWillUnmount = () => {
        console.log('sehfe silindi')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}


export default About;