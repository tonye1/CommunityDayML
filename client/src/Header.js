import React, { Component } from 'react';
import logo from './market.png'
class Header extends Component {
  //  constructor(props) {
  //    super(props);     
  //  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} alt="logo"  />
        </header>
      </div>
    );
  }
};
export default Header;