import { useDispatch, useSelector } from "react-redux"
import { addItems, deleteItem, removeItems } from "../../store/CartSlice";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Cart.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    const handleRemove = (id) => {
        dispatch(deleteItem(id))
    }
    if (cart.length <= 0) {
        return <div className="empty-msg">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png" width='250px' alt="" />
            <h1>Cart is Empty !</h1>
            <NavLink to='/foods' className='return-shop'>return to shop</NavLink>
        </div>
    }

    const handleIncrement = (item) => {
        dispatch(addItems(item))
    }

    const handleDecrement = (item) => {
        dispatch(removeItems(item.id))
    }

    const totalPrice = () => {
        let totalAmout = 0;
        cart.forEach(item => {
            totalAmout += item.price * item.quantity;
        })
        return totalAmout;
    }
    const totalAmount = totalPrice();



    return (
        <div className="cart-food-list">
            <div className="cart-child">
                <h2 style={{ textAlign: 'center' }}>Your Food List...</h2>
                {

                    cart.map((item) => {
                        const { name, price, img, id } = item;
                        return (
                            <div key={id} className="cart-item">
                                <img src={img} alt="" />
                                <p className="cart-item-name">{name}</p>
                                <p className="cart-price">$ {price}</p>
                                <div className="cart-quantity">
                                    <button onClick={() => handleIncrement(item)} >+</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                </div>
                                <p onClick={() => handleRemove(item.id)} className="delete-icon"><DeleteForeverIcon /></p>
                            </div>
                        )
                    })

                }
            </div>
            {
                <div className="subtotal">
                    <h2>Subtotal</h2>
                    <div className="subtotao-details">
                        <p>Total Items : {cart.length}</p>
                        <p>Total Price : $ {totalAmount}</p>
                        <p>Discount : $ 10</p>
                        <hr />
                        <p>Final Price : $ {totalAmount - 10}</p>
                    </div>
                    <button className="check-btn" >Order Now</button>
                    <button onClick={() => navigate('/foods')} className="return-btn">Return to shop</button>
                </div>
            }
        </div>
    )
}

export default Cart
