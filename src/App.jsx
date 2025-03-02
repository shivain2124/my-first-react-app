import React from "react"
import Search from './components/search'
import {useEffect, useState} from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const API_OPTIONS =  {method: 'GET',
  headers: {
    accept : 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App=()=> {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

  },[]);


  return (
    <main>

      <div className="pattern"></div>
      <div className="wrapper"></div>

      <header>
        <img src="./hero.png" alt="Hero Banner" />

        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle</h1>
      </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <h1 className="text-white">{searchTerm}</h1>

    </main>
      
  )
}

export default App
