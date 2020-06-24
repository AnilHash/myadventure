import React from 'react'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password :''
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
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        console.log(formData)
    }
    render(){
        return(
                <div className="text-center">
                    <Row className="justify-content-md-center">
                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            
                            <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                            <label htmlFor="inputUsername" className="sr-only">Username</label>
                            <input type="text" id="inputUsername" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required autoFocus />
                            <br/>
                            
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
export default connect()(Register)