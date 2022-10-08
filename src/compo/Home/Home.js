import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData()
    const [cartedShirts, setCartedShirts] = useState([]);

    const cartHandler =(item)=>{
        const exist = cartedShirts.find(it=>it._id === item._id);
        if(exist){
            alert("Already Aded...")
        }
        else{
            const newCart = [...cartedShirts, item];
            setCartedShirts(newCart)
            alert("Thanks For Adding..")
        }
    }

    const removeItem=(item)=>{
        const remainingP = cartedShirts.filter((pro)=> pro._id !== item._id);
        setCartedShirts(remainingP)
    }
    return (
        <>
            <section className='grid grid-cols-4 gap-3 mt-3'>
                <div className='col-span-3'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        tShirts.map((t,idx)=> <TShirt key={idx} tshirts={t} cartHandler={cartHandler}></TShirt>)
                    }
                    </div>
                </div>
                <aside className='col-span-1'>
                    <Order orders={cartedShirts} removeItem={removeItem} key={cartedShirts._id}></Order>
                </aside>
            </section>
        </>
    );
};

export default Home;