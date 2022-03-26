import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'

const Cart = ({ cart}) => {
    

    

    return (
        <div className='cart-container'>
            <h1> Total: {cart.length} </h1>

            {
                cart.map(book => <div className='added-book'><p>{book.title}<FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faTrash}></FontAwesomeIcon></p><hr /></div>)
            }

            
            

        </div>
    );
};

export default Cart;