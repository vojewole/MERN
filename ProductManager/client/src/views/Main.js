import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios'

const Main = (props) => {
    const {removeFromDom} = props;
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res=> {
            setProduct(res.data);
            setLoaded(true);
        });
    }, [product])

    return (
        <div>
            <ProductForm/>
            <hr/>
            <h1>All Products:</h1>
           { loaded && <ProductList product={product} removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;

