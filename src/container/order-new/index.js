import React from 'react';
import Accordian from '../../components/accordion';
import Card2 from '../../components/card-2';
import Card1 from '../../components/card-1';
import { useSelector } from 'react-redux';

const OrderNew = () => {
    
    const { cartitems, carttotal } = useSelector((state) => state.cart);
    return (
        <div className='flex justify-center bg-zinc-100'>
            <div className='w-10/12 flex flex-row mt-5'>
                <div className='left-section w-3/4 pr-2'>
                <div className='pb-2'>
                <Accordian
                heading='Order Summary'
                number={1}
                defaultExpend={true}
                showChevron={false}
                >
                    { cartitems.map((orderItem, index) => (
                        <Card1 key={index+'20'} orderItem={orderItem}></Card1>
                    )) }
                    <div className='flex justify-start p-5'>
                        <button className='button-D max-w-xs'> Confirm Order</button>
                    </div>
                </Accordian>
                </div>
                <div className='pb-4'>
                <Accordian
                 heading='Address Details'
                 number={2}
                 showChevron={false}
                 isDisabled={false}
                 defaultExpend={true}
                >
                </Accordian>
                </div>
                <div className='pb-4'>
                <Accordian
                number={3}
                heading='Payment Information'
                showChevron={false}
                isDisabled={false}
                defaultExpend={true}
                >
                </Accordian>
                </div>
                </div>
                <div className='right-section w-1/4 pl-2'>
                    <Card2 carttotal={carttotal} ></Card2>
                </div>
            </div>
        </div>
    );
};

export default OrderNew;