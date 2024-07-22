import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-items'>
                {cartItems.map(item => <CheckoutItem key={item.id} checkoutItem={item} />)}
            </div>
        </div>
    );
};

export default Checkout;