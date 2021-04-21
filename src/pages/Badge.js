import React from 'react';

import NavBar from '../components/NavBar';
import './style/Badges.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className = "Badge">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                        <img src = {confLogo} alt="Conf logo" className="Badges_conf-logo"/>
                        </div>

                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <a href="Badge/new" className="btn btn-primary">New Badge</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Badge;