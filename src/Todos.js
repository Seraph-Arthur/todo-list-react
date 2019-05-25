import React, { Component } from 'react'
import AddItem from './AddItem'
import { TodosContainer, ListItem } from './Styles'
import uuid from 'uuid/v4'
import './Todos'
import DeleteIcon from '@material-ui/icons/Delete'

class Todos extends Component {
  state = {
    todos: []
  }

  handleDelete(id) {
    let todos = []

    this.state.todos.map(todo => {
      if (todo.id !== id) {
        todos.push(todo)
      }
    })

    this.setState({ todos })
  }

  handleClick(id) {
    let todos = []
    // eslint-disable-next-line
    this.state.todos.map(todo => {
      let newTodo = { ...todo }
      if (todo.id === id) {
        newTodo.line = !newTodo.line
      }
      todos.push(newTodo)
    })
    this.setState({ todos })
  }

  addItem = item => {
    this.setState(st => ({
      todos: [...st.todos, item]
    }))
  }

  render() {
    return (
      <TodosContainer>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <ListItem key={todo.id} line={todo.line}>
                <span
                  className="todo_item"
                  onClick={() => this.handleClick(todo.id)}>
                  {todo.content}
                </span>
                <span>
                  <DeleteIcon
                    className="pointer"
                    onClick={() => this.handleDelete(todo.id)}
                  />
                </span>
              </ListItem>
            )
          })}
        </ul>
        <AddItem className="add_item" addItem={this.addItem} />
      </TodosContainer>
    )
  }
}

export default Todos
