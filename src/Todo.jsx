import React, { useState } from 'react'
import '@fontsource/roboto/300.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './index.css'
import List from './components/list';

const Todo = () => {
  const [item,setItem] = useState("buy an apple")
  const [newItem,setNewItem] = useState([])

  const inputEvent = (event)=>{
    setItem(event.target.value)
  }

  const addItem = ()=>{
    setNewItem((previous)=>{
      return[...previous,item]
    })
    setItem("")
  }

  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>Todo List</h1>
                <br/>
                <input 
                type="text" 
                placeholder='Add an Item '
                onChange={inputEvent}
                value={item}
                />
                <Button className='newBtn' onClick={addItem}><AddIcon/></Button>
                <br/>

                <ol>
                  {
                    newItem.map((val,index)=>{
                      return(
                        <List key={index} text={val}/>
                      )
                    })
                  }
                </ol>
                <br/>

            </div>
        </div>
        
    </>

  )
}

export default Todo