import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MoviePage.css';
import VideoPlayer from './VideoPlayer.jsx'

function MoviePage() {

    const { movieID } = useParams();

    const [videoId, setVideoId] = useState(null)

    let tempvar = "videos/" + movieID

    console.log(movieID)

    function playVideo(e, videoId) {
        e.preventDefault()
        setVideoId(videoId)
    }


    return (
        <>

            <Link to="/LandingPage">
                <div className='backButton'>
                    go back
                </div>
            </Link>

            <div className="App">
                {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
                <button onClick={(e) => { playVideo(e, { movieID }) }}>Play Video</button>
            </div>

        </>
    );
}
export default MoviePage;
