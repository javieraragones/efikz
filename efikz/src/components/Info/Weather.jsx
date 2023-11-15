import { useEffect, useState } from "react";
import './Weather.css';
import { XCircle, MagnifyingGlass, MapPin } from "@phosphor-icons/react";

const apiKey = '32b40b115c47d06fec6b9dc66735a47c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');
    const [loadingWeather, setLoadingWeather] = useState(false);
    const [showBar, setShowBar] = useState(false);

    // 1. Al cargar el componente, intenta cargar la temperatura almacenada en el almacenamiento local.
    useEffect(() => {
        const locationSaved = localStorage.getItem('locationName');
        if (locationSaved) {
            setWeather(JSON.parse(locationSaved));
        }
    }, []);

    // 2. Función para guardar la temperatura en el estado local y el almacenamiento local.
    const saveLocation = (locationData) => {
        setWeather(locationData);
        localStorage.setItem('locationName', JSON.stringify(locationData));
    };

    const search = (e) => {
        e.preventDefault();
        setLoadingWeather(true);
        fetch(`${apiUrl}/weather?q=${query}&units=metric&APPID=${apiKey}`)
            .then(response => {
                if (response.status !== 200) {
                    setWeather('');
                    setLoadingWeather(false);
                    return false;
                }
                response.json()
                    .then(result => {
                        saveLocation(result); // 3. Guarda la temperatura
                        setLoadingWeather(false);
                        setShowBar(false);
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    const setInputRefFocus = (input) => {
        if (input != null) {
            input.focus();
        }
    }

    const openSearchBox = () => {
        setQuery('');
        setShowBar(true);
    }

    const closeSearchBox = () => {
        setShowBar(false);
        setQuery('');
    }
    //localStorage.clear();


    return (
        <div
            className={"weather " + (weather && (weather.main.temp > 15 ? "weather-warm" : null))}
        >
            {showBar
                ?
                <>
                    <div className={"search-box " + (showBar ? "bar-shown" : "bar-not-shown")}>
                        <form onSubmit={search}>
                            <input
                                type="text"
                                id="search-bar"
                                placeholder="Introduce ciudad..."
                                onChange={e => setQuery(e.target.value)}
                                ref={setInputRefFocus}
                                value={query}
                            />
                        </form>
                        <XCircle
                            size={22} weight="bold"
                            className="btn-close"
                            onClick={closeSearchBox}
                        >
                        </XCircle>
                    </div>
                </>
                :

                weather ?
                    <div className="weather-widget">
                        <div className="weather-box">
                            <div className="temp">
                                <div className="celcius">
                                    {weather && Math.round(weather.main.temp)}°C
                                </div>

                            </div>
                            <div className="weather-icon">
                                <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"} alt="weather icon" />
                            </div>
                        </div>
                        <div className="location" onClick={openSearchBox}>
                            <p className="location-text">{weather && weather.name + ", " + weather.sys.country}</p>
                            <MapPin size={18} weight="bold" />
                        </div>
                    </div >
                    :
                    <div className="weather-widget">
                        {
                            loadingWeather ?
                                <h4 className="clean-search">Cargando...</h4>
                                :
                                <div className="search-location"
                                    onClick={openSearchBox}>
                                    <h6 className="clean-search">Establecer localización</h6>
                                    <MagnifyingGlass size={18} weight="bold"
                                    />
                                </div>
                        }
                    </div>

            }


        </div >
    );
}

export default Weather;