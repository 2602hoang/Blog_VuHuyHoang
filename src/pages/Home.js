import { Button, Card, Flex, Image, Layout, Menu } from 'antd';
// import { Header } from 'antd/es/layout/layout';
import React from 'react';
import Footter from '../components/Footter';
import Header from '../components/Header';
import baone from '../asset/baone.png';
import gin from'../asset/gin.png';
import user from '../asset/userTest.png';
import logo from'../asset/reactjs.png';
import Component from '../components/Component';
import ContactusLegal from '../components/ContactusLagal';
import { GithubOutlined, MoneyCollectOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';


export default function Home() {
    return (
        <div className="w-full relative bg-neutral-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">

            <Header />

            <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-45xl text-neutral-d-grey font-body-regular-body-3">
                <div className="flex-1 bg-neutral-silver flex flex-row items-center justify-start py-24 px-36 box-border relative gap-[104px] max-w-full lg:flex-wrap mq825:gap-[104px_52px] mq825:py-[62px] mq825:px-[72px] mq825:box-border mq450:gap-[104px_26px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[427px] max-w-full mq825:gap-[16px_32px] mq825:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                            <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-semibold font-inherit mq825:text-32xl mq825:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
                                <span>{`Lessons and insights `}</span>
                                <span className="text-brand-primary">from 8 years</span>
                            </h1>
                            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                                Where to grow your business as a photographer: site or social
                                media?
                            </div>
                        </div>
                        {/* <div className="rounded bg-brand-primary flex flex-row items-center justify-center  text-center text-base text-neutral-white"> */}
                            <Button className="bg-brand-primary w-16 relative  font-medium flex items-center justify-center min-w-[50px]">
                                Register
                            </Button>
                        {/* </div> */}
                    </div>
                    <Image
                        width={400}
                        className="h-[250px] w-[391px] relative max-w-full lg:flex-1"
                        loading="lazy"
                        alt=""
                        src={baone}
                    />
                    <div className="!m-[0] absolute bottom-[16px] left-[calc(50%_-_23px)] flex flex-row items-start justify-start gap-[8px] z-[1]">
                        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-brand-primary" />
                        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" />
                        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" />
                    </div>
                </div>
            </section>
            <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="w-[1152px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                                Our Clients
                            </h1>
                            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                                We have been working with some Fortune 500+ clients
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between py-[25px] px-0 gap-[20px] mq825:flex-wrap mq825:justify-center">
                        <img
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
                        />
                    </div>
                </div>
            </section>
            <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full text-center text-9xl text-neutral-d-grey font-body-regular-body-3">
                <div className="flex-1 flex flex-row items-start justify-between py-0 px-36 box-border max-w-full gap-[20px] mq825:pl-[72px] mq825:pr-[72px] mq825:box-border mq1400:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                        <div className="self-stretch rounded-lg bg-neutral-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
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
                                    Membership Organisations
                                </h2>
                                <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 text-sm text-neutral-grey">
                                    <div className="flex-1 relative leading-[20px]">
                                        Our membership management software provides full automation of
                                        membership renewals and payments
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[299px] rounded-lg bg-neutral-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 box-border gap-[16px]">
                        <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                            <img className="h-14 w-[65px] relative" alt="" src={logo} />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                            <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                National Associations
                            </h2>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.5px] text-sm text-neutral-grey">
                                <div className="flex-1 relative leading-[20px]">
                                    Our membership management software provides full automation of
                                    membership renewals and payments
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                        <div className="self-stretch rounded-lg bg-neutral-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start p-6 gap-[16px]">
                            <div className="self-stretch h-14 flex flex-row items-start justify-center">
                                <img
                                    className="h-14 w-[65px] relative"
                                    alt=""
                                    src={user}
                                />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                                    <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                        Clubs And Groups
                                    </h2>
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] text-neutral-grey">
                                    Our membership management software provides full automation of
                                    membership renewals and payments
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-17xl text-neutral-d-grey font-body-regular-body-3">
                <div className="flex-1 bg-neutral-silver flex flex-row items-center justify-between py-16 px-36 box-border max-w-full gap-[20px] mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:flex-wrap mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">
                    <div className="w-[540px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] max-w-full">
                        <div className="w-[408px] overflow-hidden flex flex-col items-start justify-start max-w-full">
                            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                                <span>{`Helping a local `}</span>
                                <span className="text-brand-primary">
                                    business reinvent itself
                                </span>
                            </h1>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-text-gray-900">
                            We reached here with our hard work and dedication
                        </div>
                    </div>
                    <div className="w-[540px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[40px] max-w-full text-9xl mq825:gap-[20px_40px]">
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
                    </div>
                </div>
            </section>
            <section className="flex flex-row items-start justify-start pt-0 pb-[94.59999999999992px] pr-0 pl-px box-border max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3 mq825:pb-[61px] mq825:box-border">
                <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
                    <div className="w-[1150px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                            Caring is the new marketing
                        </h1>
                        <div className="w-[628px] relative text-base leading-[24px] text-neutral-grey inline-block max-w-full">
                            The Nexcent blog is the best place to read about the latest
                            membership insights, trends and more. See who's joining the
                            community, read about how our community are increasing their
                            membership income and lot's more.
                        </div>
                    </div>
                    <div className="w-[1440px] h-[366px] overflow-x-auto shrink-0 flex flex-row items-center justify-between py-0 px-36 box-border gap-[20px] max-w-full text-xl text-neutral-grey mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">
                        <Component
                        // image18="/image-18@2x.png"
                        image={baone}
                        // creatingStreamlinedSafegu="Creating Streamlined Safeguarding Processes with OneRen"
                        />
                        <Component
                        image={baone}
                        // image18="/image-19@2x.png"
                        // creatingStreamlinedSafegu="What are your safeguarding responsibilities and how can you manage them?"
                        />
                        <Component
                        image={baone}
                        // image18="/image-20@2x.png"
                        // creatingStreamlinedSafegu="Revamping the Membership Model with Triathlon Australia"
                        />
                        <Component 
                        image={baone} />
                        <Component 
                        image={baone}/>
                    </div>
                </div>
            </section>

            <Footter />

        </div>
    )
}