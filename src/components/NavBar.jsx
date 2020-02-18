import React from 'react';
import { Link } from 'react-router-dom';
// import MoviesForum from './MoviesForum';
// import JohnCenaForum from './JohnCenaForum';
// import NeckbeardNests from './NeckbeardNests';
// import Home from './Home';

function NavBar(){
    return(
        <div>
            <Link to='/' >Home</Link>
            <Link to='/movies' >Movies</Link>
            <Link to='/cena' >John Cena</Link>
            <Link to='/nests' >Neckbeard Nests</Link>
        </div>
    );
}

export default NavBar;