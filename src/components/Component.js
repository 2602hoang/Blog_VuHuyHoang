import { Card, Image } from 'antd';
import baone from '../asset/baone.png';
import gin from '../asset/gin.png'
import user from '../asset/userTest.png';

const Component = ({ image ,name,conten,imgs}) => (
  
  <div className="self-stretch w-[368px] shrink-0 flex flex-col items-center justify-start max-w-full text-center text-xl text-neutral-grey font-body-regular-body-3">
    <Image
    width={230}
      className="self-stretch h-[150px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
      loading="lazy"
      alt=""
      src={image}
    />
    {/* <Card style={{width:400}}>  */}
    <div className="w-[317px] max-h-full rounded-lg bg-neutral-silver shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] flex flex-col items-center justify-start p-4 box-border gap-[16px] z-[1] mt-[-96px]">
      <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
        {name}
      </div>
      <div></div>
      
      <div className=" h-[250px] flex flex-row items-center justify-center py-2 px-[77px] box-border gap-[8px] text-left text-brand-primary mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative leading-[28px]  font-semibold inline-block min-w-[129px] mq450:text-base mq450:leading-[22px]">
        <p>{conten}</p>
        </div>
        <img
          className="h-15 w-20 relative object-contain"
          alt=""
          src={imgs}
        />
      </div>
    </div>
    {/* </Card> */}
  </div>
  
);

export default Component;