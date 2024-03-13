import React, { Component } from 'react';
import './Login.css'
import { useState, useEffect } from 'react'
import DbTest from './DbTest.jsx'


export default class Login extends Component {
    render() {

        return <>
            <form class="form">
                <p id="heading">Login</p>
                <div class="field">
                    <input autocomplete="off" placeholder="Username" class="input-field" type="text" />
                </div>
                <div class="field">
                    <input placeholder="Password" class="input-field" type="password" />
                </div>
                <div class="btn">
                    <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <button class="button3">Forgot Password</button>
            </form>
            <DbTest />
        </>

    }

}