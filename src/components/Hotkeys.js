import React, {Component} from 'react'
import axios from 'axios';

import Hotkey from './Hotkey'
import CreateHotkey from './CreateHotkey'

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
      edit: true
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
      this.setState({animals: res.data})
    }).catch(err => console.log('err:', err))
  }

  updateIndex(){
    let {index} = this.state
    // let index = Math.floor(Math.random()*hotkeysLength)
    index += 1
    this.setState({index: index})
  }

  updateStateBooleans(){
    let {hotkeys, index} = this.state
    console.log(`hotkeys[${index}]:`, hotkeys[index])
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

  componentDidMount(){
    setTimeout(() => this.updateStateBooleans(), 200)
  }

  checkIfCorrect(keycode){
    let {index, hotkeys, charCode1Pressed, charCode2Pressed, charCode3Pressed, comboCode1Pressed, comboCode2Pressed, comboReady} = this.state
    let {comboCode1, comboCode2} = hotkeys[index]
    if (!comboCode1 || !comboCode2){
      if (charCode1Pressed && charCode2Pressed && charCode3Pressed){
        console.log('You did it!!!')
        this.setState({isCorrect: true})
      }
    } else if (comboReady){
      if (charCode1Pressed && charCode2Pressed && charCode3Pressed && comboCode1Pressed && comboCode2Pressed){
        console.log('You did a combo!!!')
        this.setState({isCorrect: true})
      }
    }
  }

  updateKeyDown(keycode){
    console.log(keycode.key)
    keycode = keycode.key.toLowerCase()
    let {index, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[index]
    if(keycode === charCode1){
      this.setState({charCode1Pressed: true})
    } else if (keycode === charCode2){
      this.setState({charCode2Pressed: true})
    } else if (keycode === charCode3){
      this.setState({charCode3Pressed: true})
    } else if (keycode === comboCode1){
      this.setState({comboCode1Pressed: true})
    } else if (keycode === comboCode2){
      this.setState({comboCode2Pressed: true})
    }
    setTimeout(this.checkIfCorrect(keycode), .1)
  }

  updateKeyUp(keycode){
    keycode = keycode.key.toLowerCase()
    let {index, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[index]
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
  }

  render(){
    let {hotkeys, index, isCorrect, edit} = this.state
    return (
      !this.state.edit ?
      <Hotkey
      updateKeyDown={this.updateKeyDown}
      updateKeyUp={this.updateKeyUp}
      hotkeys={hotkeys}
      index={index}
      isCorrect={isCorrect}
      /> :
      <CreateHotkey
        createHotkey={this.createHotkey}
      />
    )
  }
}