import React, { Component } from 'react';
import './Login.css'
import { useState, useEffect } from 'react'
import DbTest from './DbTest.jsx'


export default class Login extends Component {
    render() {

        var button = document.getElementById("my-button");
        button.addEventListener("click", changeColor);

        function changeColor() {
            let var1 = document.getElementById("Username").style.backgroundColor;
            let var2 = document.getElementById("Password").style.backgroundColor;

            //call api and get result using var1 and var 2 as parameters

            // check to see if the api returned true or false
            take to next page or display error

            window.location.href = "C:\git2\ReactVideoServer\Pages\Home.html";
        }

        return <>
            <form action="/Login.js" method="post" class="form">
                <p id="heading">Login</p>
                <div class="field">
                    <input autocomplete="off" placeholder="Username" class="input-field" type="text" id="Username"/>
                </div>
                <div class="field">
                    <input placeholder="Password" class="input-field" type="password" id="Password" />
                </div>
                <div class="btn">
                    <button onclick="PassData()" id="my-button" class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <button class="button3">Forgot Password</button>
            </form>
            <DbTest />
        </>

    }

}