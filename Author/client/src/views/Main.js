import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import axios from 'axios'

const Main = (props) => {
    const {removeFromDom} = props;
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res=> {
            setAuthor(res.data);
            setLoaded(true);
        });
    }, [author])

    return (
        <div>
            <AuthorForm/>
            <hr/>
            <h1>All Authors:</h1>
           { loaded && <AuthorList author={author} removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;

