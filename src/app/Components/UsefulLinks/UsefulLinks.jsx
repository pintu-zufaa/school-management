import React from 'react';
import banner from '../../../../assets/Images/banner.png'
import bteb from '../../../../assets/Logo/bteb.png'
import be from '../../../../assets/Logo/me.png'
import dte from '../../../../assets/Logo/dte.png'
import banbais from '../../../../assets/Logo/banbais.png';
import icon from '../../../../assets/Images/Group 14.png'
import Image from 'next/image';

const UsefulLinks = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto my-10'>
            <div className='relative w-full'>
                <Image src={banner} alt='' className='h-full hidden lg:block' />
                <h2 className='text-2xl font-bold absolute flex justify-center top-4 w-full'>Useful Link</h2>
                <div className='absolute flex justify-center top-14 w-full'>
                    <Image src={icon} alt="" className='w-28 flex mx-auto' />
                </div>
                <div className='absolute top-0 justify-between px-0 mt-24 lg:mt-0 lg:px-32 gap-5 lg:gap-8 items-center h-full grid grid-cols-2 lg:grid-cols-4 w-full'>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <Image src={bteb} alt='' className='object-cover w-20 lg:w-40 items-center flex justify-center' />
                        <h2 className='w-full text-sm lg:w-56 lg:text-lg font-semibold text-center'>BTEB</h2>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <Image src={be} alt='' className='object-cover w-20 lg:w-40 items-center flex justify-center' />
                        <h2 className='w-full text-sm lg:w-56 lg:text-lg font-semibold text-center'>Ministry of Education</h2>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <Image src={dte} alt='' className='object-cover w-20 lg:w-40 items-center flex justify-center' />
                        <h2 className='w-full text-sm lg:w-56 lg:text-lg font-semibold text-center'>Directorate of Techincal Education</h2>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <Image src={banbais} alt='' className='object-cover w-20 lg:w-40 items-center flex justify-center' />
                        <h2 className='w-full text-sm lg:w-56 lg:text-lg font-semibold text-center'>BANBEIS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsefulLinks;