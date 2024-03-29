import React, { useState } from 'react';
import logo from '../asset/reactjs.png';
import dev from '../asset/AAA.png'
import { Anchor, Button, Image, Modal, Popconfirm } from 'antd';
import FromLogin from './FromLogin';
import FromSigup from './FromSigup';

export default function Header() {
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
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const showModal1 = () => {
        setOpen1(true);
    };
    const handleOk1 = (e) => {
        console.log(e);
        setOpen1(false);
    };
    const handleCancel1 = (e) => {
        console.log(e);
        setOpen1(false);
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
        <script className=" self-stretch bg-neutral-silver overflow-hidd   en flex flex-row items-center justify-between py-[22px]   box-border top-[0] z-[99] sticky gap-[20px]  text-center text-sm text-brand-primary font-body-regular-body-3 mq825:pl-[52px] mq825:pr-[60px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
           
           
            <div className="w-[196px] flex flex-col items-start justify-start mt-8 px-0 pb-0 box-border">
                
                <div className="w-[154.5px] h-6 flex flex-row items-end justify-start gap-[8px]">
                    <img
                        className="h-[80px] w-[80px] relative min-h-[50px] mt-4 pt-2 rounded-lg "
                        // className="self-stretch h-[150px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        
                        title='VU HUY HOANG'
                        src={dev}
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
                        // onClick={()=>{
                        //     showDrawer();
                        // }}
                        href='/'
                        className="relative leading-[24px] font-medium inline-block min-w-[46px]">
                        About
                    </Button>
                    
                    <Button
                        type='text'
                        href='/'
                        //  danger
                        className="relative leading-[24px] font-medium inline-block min-w-[57px]">
                        Home
                    </Button>
                    <Button
                        type='text'
                        href='#part-2'
                        className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                        Expertise
                    </Button>
                    {/* <Button
                        type='text'
                        className="relative leading-[24px] font-medium inline-block min-w-[60px]">
                        Product
                    </Button>
                    <Button
                        type='text'
                        className="relative leading-[24px] font-medium inline-block min-w-[86px]">
                        Testimonial
                    </Button> */}
                    <Button
                        type='text'
                        href='#part-3'
                        className="relative leading-[24px] font-medium  inline-block min-w-[31px]">
                        Contact
                    </Button>
                </nav>
            </nav>
            <div className="flex flex-row items-start justify-start gap-[14px]">
                {/* <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={
                        () => {
                            "ok";
                            showModal()


                        }
                    }

                    cancelText="Cancel"
                > */}
                    <Modal
                        title="Login Form To Website✌️"
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
                        <FromLogin />
                    </Modal>
                    <Button className="rounded-md bg-orange-100 flex flex-row items-center justify-start py-2.5 px-5"
                        onClick={() => {
                            showModal()
                        }
                        }
                    >
                        <div className="w-[37px] relative leading-[20px] font-medium inline-block min-w-[37px]"

                        >
                            Login
                        </div>
                    </Button>


                {/* </Popconfirm> */}
                <Button
                  onClick={() => {
                    showModal1();
                    
                }
                }
                className="rounded-md bg-brand-primary flex flex-row items-center justify-start py-2.5 px-5 whitespace-nowrap text-neutral-white">
                    
                    <div className="w-[51px] relative leading-[20px] font-medium inline-block min-w-[51px]">
                        Sign up
                    </div>
                </Button>
                <Modal
                        title="Sing Up Form To Website🤗"
                        open={open1}
                        onOk={handleOk1}
                        onCancel={handleCancel1}
                        okButtonProps={{
                            disabled: true,
                            hidden:true,
                        }}
                        cancelButtonProps={{
                            disabled: true,
                            hidden:true,
                        }}
                    >
                        <FromSigup />
                </Modal>
            </div>
            {/* <Anchor
             direction="vertical"
             
            items={[
                {
                    key: 'part-5',
                    href: '#part-5',
                    title: 'About Me',
                },
                {
                    key: 'part-1',
                    href: '#part-1',
                    title: 'Projects',
                },
                {
                    key: 'part-2',
                    href: '#part-2',
                    title: 'Sklils',
                },
                {
                    key: 'part-3',
                    href: '#part-3',
                    title: 'Contact',
                },
            ]}
        /> */}
            
            
        </script>
    )
}