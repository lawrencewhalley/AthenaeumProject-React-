import React, { Component } from 'react';
import MovieUpload from './MovieUpload.jsx';
import MovieList from '../components/MovieFiles/MovieList.jsx';
import './LandingPage.css'

export default class LandingPage extends Component {
  componentDidMount() {
    const defaultTab = 'MovieList';
    if (!document.querySelector(`[data-page="${defaultTab}"]`).classList.contains("active")) {
      this.activatePage(defaultTab);
    }
  }

  activatePage = (Page) => {
    document.querySelectorAll(".tabcontent").forEach(tabcontent => {
      tabcontent.style.display = "none";
    });

    document.querySelectorAll(".tablinks").forEach(tablink => {
      tablink.classList.remove("active");
    });

    document.getElementById(Page).style.display = "block";

    document.querySelector(`[data-page="${Page}"]`).classList.add("active");
  }

  render() {
    return (
      <>
        <div className="tab">
          <h1 className='TheAthenaeum'>The Athenaeum</h1>
          <button className="tablinks" onClick={() => this.activatePage('MovieList')} data-page="MovieList">Movie List</button>
          <button className="tablinks" onClick={() => this.activatePage('MovieUpload')} data-page="MovieUpload">Movie Upload</button>
          <button className="tablinks" onClick={() => this.activatePage('RequestAMovie')} data-page="RequestAMovie">Request a Movie</button>
          <button className="tablinks" onClick={() => this.activatePage('RequestManager')} data-page="RequestManager">Request Manager</button>

        </div>
        <div id="MovieUpload" className="tabcontent">
          <MovieUpload />
        </div>
        <div id="MovieList" className="tabcontent">
          <MovieList />
        </div>
        <div id="RequestAMovie" className="tabcontent">

        </div>
        <div id="RequestManager" className="tabcontent">

        </div>
      </>
    );
  }
}
