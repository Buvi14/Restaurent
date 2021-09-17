import axios from 'axios';
import React, { Component } from 'react';
import './Register.css'

const url = "http://localhost:3005/register"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            phone: '',
            errmessage: ''
        }
    }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // eslint-disable-next-line default-case

        this.setState({
            [name]: value,
            message: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email === "" || this.state.username === "" || this.state.phone === "" || this.state.password === "") {
            this.setState({ errmessage: "All fields are mandatory" })
        }
        else {
            var formjson = {
                email: this.state.email,
                username: this.state.username,
                phone: this.state.phone,
                password: this.state.password
            }
            axios.post(url, formjson).then((res) => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        }

    }

    render() {
        return (
            <div className="container register-form" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-4 offset-md-4 forms-container">
                        <h3>Please Register</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group log-col">
                                <label style={{ padding: "padding: 5px" }} htmlFor="name" >Name</label>
                                <br />
                                <input type="text" className="form-control" id="name" placeholder="Enter your Name" name="username" onChange={this.handleChange} />
                            </div>

                            <div className="form-group log-col">
                                <label style={{ padding: "padding: 5px" }} htmlFor="email" >Email</label>
                                <br />
                                <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group log-col">
                                <label style={{ padding: "padding: 5px" }} htmlFor="pwd">Password</label>
                                <br />
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.handleChange} />
                            </div>
                            <div className="form-group log-col">
                                <label style={{ padding: "padding: 5px" }} htmlFor="phone">Phone</label>
                                <br />
                                <input type="text" className="form-control" id="phone" placeholder="Enter the Mobile Number" name="phone" onChange={this.handleChange} />
                            </div>
                            {this.state.errmessage !== '' ? <div className="text-danger">{this.state.errmessage}</div> : ""}
                            <div className="submit-btn">
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;