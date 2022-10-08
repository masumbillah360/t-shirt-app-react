import React from 'react';
import Order from '../Order/Order';

const CartedProducts = () => {
    return (
        <section className='grid grid-cols-4'>
        <div className='col-span-3'>
            <h1>All Carted Products</h1>
        </div>
        <div className='col-span-1'>
            
        <Order></Order>
        </div>
        </section>
    );
};

export default CartedProducts;