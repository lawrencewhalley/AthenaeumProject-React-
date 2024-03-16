import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {

    componentDidMount() {
        const form = document.getElementById('loginForm');
        form.addEventListener("submit", this.checkLogin);
    }

    componentWillUnmount() {
        const form = document.getElementById('loginForm');
        form.removeEventListener("submit", this.checkLogin);
    }

    checkLogin = (e) => {
        e.preventDefault();

        const Username = document.getElementById('Username').value;
        const Password = document.getElementById('Password').value;

        const apiUrl = 'https://localhost:7259/LoginRequest?Username=' + Username + '&Password=' + Password;
        //const apiUrl = 'https://localhost:7259/LoginRequest?username=test&password=test'

        console.log(apiUrl);

        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.value == true) {
                    console.log("success")
                    location.href = '/LandingPage'
                }
                else {
                    console.log("fail")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <>
                <h1 className="title">The Athenaeum</h1>
                <form className="form" id="loginForm" onSubmit={this.checkLogin}>
                    <p id="heading">Login</p>
                    <div className="field">
                        <input autoComplete="off" placeholder="Username" className="input-field" type="text" id="Username" />
                    </div>
                    <div className="field">
                        <input placeholder="Password" className="input-field" type="password" id="Password" />
                    </div>
                    <div className="btn">
                        <button className="button1" type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </form>
            </>
        );
    }
}
