const CheckoutItem = ({ checkoutItem }) => {
    const { name, imageUrl, price, quantity } = checkoutItem;

    return (
        <div className="checkout-item-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className='checkout-item-details'>
                <span className='checkout-name'>{name}</span>
                <button>&lt;</button>
                <span className='checkout-quantity'>{quantity}</span>
                <button>&gt;</button>
                <span className="checkout-price">{price}</span>
                <button>X</button>
            </div>
        </div>
    );
};

export default CheckoutItem;