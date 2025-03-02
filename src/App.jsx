import React from "react"
import Search from './components/search'
import {useState} from 'react'

const App=()=> {
  const [searchTerm, setSearchTerm] = useState('');


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
