import React, { useState, useEffect } from 'react';
import './App.css';



function ItemDetail({ match}) {

    const [item, setItem] = useState({});   
    
    useEffect(() => {       
        fetchItem();
    }, 
    // eslint-disable-next-line
    []
    )   
    

    const fetchItem = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`);
        const item = await data.json();
        setItem(item);
    }

  return (
    
    <div> 
        <h1>{item.title}</h1>
    </div>
    
  );
}

export default ItemDetail;
