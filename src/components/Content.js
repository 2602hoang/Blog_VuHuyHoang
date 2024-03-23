import { Anchor, Button, Drawer, Image, List, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import baone from "../asset/baone.png"
import cv from "../asset/CV.png"
import Footter from './Footter';
import { ArrowRightOutlined, FacebookFilled, GithubOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import Contac from './Contac';



export default function Content({ a, b, c }) {
    // const [placement, setPlacement] = useState('left');
    // const onChange = (e) => {
    //     setPlacement(e.target.left);
    //   };
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const showDrawer = () => {
        setOpen1(true);
    };
    const onClose = () => {
        setOpen1(false);
    };
    const imgs = [];
    for (let i = 1; i <= 4; i++) {
        imgs.push(require(`../asset/me${i}.png`));
    }
    return (


        <section
            id="part-5"
            className="bg-white  self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border w-full text-left text-45xl text-neutral-d-grey font-body-regular-body-3">


            <div className="flex-1 bg-white flex flex-row items-center justify-start py-24 px-36 box-border relative gap-[104px] max-w-full lg:flex-wrap mq825:gap-[104px_52px] mq825:py-[62px] mq825:px-[72px] mq825:box-border mq450:gap-[104px_26px] mq450:pl-5 mq450:pr-5 mq450:box-border">

                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[427px] max-w-full mq825:gap-[16px_32px] mq825:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-semibold font-inherit mq825:text-32xl mq825:leading-[61px] mq450:text-19xl mq450:leading-[46px]">

                            <Button type='link' onClick={() => {
                                showDrawer();
                            }} className=" animate-pulse transition duration-300 relative inline-block h-auto">
                                <span
                                    className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 uppercase animate-slide text-9xl"
                                >{`ABOUT ME `}</span>
                            </Button>
                            <br></br>

                            <span className='text-yellow-500'
                            > VŨ HUY HOÀNG</span>

                        </h1>
                        <div className=" font-bold self-stretch relative text-base leading-[24px] text-neutral-grey">
                            {a}
                            <br />
                            {b}

                            {/* Where to grow your business as a photographer: site or social
                media? */}
                        </div>
                    </div>
                    {/* <div className="rounded bg-brand-primary flex flex-row items-center justify-center  text-center text-base text-neutral-white"> */}
                    <Button
                        onClick={() => {
                            showModal();
                        }}
                        className="animate-bounce transition duration-300 bg-brand-primary w-25 h-16 relative  font-medium flex items-center justify-center min-w-[200px]">
                        View CV me
                    </Button>



                    {/* </div> */}
                </div>
                <div className='w-max h-max bg-neutral-600'>
                    <Modal

                        title="Personal CV, thank you for looking ✌️"
                        className='text-center w-max h-max '
                        open={open}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okButtonProps={{
                            disabled: true,
                            hidden: true,
                        }}
                        cancelButtonProps={{
                            disabled: true,
                            hidden: true,
                        }}
                    >

                        <img
                            //  width={200}
                            className=" h-full w-full relative max-w-full lg:flex-1 rounded-3xl border-orange-50 border-y-indigo-500 border-solid outline-offset-2 "
                            loading="lazy"
                            alt=""
                            src={cv}
                        />

                    </Modal>
                </div>

                <Image width={300} className="bg-center h-[500px] w-[391px] relative max-w-full lg:flex-1 rounded-3xl border-orange-50 border-y-indigo-500 border-solid outline-offset-2 " loading="lazy" alt="" src={c} />



                {/* <div className="!m-[0] absolute bottom-[16px] left-[calc(50%_-_23px)] flex flex-row items-start justify-start gap-[8px] z-[1]"> */}
                {/* 
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-brand-primary" />
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" />
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" /> */}
                <Drawer title="About Me  " width={900} onClose={onClose} open={open1}
                    placement="left"
                // closable={false}
                // extra={
                //     <Button onClick={onClose}>Cancel</Button>
                // }
                >
                    {/* <div className='bg-gradient-to-br from-red-500 to-yellow-500'> */}
                    <div

                        class=' text-center text-[90px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold uppercase animate-slide '
                    >VU HUY HOANG</div>
                    <br />
                    <br />

                    <br />
                    <p className=' text-center px-51 text-[17.5px] w-auto px-3 bg-yellow-200 text-yellow-800 rounded-full'>I'm a frontend developer who loves to make things look beautiful and working perfectly.
                        I'm passionate about making websites that are easy to use and that provide the best user experience possible.
                        I also happen to be a creative person, which I use to inject a little bit of fun into every project.</p>
                    <List
                        itemLayout="horizontal"
                        size="large"
                        className='h-96'
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                          
                            pageSize: 1,
                        }}
                        header={
                            <div>
                                <h1 className='px-3.5 justify-center text-green-500 items-center  text-3xl text-center '>Personal image</h1>
                                {/* <h2 className='bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website and Mobie App</h2> */}
                            </div>
                        }
                        dataSource={imgs}
                        renderItem={(image, index) => (
                            <div className='justify-center items-center '>
                                <Image key={index} className="  " width={450} height={650} src={image}

                                />
                            </div>
                        )}
                    />



                    <div className="w-4/5 pt-96  flex flex-col items-center justify-center gap-[40px]  text-left text-sm text-black font-body-regular-body-3 mq825:min-w-full mq1400:flex-1 mq450:gap-[20px_40px]">

                        <div className="  flex flex-col items-center justify-center pl-5 ">
                            <br />
                            <h1 className="text-sm px-3 bg-purple-200 text-purple-800 rounded-full mb-3 ml-16">
                                CONTACT
                            </h1>
                            <Contac />


                        </div>
                        <h2>My social network here 👇</h2>

                        <div className=" h-8 overflow-hidden shrink-0 w-max flex flex-row items-start justify-start gap-[16px]">
                            <Button type='link' href='https://www.facebook.com/VHH26022001/'>
                                <FacebookFilled
                                    className="h-8 w-8 relative min-h-[32px]"
                                    loading="lazy"
                                    alt=""

                                />
                            </Button>
                            <Button type='link' href='https://vuhuyhoangcv.wordpress.com/'>
                                <GoogleOutlined
                                    className="h-8 w-8 relative min-h-[32px]"
                                    alt=""

                                />
                            </Button>
                            <Button type='link' href='https://github.com/2602hoang'>
                                <GithubOutlined
                                    className="h-8 w-8 relative min-h-[32px]"
                                    alt=""

                                />
                            </Button>

                            <a className="w-30 text-sm mt-3 bg-purple-200 text-purple-800 rounded-full  ">
                                Tel/Zalo:0917789964
                            </a>
                        </div>

                    </div>
                </Drawer>



                {/* </div> */}
            </div>

        </section >

    );

}





