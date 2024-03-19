import React, { useState } from 'react';
import logo from '../asset/reactjs.png';
import user from '../asset/userTest.png'
import { Button, Image } from 'antd';

export default function Header(){
// const [loadings, setLoadings] = useState([]);
//   const enterLoading = (index) => {
//     setLoadings((prevLoadings) => {
//       const newLoadings = [...prevLoadings];
//       newLoadings[index] = true;
//       return newLoadings;
//     });
//     setTimeout(() => {
//       setLoadings((prevLoadings) => {
//         const newLoadings = [...prevLoadings];
//         newLoadings[index] = false;
//         return newLoadings;
//       });
//     }, 1000);
//   };
    
    return(
        <header className="self-stretch bg-neutral-silver overflow-hidden flex flex-row items-start justify-between py-[22px] pr-[120px] pl-[105px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-center text-sm text-brand-primary font-body-regular-body-3 mq825:pl-[52px] mq825:pr-[60px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[196px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                    <div className="w-[154.5px] h-6 flex flex-row items-end justify-start gap-[8px]">
                        <img
                            className="h-[22.3px] w-[80px] relative min-h-[50px] mt-6 "
                            loading="lazy"
                            alt="LOGO"
                            src={user}
                        />
                        {/* <div className="h-[22.3px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.6000000000003638px] box-border">
                            <img
                                className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src={logo}
                            />
                        </div> */}
                    </div>
                </div>
                <nav className="m-0 w-[588px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full lg:hidden">
                    <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-text-gray-900 font-body-regular-body-3">
                        <Button 
                        type='text'
                        // danger
                        className="relative leading-[24px] font-medium inline-block min-w-[46px]">
                            Home
                        </Button>
                        <Button 
                         type='text'
                        //  danger
                        className="relative leading-[24px] font-medium inline-block min-w-[57px]">
                            Service
                        </Button>
                        <Button 
                         type='text'
                        className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                            Feature
                        </Button>
                        <Button
                         type='text'
                        className="relative leading-[24px] font-medium inline-block min-w-[60px]">
                            Product
                        </Button>
                        <Button 
                         type='text'
                        className="relative leading-[24px] font-medium inline-block min-w-[86px]">
                            Testimonial
                        </Button>
                        <Button
                         type='text'
                        className="relative leading-[24px] font-medium  inline-block min-w-[31px]">
                            FAQ
                        </Button>
                    </nav>
                </nav>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                    <Button className="rounded-md bg-orange-100 flex flex-row items-center justify-start py-2.5 px-5"
                    // type="primary"
                    //  loading={loadings[0]} onClick={() => enterLoading(0)}
                    >
                        <div className="w-[37px] relative leading-[20px] font-medium inline-block min-w-[37px]">
                            Login
                        </div>
                    </Button>
                    <Button className="rounded-md bg-brand-primary flex flex-row items-center justify-start py-2.5 px-5 whitespace-nowrap text-neutral-white">
                        <div className="w-[51px] relative leading-[20px] font-medium inline-block min-w-[51px]">
                            Sign up
                        </div>
                    </Button>
                </div>
        </header>
    )
}