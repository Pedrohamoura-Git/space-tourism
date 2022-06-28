import { MainButton } from '../../components/Navbar/Buttons/MainButton';
import './index.scss';

export default function Home() {
    return (
        <main className="home-container">
            <h1 className="title">
                <p className="small">
                    So, you want to travel to
                </p>
                <p className="big">
                    Space
                </p>
            </h1>
            
            <p className="description">
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>

            <MainButton 
                name="Explore" 
                className="main-button"
            />
        </main>
    )
}