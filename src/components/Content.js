import { Anchor, Button, Image, Modal } from 'antd';
import React, { useState } from 'react';
import baone from "../asset/baone.png"
import cv from "../asset/CV.png"



export default function Content({ a, c }) {
    const [open, setOpen] = useState(false);
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
    return (


        <section
            id="part-5"
            className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-45xl text-neutral-d-grey font-body-regular-body-3">


            <div className="flex-1 bg-neutral-silver flex flex-row items-center justify-start py-24 px-36 box-border relative gap-[104px] max-w-full lg:flex-wrap mq825:gap-[104px_52px] mq825:py-[62px] mq825:px-[72px] mq825:box-border mq450:gap-[104px_26px] mq450:pl-5 mq450:pr-5 mq450:box-border">

                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[427px] max-w-full mq825:gap-[16px_32px] mq825:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-semibold font-inherit mq825:text-32xl mq825:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
                            <span>{`ABOUT ME`}</span>
                            <br></br>
                            <span className="text-brand-primary"> VŨ HUY HOÀNG</span>
                        </h1>
                        <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                            {a}
                            {/* Where to grow your business as a photographer: site or social
                media? */}
                        </div>
                    </div>
                    {/* <div className="rounded bg-brand-primary flex flex-row items-center justify-center  text-center text-base text-neutral-white"> */}
                    <Button
                        onClick={() => {
                            showModal();
                        }}
                        className="bg-brand-primary w-25 h-16 relative  font-medium flex items-center justify-center min-w-[200px]">
                        View CV me
                    </Button>
                    {/* </div> */}
                </div>
                <Modal
                        title="Personal CV, thank you for looking ✌️"
                        style={{textAlign:'center'}}
                        open={open}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okButtonProps={{
                            disabled: true,
                            hidden:true,
                        }}
                        cancelButtonProps={{
                            disabled: true,
                            hidden:true,
                        }}
                    >
                    <img 
                    //  width={200}
                     className="h-full w-full relative max-w-full lg:flex-1 rounded-3xl border-orange-50 border-y-indigo-500 border-solid outline-offset-2 "
                     loading="lazy"
                     alt=""
                     src={cv}
                    />
                </Modal>


                <Image
                    width={200}
                    className="h-[250px] w-[391px] relative max-w-full lg:flex-1 rounded-3xl border-orange-50 border-y-indigo-500 border-solid outline-offset-2 "
                    loading="lazy"
                    alt=""
                    src={c}
                />


                <div className="!m-[0] absolute bottom-[16px] left-[calc(50%_-_23px)] flex flex-row items-start justify-start gap-[8px] z-[1]">
                    {/* 
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-brand-primary" />
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" />
                <div className="h-2.5 w-2.5 relative rounded-[50%] bg-forestgreen" /> */}




                </div>
            </div>

        </section>

    );
}




