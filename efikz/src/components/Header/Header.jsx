import './Header.css'
import { GearSix, List, User } from "@phosphor-icons/react";
import { InfoBox } from '../Info/Info';

export const Header = () => {
    return (
        <div className="header-box">
            <header className="HEADER">
                <div className="left-icons header-icons">
                    <List size={32} className='header-icon hidden' />
                </div>
                <div className="logo">EFIKZ</div>
                <div className='right-icons header-icons'>
                    {
                        /*
                        <GearSix size={32} className='header-icon  hidden' />
                        <User size={32} className='header-icon  hidden' />
                        */
                    }
                    <InfoBox />
                </div>
            </header>
        </div>
    );
};