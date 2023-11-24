import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import "./index.css";

function App() {
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);


  const itemEvent =(event) =>{
    setInputList(event.target.value);

  }

  const listofItems = () => {

    setItems((oldItems)=>{
      return [...oldItems,inputList];
      //inputlist mei jo bhi likhenge woh array mei store ho jaayega oldItems jo ki empty array ko refer kar raha hai 
      // agar array mei koi data hai toh usko olditems mei include kardo
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) =>{
        return index!=id;

      });
    });
      

    };
    
    

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1 className='red'>ToDo List</h1>
          <br/>
          <input  type="text" className='text' value ={inputList}
          placeholder='Add  Items' onChange={itemEvent}></input>
          <button  onClick={listofItems} className="text">+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemval,index) => {
             return <TodoList key={index} 
               id={index}
             text={itemval}
             onSelect={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
