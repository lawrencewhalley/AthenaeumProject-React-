import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import { useParams } from 'react-router-dom';



function MoviePage() {

    const { movieId } = useParams();
    const { movieName } = useParams();

    console.log(movieId)
    console.log(movieName)



    return (
        <>

            <Link to="/LandingPage">
                <div className='backButton'>
                    go back
                </div>
            </Link>

            <h1>
                REHEHEHHEHEHE + {movieId} + {movieName}
            </h1>




        </>
    );
}
export default MoviePage;
