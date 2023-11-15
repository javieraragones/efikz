import { PlusCircle } from '@phosphor-icons/react';
import './Bookmarks.css'
import { useEffect, useState } from 'react';
import BookmarkList from './BookmarkList/BookmarkList'
import BookmarkForm from './BookmarkForm/BookmarkForm'

export const BookmarksBox = () => {
    const [bookmarks, setBookmarks] = useState('')
    const [showForm, setShowForm] = useState(false);

    //Función para agregar un marcador a la lista de marcadores
    const addBookmark = (bookmark) => {
        setBookmarks(prevBookmarks => [
            ...prevBookmarks,
            {
                id: bookmark.id,
                bmTitle: bookmark.bmTitle,
                bmLink: bookmark.bmLink,
            }
        ]);
        setShowForm(false);
    }
    //Función para eliminar marcadores pasando su id
    const deleteBookmark = (id) => {
        const newBookmarks = prevBookmarks => (
            prevBookmarks.filter(bookmark => bookmark.id !== id)
        )
        setBookmarks(newBookmarks);
    }
    //Abrir formulario
    const openForm = () => {
        setShowForm(true);
    }
    //Cerrar formulario
    const closeForm = () => {
        setShowForm(false);
    }

    //useEffect para obtener la lista de marcadores
    useEffect(() => {
        const json = localStorage.getItem("bookmarks");
        const loadedBookmarks = JSON.parse(json);
        if (loadedBookmarks) {
            setBookmarks(loadedBookmarks)
        }
    }, []);

    //useEffect para guardar marcador
    useEffect(() => {
        const json = JSON.stringify(bookmarks);
        localStorage.setItem("bookmarks", json);
    }, [bookmarks])

    //console.log("Marcadores->", bookmarks);

    //Función para ocultar el formulario al realizar click fuera de él
    const handleClickOutsideForm = (e) => {
        if (showForm && e.target.closest(".bookmark-form") === null) {
            setShowForm(false);
        }
    };

    return (
        <div className="bookmarks-box content-box">
            <div className='box-title-row'>
                <h2 className='bookmarks-title category-title'>Marcadores</h2>
            </div>
            <div className='bookmarks-container box-content-row' onClick={handleClickOutsideForm}>
                {
                    showForm
                        ?
                        <div className='bookmark-form-list'>
                            <BookmarkForm
                                addBookmark={addBookmark}
                                closeForm={closeForm}
                            />
                            <BookmarkList
                                bookmarks={bookmarks}
                                deleteBookmark={deleteBookmark}
                                openForm={openForm} />
                        </div>
                        :
                        <BookmarkList
                            bookmarks={bookmarks}
                            deleteBookmark={deleteBookmark}
                            openForm={openForm} />
                }
                <div className='arrow-down-container'>
                </div>
            </div>
            <div className='action-buttons-row'>
                <PlusCircle size={42}
                    className='main-action-btn add-btn'
                    onClick={openForm} />
            </div>
        </div >
    );
};