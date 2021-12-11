import React from "react"
import {navigate} from '@reach/router';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const AuthorList = (props) => {

    const { removeFromDom, author} = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }


    const tableStyle = {
        padding: "10px",
        display: "flex",
        justifyContent:"space-around",
        alignItems:"center",
        border:"solid black 1px",
        width:"500px",
        marginLeft:"450px",
        textAlign:"center"
      };
   
    return (
        <div>
            
            {props.author.map((author, index) => {
                return <div style={tableStyle} key={index}>
                            <table className="table-primary">
                                <tr className="table-primary">
                                    <th className="table-primary">Author</th>
                                    <th className="table-primary">Actions Available</th>
                                </tr>
                                <tr className="table-primary">
                                    <td  className="table-primary">
                                        {author.name}
                                    </td>
                                    <td className="table-primary" >
                                        <button style={{margin:"10px"}} type="button" className="btn btn-danger" onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                                        <button  style={{margin:"10px"}} type="button" className="btn btn-primary"onClick={(e)=>{navigate("/author/" + author._id + "/edit")}}>Edit</button>
                                    </td>
                                </tr>
                            </table>
                        </div>     
            })}
            
        </div>
    )
}

export default AuthorList;
