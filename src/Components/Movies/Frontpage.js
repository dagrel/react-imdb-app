//import styled from '@emotion/styled';
import { Button, ButtonTwo } from "../StyledComponents/StyledComponents"
import React, { useState, useEffect } from 'react'
import MoviesTable from "./MoviesTable"

const FrontPage = () => {

    const doShit = () => {
        console.log("click!")
    }

    return (
        <>
            {/* <Button title={"Lagre"} color="lightblue" onClick={doShit} />
            <Button title={"Lukk"} color="lightgrey" />
            <button backgroundcolor="blue" onClick={doShit}>yo</button>
            <ButtonTwo title={"tdsadsadsa"} color="lightblue" onClick={doShit} /> */}

            <MoviesTable />

        </>
    )
}
export default FrontPage
