import './_index.scss';

export default function destination() {
    return (
        <main className="destination">
            <div className="wrapper">
                <div className='content'>
                    <section className='hero'>
                        <h1>01</h1><span>Pick Your Destination</span>

                        <div className='celestial-bodies'>
                            <img alt="celestial body" className='celestial-bodies__img' />

                            <ul className='celestial-bodies__list'>
                                <li>Moon</li>
                                <li>Mars</li>
                                <li>Europa</li>
                                <li>Titan</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section className='description'>
                        <h2 className='Title'>{`Moon`}</h2>
                        <p className='cta'>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                    </section>

                    <hr className='divider'/>
                
                    <section className='travel'>
                        <h3 className='travel__distance'>
                            <p>AVG. DISTANCE</p>
                            <p className='travel__distance--number'>384,400 km</p>
                        </h3>
                        <h3 className='travel_time'>
                            <p>Est. travel time</p>
                            <p className='travel_time--number'>3 days</p>
                        </h3>
                    </section>
                </div>

            </div>
        </main>
    )
}