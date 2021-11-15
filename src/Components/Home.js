import React from 'react';
import { data } from '../data';
import Card from './Card';


function Home(props) {
    return (
        <>
            <div className="container">
                {/* <div className="row justify-content-center">
                    {
                        data.map(item => {
                            return <Card item={item} />
                        })
                    }
                </div> */}

                <div class="owl-carousel">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" />
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" />
                <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" />
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" />
                </div>
            </div>

        </>
    );
}

export default Home;