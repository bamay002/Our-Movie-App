import React from "react";

import NavBar from "./Components/NavBar";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Components/Context";

document.title = "MovieApp";

function App() {
    const userData = [
        // {
        //     Title: "Avatar",
        //     Year: "2009",
        //     imdbID: "tt0499549",
        //     Type: "movie",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        // },
        // {
        //     Title: "Avatar: The Way of Water",
        //     Year: "2022",
        //     imdbID: "tt1630029",
        //     Type: "movie",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
        // },
        // {
        //     Title: "Avatar: The Last Airbender",
        //     Year: "2005-2008",
        //     imdbID: "tt0417299",
        //     Type: "series",
        //     Poster: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
        // },
        // {
        //     "Title": "The King's Avatar",
        //     "Year": "2019",
        //     "imdbID": "tt10732794",
        //     "Type": "series",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg"
        // },
    ];

    return (
        <>
            <Context.Provider value={userData}>
                <Router>
                    <NavBar />
                </Router>
            </Context.Provider>
        </>
    );
}

export default App;
