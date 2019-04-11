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
          <h2>{hotkeys[randomIndex].task}</h2>
        </header>
        <div onKeyDown={(e) => this.updateKeyDown(e)} onKeyUp={(e) => this.updateKeyDown(e)}>
          {isCorrect ? 
            <img src={hotkeys[randomIndex].afterImg} alt='VS Code screenshot'/>
            : <img src={hotkeys[randomIndex].beforeImg} alt='VS Code screenshot'/>
          }
        </div>
      </div>
    )
  }
}