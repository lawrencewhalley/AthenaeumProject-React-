import React, { Component } from 'react';
import './MovieUpload.css'

export default class MovieUpload extends Component {

    componentDidMount() {
        const form = document.getElementById('MovieUploadForm');
        form.addEventListener("submit", this.uploadMovie);
    }

    componentWillUnmount() {
        const form = document.getElementById('MovieUploadForm');
        form.removeEventListener("submit", this.uploadMovie);
    }

    uploadMovie = (e) => {
        e.preventDefault();
        const resultLabel = document.getElementById('Result');

        resultLabel.innerText = 'Uploading...';

        const MovieName = document.getElementById('MovieName').value;
        const MovieDesc = document.getElementById('MovieDesc').value;
        const MovieFile = document.getElementById('MovieFile');
        const MoviePosterInput = document.getElementById('MoviePoster');

        if (MoviePosterInput.files.length > 0) {
            const formDataMoviePoster = new FormData();

            formDataMoviePoster.append('MovieName', MovieName);
            formDataMoviePoster.append('MovieDesc', MovieDesc);
            formDataMoviePoster.append('MoviePoster', MoviePosterInput.files[0]);
            formDataMoviePoster.append('MovieFile', MovieFile.files[0]);

            fetch('https://localhost:7259/api/Movie/UploadMovie', {
                method: 'POST',
                body: formDataMoviePoster
            })
                .then(response => {
                    if (response.ok) {
                        resultLabel.innerText = 'Movie successfully Added';
                        return response.json();
                    }
                    throw new Error('Failed To Submit');
                })
                .then(data => {
                    console.log(data);
                    resultLabel.innerText = data.message;
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                    resultLabel.innerText = error;
                });
        } else {
            console.error('Please select an image file.');
        }
    }

    render() {

        return (
            <>
                <form className="form" id="MovieUploadForm" onSubmit={this.checkLogin}>
                    <p id="heading">Movie Upload</p>
                    <div className="field">
                        <input autoComplete="off" placeholder="Movie Name" className="input-field" type="text" id="MovieName" />
                    </div>
                    <div className="field">
                        <input autoComplete="off" placeholder="Movie Description" className="input-field" type="text" id="MovieDesc" />
                    </div>
                    <div className="SubmitButton">
                        <label className="sectiontitle" > Movie Poster: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="file" id="MoviePoster" className="ChooseFileButton" />
                    </div>
                    <div className="SubmitButton">
                        <label className="sectiontitle"> Movie File: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="file" id="MovieFile" className="ChooseFileButton" />
                    </div>
                    <div className="btn">
                        <button className="button1" type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                    <div className="result">
                        <label>Current Status: </label>
                        <label id="Result">Selecting</label>
                    </div>
                </form>
            </>
        );
    }

}