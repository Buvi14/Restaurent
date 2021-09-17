import React from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message: '',
            textStyle: '',
            response: '',
            error: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            message: ''
        })
    }
    handleSubmit = (e) => {
        const validateEmail = (email) => {
            var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            return re.test(email);
        }
        if (this.state.email === '' || this.state.password === '') {
            this.setState({ message: "All fields are mandatory", textStyle: "danger" })
        }
        else {
            // e.preventDefault();
            if (validateEmail(this.state.email)) {
                this.setState({
                    message: "",
                    textStyle: ""
                })
                const data = {
                    email: this.state.email,
                    password: this.state.password
                }
                axios.post('http://localhost:3005/login/', data).then((res) => {
                    this.setState({ response: res.data });
                    console.log(res.data);
                }).catch(error => {
                    if (error.response) {
                        this.setState({ error: error.response.data.message, response: "" });
                    } else {
                        this.setState({ error: error.message, response: "" });
                    }
                });
            }
            else {
                this.setState({
                    message: "Please enter a valid email id",
                    textStyle: "danger"
                })
            }
        }
    }
    // Login form
    render() {
        return (
            <React.Fragment>
                <div className="form-container" data-aos="fade-up">
                    <h3>Login Form</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group log-col">
                            <label style={{ padding: "padding: 5px" }} htmlFor="username" >Email</label>
                            <br />
                            <input type="text" className="form-control" id="name" placeholder="Enter Email" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group log-col">
                            <label style={{ padding: "padding: 5px" }} htmlFor="pwd">Password</label>
                            <br />
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.handleChange} />
                        </div>
                        {this.state.message !== '' && <div style={{ padding: "10px" }} className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br />
                        <div className="submit-btn">
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Login</button>
                        </div>
                    </form>
                </div>
                {this.state.response ? <div className="text-success"> User LoggedIn Successfully</div> : ""}
            </React.Fragment>)
    }
}
export default Login;
