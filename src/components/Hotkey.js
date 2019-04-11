import React, {Component} from 'react'

export default class Hotkey extends Component {

  updateKeyDown(keycode){
    this.props.updateKeyDown(keycode)
  }
  
  updateKeyUp(keycode){
    this.props.updateKeyDown(keycode)
  }

  render(){
    // console.log('props.randomIndex:', this.props.randomIndex)
    let {randomIndex, hotkeys, isCorrect} = this.props
    return (
      <div className="App">
        <header>
          <h1 className='title'>Learn VS Code</h1>
        </header>
        <h4 className='title pushHotkey'>Type the VS Code hotkey to:</h4>
        <h3 className='title'>{hotkeys[randomIndex].task}</h3>
        <div className='imgDiv' onKeyDown={(e) => this.updateKeyDown(e)} onKeyUp={(e) => this.updateKeyDown(e)}>
          {isCorrect ? 
            <img src={hotkeys[randomIndex].afterImg} alt='VS Code screenshot'/>
            : <img src={hotkeys[randomIndex].beforeImg} alt='VS Code screenshot'/>
          }
        </div>
      </div>
    )
  }
}