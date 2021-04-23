import React from 'react';
import './style/bagesList.css'

class BadgesList extends React.Component {
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id} className="item-list">
                        <div className="container-image">
                            <img className="image-avatar" src={badge.avatarUrl} alt="Imagen avatar"/>
                        </div>
                        <div className="container-info">
                            <span><b>{badge.firstName} {badge.lastName}</b><br /></span>
                            <a className="item_list-ancla" href='https://github.com/tenjodiego961'>{badge.github}<br /></a>
                            <span>{badge.jobTitle}</span>
                        </div>
                    </li>
                );
            })}
            </ul>
        )
    }
}

export default BadgesList;