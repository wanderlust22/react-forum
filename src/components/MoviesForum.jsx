import React from 'react';
import { Link } from 'react-router-dom';

function MoviesForum(){
    return(
        <div>
            <h1>Movie Forum</h1>
            <Link to='/create/movies'>Create a Post</Link>

        </div>
    );
}

export default MoviesForum;