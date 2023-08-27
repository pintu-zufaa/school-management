import React from 'react';
import topImg from '../../../../assets/Images/footertop.png';
import footerMid from '../../../../assets/Images/footermid.png';
import map from '../../../../assets/Images/map.png'
import Image from 'next/image';
import { FaAngleRight, FaEnvelope, FaFacebookF, FaHome, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    const academic = ['On Campus Program', 'Online Services', 'Academic Notice', 'Admission Notice', 'Online Form Fill-Up', 'Academic Calender']
    const important = ['Online Lecture', 'Admission', 'Project', 'Training Notice', 'Annual Report', 'Research']

    return (
        <div className='relative mt-[520px] lg:mt-48'>
            <div className='w-11/12 lg:w-4/5 mx-auto -z-10'>
                <Image src={topImg} alt='' className='w-11/12 lg:w-4/5 mx-auto absolute -top-7 lg:-top-28' />
            </div>
            <div className='bg-primary mt-10 relative w-full'>
                <div className='w-4/5 lg:w-1/4 mx-auto'>
                    <Image src={footerMid} alt='' className='w-4/5 lg:w-1/4 absolute bottom-0 object-cover' />
                </div>
                <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20 py-10 text-white'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl font-semibold'>Campus Map</h2>
                        <div className='bg-gradient-to-r from-white py-[2px] w-36'></div>
                        <Image src={map} alt='' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl font-semibold'>Academic Information</h2>
                        <div className='bg-gradient-to-r from-white py-[2px] w-36'></div>
                        <div className='flex flex-col gap-3'>
                            {
                                academic?.map((item, i) =>
                                    <Link href='/' key={i} className='flex gap-1 text-lg items-center'>
                                        <FaAngleRight />
                                        <h2>{item}</h2>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl font-semibold'>Important Information</h2>
                        <div className='bg-gradient-to-r from-white py-[2px] w-36'></div>
                        <div className='flex flex-col gap-3'>
                            {
                                important?.map((item, i) =>
                                    <Link href='/' key={i} className='flex gap-1 text-lg items-center'>
                                        <FaAngleRight />
                                        <h2>{item}</h2>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl font-semibold'>Contact Us</h2>
                        <div className='bg-gradient-to-r from-white py-[2px] w-36'></div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 text-sm items-end'>
                                <FaHome className='text-5xl' />
                                <h2><span className='font-bold'>Corporate Office :</span> 37-48 72nd Street 2nd Fl Jackson Heights NY 11372</h2>
                            </div>
                            <div className='flex gap-5 items-end'>
                                <FaPhoneAlt className='text-xl' />
                                <p>+8801834675280</p>
                            </div>
                            <div className='flex gap-5 items-end'>
                                <FaEnvelope className='text-xl' />
                                <p>infoyourmail@gamil.com</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#516EAB] p-4'>
                                    <FaFacebookF className='text-xl text-white rounded-md' />
                                </div>
                                <div className='bg-[#29C5F6] p-4'>
                                    <FaTwitter className='text-xl text-white rounded-md' />
                                </div>
                                <div className='bg-[#E14E42] p-4'>
                                    <FaYoutube className='text-xl text-white rounded-md' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className='text-center text-white py-4'>Copyright © 2023 | Your School Name I Development and Maintenance by Zufaa Inc.</h2>
            </div>
        </div>
    );
};

export default Footer;