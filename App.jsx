import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Todoitem from './Todoitem';
import Clock from 'react-live-clock';


function App(){
    
    const [entry,setEntry]=useState("");
    const [items,setItem]=useState([]);

    function handleChange(event){
        var value=event.target.value;
        setEntry(value);
    }

    function addItem(){
        if(entry!=""){
            setItem((prevItems) => {
                return [...prevItems,entry];
            })
    
            setEntry("");
        }
        
    }

    function deleteItem(id){
        setItem((prevItems) => {
            return prevItems.filter((item,index) => {
                return index!==id;

            });
        });
    }

    const date=new Date();
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    
    return(
        <div className="container">
            <div className='heading'>
    
            <h3>  
            😎 {weekday[day]+" "+date.getDate()+"/"+month+"/"+year}
                
            </h3>
            </div>
            
            <div className='form'>
                <input onChange={handleChange} type="text" value={entry} placeholder="Enter your task"></input>
                <button onClick={addItem}><span>+</span></button>
            
            <ul>
                {items.map((todoitem,index) => (
                        <Todoitem
                        key={index}
                        id={index}
                        onChecked={deleteItem}
                        text={todoitem} />
                        
                ))}
            </ul>
            </div>
            
        </div>
    );



}



export default App;