import './App.css';
import Main from './views/Main';
import Update from './views/Update';
import AuthorForm from './views/AuthorForm';
import { Router } from '@reach/router';
import React, { useState } from 'react'
function App() {
  const [author, setAuthor] = useState([]);
  const removeFromDom = authorId => {
    setAuthor(author.filter(author => author._id !== authorId)); 
}
  return (
    <div className="App">
       <Router>
        <AuthorForm path="/new"/>                        
        <Main removeFromDom={removeFromDom} path="/"/>
        <Update path="/author/:id/edit"/>
      </Router>       
    </div>
  );
}

export default App;
