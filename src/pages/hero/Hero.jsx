import './Hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='hero-section'>
            <div className='hero-title'>
                <h1>
                    We do not cook, <br /> we create your emotions!
                </h1>
                <p> whether you're craving comfort food on a rainy day, planning a gathering with friends, or simply too busy to cook, let our food delivery app be your trusted companion. Enjoy a world of flavors, convenience, and culinary satisfaction at your fingertips</p>
             <button className='order-now-btn' onClick={()=>navigate('/foods')}>Order now</button>
            </div>
            <div className='hero-image'>
                <img src='https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/food1.png' alt="" />
            </div>

        </div>
    )
}

export default Hero
