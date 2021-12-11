import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Update = (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/author/" + id, {
        name,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("AuthorForm.js", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <h1>Favorite Author</h1>
      <Link to="/">Home</Link>
      <p>Edit this author</p>
      {errors.name ? (
        <p style={{ color: "red" }}>{errors.name.message}</p>
      ) : null}
      <form>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <button
          style={{ backgroundColor: "lightblue" }}
          type="submit"
          onClick={cancel}
        >
          Cancel
        </button>
        <button
          style={{ backgroundColor: "lightblue" }}
          type="submit"
          onClick={updateAuthor}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
