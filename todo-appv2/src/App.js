import React,{ Component } from 'react'
import todosData from './todosData'
import TodoItem from './components/TodoItem'
import "./style.css"



class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }


 
  handleChange(id){

    this.setState( prevState => {
      const updatedTodos = prevState.todos.map( todo => {
        if ( todo.id === id){
          todo.completed = !todo.completed
          console.log("uncheck", todo.completed)
        } 
          return todo
        
      })
      return{
          todos: updatedTodos
      }
    })
    
  }


  render(){
   
    const todoItems = todosData.map( item => <TodoItem key={item.id} item={item} handleChange={this.handleChange } checked={item.completed} />)


    return (
      <div className="todo-list">
        <h1 className=""> Todo's</h1>
     {todoItems}
        
      </div>
    );
  }

 
}

export default App;
