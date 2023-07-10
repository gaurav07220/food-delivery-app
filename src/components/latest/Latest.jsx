import { useDispatch } from "react-redux"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import './Latest.css'
import { addFoods } from "../../store/FoodSlice";
import { data } from '../../data'

const Latest = () => {
    const dispatch = useDispatch();

    const burgerOnly = data.filter(item => item.category === 'burger');
    const pizzazOnly = data.filter(item => item.category === 'pizza');
    console.log(pizzazOnly)

    return (
        <div className="latest-nav">
           
            <div onClick={() => dispatch(addFoods(data))} className="category-text">
                <FoodBankIcon/>
                <span>All</span>
            </div>
            <div onClick={() => dispatch(addFoods(burgerOnly))} className="category-text">
                <LunchDiningIcon />
                <span>Burger</span>
            </div>
            <div onClick={() => dispatch(addFoods(pizzazOnly))} className="category-text">
                <LocalPizzaIcon />
                <span>Pizza</span>
            </div>
        </div>
    )
}

export default Latest
