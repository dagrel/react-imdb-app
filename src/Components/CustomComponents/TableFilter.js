import React, { useState, useMemo } from 'react';
import "./styles.css"

const TableFilter = ({options, prompt, value, onChange}) => {

    // console.log(options.map(option => option.imdbID))
    const [filterOptions, setFilterOptions] = useState([])
    const [open, setOpen] = useState(false)

    // funksjon som filtrerer evt duplikate variabler i arrayet
    useMemo(() => {
        let optionsArray = options.map(option => {
            return option.Type
        })
        let uniqueOptions = Array.from(new Set(optionsArray))

        setFilterOptions(uniqueOptions)
    }, [options])

    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen(prev => !prev)}>
                <div className="selected-value">{value ? value : prompt}</div>
                <div className={`arrow ${open ? "open" : null}`}/>
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {filterOptions.map(option => 
                <div key={option} className={`option ${value === option ? "selected" : null}`} 
                    onClick={() => {
                        onChange(option)
                        setOpen(false)
                    }}>{option}</div>)
                }
            </div>
        </div>
    );
};

export default TableFilter;