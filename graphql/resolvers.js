import { getMovies, getMovie, getSuggestions } from './db';


const resolvers = {
    Query: {
        movies: (_, {limit, rating} ) => getMovies(limit, rating),
        // _ 언더바는 머지 => 걍 변수!!! 아무거나 오케이
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    },

    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, {id}) =>deleteMovie(id)
    // }
}

export default resolvers;