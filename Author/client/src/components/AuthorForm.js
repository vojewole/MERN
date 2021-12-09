import React, {useState} from 'react'
import axios from 'axios'

const AuthorForm  = () => {
    const [name, setName] = useState('')

    const submitHandler = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author',
        {
            name,
        }
        )
        .then(res=> console.log(res))
        .catch(err => console.log(err))

        setName("");

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
            <h1>Authors</h1>
            <div style={layoutStyle}>
                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <button style={buttonStyle}>Create</button>
        </form>
    )
}

export default AuthorForm;