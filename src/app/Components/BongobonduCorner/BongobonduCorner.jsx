import React from 'react';
import img from '../../../../assets/Images/bongobondu.png'
import headImg from '../../../../assets/Images/head.png'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const BongobonduCorner = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='border-2 border-primary'>
                <div className='bg-primary px-4 py-2 text-white'>
                    <h2>বঙ্গবন্ধু কর্নার</h2>
                </div>
                <div className='p-5'>
                    <Image src={img} alt='' className='w-full object-cover' />

                    <div className='flex gap-2 justify-center flex-col items-center mt-5'>
                        <h2 className='font-medium '>বঙ্গবন্ধু শেখ মুজিবুর রহমান</h2>
                        <button className='text-primary flex gap-2 items-center'>বিস্তারিত <FaArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className='border-2 border-primary'>
                <div className='bg-primary px-4 py-2 text-white'>
                    <h2>প্রতিষ্ঠান প্রধান</h2>
                </div>
                <div className='p-5'>
                    <Image src={headImg} alt='' className='w-full object-cover' />

                    <div className='flex gap-2 justify-center flex-col items-center mt-5'>
                        <h2 className='font-medium '>Dr. Nurjahan Begum</h2>
                        <button className='text-primary flex gap-2 items-center'>বিস্তারিত <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BongobonduCorner;