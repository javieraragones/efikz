import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const BookmarkList = ({ bookmarks, deleteBookmark }) => {
    return (
        <div className={bookmarks ? 'bookmarks-list content-list' : 'bookmarks-err-msg content-list'}>
            {
                bookmarks
                    ? bookmarks.map((bookmark) => (
                        <Bookmark
                            key={bookmark.id}
                            bookmark={bookmark}
                            deleteBookmark={deleteBookmark} />
                    ))
                    :
                    <div id='bookmarks-data-info'>
                        No se han encontrado marcadores guardados
                    </div>
            }
        </div>
    )
}

BookmarkList.propTypes = {
    bookmarks: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]).isRequired, // Validar que bookmarks sea un array o string y sea requerido
    deleteBookmark: PropTypes.func, // Validar que deleteBookmark sea una función y sea requerido
};

export default BookmarkList