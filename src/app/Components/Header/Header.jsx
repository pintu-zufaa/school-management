/* eslint-disable @next/next/no-img-element */
import React from 'react';
import banner from '../../../../assets/Images/Rectangle 3.png'
import name from '../../../../assets/Images/Rajshahi Collegiate School.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-full relative'>
            <Image src={banner} alt='' />
            <Image src={name} alt='' className='absolute right-10 bottom-7 w-2/5' />

        </div>
    );
};

export default Header;