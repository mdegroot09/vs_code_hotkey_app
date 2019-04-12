import React, {Component} from 'react'

export default class Navbar extends Component {
  render() {
    return(
      <div className="navbar navbar-inverse" id='navbar'>
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png' alt=''/>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className='addNew active'><a href="#">Home</a></li>
              {/* <li className='addNew'><a href="#">Previous</a></li> */}
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav">
                  {/* <li className='addNew'><a href="#">Next</a></li> */}
                  <li className='addNew'><a href="#">Add New</a></li>
                </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}