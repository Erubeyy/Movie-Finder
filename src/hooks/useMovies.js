import { useState } from 'react';
import { searchMovies } from '../services/movies';

export const useMovies = ({ query }) => {
	const [movies, setMovies] = useState([]);
	const [loadingMovies, setLoadingMovies] = useState(false);
	const [errorMovies, setErrorMovies] = useState(null);

	const getMovies = async () => {
		try {
			setLoadingMovies(true);
			setErrorMovies(null);
			const newMovies = await searchMovies({ query });
			setMovies(newMovies);

		} catch (error) {
			setErrorMovies(error.message);

		} finally {
			setLoadingMovies(false);
		}
	}

	return {
		movies,
		getMovies,
		loadingMovies,
		errorMovies
	}
}