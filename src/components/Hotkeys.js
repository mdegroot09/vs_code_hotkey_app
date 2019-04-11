import React, {Component} from 'react'
import axios from 'axios';

import Hotkey from './Hotkey'

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
      randomIndex: 0,
      charCode1Pressed: false,
      charCode2Pressed: false,
      charCode3Pressed: false,
      comboCode1Pressed: false,
      comboCode2Pressed: false,
      isCorrect: false
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.updateKeyDown.bind(this));
    document.addEventListener("keyup", this.updateKeyUp.bind(this));
  }

  componentDidMount(){
    axios.get('/api/hotkeys').then(res => {
      this.setState({hotkeys: res.data})
    }).catch(err => console.log('err:', err))
  }

  checkIfCorrect(keycode){
    let {randomIndex, hotkeys, charCode1Pressed, charCode2Pressed, charCode3Pressed, comboCode1Pressed, comboCode2Pressed} = this.state
    let {comboCode1} = hotkeys[randomIndex]
    if (!comboCode1){
      if (charCode1Pressed && charCode2Pressed && charCode3Pressed){
        console.log('You did it!!!')
        this.setState({correct: true})
      }
    } else if (charCode1Pressed && charCode2Pressed && charCode3Pressed && comboCode1Pressed && comboCode2Pressed){
      console.log('You did a combo!!!')
      this.setState({correct: true})
    }
  }

  updateKeyDown(keycode){
    console.log(keycode.key)
    keycode = keycode.key.toLowerCase()
    let {randomIndex, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[randomIndex]
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
    let {randomIndex, hotkeys} = this.state
    let {charCode1, charCode2, charCode3, comboCode1, comboCode2} = hotkeys[randomIndex]
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
    let {hotkeys, randomIndex, isCorrect} = this.state
    // randomIndex = Math.floor(Math.random())*(hotkeys.length)
    return (
      <Hotkey
        updateKeyDown={this.updateKeyDown}
        updateKeyUp={this.updateKeyUp}
        hotkeys={hotkeys}
        randomIndex={randomIndex}
        isCorrect={isCorrect}
      />
    )
  }
}