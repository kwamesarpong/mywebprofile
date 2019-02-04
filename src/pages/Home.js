import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading) {
      return (
        <div>Hi</div>
      );
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link className="navbar-brand" to="/">KS</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/"><i className="fas fa-home ico-disp"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Skills</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/">Portfolio</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
              </li> 
            </ul>
          </div> 
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <div className="main-desc-padd">
                <h1 className="main-desc">Hi folks,</h1>
                <h1 className="main-desc">I'm Kay.</h1>
                <h1 className="main-desc">Web and mobile developer.</h1>
                <p className="skill-test fade-in">Frontend / React / React Native</p>
              </div>
              
            </div>
            <div className="col-md-6">
              
              <div className="main-desc-padd">
                <div className="circ">
                  <div className="hands"></div>
                  <div className="body"></div>
                  <div className="head">
                    <div className="eye"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Home
