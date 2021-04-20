import React from 'react';
import './style/main.css'
import confLogo from '../images/badge-header.svg';
import avatar from '../images/avatar.jpeg'


class Badge extends React.Component {
    render() {
        return (
        <div className= "Badge">
            <header className = "Badge_header">

               <a href="../../public/index.html"><img src = {confLogo} alt = "Logo de la conferencia"/></a> 

            </header>
            <main>
                <div className = "Badge_section-name">
                    <img className = "Badge_avatar" src = { avatar } alt = "Avatar" />
                    <h1>Diego <br/> Aguirre</h1>
                </div>
                <div className = "Badge_section-info">
                    <h3>Frontend Developer</h3>
                    <a href = "#">@diegoaguirre</a>
                </div>
            </main>
            <footer className = "Badge_footer">

                #platziconf

            </footer>
        </div>
        )}
}

export default Badge;