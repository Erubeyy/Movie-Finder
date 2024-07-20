import React from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

const App = () => {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1 style={{ textAlign: 'center' }}>Movie Finder</h1>
        <form action="" className='form'>
          <input type="text" placeholder="The Lord Of The Rings, Star Wars, The Godfather..." />
          <button type="submit" >Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App;
