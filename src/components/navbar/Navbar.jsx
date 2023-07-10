import { NavLink } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import cart_icon from '../../images/food-cart-icon.png'
import './Navbar.css'
import { useSelector } from "react-redux"
import { useState } from "react"

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const cart = useSelector(state => state.cart)
    const handleChangeMenu = () => {
        setMenu(!menu)
    }
    return (
        <nav className={menu ? 'nav-bar expand' : 'nav-bar'}>
           
            <div className={menu ? 'nav-1 visible' : 'nav-1'} >

                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/about' className='nav-link'>About</NavLink>
                <NavLink to='/foods' className='nav-link'>Foods</NavLink>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
            </div>
            <div className="nav-2">
                <div className="cart-icon">
                    <NavLink to='/cart' className='nav-link cart-link' > <img src={cart_icon} alt="" /> </NavLink>
                    <span>{cart.length}</span>
                </div>
                <button className="menu" onClick={handleChangeMenu}>{menu ? <CloseIcon /> : <MenuIcon />}</button>
            </div>
        </nav>
    )
}

export default Navbar
