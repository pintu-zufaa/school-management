import React from 'react';
import { GiAchievement } from "react-icons/gi";
import school from '../../../../assets/Images/school.png'
import Image from 'next/image';

const Achievements = () => {
    return (
        <div className='border-2 border-primary'>
            <div className='flex bg-primary gap-1 items-center text-white text-lg py-2 px-5'>
                <GiAchievement />
                <h2>Our Achievements</h2>
            </div>
            <div className='p-5'>
                <Image src={school} alt='' className='rounded-sm' />
                <div className='px-3 text-sm lg:text-base lg:px-10 py-2 bg-[#EAFAFF] mt-3 font-semibold rounded-sm text-center'>
                    <h2>জাতীয় শিক্ষা সপ্তাহ-২০১৮ এর জাতীয় পর্যায়ের প্রতিযোগিতায় রাজশাহী কলেজিয়েট স্কুল,রাজশাহী দেশের সেরা শিক্ষা প্রতিষ্ঠান</h2>
                </div>
            </div>
        </div>
    );
};

export default Achievements;