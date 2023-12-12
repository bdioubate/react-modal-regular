import React from "react"

//assets
import close from './close.png'

const  Modal = ({ message = 'Write your personalized message !' }) => {

    //CSS
    const containerModalStyles = {
        backgroundColor: 'rgba(0,0,0,0.75)',
        zIndex: '500',
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        display: 'grid',
        placeItems: 'center',
    }

    const modalStyles = {
        position: 'relative',
        zIndex: '501',
        backgroundColor: '#ffffff',
        maxWidth: '500px',
        boxSizing: 'border-box',
        width: '90%',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '40px',
    }

    const btnCloseStyles = {
        position: 'absolute',
        top: '-12.5px',
        right: '-12.5px',
        display: 'block',
        width: '40px',
        height: '40px',
        background: 'none',
        cursor: 'pointer',
        border: 'none',
    }

    const imgBtnCloseStyles = {
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url(data:${close})`,
    }

    //Function
    const CloseModal = () => {
        const containerModal = document.querySelector('.container-modal')
        containerModal.style.display = 'none'
    }

    return CloseModal && (
        <div className="container-modal" style={containerModalStyles}>
            <div className="modal" style={modalStyles}>
                <button className="modal-close" style={btnCloseStyles} onClick={CloseModal}><span style={imgBtnCloseStyles}></span></button>
                <p>{ message }</p>
            </div>
        </div>
    )
} 

export default Modal