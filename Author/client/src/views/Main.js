import React, { useEffect, useState } from 'react'
import AuthorList from '../components/AuthorList';
import axios from 'axios'
import { Link } from '@reach/router'

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
            <h1>Favorite Author</h1>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;

