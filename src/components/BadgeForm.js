import React from 'react';

class BadgeForm extends React.Component {
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label>First Name</label>
                    <input onChange = {this.props.onChange}
                     name = "firstName" 
                     className="form-control"
                     value = {this.props.formValues.firstName}/>
                </div>
                <div className = "form-group">
                    <label>Last Name</label>
                    <input onChange = {this.props.onChange}
                     name = "lastName" 
                     className="form-control"
                     value = {this.props.formValues.lastName}/>
                </div>
                <div className = "form-group">
                    <label>Email</label>
                    <input onChange = {this.props.onChange}
                     name = "email" 
                     type = "email"
                     className="form-control"
                     value = {this.props.formValues.email}/>

                </div>
                <div className = "form-group">
                    <label>Job title</label>
                    <input onChange = {this.props.onChange}
                     name = "jobTitle" 
                     className="form-control"
                     value = {this.props.formValues.jobtitle}/>
                </div>
                <div className = "form-group">
                    <label>Github</label>
                    <input onChange = {this.props.onChange}
                     name = "github" 
                     className="form-control"
                     value = {this.props.formValues.github}/>
                </div>
                <button onClick = {this.handleClick} className = "btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;