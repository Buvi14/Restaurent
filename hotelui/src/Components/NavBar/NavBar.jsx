import React from 'react'
import Orderfood from './Orderfood.png';
import './NavBar.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';

// Navbar is styled by Css
export default function NavBar() {
    return (
        <Router>
            <div className="nav-container">
                <div className="nav-left">
                    <img src={Orderfood} alt="food" className="food-image" />
                    <p><Link style={{ textDecoration: 'none', color: 'black' }} to="/home">Tasty</Link></p>
                </div>
                <div className="nav-right">
                    <p><Link style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</Link></p>
                    <p><Link style={{ textDecoration: 'none', color: 'black' }} to="/register">Register</Link></p>
                </div>
            </div>

            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Landing} />
                <Route path="/register" component={Register} />
            </div>
        </Router>
    )
}
