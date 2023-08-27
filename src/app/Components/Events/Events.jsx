import React from 'react';
import { FaArrowRight, FaExternalLinkAlt, FaFileAlt, FaFolderOpen } from 'react-icons/fa';

const Events = () => {
    return (
        <div className='border-2 border-primary'>
            <div className='bg-primary flex justify-between items-center px-3 py-2 text-white'>
                <div className='flex gap-2 items-center'>
                    <FaFolderOpen className=' text-xl' />
                    <h2 className='font-medium'>Events</h2>
                </div>
                <button className='font-medium flex gap-2 items-center rounded-sm px-3 duration-500'> View all<FaExternalLinkAlt /></button>

            </div>
            <div className='p-4'>
                {
                    [1, 2, 3, 4, 5, 6]?.map(item =>
                        <div key={item} className=''>
                            <div className='flex gap-4'>
                                <div className='w-1/4 bg-cyan-50 rounded-sm p-3 justify-center items-center flex flex-col gap-1'>
                                    <h2 className='text-xl'>২১</h2>
                                    <p className='text-base'>০২-২০২৩</p>
                                </div>
                                <div className='w-3/4 text-gray-600 font-light'>
                                    <h2>২১ ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস ও শহীদ দিবস</h2>
                                </div>
                            </div>
                            <hr className='my-2' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Events;