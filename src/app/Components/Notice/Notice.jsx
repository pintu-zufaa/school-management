import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";

const Notice = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto my-5 '>
            <div className='flex w-full'>
                <div className=' bg-primary px-4 lg:px-8 flex items-center'>
                    <h2 className='text-sm lg:text-lg lg:font-semibold text-white'>Notice</h2>
                </div>

                <div className='bg-gray-200 py-2 lg:py-3 w-full text-xs lg:text-base border-r-4 border-primary'>
                    <Marquee pauseOnHover={true}>
                        <Link href=''>রাজশাহী কলেজিয়েট স্কুলে বদলী, পারস্পরিক বদলী এবং সহোদর কোটায় ভর্তির জন্য নির্বাচিত ছাত্রদের ভর্তির নোটিশ।</Link>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Notice;