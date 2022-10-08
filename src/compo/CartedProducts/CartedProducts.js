import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const CartedProducts = () => {
    const [cartedItems, setCartedItems] = useState([]);
    useEffect(()=>{
        // const data = localStorage.getItem(JSON.parse('cartedItems'))
        const data = localStorage.getItem('cartedItems');
        const getdata = JSON.parse(data)
        if(getdata){
            setCartedItems(getdata);
        }
        else{
            setCartedItems([])
        }
    },[])
    return (
        <section className='grid grid-cols-4 mt-3'>
        <div className='col-span-3'>
            <h1>All Carted Products</h1>
        </div>
        <div className='col-span-1'>
            
        <Order orders={cartedItems}></Order>
        </div>
        </section>
    );
};

export default CartedProducts;