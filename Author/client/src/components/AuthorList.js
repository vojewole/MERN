import React from "react"
import { Link } from '@reach/router';

const AuthorList = (props) => {

    const { removeFromDom, author} = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
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
            {props.author.map((author, index) => {
                return <div>
                            <p key={index}><Link to = {"/author/"+ author._id}>{author.name}</Link></p>
                            <p key={index}><Link to={"/author/" + author._id + "/edit"}> Edit</Link></p>
                        </div>     
            })}
            <button style={buttonStyle} onClick={(e)=>{deleteauthor(author._id)}}>Delete</button>
        </div>
    )
}

export default AuthorList;
