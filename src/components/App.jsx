import React from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MoviesForum from './MoviesForum';
import JohnCenaForum from './JohnCenaForum';
import NeckbeardNests from './NeckbeardNests';
import CreatePostForm from './CreatePostForm';

function App() {
  return (
    <div className='App'>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/movies' component={MoviesForum} />
          <Route path='/cena' component={JohnCenaForum} />
          <Route path='/nests' component={NeckbeardNests} />
          <Route path='/create/:forum' component={CreatePostForm} />
        </Switch>
      
    </div>
  );
}

export default App;
