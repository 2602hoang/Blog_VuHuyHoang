import { Anchor, Button, Calendar, Carousel, ConfigProvider, Divider, Drawer, FloatButton, Image, Input, Space, } from 'antd';
// import { Header } from 'antd/es/layout/layout';
import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
// import { useGesture } from 'react-use-gesture'
// import React, { useEffect } from 'react';
import Footter from '../components/Footter';
import Header from '../components/Header';
import baone from '../asset/baone.png';
import avata from "../asset/AVATA.png";
// import aaa from "../asset/AAA.mp4";
import js from '../asset/js.png'
import dev from '../asset/dev.png'
import sql from '../asset/sql.png'
import taiwind from '../asset/taiwindcss.png';
import css from '../asset/css.png'
import native from '../asset/native.png'
import html from '../asset/html.png'

import logo from '../asset/reactjs.png';
import Component from '../components/Component';
import antd from '../asset/antdesign.png';
import ContactusLegal from '../components/ContactusLagal';
import { FieldTimeOutlined, GithubOutlined, MoneyCollectOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
// import { useGesture } from '@use-gesture/react';
import { useGesture } from 'react-use-gesture'
import Content from '../components/Content';
import Project from '../components/Project';
// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

// const wheel = y => {
//     const imgHeight = window.innerWidth * 0.3 - 20
//     return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
// }



export default function Home() {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = daysOfWeek[now.getDay()];
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
            const year = now.getFullYear().toString();
            const timeString = `\t Whatch ${hours}:${minutes}:${seconds}` + `\n` + `` + `||\n\n\n\n\n\t\t` +
                `${dayOfWeek},${day}/${month}/${year}`
                ;
            setTime(timeString);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    // const [open, setOpen] = useState(false);



    return (
        // <Carousel effect="fade">
        // <div className="w-full relative bg-neutral-white overflow-hidden flex flex-row items-start justify-start" >

        
        <div className=" w-full relative dark:bg-slate-800 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
            {/* <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> */}
            
            
        
        <Header />
        

            {/* <div className="w-[1152px] self-stretch flex flex-row items-center justify-center pt-60 px-5 pb-10 box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3"> */}

            {/* <div className='items-center justify-center  '> */}
            
            
            
            <Content
                //    id="part-0"

                a="I am a student waiting for my diploma, so I can work full-time at the company."

                b="Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications.
                 Looking forward to developing, learning to become a full-stack programmer in the future."
                c={avata}
            >


            </Content>
            {/* </div> */}
            


            {/* 0 */}
            <div className="self-stretch flex flex-row items-center justify-center pt-60  pb-10 box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="w-4/5 flex flex-col items-center justify-center gap-[16px] max-w-full">
                    
                    <div id="part-1" className="self-stretch flex flex-col text-center items-center justify-center py-0 box-border max-w-full">
                        <div className=" flex-1 flex flex-col text-center items-center justify-center gap-[8px] ">
                            <div className="  text-xxl  text-center    bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 text-purple-800 rounded-lg m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                                OUTSTANDING PROJECT
                            </div>
                            <div className="     font-bold text-center self-stretch relative text-base leading-[24px] text-white">
                                Project scale during the learning process at school and personal work !!!
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between py-[25px] px-0 gap-[20px] mq825:flex-wrap mq825:justify-center">
                        {/* <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            loading="lazy"
                            alt=""
                            src={baone}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={gin}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={baone}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={gin}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={baone}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={gin}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={baone}
                        />
                        <img
                            className="h-12 w-12 relative rounded-lg min-h-[48px]"
                            alt=""
                            src={gin}
                        /> */}
                    </div>
                </div>
            </div>
            {/* 1 */}

            <Project />
            {/* 2 */}

            {/* 3 */}
            <div className="self-stretch flex flex-row items-start justify-center  px-5 pb-10 box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="w-4/5 flex flex-col items-center justify-start gap-[16px] max-w-full">
                    <div id="part-2" className="w- flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full">
                        <h1 className=" text-white m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                            SKILLS ABOUT ME
                        </h1>
                        {/* <div className="w-[628px] relative text-base leading-[24px] font-semibold  text-orange-500 inline-block max-w-full">
                            Programming Skills:
                            <br />
                            ⭐ JavaScript/ HTML/ CSS/ ReactJS/ React Native/ Antd/ Tailwindcss/ SQL/  ⭐
                            <br />
                            Java/ C#/ C++/
                        </div> */}
                        {/* <div className='self-stretch flex flex-row items-start justify-between py-[25px] px-0 gap-[20px] mq825:flex-wrap mq825:justify-center'> */}
                        <div class=" flex flex-col space-y-2">
                            <div class="font-bold text-white">Programming Skills</div>
                            {/* <marquee  className="h-auto"  > */}
                            <div class="flex-col flex text-center justify-center items-center animate-bounce  ">
                                <div class="flex-row flex text-center justify-center items-center space-x-2  w-1/4 ">
                                    <div class=" text-sm px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                                    <div class="text-sm px-3 bg-indigo-200 text-indigo-800 rounded-full" >JavaScript</div>
                                    <div class="text-sm px-3 bg-red-200 text-red-800 rounded-full">HTML</div>
                                    <div class="text-sm px-3 bg-orange-200 text-orange-800 rounded-full">CSS</div>
                                    <div class="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full">ReactJS</div>
                                </div>
                                <div class="flex-row flex text-center justify-center items-center space-x-2 pt-2 w-1/4 ">
                                    <div class="text-sm px-3 bg-green-200 text-green-800 rounded-full">ReactNative</div>
                                    <div class="text-sm px-3 bg-teal-200 text-teal-800 rounded-full">Antd</div>
                                    <div class="text-sm px-3 bg-blue-200 text-blue-800 rounded-full">Tailwindcss</div>
                                    <div class="text-sm px-3 bg-purple-200 text-purple-800 rounded-full">Java/C#/C++</div>
                                    <div class="text-sm px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                                </div>
                            </div>
                            {/* <div class="text-sm px-3 bg-purple-200 text-purple-800 rounded-full"></div> */}


                            {/* </marquee > */}

                            <div class="flex flex-col space-y-">
                                <div class="font-bold text-white">Soft Skills</div>

                                <div class=" flex-col flex text-center justify-center items-center ">
                                    <marquee direction="right">
                                        <div class="flex-row flex text-center justify-center items-center   w-1/4 ">
                                            <div class="text-sm px-3 bg-indigo-200 text-indigo-800 rounded-full" >Inquisitive, progressive</div>
                                            <div class="text-sm px-3 bg-red-200 text-red-800 rounded-full">Work under pressure</div>
                                            <div class="text-sm px-3 bg-orange-200 text-orange-800 rounded-full">Teamwork</div>
                                        </div>
                                    </marquee>
                                    <marquee direction="left">
                                        <div class="flex-row flex text-center justify-center items-center pt-2  w-1/4 ">
                                            <div class="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full">Ability to adapt quickly</div>
                                            <div class="text-sm px-3 bg-green-200 text-green-800 rounded-full">Quick acquisition</div>
                                            <div class="text-sm px-3 bg-teal-200 text-teal-800 rounded-full">Inquisitive, progressive</div>
                                        </div>
                                    </marquee>
                                </div>

                            </div>
                            <div class="font-bold text-white"> Foreign languager:</div>
                            <div className="     font-bold text-center self-stretch relative text-base leading-[24px] text-white"> Reading and understanding English documents</div>
                        </div>

                    </div>

                    <div className=" w-max h-[450px]  overflow-x-auto shrink-0 flex flex-row items-center justify-between py-0  box-border gap-[20px] max-w-full text-xl text-neutral-grey mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">
                        {/* <marquee> */}
                        <Component
                            // image18="/image-18@2x.png"
                            image={dev}

                            name="JavaScript"
                            // conten="Creating Streamlined Safeguarding Processes with OneRen"
                            imgs={js}
                        // creatingStreamlinedSafegu="Creating Streamlined Safeguarding Processes with OneRen"
                        />
                        <Component
                            image={dev}
                            name="HTML"
                            // conten="What are your safeguarding "
                            imgs={html}
                        // image18="/image-19@2x.png"
                        // creatingStreamlinedSafegu="What are your safeguarding responsibilities and how can you manage them?"
                        />
                        <Component
                            image={dev}
                            name="CSS"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            imgs={css}
                        // image18="/image-20@2x.png"
                        // creatingStreamlinedSafegu="Revamping the Membership Model with Triathlon Australia"
                        />
                        <Component
                            name="ReactJS"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            image={dev}
                            imgs={logo}
                        />
                        <Component
                            name="React Native"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            image={dev}
                            imgs={native}
                        />
                        <Component
                            name="Ant Design"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            image={dev}
                            imgs={antd}
                        />
                        <Component
                            name="SQL"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            image={dev}
                            imgs={sql}
                        />
                        <Component
                            name="Tailwindcss"
                            // conten="What are your safeguarding responsibilities and how can you manage them?"
                            image={dev}
                            imgs={taiwind}
                        />
                        {/* </marquee> */}
                    </div>

                </div>
            </div>
            {/* 4 */}
            <div className="h-auto self-stretch flex flex-row items-center justify-center pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-17xl text-neutral-d-grey font-body-regular-body-3">
                {/* <div className="flex-1  bg-white flex flex-col items-center justify-center py-16 px-36 box-border max-w-full gap-[20px] mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:flex-wrap mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border"> */}

                {/* <Calendar className=' w-auto h-auto  border-4 border-b-slate-900 rounded-md border-solid' onPanelChange={onPanelChange} /> */}
                {/* <video controls width="100%" height="70%">
                        <source src={aaa} type="video/mp4" />
                        Desculpe, seu navegador não suporta vídeos HTML5.
                    </video> */}
                {/* <div className="boder-2 r rounded-lg border-red-700 w-1/2 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[40px] max-w-full text-9xl mq825:gap-[20px_40px]"> */}
                {/* <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px] mq825:flex-wrap">
                            <UserOutlined />
                            <ContactusLegal
                                icon={<UserOutlined />}
                                number="2,245,341"
                                label="Members"
                            />
                            <GithubOutlined />
                            <ContactusLegal
                                number="46,328"
                                label="Clubs"
                                propOverflow="unset"
                            />
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px] mq825:flex-wrap">
                            <StarOutlined />
                            <ContactusLegal
                                icon={<UserOutlined />}
                                number="828,867"
                                label="Event Bookings"
                                propOverflow="hidden"
                            />
                            <MoneyCollectOutlined />
                            <ContactusLegal
                                icon={<UserOutlined />}
                                number="1,926,436"
                                label="Payments"
                                propOverflow="hidden"
                            />
                        </div> */}
                <Button type='text' icon={<FieldTimeOutlined />} className="text-white boder-4 text-xxl rounded-lg border-red-700">{time}</Button>
                {/* </div> */}
                {/* </div> */}
            </div>


            <FloatButton.BackTop />

            <Footter ></Footter>

        </div>


    )
}