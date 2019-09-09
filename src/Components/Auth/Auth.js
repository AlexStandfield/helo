import React, { Component } from 'react'
import axios from 'axios'

// StyleSheets
import './Auth.css'

// connect
import {connect} from 'react-redux'

// Action Builders
import {INFO} from '../../redux/reducer'
// import store from '../../redux/store'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    register = () => {
        const {username, password} = this.state
        axios.post('/api/auth/register', {username, password})
            .then(response => {
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                console.log(error)
            })
        // store.dispatch({type: INFO, payload: {username, password}}) 
        // console.log(store.getState())
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password})
            .then(response => {
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                console.log(error)
            })
        // store.dispatch({type: INFO, payload: {username, password}})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='login-page'>
                
                <div className='box'>
                    <h1 className='helo'>Helo</h1>
                <div className='inputs'>
                    <div>
                        <label>Username:  </label>
                        <input className='username-input'
                            type='text'
                            name='username' 
                            placeholder='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password:  </label>
                        <input className='password-input'
                            type='password'
                            name='password' 
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                    <div className='button'>
                        <button className='btn login' onClick={this.login} >Login</button>
                        <button className='btn register' onClick={this.register} >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {INFO})(Auth)