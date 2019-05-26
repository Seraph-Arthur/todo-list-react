import './Todos'
import AddItem from './AddItem'
import EditItem from './EditItem'
import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import { TodosContainer, ListItem } from './Styles'
import DeleteIcon from '@material-ui/icons/Delete'

class Todos extends Component {
  state = {
    todos: []
  }

  handleDelete(id) {
    let todos = []
    // eslint-disable-next-line
    this.state.todos.map(todo => {
      if (todo.id !== id) {
        todos.push(todo)
      }
    })

    this.setState({ todos })
  }

  toggleInput = id => {
    let todos = this.state.todos.map(todo => {
      let newTodo = { ...todo }
      if (todo.id === id) {
        newTodo.isEditing = !newTodo.isEditing
        return newTodo
      }
      return todo
    })
    this.setState({ todos })
  }

  handleClick(id) {
    let todos = this.state.todos.map(todo => {
      let newTodo = { ...todo }
      if (todo.id === id) {
        newTodo.line = !newTodo.line
        return newTodo
      }
      return todo
    })
    this.setState({ todos })
  }

  editItem = (id, newContent) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, content: newContent, isEditing: false }
      }
      return todo
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
                {todo.isEditing ? (
                  <EditItem content={todo.content} id={todo.id} editItem={this.editItem}/>
                ) : (
                  <>
                    <span
                      className="todo_item"
                      onClick={() => this.handleClick(todo.id)}>
                      {todo.content}
                    </span>
                    <span>
                      <Icon
                        className="pointer"
                        onClick={() => this.toggleInput(todo.id)}>
                        edit
                      </Icon>
                      <DeleteIcon
                        className="pointer"
                        onClick={() => this.handleDelete(todo.id)}
                      />
                    </span>
                  </>
                )}
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
