import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: ""
        }
        this.userData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.userData = {
            url: '/login',
            post: this.state
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.registerPostRequest(this.userData);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label>Email:
           <input type="email" onChange={this.handleInputChange} value={this.state.email} name="email" />
                        </label>
                    </div>
                    <div>
                        <label>Password:
           <input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" />
                        </label>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div>
                </div>
            </div>
        )
    }
}

export default Login;