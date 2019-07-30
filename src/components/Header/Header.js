import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Navbar</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <span className="nav-link" >Home <span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >Features</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >Pricing</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >About</span>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

