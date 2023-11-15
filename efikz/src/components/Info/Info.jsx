import './Info.css'
import Time from './Time'
import Weather from './Weather'

export const InfoBox = () => {

    return (
        <div className="info-box">
            <div className='info'>
                <div className='info-time'>
                    <Time />
                </div>
                <div className='vertical-spacer'></div>
                <div className='info-weather'>
                    <Weather />
                </div>
            </div>
        </div>
    )
}







