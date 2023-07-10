import Hero from '../hero/Hero'
import './Home.css'
import Latest from '../../components/latest/Latest'
import Foods from '../foods/Foods'

const Home = () => {
    return (
        <div className='home'>
            <div className="hero">
                <Hero />
            </div>
            <div className="latest">
             <Latest/>
            </div>
            <div className="food-home">
                <Foods/>
            </div>

        </div>
    )
}

export default Home
