import React from 'react'

const Shop = ({ id, name, price, addToCart }) => {

    return (
        <div>
            <h1>Hello from Shop !</h1>

            <div className="itemsCont">
                <div className="items">
                    <p>{ id }</p>
                    <h2>{ name }</h2>
                    <p>{ price }</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Shop