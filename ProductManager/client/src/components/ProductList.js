import React from "react"

const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>{product.title}</p>
            })}
        </div>
    )
}

export default ProductList;