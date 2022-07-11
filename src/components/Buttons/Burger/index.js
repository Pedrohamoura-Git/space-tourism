import './_index.scss';

export const Burger = ({toggleBurger, isActive}) => {

  return (
    <div className='burger-wrapper'>
        <button 
            className={`hamburger hamburger--criss-cross ${isActive ? 'active': '' }`} 
              type="button"
              onClick={event => toggleBurger(!isActive)}
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
