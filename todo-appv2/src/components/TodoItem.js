import React from 'react'

const TodoItem = (props) =>{
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: 'line-through',
        fontStyle: 'italic'
    }
   
    return (
        <div className="todo-item"style={props.item.completed?completedStyle:null}>

        <input type="checkbox" onChange={() => props.handleChange(props.item.id)}/>
        <p>{props.item.content}</p><hr/>

        </div>
            


  


    )



}
export default TodoItem