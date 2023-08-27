import React from 'react';
import { FaCalendarAlt, FaExternalLinkAlt, FaRegHandPointRight } from 'react-icons/fa';
import { RiFileList3Line } from "react-icons/ri";

const AllNoticeList = () => {
    const title = '২০২৩ সালের এইচএসসি পরীক্ষায় অংশগ্রহণের লক্ষ্যে নির্বাচনী পরীক্ষায় অংশগ্রহণ প্রসঙ্গে।'

    return (
        <div className='border-2 border-primary'>
            {/* <div className='bg-primary py-2 px-5'> */}
            <div className='flex justify-between items-center'>
                <div className='flex bg-primary w-3/5 lg:w-3/4 gap-2 items-center text-white text-sm lg:text-lg py-2 px-3 border-r'>
                    <RiFileList3Line />
                    <h2>Latest Notice</h2>
                </div>
                <div className='flex bg-primary w-2/5 lg:w-1/4 justify-end gap-2 items-center text-white text-sm lg:text-lg lg:pr-20 py-2 px-3'>
                    <FaCalendarAlt />
                    <h2>Publish Date</h2>
                </div>
            </div>
            {/* </div> */}
            <div className='py-5 px-3 flex flex-col gap-3 lg:gap-5'>
                {
                    [1, 2, 3, 4, 5, 6]?.map(item =>
                        <div key={item} className='flex justify-between gap-3 lg:gap-0 bg-gray-100 px-3 lg:px-5 py-3'>
                            <div className='flex gap-2 items-start text-primary'>
                                <FaRegHandPointRight className='text-2xl' />
                                <h2 className='text-[10px] lg:text-base lg:hidden'>{title?.length > 85 ? title?.slice(0, 85) + '...' : title}</h2>
                                <h2 className='text-[10px] lg:text-base lg:block hidden'>{title}</h2>
                            </div>
                            <h2 className=' text-[10px] lg:text-base pr-0 lg:pr-16'>২২-০৮-২০২৩</h2>
                        </div>
                    )
                }
            </div>

            <div className='p-5'>
                <button className='text-primary font-medium flex gap-2 items-center border rounded-sm px-3 py-1 border-primary hover:bg-primary duration-500 hover:text-white'> View all Notices <FaExternalLinkAlt /></button>
            </div>

        </div>
    );
};

export default AllNoticeList;