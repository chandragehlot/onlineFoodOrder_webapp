import React from 'react';
import { useSelector } from 'react-redux';

function OrderContainer(props) {

    //const cart = useSelector(state => state.cart);
    const { cartitems, carttotal } = useSelector(state => state.cart);
    
    const paymentClickHandler = () => {

    }

    return (
        <div>
            OrderContainer

            <div className='orderItems' style={{
                'border' : '1px solid black'
            }}>
                { cartitems.length > 0 && cartitems.map((cartItem) => (
                    <p key={cartItem.id}> {cartItem.name} - {cartItem.type} - {cartItem.price} </p>
                ))}
            </div>
            <div> Total - {carttotal}</div>

            <div className='Address-container'>
                Enter Address

                
            </div>

            <div className='flex-container-column' style={{
                'width' : '40%',
                'margin' : 'auto'
            }}>
                
                <div className='flex-item'>
                <label htmlFor="netbanking"> Net Banking { '      ' }
                <input type="radio" name="paymentoption" id="netbanking"></input>
                </label>
                </div>
                <div className='flex-item'>
                <label htmlFor="creditdebitcard"> Credit/Debit Card { '      ' }
                <input type="radio" name="paymentoption" id="creditdebitcard" />
                </label>
                </div>
                <div className='flex-item'>
                <label htmlFor="cod"> Cash on Delivery { '      ' }
                <input type="radio" name="paymentoption" id="cod" />
                </label>
                </div>
                <div className='flex-item'>
                <button className='button-A' onClick={paymentClickHandler}>
                    payment
                </button>
                </div>
            </div>

        </div>
    );
}

export default OrderContainer;