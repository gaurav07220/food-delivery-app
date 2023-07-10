import './Food.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../data.js'
import { addFoods } from '../../store/FoodSlice';
import { addItems } from '../../store/CartSlice';

const Foods = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const { foodData } = useSelector(state => state.foods);
    

    useEffect(() => {
        dispatch(addFoods(data))
    }, [dispatch])

    const handleAddFood = (item) => {
        let isAdded = cart.find(val => val.id === item.id);
        if (isAdded) {
            window.alert('Already Added')
        } else {
            dispatch(addItems(item))
        }
       
    }

    return (

        <div className='food-list'>

            {
                foodData.map((item) => {
                    return (

                        <div key={item.id} className='food' >

                            <img src={item.img} width='15%' alt="" />
                            <p className='food-name'>{item.name}</p>
                            <div className='food-footer'>
                                <span className="food-price">$ {item.price}</span>
                                <span>Delivery free</span>
                            </div>


                            <button className='add-food' onClick={() => handleAddFood(item)}> Add </button>


                        </div>
                    )
                })
            }

        </div>
    )
}

export default Foods
