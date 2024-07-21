import React from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loadingMovies, errorMovies } = useMovies({ query });

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies()
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleInputChange}
            style={error ? { border: '1px solid red' } : null}
            placeholder="The Lord Of The Rings, Star Wars, The Godfather..."
          />
          <button type="submit">Search</button>
        </form>
        {error && <h4 style={{ color: 'red', textAlign: 'center' }} >{error}</h4>}
      </header>

      <main>
        {
          loadingMovies
            ? <h4>Loading Movies...</h4>
            : errorMovies
              ? <h4>{errorMovies}</h4>
              : <Movies movies={movies} />

        }
      </main>
    </div >
  )
}

export default App;
