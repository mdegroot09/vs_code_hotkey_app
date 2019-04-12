import React, {Component} from 'react'

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
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newAnimal = this.state
    this.props.createAnimal(newAnimal)
  }

  render(){
    let {createHotkey} = this.props
    return (
      <div style={{border: '1px solid black', margin: 20}}>
        <input 
          onChange={this.handleChange}
          name='species' 
          type='text' 
          placeholder="species"
          />
        <input 
          onChange={this.handleChange}
          name='imageUrl' 
          type='text' 
          placeholder="imarge url"
          />
        <input 
          onChange={this.handleChange}
          name='quantity' 
          type='number' 
          placeholder="quantity"
        />
        <button onClick={this.handleClick}>create animal</button>
      </div>
    )
  }
}