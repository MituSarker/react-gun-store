import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {
    const [guns,setGuns]=useState([]);
    //console.log(guns);
        useEffect((value)=>{
            fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then((res)=>res.json())
            .then((data)=>setGuns(data));
        },[]);


    return (
        <div className='mt-5'>
            <div className='my-4'>
            <h1 className='text-4xl text-center font-bold mt-4'>Welcome to Guns store </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil aspernatur suscipit.</p>
            </div>
           <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {guns.map((gun)=>(
               <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun> 
            ))}
           </div>
        </div>
    );
};

export default AllGun;