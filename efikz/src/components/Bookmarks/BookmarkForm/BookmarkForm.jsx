import React, { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid';
import './BookmarkForm.css';
import PropTypes from 'prop-types';
import { XCircle } from '@phosphor-icons/react';

const BookmarkForm = (props) => {
    const [bmTitle, setBmTitle] = useState('');
    const [bmLink, setBmLink] = useState('');
    const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBookmark({ id: uuid(), bmTitle: bmTitle, bmLink: bmLink })
    }

    const closeFormHandler = () => {
        props.closeForm()
    }

    useEffect(() => {
        titleRef.current.focus();
    }, [])

    return (
        <section className="bookmark-form">
            <div className="card">
                <XCircle size={24}
                    className="bookmark-form-btn-close"
                    onClick={closeFormHandler} />
                <form
                    onSubmit={handleSubmit}
                >

                    <div className="bookmark-form-control">
                        <label htmlFor="">
                            Título
                        </label>
                        <input
                            id="bmTitle"
                            type="text"
                            onChange={e => setBmTitle(e.target.value)}
                            ref={titleRef}
                        />
                    </div>
                    <div className="bookmark-form-control">
                        <label htmlFor="">
                            Enlace
                        </label>
                        <input
                            id="bmLink"
                            type="text"
                            onChange={e => setBmLink(e.target.value)}
                        />
                    </div>
                    <button
                        className="bookmark-form-btn-add"
                        type="submit"
                    >
                        Añadir marcador
                    </button>
                </form>
            </div>
        </section>
    )
}

BookmarkForm.propTypes = {
    addBookmark: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
};

export default React.memo(BookmarkForm);