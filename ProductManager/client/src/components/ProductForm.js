import React, {useState} from 'react'
import axios from 'axios'

const ProductForm  = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',
        {
            title,
            price,
            description
        }
        )
        .then(res=> console.log(res))
        .catch(err => console.log(err))

        setTitle("");
        setPrice("");
        setDescription("");
    }

    const layoutStyle = {
        display: "flex",
        justifyContent:"center",
    }

    const buttonStyle = {
        backgroundColor: "grey",
        width: "100px",
        borderRadius: "50px",
        fontSize: "20px",
      };

    return (
        <form onSubmit={submitHandler}>
            <h1>Product Manager</h1>
            <div style={layoutStyle}>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div style={layoutStyle}>
                <label>Price: </label>
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div style={layoutStyle}>
                <label>Description: </label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <button style={buttonStyle}>Create</button>
        </form>
    )
}

export default ProductForm;