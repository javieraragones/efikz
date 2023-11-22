import PropTypes from 'prop-types';
import { TrashSimple } from '@phosphor-icons/react';
import './Bookmark.css'

const Bookmark = ({ bookmark, deleteBookmark }) => {


    const getTitle = (url) => {
        const regex = /\/\/(.*?)\./;
        const match = url.match(regex);
        if (match && match.length > 1) {
            return capitaliceFirstLetter(match[1]);
        } else {
            return null;
        }
    }

    const capitaliceFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        bookmark && bookmark.bmLink !== ''
            ?
            <li key={bookmark.id} style={{ listStyle: 'none' }} className='bookmark-item-box'>
                <a href={bookmark.bmLink} className='bookmark-item'
                    target='_blank' rel='noreferrer'
                    style={{ textDecoration: 'none' }}
                >
                    <div className='bookmark-img-container'>
                        <img className='bookmark-img'
                            src={
                                bookmark.bmLink
                                    ? "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + bookmark.bmLink + "&size=24"
                                    : 'https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
                            }
                            alt='bookmark img'>
                        </img>
                    </div>
                    <h5 className='bookmark-title'>
                        {
                            bookmark.bmTitle && bookmark.bmTitle !== ''
                                ? bookmark.bmTitle
                                : getTitle(bookmark.bmLink)
                        }</h5>
                </a>
                <TrashSimple size={18} weight="bold"
                    className='btn-delete-bookmark'
                    onClick={() => deleteBookmark(bookmark.id)}
                />
            </li>
            : ''
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        id: PropTypes.string.isRequired,
        bmTitle: PropTypes.string.isRequired,
        bmLink: PropTypes.string.isRequired,
    }).isRequired,
    deleteBookmark: PropTypes.func.isRequired,
};

export default Bookmark