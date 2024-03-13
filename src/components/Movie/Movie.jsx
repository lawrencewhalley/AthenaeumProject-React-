import React, { Component } from 'react';
import './Movie.css'

export default class Movie extends Component {
    render() {

        return <div class="loginBox">
            <div class="movie">
                <video width="320" height="240" controls>
                    <source src="TheGreatGatsby.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>


    }
}