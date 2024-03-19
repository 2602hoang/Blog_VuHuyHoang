import baone from '../asset/baone.png';
import user from '../asset/userTest.png'

export default function Component(){
    return(
        <div className="self-stretch w-[368px] shrink-0 flex flex-col items-center justify-start max-w-full text-center text-xl text-neutral-grey font-body-regular-body-3">
        <img
          className="self-stretch h-[286px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={user}
        />
        <div className="w-[317px] rounded-lg bg-neutral-silver shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] flex flex-col items-center justify-start p-4 box-border gap-[16px] z-[1] mt-[-96px]">
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            <a2>cat while</a2>
          </div>
          <div className="h-11 flex flex-row items-center justify-center py-2 px-[77px] box-border gap-[8px] text-left text-brand-primary mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[28px] font-semibold inline-block min-w-[99px] mq450:text-base mq450:leading-[22px]">
              Readmore
            </div>
            <img
              className="h-6 w-6 relative object-contain"
              alt=""
              src={baone}
            />
          </div>
        </div>
      </div>
    )
}