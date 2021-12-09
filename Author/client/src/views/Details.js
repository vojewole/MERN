import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = (props) =>{
const {removeFromDom} = props;
const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
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
            <p>Title: {author.name}</p>
            <div>
                <button style={buttonStyle} onClick={(e)=>{deleteAuthor(author._id)}}><Link to="/author/">Delete</Link></button>
            </div>
        </div>
        
    )
}
export default Detail;