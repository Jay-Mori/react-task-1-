import React from "react";
import './card.jsx';
import './task1.css'


const Card = () => {

    return (
        <>
            <div className="container">
                <div className="Plant-Card">
                    <p>back to all plants</p>
                </div>
                <div className="Main-Card">
                    <div className="img-card">
                        <img height={265} src="https://cdn.pixabay.com/photo/2019/06/17/08/24/pastel-4279379_640.jpg" alt="" />
                    </div>

                    <div>
                        <h1>  CLASSIC PEACE LILY</h1>
                        <h4>POPULAR HOUSE PLANT</h4>
                        <h1>$18</h1>
                        <p>Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                            Beatae sint reprehenderit corporis qui,
                            eum quaerat ratione alias. Deleniti, id cumque vitae
                            esse fugiat saepe velit? Dicta officiis aliquam ad in!</p>
                        <div>
                            <button>ADD TO CART</button>
                            <button>WISHLIST</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card