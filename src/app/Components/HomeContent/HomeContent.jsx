import React from 'react';
import About from '../About/About';
import BongobonduCorner from '../BongobonduCorner/BongobonduCorner';
import AllNoticeList from '../AllNoticeList/AllNoticeList';
import Achievements from '../Achievements/Achievements';

const HomeContent = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto md:flex md:gap-5 lg:gap-10'>
            {/* Left side--------- */}
            <div className='md:w-3/4 w-full flex flex-col gap-5 lg:gap-10 mb-10 lg:mb-0'>
                <About />
                <AllNoticeList />
                <Achievements />
            </div>

            {/* Right side--------- */}
            <div className='md:w-1/4 w-full'>
                <BongobonduCorner />
            </div>
        </div>
    );
};

export default HomeContent;