import React, {Component} from 'react'

export default class Navbar extends Component {
  addNewClicked = (create) => {
    this.props.updateCreateStatus(!create)
    if (!create) {
      let addNewButton = document.getElementsByClassName('addNewButton')[0]
      addNewButton.innerHTML = '<a href="#">Cancel New</a>'
    } else {
      let addNewButton = document.getElementsByClassName('addNewButton')[0]
      addNewButton.innerHTML = '<a href="#">Add New</a>'
    }
  }

  render() {
    let {create} = this.props
    return(
      <div className="navbar navbar-inverse" id='navbar'>
        <div className="container-fluid">
          <div className="navbar-header">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png' alt=''/>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className='addNew active'><a href="#">Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav">
                  <li onClick={() => this.addNewClicked(create)} className='addNew addNewButton'><a href="#">Add New</a></li>
                </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}