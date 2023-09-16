import axios from 'axios';

// GET all invoices

export const getAllMovies=(callback)=>{
    const request=axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5b0952df341b73c81ff0782a6e01f134');
    request.then((response)=>{
        const data=response.data
        callback(data)
        console.log(data)
    })
}
