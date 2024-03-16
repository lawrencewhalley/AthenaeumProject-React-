import React, { Component } from 'react';

export default class LandingPage extends Component {

  render() {

    return (
      <>
        <h1 className="title">Landing Page<br /><br /><br /><br /><br />
          <a href="./MovieUpload">Movie Upload</a><br /><br />
          <a href="./MovieList">Movie List</a><br /><br />
        </h1>
      </>
    );
  }

}