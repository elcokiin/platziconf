import React from 'react';
import NavBar from '../components/NavBar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


import './style/BadgeNew.css';



class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        github: '',
    } };
    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        
        this.setState({
            // form: nextForm,
            form: {
            ...this.state.form,
            [e.target.name]: e.target.value,}
        })
    }

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
                            <Badge firstName = {this.state.form.firstName}
                            lastName = {this.state.form.lastName} 
                            github = {this.state.form.github}
                            jobTitle = {this.state.form.jobTitle}/>
                        </div>
                        <div className = "col-6">
                            <BadgeForm onChange = {this.handleChange} formValues = {this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;