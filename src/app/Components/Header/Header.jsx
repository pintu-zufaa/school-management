/* eslint-disable @next/next/no-img-element */
import React from 'react';
import banner from '../../../../assets/Images/schoolbanner.png'
import name from '../../../../assets/Images/RajshahiCollegiateSchool.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-full relative'>
            <Image src={banner} alt='' className='w-full' />
            <Image src={name} alt='' className='absolute right-10 bottom-7 w-2/5' />
        </div>
    );
};

export default Header;