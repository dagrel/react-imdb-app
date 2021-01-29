import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled';
//import { Button, ButtonTwo } from "../StyledComponents/StyledComponents"

const MoviesTable = () => {

    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {

        const url = `http://www.omdbapi.com/?s=code&y=2020&apikey=616df5e1`
        try {
            const response = await fetch(url);
            const result = await response.json();

            setMovieData(result.Search)

        } catch (error) {
            console.log(error);
        }
    }

    const renderMovies = (item, index) => {
        return (
            <tr key={index}>
                <titleButton>
                    <MTd>{item.Title}</MTd>
                </titleButton>

                <MTd>{item.Year}</MTd>
                <MTd>{item.imdbID}</MTd>
                <MTd>{item.Type}</MTd>
                {/* <td>{item.Poster}</td> */}
            </tr>
        )
    }

    const titleButton = styled.button`
       
        text-decoration: underline;
        cursor: pointer;
    `


    const MTable = styled.table`
        border-collapse: collapse; 
        width: 80%; 
        border: 1px solid #ddd; 
        font-size: 18px; 
        `

    const MTh = styled.th`
        text-align: left; 
        padding: 12px;
         
        `
    const MTd = styled.td`
        text-align: left; 
        padding: 12px; 
        border-bottom: 1px solid #ddd;
        
        `

    const Mtr = styled.tr`
        border: 1px solid grey;
        `

    return (
        <>
            <h3>Filmer eller serier som inneholder ordet "Code" fra 2020</h3>
            <Fragment>
                <MTable>
                    <thead>
                        <Mtr >
                            <MTh>Tittel</MTh>
                            <MTh>År</MTh>
                            <MTh>Imdb ID</MTh>
                            <MTh>Type</MTh>
                            {/* <th>Bilde</th> */}
                        </Mtr>
                    </thead>
                    <tbody>
                        {movieData.map(renderMovies)}
                    </tbody>
                </MTable>
            </Fragment>
        </>
    )
}
export default MoviesTable
