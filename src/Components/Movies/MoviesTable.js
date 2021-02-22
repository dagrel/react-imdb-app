import React, { useState, useEffect, } from 'react'
import useSortableData from "../CustomHooks/TableSort"
import DetailedViewModal from './DetailedViewModal';
import useModal from '../CustomHooks/useModal';
import TableFilter from "../CustomComponents/TableFilter";
import { MTable, Mtr, MTh, MTd } from "./Styling";

const MoviesTable = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState(null)
    const { toggle, visible } = useModal();

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const url = `http://www.omdbapi.com/?s=covid&y=2020&apikey=616df5e1&`
        try {
            const response = await fetch(url);
            const result = await response.json();

            setData(result.Search)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (value === "movie") {
            let movieArray = [...data]
            const result = movieArray.filter(ele => ele.Type === "movie")
            setData(result)

        } else if (value === "series") {
            let seriesArray = [...data]
            const result = seriesArray.filter(ele => ele.Type === "series")
            setData(result)
        }
        else {
            console.log("tabell med begge")
        }
    }, [value])

    const ProductTable = () => {

        const { items, requestSort, sortConfig } = useSortableData(data)
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        }

        const resetFilter = () => {
            setValue(null)
            getData()
        }

        const testClick = (i) => {
            console.log(i)
        }

        return (
            <>
                <h3>Filmer eller serier som inneholder ordet "Covid" fra 2020</h3>

                <div style={{ width: 200 }}>
                    <TableFilter options={data}
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
                        {items.map((item, i) => (
                            <tr key={i}>
                                <MTd>{item.Title}</MTd>
                                <MTd>{item.Year}</MTd>
                                <MTd>{item.imdbID}</MTd>
                                <MTd>{item.Type}</MTd>
                                <MTd><button onClick={toggle}>Detaljer</button>
                                    <DetailedViewModal visible={visible} toggle={toggle} id={item.imdbID} />
                                </MTd>
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
