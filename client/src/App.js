import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AnimeDetails from './components/AnimeDetails';
import Library from './components/Library';
import RegisterLogin from './components/RegisterLogin';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    
    
  }

  addToLibrary(anime) {
    const data = {
      anime_id: anime.id,
      anime_name: anime.name,
      user_id: anime.user_id
    }

    const animeData = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: animeData
    }
    fetch('/animes', options)
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(data => (data) ? console.log('added to library') : console.log('Could not add to library'))
  }

  render() {
    return (
      <div className="App">
      <Switch>
          <Route path='/anime_details/:id' component={(props)=>(<AnimeDetails 
           id = {props.match.params.id} addToLibrary = {this.addToLibrary.bind(this)}
           />)} />
           <Route path='/search/:anime' component={(props)=>(
             <SearchResults anime = {props.match.params.anime} />
           )} />
           <Route path='/library'  component={Library} />
          <Route path='/register_login' component={RegisterLogin} />
          <Route exact path='/' component={Home} />
      </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
