import React, { Component } from 'react'
import axios from 'axios'

// connect
import {connect} from 'react-redux'

// Action Builders
import {INFO} from '../../redux/reducer'

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
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input className='username-input'
                    type='text'
                    name='username' 
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input className='password-input'
                    type='password'
                    name='password' 
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button className='btn login' onClick={this.login} >Login</button>
                <button className='btn register' onClick={this.register} >Register</button>
            </div>
        )
    }
}

export default connect(null, {INFO})(Auth)