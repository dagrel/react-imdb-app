import React, { useState, useEffect, } from 'react'
import useSortableData from "../CustomHooks/TableSort"
import styled from '@emotion/styled';
import TableFilter from "../CustomHooks/TableFilter";

const MoviesTable = () => {

    const [movieData, setMovieData] = useState([])
    const [value, setValue] = useState(null)


    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {

        const url = `http://www.omdbapi.com/?s=covid&y=2020&apikey=616df5e1`
        try {
            const response = await fetch(url);
            const result = await response.json();

            setMovieData(result.Search)

        } catch (error) {
            console.log(error);
        }
    }

    const MTable = styled.table`
        border-collapse: collapse; 
        width: 80%; 
        border: 1px solid #ddd; 
        font-size: 14px; 
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

    const TheadButton = styled.button`
        border: 0;
        border-radius: none;
        font-family: inherit;
        font-weight: 700;
        font-size: inherit;
        padding: 0.5em;
        margin-bottom: 1px;
    `
    useEffect(() => {
        if (value === "movie") {
            console.log("filmtabell")
        } else if (value === "series") {
            console.log("serie tabell")
        }
        else {
            console.log("tabell med begge")
        }
    }, [value])

    const ProductTable = () => {

        const { items, requestSort, sortConfig } = useSortableData(movieData)
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        }

        const resetFilter = () => {
            setValue(null)
        }

        return (
            <>
                <h3>Filmer eller serier som inneholder ordet "Covid" fra 2020</h3>

                <div style={{ width: 200 }}>
                    <TableFilter options={movieData}
                        prompt="Velg type..."
                        value={value}
                        onChange={val => setValue(val)} />
                    <div><button onClick={resetFilter}>Nullstill filter</button></div>
                </div>
                <br />

                <MTable>
                    <thead>
                        <Mtr >
                            <MTh><button type="button" className={getClassNamesFor('Title')} onClick={() => requestSort('Title')}>Tittel</button></MTh>
                            <MTh><button type="button" className={getClassNamesFor('Year')} onClick={() => requestSort('Year')}>År</button></MTh>
                            <MTh><button type="button" className={getClassNamesFor('imdbID')} onClick={() => requestSort('imdbID')}>IMDB ID</button></MTh>
                            <MTh><button type="button" className={getClassNamesFor('Type')} onClick={() => requestSort('Type')}>Type</button></MTh>
                            <MTh>Detaljer</MTh>
                        </Mtr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.imdbID}>
                                <MTd>{item.Title}</MTd>
                                <MTd>{item.Year}</MTd>
                                <MTd>{item.imdbID}</MTd>
                                <MTd>{item.Type}</MTd>
                                <MTd>Open modal</MTd>
                            </tr>
                        ))}
                    </tbody>
                </MTable>
                <br />
            </>
        );
    }

    return (
        <>
            {ProductTable()}
        </>

    )
}
export default MoviesTable
