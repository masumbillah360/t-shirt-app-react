import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import TShirt from '../TShirt/TShirt';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tShirts = useLoaderData()
    const [cartedShirts, setCartedShirts] = useState([]);

    const cartHandler =(item)=>{
        const exist = cartedShirts.find(it=>it._id === item._id);
        if(exist){
            toast("Already Aded...")
        }
        else{
            const newCart = [...cartedShirts, item];
            setCartedShirts(newCart)
            toast("Thanks For Adding..")
            localStorage.setItem('cartedItems', JSON.stringify(newCart))
        }
    }

    const removeItem=(item)=>{
        const remainingP = cartedShirts.filter((pro)=> pro._id !== item._id);
        setCartedShirts(remainingP)
        toast("Removed Item..")
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


            <ToastContainer 
            position='top-center'
            autoClose='1000'
            hideProgressBar={true}
            ></ToastContainer>
        </>
    );
};

export default Home;