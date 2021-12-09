import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = (props) =>{
const {removeFromDom} = props;
const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    const buttonStyle = {
        backgroundColor: "green",
        width: "100px",
        borderRadius: "50px",
        fontSize: "20px",
      };

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <button style={buttonStyle} onClick={(e)=>{deleteProduct(product._id)}}><Link to="/product/">Delete</Link></button>
            </div>
        </div>
        
    )
}
export default Detail;