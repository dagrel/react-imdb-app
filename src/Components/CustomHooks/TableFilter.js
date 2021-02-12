import { type } from 'jquery';
import React, { useState } from 'react';
//import "./styles.css"

const TableFilter = (movies) => {

    const checkForType = () => {
        movies.movies.map(movie => {
            if (movie.Type === "movie") {
                return "Movie"
            } else {
                return "Series"
            }
        })
    }

    const typendaa = () => {
        console.log(movies.movies)
            if (movies.movies.Type === "dsaasd") {
                return "Movie"
            } else {
                return "serieeeee"
            }
    }
    console.log(typendaa())



    return (
        <div className="dropdown">
            <h1>{checkForType()}</h1>
            <div className="control">
                <div className="selected-value">Velg type</div>
                <div className="arrow" />
            </div>
            <div className="options"> 
                {/* {
                    movies.movies.map(movie => <div className="option">{movie.Type}</div>)
                } */}
                {
                    // movies.movies.filter(movie => movie.Type === "series")
                    // movies.movies.map(movie => <div className="option">{movie.Type}</div>)
                }
            </div>
        </div>
    );
};

export default TableFilter;