import React from "react"
import { Link } from '@reach/router';
import axios from "axios";

const ProductList = (props) => {

    const { removeFromDom, product} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    const buttonStyle = {
        backgroundColor: "blue",
        width: "100px",
        borderRadius: "50px",
        fontSize: "20px",
      };
   
    return (
        <div>
            {props.product.map((product, index) => {
                return <div key={index}>
                            <div>
                                <Link to = {"/product/"+ product._id}>{product.title}</Link>
                            </div>
                            <div>
                                <Link to={"/product/" + product._id + "/edit"}> Edit</Link>
                            </div>
                            <button style={buttonStyle} onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                        </div>     
            })}
            
        </div>
    )
}

export default ProductList;
