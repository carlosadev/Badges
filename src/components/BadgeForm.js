import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

<<<<<<< HEAD
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

=======
>>>>>>> dev
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

<<<<<<< HEAD
        <form onSubmit={this.handleSubmit}>
=======
        <form onSubmit={this.props.onSubmit}>
>>>>>>> dev
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
<<<<<<< HEAD
=======

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
>>>>>>> dev
        </form>
      </div>
    );
  }
}

<<<<<<< HEAD
export default BadgeForm;
=======
export default BadgeForm;
>>>>>>> dev
