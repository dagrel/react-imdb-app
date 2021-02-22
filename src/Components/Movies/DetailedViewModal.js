import React, { useState, useEffect } from 'react';
import Modal from "../CustomComponents/Modal"

const DetailedViewModal = ({ visible, toggle, id }) => {

    useEffect(() => {
        if (visible) console.log(id)
    })

    const modalBody = () => {
        return (
            <>
            <h1>Film info</h1>
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