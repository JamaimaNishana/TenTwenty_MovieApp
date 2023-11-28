import axios from "axios";

const apiBaseUrl = `https://api.themoviedb.org/3`
export const upcomingMovieEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=651925d45022d1ae658063b443c99784`
// export const upcomingMovieEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=651925d45022d1ae658063b443c99784`
export const movieImage = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null
export const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=651925d45022d1ae658063b443c99784`

export const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=651925d45022d1ae658063b443c99784`

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }
    try {
        const response = await axios.request(options);
        console.log("responsedata from searchapi", response.data);
        return response.data;

    } catch (error) {
        console.log("error from searchapi", error);
        return {}
    }
}

export const searchMovies = params => {
    return apiCall(searchMoviesEndpoint, params);
}

export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndpoint(id));
}