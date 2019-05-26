import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content
    }
  }
  handleUpdate = event => {
    this.props.editItem(this.props.id, this.state.content)
  }
  handleSubmit = event => {
    if (event.key === 'Enter') {
      this.props.editItem(this.props.id, this.state.content)
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
          label="Edit todo"
          variant="outlined"
          value={this.state.content}
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
