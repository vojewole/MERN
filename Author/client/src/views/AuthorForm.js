import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/author", {
        name: name
      })
      .then(res => {console.log(res);
        if (res){
            navigate("/");
        }})
      .catch((err)=> {console.log("AuthorForm.js", err.response.data.errors); 
      setErrors(err.response.data.errors)});
  };

  const submitHandlerTwo = (e) => {
    e.preventDefault();
    navigate("/");
  }

  const layoutStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form >
        <h1>Favorite Authors</h1>
        <p>Add a new author:</p>
        {errors.name? <p style={{color:"red"}}>{errors.name.message}</p> : null}
        <div style={layoutStyle}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button style={{backgroundColor:"lightblue"}} type="submit"  onClick={submitHandlerTwo}>
          Cancel
        </button>
        <button style={{backgroundColor:"lightblue"}} type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default AuthorForm;
