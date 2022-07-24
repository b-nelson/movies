// const { format } = require("prettier");
console.log ("using veet");
//user completes form
//click submit button - event listener will call function; read values with variables created disable and clear form
//data gets validated - if statements, write url data using form fields
//take data and pass to api - fetch statement
//if response, display title, year, rating, release date, and poster underneath form append to page
//title - h2, year - h3, rating - h3, release date - h3, poster - img url
//if no response, display an error message
//h1 - ERROR MESSAGE
//re-enable forms and buttons
//remove previous search results
//for validation, must have Title or IMDB ID, short or long plot... optional is year greater than 1928
//less than or equal to current year
document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
    var movie = document.getElementById("movie").value;
    var years = document.getElementById("years").value;
    var plots = document.getElementById("plots").value;
    var form = document.getElementById('form');
    var apiKey = document.getElementById('apiKey').value;

    if(apiKey && movie && plots){
        // grabber
        movieCall();
    }
    else{
        // write error message function here;
        var wrong = document.getElementById('wrong');
        wrong.textContent = 'Error.  Missing Required Search Criteria.  Try Again';
        console.log('error message');
    }
    function movieCall(){
        var apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}&y=${years}&plot=${plots}`
        fetch(apiUrl)
  .then( response => {
    if (!response.ok) {
        var apiError = document.getElementById('apiError');
        error.textContent = 'No Search Results.  Please Try Again';
        console.log('error message');  
      throw new Error(`HTTP error: ${response.status}`);
    }
console.log(response);
    return response.json();
  })
  .then( movieData => {console.log(movieData)
//display title, year, rating, release date, poster 
//   var pic = json[Math.floor(Math.random()*json.length)];
     var poster = document.getElementById('poster');
     poster.setAttribute("src", movieData.Poster);
     var identity = document.getElementById('identity');
     identity.textContent = movieData.Title;
     var date = document.getElementById('date');
     date.textContent = movieData.Year;
     var rate = document.getElementById('rate');
     rate.textContent = movieData.Rated;
     var release = document.getElementById('release');
     release.textContent = movieData.Released;
     console.log(movieData.Title);
     console.log(movieData.Year);
     console.log(movieData.Rated);
     console.log(movieData.Released);
     console.log(movieData.Poster);
}
  );
    }
    
    form.reset();
})