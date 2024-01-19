import React from "react"

function Product({ productName, price, quantity, inStock = true, setInStock }) {

    return (
        <div>
            Product Name: {productName}
            <br />
            Price: ${price}
            <br />
            Quantity: {quantity}
            <br />
            {inStock ?
                <div>
                    <b>In Stock</b>
                    <br />
                    <button onClick={() => {
                        alert(`Product added to cart, with name ${productName} and price ${price}`)
                        setInStock(false)
                    }}>Add to Cart</button>
                </div>
                : <b>Out of Stock</b>}
            <br />
        </div>
    )
}

export default Product