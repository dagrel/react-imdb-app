import React, { useState, useEffect } from 'react';
import Modal from "../CustomComponents/Modal"

const DetailedViewModal = ({ visible, toggle, id }) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getMovie = async () => {
            if (visible) {
                const url = `http://www.omdbapi.com/?i=${id}&apikey=616df5e1`
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    console.log(result)
                    setData(result)
                    setLoading(false)

                } catch (error) {
                    console.log(error);
                }
            }
        }
        getMovie()
    }, [visible, id])



    const modalBody = () => {

        if (loading) return <h1>LASTER...</h1>
        return (
            <>
                <h3>{data.Title}</h3>
                <p><b>Type : </b>{data.Type.charAt(0).toUpperCase() + data.Type.slice(1)}</p>
                <p><b>Released : </b> {data.Released}</p>
                <p><b>Rated : </b> {data.Rated}</p>
                <p><b>Runtime : </b> {data.Runtime}</p>
                <p><b>Genre : </b> {data.Genre}</p>
                <p><b>Key actors : </b> {data.Actors}</p>
                <p><b>Language : </b> {data.Language}</p>
                <p><b>Country : </b> {data.Country}</p>
            </>
        )
    }

    return (
        <>
            <Modal visible={visible} toggle={toggle} body={modalBody()} />
        </>
    )
}
export default DetailedViewModal;