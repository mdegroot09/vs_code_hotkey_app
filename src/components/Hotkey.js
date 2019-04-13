import React, {Component} from 'react'
import Buttons from './Buttons'

export default class Hotkey extends Component {

  updateKeyDown(keycode){
    this.props.updateKeyDown(keycode)
  }
  
  updateKeyUp(keycode){
    this.props.updateKeyDown(keycode)
  }

  render(){
    let {index, hotkeys, isCorrect, incrementIndex, decrementIndex, deleteHotkey, updateEditStatus, edit} = this.props
    return (
      <div className="App">
        <header>
          {/* <div class="alert alert-success" role="alert">Good Job</div> */}
          <h1 className='title'>VS Code Hotkey App</h1>
          <h3 className='title' id='subtext'>Where rookies become less rookie-like</h3>
        </header>
        <div className='sideBySide'>
          <div className='taskBox'>
            <h2 className='task'>
              <span className='taskText'>Task: {`${hotkeys[index].task}`}</span>
            </h2>
          </div>
          <span className='btn btn-primary btn-lg active' id='baseButton'>
            <span id='showHotkey'>Show Hotkey</span>
            {}
            <span id='hiddenHotkey'>{hotkeys[index].comboCode1 ? `${hotkeys[index].comboCode1} +  ${hotkeys[index].comboCode2}, ` : ``}{`${hotkeys[index].charCode1} + ${hotkeys[index].charCode2} + ${hotkeys[index].charCode3}`}</span>
          </span>
        </div>
        <div className='bottom'> 
          <button onClick={() => decrementIndex(index)} className='prevNext'><span>&#60;</span></button>
          <div className='imgDiv' onKeyDown={(e) => this.updateKeyDown(e)} onKeyUp={(e) => this.updateKeyDown(e)}>
            <span className='toggleCorrect'><img className='' src={hotkeys[index].beforeImg} alt='VS Code screenshot'/></span>
            <Buttons
              isCorrect={isCorrect}
              hotkeys={hotkeys}
              index={index}
              deleteHotkey={deleteHotkey}
              updateEditStatus={updateEditStatus}
              edit={edit}
            />
          </div>
          <button onClick={() => incrementIndex(index)} className='prevNext'><span>&#62;</span></button>
        </div>
        <footer></footer>
      </div>
    )
  }
}