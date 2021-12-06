import React, {useState} from 'react'
import axios from 'axios'

const ProductForm  = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:3000/api/product',
        {
            title,
            price,
            description
        }
        )
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }

    const buttonStyle = {
        backgroundColor: "grey",
        width: "100px",
        borderRadius: "50px",
        fontSize: "20px",
      };

    return (
        <form onSubmit={submitHandler()}>
            <h1>Product Manager</h1>
            <div>
                <label>Title</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Price</label>
                <input type='text' onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <button style={buttonStyle}>Create</button>
        </form>
    )
}

export default ProductForm;