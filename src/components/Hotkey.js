import React, {Component} from 'react'
import Buttons from './Buttons'
import Navbar from './Navbar'

export default class Hotkey extends Component {

  updateKeyDown(keycode){
    this.props.updateKeyDown(keycode)
  }
  
  updateKeyUp(keycode){
    this.props.updateKeyDown(keycode)
  }

  render(){
    let {index, hotkeys, isCorrect} = this.props
    return (
      <div className="App">
        <Navbar/>
        <header>
          <h1 className='title'>VS Code Hotkey App</h1>
          <h3 className='title' id='subtext'>Where rookies become less rookie-like</h3>
        </header>
        <div className='sideBySide'>
          <div className='taskBox'>
            <h2 className='task'>
              <span className='taskText'>{hotkeys[index].task}</span>
            </h2>
            <button className='btn btn-primary btn-lg active' id='showHotkey'>Show Hotkey</button>
          </div>
        </div>
        <div className='imgDiv' onKeyDown={(e) => this.updateKeyDown(e)} onKeyUp={(e) => this.updateKeyDown(e)}>
          <img src={hotkeys[index].beforeImg} alt='VS Code screenshot'/>
          <Buttons
            isCorrect={isCorrect}
          />
        </div>
      </div>
    )
  }
}