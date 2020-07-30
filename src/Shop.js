import React, { useState, useEffect } from 'react';
import style from 'styled-components';
import './App.css';
import { Link } from 'react-router-dom';

const List = style.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
`;
const ListItem = style.li`
    list-style: none;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    padding:25px;
    margin-bottom: 20px;
    width: 80%;    
    transition: opacity .3s;     
`;


function Shop() {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const items = await data.json();
        setItems(items);
    }   

    useEffect(() => {
        fetchItems();       
    },
    // eslint-disable-next-line
    []);



    


  return (
    
    <List> 
        {items.map((item, index) => (
           <ListItem key={item.id}>
               <Link to={`/shop/${item.id}`}>{item.title}</Link>
           </ListItem>
       ))}
    </List>
    
  );
}

export default Shop;
