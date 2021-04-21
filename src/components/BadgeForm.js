import React from 'react';

class BadgeForm extends React.Component {
    state = {};
    handleChange = e =>{
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleClick = e =>{
        console.log('funciona');
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
        console.log(this.state.email)
    }
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label>First Name</label>
                    <input onChange = {this.handleChange}
                     name = "firstName" 
                     className="form-control"
                     value = {this.state.firsName}/>
                </div>
                <div className = "form-group">
                    <label>Last Name</label>
                    <input onChange = {this.handleChange}
                     name = "lastName" 
                     className="form-control"
                     value = {this.state.lastName}/>
                </div>
                <div className = "form-group">
                    <label>Email</label>
                    <input onChange = {this.handleChange}
                     name = "email" 
                     type = "email"
                     className="form-control"
                     value = {this.state.email}/>

                </div>
                <div className = "form-group">
                    <label>Job title</label>
                    <input onChange = {this.handleChange}
                     name = "jobTitle" 
                     className="form-control"
                     value = {this.state.jobtitle}/>
                </div>
                <div className = "form-group">
                    <label>Github</label>
                    <input onChange = {this.handleChange}
                     name = "github" 
                     className="form-control"
                     value = {this.state.github}/>
                </div>
                <button onClick = {this.handleClick} className = "btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;