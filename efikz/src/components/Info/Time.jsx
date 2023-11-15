import { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [date, setDate] = useState('')
    const updateTime = () => {
        const now = new Date();

        const timeZone = "Europe/Madrid";

        const formattedTime = now.toLocaleTimeString('es-ES', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
        });
        setCurrentTime(formattedTime);

        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const dateEs = now.toLocaleDateString('es-ES', { ...options, timeZone });
        const capitalizedDate = dateEs.charAt(0).toUpperCase() + dateEs.slice(1);
        setDate(capitalizedDate);
    };

    useEffect(() => {
        updateTime(); // Actualiza la hora al principio
        const intervalId = setInterval(updateTime, 1000); // Actualiza la hora cada segundo

        return () => {
            clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
        };
    }, []);

    return (
        <div className="currentTime-widget">
            <div className="time-info">
                {currentTime}
            </div>
            <div className='horizontal-spacer'></div>
            <div className="date-info">
                {date}
            </div>
        </div>
    );
}

export default Time;
