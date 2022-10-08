import React from 'react';

const TShirt = ({tshirts, cartHandler}) => {
    const {name, picture, price} = tshirts;
    return (
        <div className='p-3 bg-blue-200 rounded'>
            <img className='h-80 w-full rounded' src={picture} alt="" />
            <h4 className='font-semibold'>Name : {name}</h4>
            <p className='bg-amber-600 px-2 font-bold rounded'>Price : ${price}</p>

            <button onClick={()=>cartHandler(tshirts)} className='bg-blue-600 w-full mt-3 rounded text-white font-bold'>Add To Cart</button>
        </div>
    );
};

export default TShirt;