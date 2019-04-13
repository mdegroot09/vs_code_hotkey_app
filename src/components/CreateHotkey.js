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
        <header>
          <h1 className='title'>VS Code Hotkey App</h1>
          <h3 className='title' id='subtext'>Where rookies become less rookie-like</h3>
        </header> 
        <div className='taskBox' id='createHotkeyBox'>
          <h2 className='task'>
            <span className='taskText'>Create a new hotkey</span>
          </h2>
        </div>
        <div className='imageDiv'>
          <div className='imageDivThird'> 
            <p>Task to perform:</p>
            <input 
              onChange={this.handleChange}
              name='task' 
              type='text' 
              placeholder=" e.g. 'Move active line up one'"
              />
            <p>Primary image URL:</p>
            <input 
              onChange={this.handleChange}
              name='beforeImg' 
              type='text' 
              placeholder=" primary image url"
              />
            <p>Secondary image URL:</p>
            <input 
              onChange={this.handleChange}
              name='afterImg' 
              type='text' 
              placeholder=" secondary image url"
              />
          </div>
          <div className='imageDivThird'>
            <p>Combo key #1 (if necessary):</p>
            <input 
              onChange={this.handleChange}
              name='comboCode1' 
              type='text' 
              placeholder=" e.g. 'control'"
              />
            <p>Combo key #2 (if necessary):</p>
            <input 
              onChange={this.handleChange}
              name='comboCode2' 
              type='text' 
              placeholder=" e.g. 'k'"
              />
            <button onClick={this.handleClick} className='btn btn-primary btn-lg active' id='createNew'>Create Hotkey</button>
          </div>
          <div className=' imageDivThird'>
            <p>Task to perform:</p>
            <input 
              onChange={this.handleChange}
              name='charCode1' 
              type='text' 
              placeholder=" e.g. 'alt'"
              />
            <p>Task to perform:</p>
            <input 
              onChange={this.handleChange}
              name='charCode2' 
              type='text' 
              placeholder=" e.g. 'shift'"
              />
            <p>Task to perform:</p>
            <input 
              onChange={this.handleChange}
              name='charCode3' 
              type='text' 
              placeholder=" e.g. 'rightarrow'"
            />
          </div>
        </div>
      </div>
    )
  }
}