import React from 'react';
import './style/badge.css'
import confLogo from '../images/badge-header.svg';
import avatar from '../images/avatar.jpeg';


class Badge extends React.Component {
    render() {
        return (
        <div className= "Badge">
            <header className = "Badge_header">

               <img src = {confLogo} alt = "Logo de la conferencia"/>

            </header>
            <main>
                <div className = "Badge_section-name">
                    <img className = "Badge_avatar" src = { avatar } alt = "Avatar" />
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div className = "Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <a href = "https://github.com/tenjodiego961" className = "Badge_ancla">{ this.props.github }</a>
                </div>
            </main>
            <footer className = "Badge_footer">

                #platziconf

            </footer>
        </div>
        )}
}

export default Badge;