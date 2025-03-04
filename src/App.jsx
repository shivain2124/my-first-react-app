import React from "react"
import Search from './components/search'
import {useEffect, useState} from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS =  {method: 'GET',
  headers: {
    accept : 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App=()=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);


  const fetchMovies = async () => {
      setisLoading(true);
      setErrorMessage('');

      try{
        console.log(API_OPTIONS)
        const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);
        
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        const data=await response.json();
        
        if(data.Response === 'False'){
          setErrorMessage(data.Error || 'Failed to fetch movies');
          setmovieList([]);
          return;
        }
        setmovieList(data.results || []);
      } catch(error){
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage('Error fetching movies Yo Yo Yo try nexxt time Yo Yo Yo');
      } finally{
        setisLoading(false);
      }
  }

  useEffect(() => {
    fetchMovies();

  },[]);

  return (
    <main>

      <div className="pattern"></div>
      <div className="wrapper"></div>

      <header>
        <img src="./hero.png" alt="Hero Banner" />
 
        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle</h1>


      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>

      <section className="all-movies">
        <h2>All Movies</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}        
      </section>
      {/* <h1 className="text-white">{searchTerm}</h1> */}

    </main>
      
  )
}

export default App
