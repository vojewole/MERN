import './App.css';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
import { Router } from '@reach/router';
import React, { useEffect, useState } from 'react'
function App() {
  const [author, setAuthor] = useState([]);
  const removeFromDom = authorId => {
    setAuthor(author.filter(author => author._id != authorId)); 
}
  return (
    <div className="App">
       <Router>                           
        <Main removeFromDom={removeFromDom} path="/author/"/>
        <Detail removeFromDom={removeFromDom} path="/author/:id" />
        <Update path="/author/:id/edit"/>
      </Router>       
    </div>
  );
}

export default App;
