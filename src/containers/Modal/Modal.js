import React from 'react';
import './Modal.scss'

const Modal = ({children, cta, clickCTA}) => {
    return <React.Fragment>
        <div className="show">
            <div className="modal-overlay" id="modal-overlay"></div>
            <div className="modal" id="modal">
                <div className="modal__content"> {children} </div>
                <div className="modal__cta">
                    <button onClick={clickCTA} className="button button--primary button--large button--modal">{cta}</button>
                </div>
            </div>
        </div>
    </React.Fragment>
};


export default Modal