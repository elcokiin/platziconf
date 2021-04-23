import React from 'react';
import Logo from '../images/logo.svg'
import './style/navBar.css';

class NavBar extends React.Component {
    render(){
        return(
            <div className = "navBar">
            <div className = "container-fluid">
                <a href = "/" className = "navBar_ancla">
                <img src= {Logo} alt = "logo" className = "navBar_logo"></img>
                <span className="font-weight-light navBar_brand navBar_platzi">Platzi</span>
                <span className="font-weight-bold navBar_brand navBar_conf">Conf</span>
                </a>
            </div>
            </div>
        );
    }
}

export default NavBar;