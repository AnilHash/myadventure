import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'

import { startGetUser } from '../../actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // const formData = {
        //     email : this.state.email,
        //     password : this.state.password
        // }
        const redirect = () => {
            return this.props.history.push('/main')
        }
        this.props.dispatch(startGetUser(this.state.email, redirect))
    }
    render(){
        return(
            <div className="text-center">
                <Row className="justify-content-md-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
                    
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address" required autoFocus />
                    <br/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                    <br/><br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                </Row>
          </div>
        )
    }
}
export default connect()(Login)