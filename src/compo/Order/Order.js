import React from 'react';

const Order = ({orders, removeItem}) => {
    return (
        <div className='text-white'>
            <h1 className='font-bold  text-3xl'>Order Summery</h1>
            {
                <p className='font-bold'>Total Item's : {orders.length}</p>
            }

            <div>
                {
                    orders.map(order=> <div className='border mb-2 rounded text-start p-3 flex justify-between' key={order._id}>
                        <div className='font-semibold'>
                        <h4>Name : {order.name}</h4>
                        <p>Price : ${order.price}</p>
                        </div>
                        <button onClick={()=>removeItem(order)} className='bg-red-500 px-3 rounded font-bold '>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;