import React from 'react';
import NavBar from '../components/NavBar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


import './style/BadgeNew.css';



class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className = "badgeNew_hero">
                    <img className = "img-fluid" src = {header} alt = "Logo"/>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-6">
                            <Badge firstName = "Diego"
                            lastName = "Tenjo" 
                            github = "tenjodiego961"
                            jobTitle = "Frontend Developer"/>
                        </div>
                        <div className = "col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;