import React, {Component} from 'react'
import axios from 'axios';

import Hotkey from './Hotkey'
import CreateHotkey from './CreateHotkey'
import EditHotkey from './EditHotkey'
import Navbar from './Navbar'

export default class Hotkeys extends Component {
  constructor() {
    super()
    this.state = {
      hotkeys: [
        {
          beforeImg: '',
          afterImg: '',
          task: '',
          charCode1: 0,
          charCode2: 0,
          charCode3: 0,
          comboCode1: null,
          comboCode2: null,
        }
      ],
      index: 0,
      charCode1Pressed: true,
      charCode2Pressed: true,
      charCode3Pressed: true,
      comboCode1Pressed: true,
      comboCode2Pressed: true,
      comboReady: false,
      isCorrect: false,
      create: false,
      edit: false
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.updateKeyDown.bind(this));
    document.addEventListener("keyup", this.updateKeyUp.bind(this));
    axios.get('/api/hotkeys').then(res => {
      this.setState({hotkeys: res.data})
    }).catch(err => console.log('err:', err))
  }

  createHotkey = (newHotkey) => {
    axios.post('/api/hotkeys', newHotkey).then(res => {
      this.setState({create: false})
      this.setState({hotkeys: res.data})
      window.location.reload()
      setTimeout(() => this.updateStateBooleans(), 200)
    }).catch(err => console.log('err:', err))
    let addNewButton = document.getElementsByClassName('addNewButton')[0]
    addNewButton.innerHTML = '<a href="#">Add New</a>'
  }

  updateHotkey = (updateHotkey) => {
    axios.put(`/api/hotkeys/${updateHotkey.id}`, updateHotkey).then(res => {
      this.setState({edit: false})
      this.setState({hotkeys: res.data})
      window.location.reload()
    }).catch(err => console.log('err:', err))
  }

  deleteHotkey = (hotkeyToDelete) => {
    axios.delete(`/api/hotkeys/${hotkeyToDelete.id}`, hotkeyToDelete).then(res => {
      let newArray = res.data
      if (this.state.index >= this.state.hotkeys.length){
        this.setState({index: 0})
      }
      this.setState({hotkeys: newArray})
      window.location.reload()
    }).catch(err => console.log('err:', err))
  }

  updateCreateStatus = (createStatus) => {
    this.setState({create: createStatus})
  }

  updateEditStatus = (editStatus) => {
    this.setState({edit: editStatus})
  }

  incrementIndex = (index) => {
    let {hotkeys} = this.state
    let indexUpdate = index + 1
    if (indexUpdate >= hotkeys.length) {
      indexUpdate = 0
    }
    this.setState({index: indexUpdate})
  }

  decrementIndex = (index) => {
    let {hotkeys} = this.state
    let indexUpdate = index - 1
    if (indexUpdate < 0) {
      indexUpdate = hotkeys.length - 1
    }
    this.setState({index: indexUpdate})
  }

  updateStateBooleans = () => {
    let {hotkeys, index} = this.state
    if(hotkeys[index].charCode1){
      this.setState({charCode1Pressed: false})
    }
    if(hotkeys[index].charCode2){
      this.setState({charCode2Pressed: false})
    }
    if(hotkeys[index].charCode3){
      this.setState({charCode3Pressed: false})
    }
    if(hotkeys[index].comboCode1){
      this.setState({comboCode1Pressed: false})
    }
    if(hotkeys[index].comboCode2){
      this.setState({comboCode2Pressed: false})
    }
  }

  componentDidMount =() => {
    setTimeout(() => this.updateStateBooleans(), 200)
  }

  updateCorrectStatus = () => {
    let {hotkeys, index} = this.state
    this.setState({isCorrect: true})
    this.setState({comboReady: false})
    this.setState({charCode1Pressed: false})
    this.setState({charCode2Pressed: false})
    this.setState({charCode3Pressed: false})
    this.setState({comboCode1Pressed: false})
    this.setState({comboCode2Pressed: false})
    document.getElementsByClassName('toggleCorrect')[0].innerHTML = `<img id='correctImg' src='${hotkeys[index].afterImg}' alt='VS Code screenshot'/>`
    setTimeout(() => {
      document.getElementsByClassName('toggleCorrect')[0].innerHTML = `<img className='' src=${hotkeys[index].beforeImg} alt='VS Code screenshot'/>`
    }, 5000);
  }

  updateComboStatus = () => {
    let {comboCode1Pressed, comboCode2Pressed} = this.state
    setTimeout(() => {
      if(comboCode1Pressed && comboCode2Pressed){
        this.setState({comboReady: true})
      }
      else {
        this.setState({comboReady: false})
      }
    }, .1);
  }

  checkIfCorrect = (keycode) => {
    let {index, hotkeys, charCode1Pressed, charCode2Pressed, charCode3Pressed, comboCode1Pressed, comboCode2Pressed, comboReady} = this.state
    let {comboCode1, comboCode2} = hotkeys[index]
    if (!comboCode1 && !comboCode2 && !comboReady){
      if (charCode1Pressed && charCode2Pressed && charCode3Pressed){
        // console.log('You did it!!!')
        this.updateCorrectStatus()
      }
    } else if (comboReady){
      if (charCode1Pressed && charCode2Pressed && charCode3Pressed){
        // console.log('You did a combo!!!')
        this.updateCorrectStatus()
      } else {
        // console.log('Incorrect combo.')
        this.setState({isCorrect: false})
        this.setState({comboReady: false})
      }
    }
    setTimeout(() => {
      if (this.state.comboReady) {
        this.setState({comboReady: false})
      }
    }, 2000)
  }

  updateKeyDown = (keycode) => {
    keycode = keycode.key.toLowerCase()
    let {index, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[index]
    if(keycode === charCode1){
      this.setState({charCode1Pressed: true})
      setTimeout(this.updateComboStatus(), .2)
    } else if (keycode === charCode2){
      this.setState({charCode2Pressed: true})
      setTimeout(this.updateComboStatus(), .2)
    } else if (keycode === charCode3){
      this.setState({charCode3Pressed: true})
      setTimeout(this.updateComboStatus(), .2)
    } else if (keycode === comboCode1){
      this.setState({comboCode1Pressed: true})
      setTimeout(this.updateComboStatus(), .2)
    } else if (keycode === comboCode2){
      this.setState({comboCode2Pressed: true})
      setTimeout(this.updateComboStatus(), .2)
    } else {
      this.setState({comboReady: false})
      this.setState({charCode1Pressed: false})
      this.setState({charCode2Pressed: false})
      this.setState({charCode3Pressed: false})
      this.setState({comboCode1Pressed: false})
      this.setState({comboCode2Pressed: false})
    }
  }

  updateKeyUp = (keycode) => {
    keycode = keycode.key.toLowerCase()
    let {index, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[index]
    setTimeout(this.checkIfCorrect(keycode), .1)
    if(keycode === charCode1){
      this.setState({charCode1Pressed: false})
    } else if (keycode === charCode2){
      this.setState({charCode2Pressed: false})
    } else if (keycode === charCode3){
      this.setState({charCode3Pressed: false})
    } else if (keycode === comboCode1){
      this.setState({comboCode1Pressed: false})
    } else if (keycode === comboCode2){
      this.setState({comboCode2Pressed: false})
    }
    setTimeout(() => {
      if(!this.state.comboCode1Pressed || !this.state.comboCode2Pressed){
        this.setState({comboReady: false})
        this.setState({comboCode1Pressed: false})
        this.setState({comboCode2Pressed: false})
      }
    }, 100)
  }

  render(){
    let {hotkeys, index, isCorrect, create, edit} = this.state
    return (
      <div className='App'>
        <Navbar
          updateCreateStatus={this.updateCreateStatus}
          create={create}
          updateEditStatus={this.updateEditStatus}
          edit={edit}
        />
        {!create && !edit ?
          <Hotkey
            updateKeyDown={this.updateKeyDown}
            updateKeyUp={this.updateKeyUp}
            incrementIndex={this.incrementIndex}
            decrementIndex={this.decrementIndex}
            hotkeys={hotkeys}
            index={index}
            isCorrect={isCorrect}
            deleteHotkey={this.deleteHotkey}
            updateEditStatus={this.updateEditStatus}
            edit={edit}
          /> :
          create ?
            <CreateHotkey
              createHotkey={this.createHotkey}
            /> :
            <EditHotkey
              updateHotkey={this.updateHotkey}
              hotkeys={hotkeys}
              index={index}
            />
        }
      </div>
    )
  }
}