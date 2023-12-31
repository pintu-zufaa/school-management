import React from 'react';
import img from '../../../../assets/Images/schoolicon.png'
import Image from 'next/image';

const About = () => {
    return (
        <div className='border-2 border-primary p-3 lg:p-5 text-sm lg:text-base'>
            <div className='flex gap-5'>
                <div className='w-44 hidden lg:block'>
                    <Image src={img} alt='' className='w-full object-cover' />
                </div>
                <div className='w-full'>
                    <div className='bg-primary px-4 py-2 text-white rounded-sm w-full text-lg'>
                        <h2>রাজশাহী কলেজিয়েট স্কুল এ স্বাগতম</h2>
                    </div>
                    <p className='my-2 leading-6 lg:leading-7 text-justify'>রাজশাহী কলেজিয়েট স্কুল দেশের প্রথম ও অতি প্রাচীন ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান।
                        সম্ভাবনাময় প্রতিভার সুপ্তবীজ সম্বলিত এই বিদ্যাপীঠ তার স্বীয় অস্তিত্বের ইতিহাস। ঐশ্বর্য্যও ঐতিহ্যকে স্বযত্নে লালন করে আসছে সুদীর্ঘ
                        পৌনে দুইশতাধিককালব্যাপী। দেশের ইংরেজী শিক্ষার প্রসার লাভের জন্য লর্ড ইউলিয়াম বেন্টিং তার ব্যক্তিগত প্রচেষ্টা ও উৎসাহে ১৮২৮
                        সালে “বউলিয়া ইংলিশ স্কুল” নামে সর্বপ্রথম এই স্কুলটি প্রতিষ্ঠা করেন।
                    </p>
                </div>
            </div>
            <p className='my-2 leading-6 lg:leading-7 text-justify'>
                সেসময় স্কুলের জন্য কোন সরকারী সাহায্য বরাদ্দ ছিলনা। সুতরাং রাজশাহীতে বসবাসকারী ইংরেজ কর্মকর্তা, আইনব্যবসায়ী এবং নাটোর দিঘাপতিয়া,
                দুবলহাটি, পুঠিয়া ও বলিহারের জমিদারদের সাহায্য ও সহযোগিতায় স্কুলটি চলতে থাকে। এদেশের তৎকালীন শিক্ষা বিস্তারের ভারপ্রাপ্ত কর্মকর্তা ইউলিয়াম
                অ্যাডাম ১৮৩৫ সালে নাটোরে শিক্ষা জরিপ শেষে রাজশাহী বউলিয়া স্কুল পরিদর্শনের পর সরকারের কাছে স্কুলের উজ্জ্বল সম্ভাবনা তুলে ধরলে ১৮৩৬
                সালে ২০ জুন স্কুলটিকে সরকারীকরণ করা হয় এবং এটি রাজশাহী জেলা স্কুল হিসেবে অধিগ্রহণ করে রাজশাহীর কৃতিসন্তান সারদা প্রসাদ বসুকে স্কুলের
                প্রধান শিক্ষক হিসেবে নিয়োগ দেয়া হয়। সেই বছর স্কুলের মোট ছাত্র ছিল ৮৩ জন, যার মধ্যে ৭৮ জন হিন্দু, ২ জন মুসলমান এবং ৩ জন খ্রীষ্টান।
                ১৮৩৬ সালে ছাত্র সংখ্যা বেড়ে দাঁড়ায় ১৮৮ জন । স্কুলের শিক্ষার মান ছিল অনেক উন্নত।
            </p>
        </div>
    );
};

export default About;