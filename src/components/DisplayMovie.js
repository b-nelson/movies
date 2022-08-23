import React from 'react';

const DisplayMovie = ({data}) => {

    // const [movie, setMovie] = useState('');
    // setMovie(data); 

   return( 
   <div>
    <h3>Movie Title: {data.title}</h3>
    <h3>Movie Year: {data.year}</h3> 
    <h3>Movie Rating: {data.rating}</h3>
    <h3>Movie Release Date: {data.release}</h3>
    <img src={data.poster} alt= "text here"/>

   </div>
   );
};


export default DisplayMovie;