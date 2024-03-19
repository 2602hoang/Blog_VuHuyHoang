import { GoogleOutlined, InstagramOutlined, JavaScriptOutlined, RadarChartOutlined, SearchOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
export default function Footter() {
    return (
        <footer className="self-stretch bg-neutral-black flex flex-row items-start justify-between py-16 px-[165px] box-border max-w-full gap-[20px] z-[1] mq825:pl-[82px] mq825:pr-[82px] mq825:box-border mq1400:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[350px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full text-left text-sm text-neutral-silver font-body-regular-body-3 mq825:min-w-full mq1400:flex-1 mq450:gap-[20px_40px]">
                <div className="w-[191px] h-[29.7px] flex flex-row items-start justify-start gap-[9.900000000000093px]">
                <JavaScriptOutlined
                        className="h-[29.7px] w-[43.3px] relative min-h-[30px] shrink-0 [debug_commit:1cbd860]"
                        alt=""
                        
                    />
                    <div className="h-[27.6px] flex-1 flex flex-col items-start justify-start pt-[2.099999999999909px] px-0 pb-0 box-border">
                    <RadarChartOutlined
                            className="self-stretch h-[25.5px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1cbd860]"
                            alt=""
                            
                        />
                    </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[20px]">
                        Copyright © 2020 Nexcent ltd.
                    </div>
                    <div className="self-stretch relative leading-[20px]">
                        All rights reserved
                    </div>
                </div>
                <div className="h-8 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <InstagramOutlined 
                        className="h-8 w-8 relative min-h-[32px]"
                        loading="lazy"
                        alt=""
                      
                    />
                    <GoogleOutlined
                        className="h-8 w-8 relative min-h-[32px]"
                        alt=""
                        
                    />
                  <YoutubeOutlined
                        className="h-8 w-8 relative min-h-[32px]"
                        alt=""
                        
                    />
                   <TwitterOutlined
                        className="h-8 w-8 relative min-h-[32px]"
                        alt=""
                        
                    />
                </div>
            </div>
            <div className="w-[635px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[30px] min-w-[635px] max-w-full text-left text-xl text-neutral-white font-body-regular-body-3 lg:min-w-full mq825:flex-wrap mq1400:flex-1">
                <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                        Company
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                        <div className="self-stretch relative leading-[20px]">About us</div>
                        <div className="self-stretch relative leading-[20px]">Blog</div>
                        <div className="self-stretch relative leading-[20px]">Contact us</div>
                        <div className="self-stretch relative leading-[20px]">Pricing</div>
                        <div className="self-stretch relative leading-[20px]">
                            Testimonials
                        </div>
                    </div>
                </div>
                <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                        Support
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                        <div className="self-stretch relative leading-[20px]">
                            Help center
                        </div>
                        <div className="self-stretch relative leading-[20px]">
                            Terms of service
                        </div>
                        <div className="self-stretch relative leading-[20px]">Legal</div>
                        <div className="self-stretch relative leading-[20px]">
                            Privacy policy
                        </div>
                        <div className="self-stretch relative leading-[20px]">Status</div>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[166px]">
                    <div className="w-40 relative leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
                        Stay up to date
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between pt-[9px] px-3 pb-[11px] relative gap-[20px] text-sm text-text-gray-300">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-gray" />
                        <div className="relative leading-[20px] inline-block min-w-[126px] z-[1]">
                            Your email address
                        </div>
                        <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <SearchOutlined  className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]" />
                               
                            
                        </div>
                    </div>
                </div>
            </div>
            </footer>
    )
}