import React, {Component} from 'react'
import Navbar from './Navbar'

export default class EditHotkey extends Component {
  constructor(props){
    super(props)

    this.state = {
      beforeImg: props.hotkeys[props.index].beforeImg,
      afterImg: props.hotkeys[props.index].afterImg,
      task: props.hotkeys[props.index].task,
      charCode1: props.hotkeys[props.index].charCode1,
      charCode2: props.hotkeys[props.index].charCode2,
      charCode3: props.hotkeys[props.index].charCode3,
      comboCode1: props.hotkeys[props.index].comboCode1,
      comboCode2: props.hotkeys[props.index].comboCode2,
      id: props.hotkeys[props.index].id
    }
  }

  handleChange = e => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newHotkey = this.state
    this.props.updateHotkey(newHotkey)
  }

  render(){
    let {hotkeys, index} = this.props
    return (
      <div className='App'>
        <header>
          <h1 className='title'>VS Code Hotkey App</h1>
          <h3 className='title' id='subtext'>Where rookies become less rookie-like</h3>
        </header> 
        <div className='taskBox' id='createHotkeyBox'>
          <h2 className='task'>
            <span className='taskText'>Edit the existing hotkey. *Use different keys for each*</span>
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
              value={this.state.task}
            />
            <p>Primary image URL:</p>
            <input 
              onChange={this.handleChange}
              name='beforeImg' 
              type='text' 
              placeholder=" primary image url"
              value={this.state.beforeImg}
            />
            <p>Secondary image URL:</p>
            <input 
              onChange={this.handleChange}
              name='afterImg' 
              type='text' 
              placeholder=" secondary image url"
              value={this.state.afterImg}
            />
          </div>
          <div className='imageDivThird'>
            <p>Combo key #1 (if necessary):</p>
            <input 
              onChange={this.handleChange}
              name='comboCode1' 
              type='text' 
              placeholder=" e.g. 'control'"
              value={this.state.comboCode1}
            />
            <p>Combo key #2 (if necessary):</p>
            <input 
              onChange={this.handleChange}
              name='comboCode2' 
              type='text' 
              placeholder=" e.g. 'k'"
              value={this.state.comboCode2}
            />
            <button onClick={this.handleClick} className='btn btn-primary btn-lg active' id='createNew'>Update Hotkey</button>
          </div>
          <div className=' imageDivThird'>
            <p>Character key #1:</p>
            <input 
              onChange={this.handleChange}
              name='charCode1' 
              type='text' 
              placeholder=" e.g. 'alt'"
              value={this.state.charCode1}
            />
            <p>Character key #2:</p>
            <input 
              onChange={this.handleChange}
              name='charCode2' 
              type='text' 
              placeholder=" e.g. 'shift'"
              value={this.state.charCode2}              
            />
            <p>Character key #3:</p>
            <input 
              onChange={this.handleChange}
              name='charCode3' 
              type='text' 
              placeholder=" e.g. 'rightarrow'"
              value={this.state.charCode3}
            />
          </div>
        </div>
      </div>
    )
  }
}