import "./App.scss"
import {BsFillSearchHeartFill} from "react-icons/bs"
import { useState, useEffect} from "react"

function App() {
    const [movie, setMovie] = useState("avatar")
    const [movies, setMovies] = useState([])
    const [data, setData] = useState("")

    useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=491baf1b&t=${movie}`)
      .then(res => res.json())
      .then(jsonData => setData(jsonData))

    }, [movies])


  return(
    <div className="App">
      <form onSubmit={(e) => {
          e.preventDefault()
          setMovies([...movies, movie]);
  }}
>
  <div className="input_wrapper">
  <input
    type="text"
    placeholder="Search..."
    onChange={(e) => setMovie(e.target.value)}
    value={movie}/>
    <button type="submit" 
        onClick={() => setMovies([...movies, movie])}>
          <BsFillSearchHeartFill />
      </button>
  </div>
</form>
      <div className="movie__wrapper">
        {
          data.Title  ? (
            <>
              <h1>{data.Title}</h1>
              {data.Poster ? (
        <img src={data.Poster} alt={"Movie Poster"} />
      ) : (
        ""
      )}
              <p>{data.Released}</p>
              <p>{data.Language}</p>
              <p>{data.Genre}</p>
            </>
          ) : (
           <h1>Find your favourite movie!</h1>
        )}
      </div>
    </div>
  )
}

export default App