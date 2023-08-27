import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Topappbar = () => {
    return (
        <div className='bg-primary py-3 w-full'>
            <div className='w-11/12 text-[10px] lg:text-base lg:w-4/5 mx-auto text-white flex justify-between'>
                <div className='flex gap-3 lg:gap-5 items-center'>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        <FaPhoneAlt />
                        <p>+8801834675280</p>
                    </div>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        <FaEnvelope />
                        <p>infoyourmail@gamil.com</p>
                    </div>
                </div>
                <div className='flex gap-2 lg:gap-5 items-center text-xs lg:text-xl'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>
    );
};

export default Topappbar;