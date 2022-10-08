import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData()
    const [cartedShirts, setCartedShirts] = useState([]);

    const cartHandler =(item)=>{
        const newCart = [...cartedShirts, item];
        setCartedShirts(newCart)
    }
    return (
        <>
            <section className='grid grid-cols-4 gap-3 mt-3'>
                <div className='col-span-3'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        tShirts.map(t=> <TShirt key={t._id} tshirts={t} cartHandler={cartHandler}></TShirt>)
                    }
                    </div>
                </div>
                <aside className='col-span-1'>
                    <Order orders={cartedShirts}></Order>
                </aside>
            </section>
        </>
    );
};

export default Home;