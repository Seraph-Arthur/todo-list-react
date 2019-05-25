import React, { Component } from 'react'
import uuid from 'uuid/v4'
import TextField from '@material-ui/core/TextField'

class AddItem extends Component {
  state = { content: '', id: '' }
  handleSubmit = event => {
    this.setState({ id: uuid() })
    if (event.key === 'Enter') {
      this.props.addItem(this.state)
      this.setState({ content: null, id: null })
      event.target.value = null
    }
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    return (
      <>
        <TextField
          id="content"
          name="content"
          label="Add todo"
          variant="outlined"
          placeholder="Add todo"
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
          style={{ margin: '10px' }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </>
    )
  }
}

export default AddItem
