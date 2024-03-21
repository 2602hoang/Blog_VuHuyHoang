import React, { useState } from 'react';
import gin from '../asset/gin.png';
import data from "../asset/data"
import user from '../asset/userTest.png';
import logo from '../asset/reactjs.png';
import { Button, Card, Carousel, Drawer, Image, List } from 'antd';

import { GithubOutlined, InfoCircleFilled } from '@ant-design/icons';

export default function Project() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = useState(false);
    const showDrawer1 = () => {
        setOpen1(true);
    };
    const onClose1 = () => {
        setOpen1(false);
    };
    const [open2, setOpen2] = useState(false);
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const images = [];
    for (let i = 1; i <= 17; i++) {
        images.push(require(`../asset/Picture${i}.png`));
    }

    return (
        <section className=" self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full text-center text-9xl text-neutral-d-grey font-body-regular-body-3">
            <div className="flex-1 h-90  flex flex-row items-start justify-between py-0 px-36 box-border max-w-full gap-[20px] mq825:pl-[72px] mq825:pr-[72px] mq825:box-border mq1400:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
                {/* <div className=" flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border"> */}

                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    <Button type='link' icon={<InfoCircleFilled />} onClick={showDrawer} title='Project information '>Project information</Button>
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">

                        <div className="w-[65px] flex flex-row items-start justify-start">
                            <div className="h-14 flex-1 relative">
                                <div className="absolute top-[56px] left-[65px] rounded-tl-lg rounded-tr-8xs rounded-br-3xs rounded-bl-8xs bg-honeydew w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                                <img
                                    className="absolute top-[0px] left-[0px] w-12 h-12 z-[1]"
                                    alt=""
                                    src={gin}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                            FOOD ORDERING APPLICATION FOR DISTRACTED RESTAURANTS
                        </h2>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 text-sm text-neutral-grey">
                            <div className="flex-1 relative leading-[20px]">
                                Our membership management software provides full automation of
                                membership renewals and payments
                            </div>

                        </div>
                    </div>

                </div>


                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    <Button type='link' icon={<InfoCircleFilled />} onClick={showDrawer1} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img className="h-14 w-[65px] relative" alt="" src={logo} />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                            ZOLA CHAT APP
                        </h2>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.5px] text-sm text-neutral-grey">
                            <div className="flex-1 relative leading-[20px]">
                                Our membership management software provides full automation of
                                membership renewals and payments
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    {/* <div className="self-stretch rounded-lg  shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 gap-[16px]"> */}
                    <Button type='link' icon={<InfoCircleFilled />} onClick={showDrawer2} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img
                            className="h-14 w-[65px] relative"
                            alt=""
                            src={user}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                            <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                PERSONAL BLOG
                            </h2>
                        </div>
                        <div className="self-stretch relative text-sm leading-[20px] text-neutral-grey">
                            Our membership management software provides full automation of
                            membership renewals and payments
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <Drawer title=" FOOD ORDERING APPLICATION FOR DISTRACTED RESTAURANTS " width={900} open={open} onClose={onClose}
                placement="left"

            >
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    header={
                        <div>
                            <h2>Image of Website and Mobie App</h2>
                        </div>
                    }
                    dataSource={images}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2" width={200} src={image} />
                    )}
                />
                <h1 className='text-center text-3xl text-amber-500 text-'>Detail<br/></h1>
                <span>
                 
                    Project scale: graduation thesis course<br/>
                    Team size: 2 people<br/>
                    My location:(front-end,test-case creation, documentation)<br/>
                    - Develop a website interface for kitchen staff with ReactJS, a mobie interface for waiters with ReactNative, develop documents, and complete the database with the rest of you.<br/>
                    Project Information:<br/>
                    - Staff information, ordering food, closing orders, handling operations to return water when not used up, returning dishes, providing details of dishes to customers, on the mobie application of the waitress.<br/>
                    - Receive orders, process orders on the website application, CRUD dishes, staff, statistics desk at the website application of the manager.<br/>
                    – The user interface is implemented using ReactJS and ReactNative.<br/>
                    - The backend uses GoLang and MySQL and is deployed on VPS.<br/>
                    Technologies used: HTML / CSS, JavaScript, ReactJS, React Native, GoLang.<br/><br/>
                </span>
                <h1>Source code at GitHub:</h1>
                <span>Mobie 👉:{'\t'}</span>
                <Button type='link' icon={<GithubOutlined />} href='https://github.com/2602hoang/mobie_app-ReactNative' />
                <br />
                <span>Website 👉:{'\t'}</span>
                <Button type='link' icon={<GithubOutlined />} href='https://github.com/2602hoang/WEBAPP-ReactJS-Antd' />

            </Drawer>
            <Drawer title="ZOLA CHAT APP" width={900} open={open1} onClose={onClose1}
                placement="bottom"

            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <Drawer title="PERSONAL BLOG" width={900} open={open2} onClose={onClose2}
                placement="right"

            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>


        </section>

    )



}