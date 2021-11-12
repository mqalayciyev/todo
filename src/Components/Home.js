import React from 'react';
import { data } from '../data';
import Card from './Card';


function Home(props) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        data.map(item => {
                            return <Card item={item} />
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Home;