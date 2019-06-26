import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import { login } from '../actions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      credentials: {
        username: '',
        password: 'i<3Lambd4',
      }
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => {
        setTimeout(() => {
          this.props.history.push('/friends')
        }, 1000)
      })
  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="yourUsername"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">{"i<3Lambd4"}</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <h3>{this.props.logInFail ? "Username or Password incorrect" : null}</h3>
          <Button onClick={this.onSubmit}>{
            this.props.loggingIn ? <Loader type="Oval" color="white" height={20} width={30} /> : "Log in"
          }</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  loggingIn: state.loggingIn,
  error: state.error,
  errorStatusCode: state.errorStatusCode,
  fetchingData: state.fetchingData,
  logInFail: state.logInFail
})

export default connect(mapStateToProps, { login })(Login);