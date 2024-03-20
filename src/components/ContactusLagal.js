import { useMemo } from "react";
import { UserOutlined ,GithubOutlined} from '@ant-design/icons';
import Icon from "@ant-design/icons/lib/components/Icon";
const ContactusLegal = ({ icon, number, label, propOverflow }) => {
  const iconStyle = useMemo(() => ({
    overflow: propOverflow,
  }), [propOverflow]);

  return (
    <section className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[166px] text-left text-9xl text-neutral-d-grey font-body-regular-body-3">
      {/* <UserOutlined
        className="h-12 w-12 relative overflow-hidden shrink-0"
        alt=""
        src={icon}
        style={iconStyle}
      /> */}
      {/* <GithubOutlined /> */}
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
        <b className="self-stretch relative leading-[36px] mq450:text-3xl mq450:leading-[29px]">
          {number}
        </b>
        <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
          {label}
        </div>
      </div>
    </section>
  );
};

export default ContactusLegal;