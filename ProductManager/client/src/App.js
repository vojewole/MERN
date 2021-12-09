import './App.css';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
import React, {useState} from 'react';
import { Router } from '@reach/router';
function App() {

  const [product, setProduct] = useState([]);
  const removeFromDom = productId => {
    setProduct(product.filter(product => product._id != productId)); 
}
  return (
    <div className="App">
       <Router>                           
        <Main removeFromDom={removeFromDom} path="/product/"/>
        <Detail removeFromDom={removeFromDom} path="/product/:id" />
        <Update path="/product/:id/edit"/>
      </Router>       
    </div>
  );
}

export default App;
