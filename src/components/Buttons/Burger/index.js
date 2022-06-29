import { useState } from 'react';

import './_index.scss';

export const Burger = () => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='burger-wrapper'>
        <button 
            className={`hamburger hamburger--criss-cross ${isActive ? 'active': '' }`} 
            type="button" 
            onClick={ () => setIsActive(!isActive) }
            >
            <div className="inner">
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </div>      
        </button>  
    </div>
)
}
