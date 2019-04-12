import React, {Component} from 'react'
import Navbar from './Navbar'

export default class CreateHotkey extends Component {
  constructor(){
    super()

    this.state = {
      beforeImg: '',
      afterImg: '',
      task: '',
      charCode1: '',
      charCode2: '',
      charCode3: '',
      comboCode1: '',
      comboCode2: '',
    }
  }

  handleChange = e => {
    console.log('event.target.value:', e.target.value)
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newHotkey = this.state
    this.props.createHotkey(newHotkey)
  }

  render(){
    return (
      <div className='App'>
        <input 
          onChange={this.handleChange}
          name='beforeImg' 
          type='text' 
          placeholder="before-image url"
        />
        <input 
          onChange={this.handleChange}
          name='afterImg' 
          type='text' 
          placeholder="after-image url"
        />
        <input 
          onChange={this.handleChange}
          name='task' 
          type='text' 
          placeholder="task to perform"
        />
        <input 
          onChange={this.handleChange}
          name='charCode1' 
          type='text' 
          placeholder="key #1"
        />
        <input 
          onChange={this.handleChange}
          name='charCode2' 
          type='text' 
          placeholder="key #2"
        />
        <input 
          onChange={this.handleChange}
          name='charCode3' 
          type='text' 
          placeholder="key #3"
        />
        <input 
          onChange={this.handleChange}
          name='comboCode1' 
          type='text' 
          placeholder="combo key #1"
        />
        <input 
          onChange={this.handleChange}
          name='comboCode2' 
          type='text' 
          placeholder="combo key #2"
        />
        <button onClick={this.handleClick}>create hotkey</button>
      </div>
    )
  }
}