import React, { useState, useMemo } from 'react';
import "./styles.css"

const TableFilter = ({options, prompt, value, onChange}) => {

    // console.log(options.map(option => option.imdbID))
    const [filterOptions, setFilterOptions] = useState([])
    const [open, setOpen] = useState(false)
    const [stateValue, setStateValue] = useState(value)

    // funksjon som filtrerer evt duplikate variabler i arrayet
    useMemo(() => {
        let optionsArray = options.map(option => {
            return option.Type
        })
        let uniqueOptions = Array.from(new Set(optionsArray))

        setFilterOptions(uniqueOptions)
    }, [options])

    const resetFilter = () => {
        setStateValue(null)
       // getData()
    }

    return (
        <div className="dropdown" style={{width:200}}>
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
            <div><button onClick={resetFilter}>Nullstill filter</button></div>
            <br />
        </div>
        
    );
};

export default TableFilter;