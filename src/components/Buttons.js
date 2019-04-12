import React,{Component} from 'react'

export default class Buttons extends Component {
  render(){
    let {isCorrect, deleteHotkey, hotkeys, index, updateEditStatus, edit} = this.props
    return (
      <div className='buttonDiv'>
        <div className='buttons'>
          <button onClick={() => updateEditStatus(!edit)} className="btn btn-primary btn-lg active" id='button'>Edit</button>
          <button onClick={() => deleteHotkey(hotkeys[index])} className="btn btn-primary btn-lg active" id='button'>Delete</button>
          {/* <button className="btn btn-primary btn-lg active" id='button'>Add New</button> */}
        </div>
      </div>
    )
  }
}