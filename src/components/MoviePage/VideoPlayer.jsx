import React, { useRef, useEffect } from 'react'

const VideoPlayer = ({ videoId }) => {
    const videoRef = useRef(null)


    console.log(videoId.movieID)

    useEffect(() => {
        if (videoRef.current) {

        }
    }, [])


    return (
        <video ref={videoRef} width='800' height='800' controls autoPlay>
            <source src={`http://localhost:3000/videos/${videoId.movieID}`} type='video/mp4'></source>
            Your browser does not support the video tag

        </video>
    )
}

export default VideoPlayer