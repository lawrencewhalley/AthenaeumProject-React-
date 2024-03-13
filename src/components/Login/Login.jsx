import React, { Component } from 'react';
import './Login.css'
import { useState, useEffect } from 'react'
import DbTest from './DbTest.jsx'


export default class Login extends Component {
    render() {
        return <>
            <form className="form">
                <p id="heading">Login</p>
                <div className="field">
                    <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
                </div>
                <div className="field">
                    <input placeholder="Password" className="input-field" type="password" />
                </div>
                <div className="btn">
                    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <button className="button3">Forgot Password</button>
            </form>
            <DbTest />
        </>

    }

}