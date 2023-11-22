import './News.css'
import { useEffect, useState } from 'react'
import { ArrowCounterClockwise } from '@phosphor-icons/react';


const API_KEY = 'pub_3191650c3847940a1346ccde2a3cd5a9ba707'
const URL = `https://newsdata.io/api/1/news?country=es&category=technology&apikey=${API_KEY}`;
const options = {
    method: 'GET',
};


export const NewsBox = () => {
    const [news, setNews] = useState([''])
    const [loadingNews, setLoadingNews] = useState(false);
    const [nextPage, setNextPage] = useState('')

    const NEXT_PAGE_URL = `${URL}&page=${nextPage}`


    const getNews = async () => {
        setLoadingNews(true);
        await fetch(URL, options)
            .then(response => {
                if (response.status !== 200) {
                    setNews('');
                    setLoadingNews(false);
                    console.log("Error al obtener noticias")
                    return false;
                }
                response.json()
                    .then(result => {
                        setLoadingNews(false);
                        const firstNews = removeDuplicateNews(result.results)
                        setNews(firstNews)
                        setNextPage(result.nextPage)
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    const getSecondPageNews = async () => {
        await fetch(NEXT_PAGE_URL, options)
            .then(response => {
                if (response.status !== 200) {
                    setLoadingNews(false);
                    console.log("Error al obtener noticias de la segunda página")
                    return false;
                }
                response.json()
                    .then(result => {
                        const firstNews = result.results
                        setNews(prevNews => [...prevNews, ...firstNews]);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    const removeDuplicateNews = (newsArray) => {
        // Crear un objeto para realizar un seguimiento de los títulos vistos
        const seenTitles = {};
        // Filtrar el array de noticias para eliminar duplicados
        const uniqueNews = newsArray.filter((article) => {
            // Verificar si el título ya ha sido visto
            if (!seenTitles[article.title] /*&& article.image_url*/) {
                // Si no ha sido visto, marcar como visto y mantener la noticia
                seenTitles[article.title] = true;
                return true;
            } else {
                // Si el título ya ha sido visto, omitir la noticia
                return false;
            }
        });
        return uniqueNews;
    };

    useEffect(() => {
        // Llama a tu función para obtener las noticias y actualiza el estado "news"
        getNews();
        getSecondPageNews()
    }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez al montar el componente

    return (
        <div className="news-box content-box">
            <div className='box-title-row'>
                <h2 className='news-title category-title'>Noticias</h2>
            </div>
            <div className='news-container box-content-row'>
                <div className='news-list content-list'>

                    {
                        loadingNews
                            ? <h4 className="loading-news">Cargando noticias...</h4>
                            :
                            news
                                ? removeDuplicateNews(news).map((article, index) => (
                                    <li key={index} className='new-item' style={{ listStyle: 'none' }}>
                                        <a href={
                                            article.link
                                                ? typeof article.link === 'string' ? article.link : '/'
                                                : '#'
                                        }
                                            target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                                            <div className="new-card">
                                                <div className="new-img">
                                                    <img src={
                                                        article.image_url
                                                            ? article.image_url
                                                            : 'https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
                                                    } alt="New image" />
                                                </div>
                                                <div className="new-textBox">
                                                    <div className="new-textContent">
                                                        <p className="new-title">{article.title}</p>
                                                        <span className="new-time"></span>
                                                    </div>
                                                    <p className="new-desc">{article.description}</p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))
                                : ''
                    }
                    <div className='arrow-down-container'>
                        {/*
                    <ArrowDown size={42} className='arrowdown-icon todo-icon' />
                */}
                    </div>
                </div>

            </div>
            <div className='action-buttons-row'>
                <ArrowCounterClockwise size={42} id="reload-icon" onClick={getNews} />
            </div>

        </div>
    )
}
