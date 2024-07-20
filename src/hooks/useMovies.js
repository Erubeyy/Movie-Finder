// import withError from '../mocks/withError.json'
import withResults from '../mocks/withResults.json'

export const useMovies = () => {
    const movies = withResults.Search;

    const mappedMovies = movies.map(movie => (
        {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    ));

    return {
        movies: mappedMovies
    }
}