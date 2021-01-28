import React, { useState, useEffect, Fragment } from 'react'

const MoviesTable = () => {

    const [movieData, setMovieData] = useState('')

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {

        const url = `http://www.omdbapi.com/?s=code&y=2020&apikey=616df5e1`
        try {
            // let measurements = [];
            const response = await fetch(url);
            const result = await response.json();
            // result.map((element) => {
            //     measurements.push(element)
            // })
            setMovieData(result.Search)
        } catch (error) {
            console.log(error);
        }
    }

    const movieBody = () => {
        return (
            <tr >
                <td>{movieData.Title}</td>
                <td>{movieData.Year}</td>
                <td>{movieData.imdbID}</td>
                <td>{movieData.Type}</td>
                {/* <td>{movieData.Title}</td>
                <td>{movieData.Title}</td>
                <td>{movieData.Title}</td>
                <td>{movieData.Title}</td> */}
            </tr>
        )
    }

    return (
        <>
        <h3>Liste med filmer som inneholder ordet "Code" fra 2020</h3>
            <Fragment>
                <table id="myTable">
                    <thead>
                        <tr className="header">
                            <th>Tittel</th>
                            <th>År</th>
                            <th>Imdb ID</th>
                            <th>E-post</th>
                            <th>Telefon</th>
                            <th>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieBody()}
                    </tbody>
                </table>
            </Fragment>
        </>

    )



}
export default MoviesTable
