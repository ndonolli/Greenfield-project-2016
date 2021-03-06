import React from 'react';
import firebase from 'firebase';

const Register = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function () {
    return {
      error: false,
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const pw = this.refs.pw.value;

    firebase.auth().createUserWithEmailAndPassword(email, pw)
    .then(this.context.router.replace('/'))
    .catch(this.setState({ error: e.message }));
    firebase.database().ref('users/').push({
      email: email,
      password: pw,
    });
  },
  render: function () {
    const errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
      <div className="col-sm-6">
        <h1 className="white"> Register </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="white"> Email </label>
            <input className="form-control" ref="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="white">Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" />
          </div>
          {errors}
          <button type="submit" className="btn btn-warning">Register</button>
        </form>
      </div>
    );
  },
});

module.exports = Register;
