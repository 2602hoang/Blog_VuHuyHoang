import { Anchor, Button, Calendar, Carousel, Drawer, FloatButton, Image, } from 'antd';
// import { Header } from 'antd/es/layout/layout';
import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
// import { useGesture } from 'react-use-gesture'
// import React, { useEffect } from 'react';
import Footter from '../components/Footter';
import Header from '../components/Header';
import baone from '../asset/baone.png';
import avata from "../asset/AVATA.png";

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
import { GithubOutlined, MoneyCollectOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
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
            const timeString = `\t Whatch :${hours}:${minutes}:${seconds}` + `\n` + `` + `\n\n\n\n\n\t\t` +
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
        <div className="w-full relative bg-neutral-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
            {/* <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> */}
            <Header />


            <div className='items-center justify-center px-20 '>
                <Content
                    //    id="part-0"
                    a="I am a student waiting for my diploma, so I can work full-time at the company."

                    b="Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications.
                 Looking forward to developing, learning to become a full-stack programmer in the future."
                    c={avata}
                >


                </Content>
            </div>


            {/* 0 */}
            <section id="part-1" className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="w-[1152px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                            OUTSTANDING PROJECT
                            </h1>
                            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                            Project scale during the learning process at school and personal work!
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
            </section>
            {/* 1 */}

            <Project/>
            {/* 2 */}

            {/* 3 */}
            <section className=" flex flex-row items-center justify-center pt-0 pb-[94.59999999999992px] pr-0 pl-px box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3 mq825:pb-[61px] mq825:box-border">
                <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
                    <div id="part-2" className="w-[1150px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                            SKILLS ABOUT ME
                        </h1>
                        <div className="w-[628px] relative text-base leading-[24px] font-semibold  text-orange-500 inline-block max-w-full">
                            Programming Skills:
                            <br />
                            ⭐ JavaScript/ HTML/ CSS/ ReactJS/ React Native/ Antd/ Tailwindcss/ SQL/  ⭐
                            <br />
                            Java/ C#/ C++/
                        </div>
                    </div>
                    <div className=" w-4/5 h-[450px]  overflow-x-auto shrink-0 flex flex-row items-center justify-between py-0 px-36 box-border gap-[20px] max-w-full text-xl text-neutral-grey mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">
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

                    </div>
                </div>
            </section>
            <section className="h-auto self-stretch flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="flex-1  bg-white flex flex-row items-center justify-between py-16 px-36 box-border max-w-full gap-[20px] mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:flex-wrap mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">

                    <Calendar className=' w-auto h-auto  border-4 border-b-slate-900 rounded-md border-solid' onPanelChange={onPanelChange} />

                    <div className="boder-2 r rounded-lg border-red-700 w-1/2 overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[40px] max-w-full text-9xl mq825:gap-[20px_40px]">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px] mq825:flex-wrap">
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
                        </div>
                        <Button type='text' className="boder-4 r rounded-lg border-red-700">{time}</Button>
                    </div>
                </div>
            </section>


            <FloatButton.BackTop />

            <Footter ></Footter>

        </div>


    )
}