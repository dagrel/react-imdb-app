import React, { useState, useEffect } from 'react';
import Modal from "../CustomComponents/Modal"

const DetailedViewModal = ({ visible, toggle, id }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            if (visible) {
    
                const url = `http://www.omdbapi.com/?i=${id}&apikey=616df5e1`
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    console.log(result)
                    setData(result)
    
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getMovie()
    }, [])

    

    const modalBody = () => {
        return (
            <>
                <h1>{id}</h1>
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