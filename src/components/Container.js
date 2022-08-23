import React, {useState} from 'react';
import DisplayMovie from './DisplayMovie.js';
const Container = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState({});
    // const [favMovies, setFaveMovies] = useState([]);
    // const [key, setKey] = useState('');
    const [year, setYear] = useState('');
    const [plot, setPlot] = useState('')
    const [showResults, setShowResults] = useState(false);

    // useEffect(()=> {
    //    console.log("RENDERING")
    //     }, [movies])

    const handleFormSubmit = async (event) =>{

        event.preventDefault();
        console.log("clicked the button");

        // setKey("6e280129");

        // if(!searchTerm){
        //     return false;
        // }

        try{
            const response = await fetch(`http://www.omdbapi.com/?apikey=${'6e280129'}&t=${searchTerm}&y=${year}&plot=${plot}`);

            if(!response.ok){
                throw new Error('search error');
            }

            const movieResults = await response.json()
            console.log(movieResults);

            const movieData = ({
                movieId: movieResults.imdbID,
                title: movieResults.Title,
                year: movieResults.Year,
                rating: movieResults.Rated,
                release: movieResults.Released,
                poster: movieResults.Poster,

            });

            console.log(movieData);
            setShowResults(true);
            setMovies(movieData);
            // console.log(movies);
            setShowResults(true)


        }catch (err){
            console.log(err);
        }
    }


    // const handleFavMovie = async(movieId) => {

    //     const movieToFav = movies.find((movie) => movie.movieId === movieId);
    
    //     try{
    //         setFaveMovies([...favMovies, movieToFav]);
    //     }catch(err){
    //         console.log(err);
    //     };
    // }

    return(
        <div>
            <h1>Use the form below to search for a movie!</h1>
        <form onSubmit={handleFormSubmit}>

            <label>Title</label>
            <input name = 'searchTerm' 
            value = {searchTerm} 
            onChange= {(e) => setSearchTerm(e.target.value)}
            type = "text"
            placeholder='enter movie title'
            />      
             <label>Year</label>
            <input name = 'searchTerm' 
            value = {year} 
            onChange= {(e) => setYear(e.target.value)}
            type = "text"
            placeholder='enter movie year'
            />    
            <label>Plot</label>
            <select value={plot} onChange= {(e) => setPlot(e.target.value)}>
            <option value="short">Short</option>
            <option value="long">Long</option>
          </select> 

          <button type="submit" >
             Search
          </button>          

        </form>
  
      
      {showResults ? <DisplayMovie data={movies}/> : <h3>No Movie Found!</h3>}
      
      
    </div>

   
    );
};

export default Container;

