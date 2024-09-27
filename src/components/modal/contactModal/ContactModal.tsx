import { FC, useEffect } from 'react';
import { ReactComponent as CloseIcon } from './../../../assets/icon/close.svg';
import { ReactComponent as PhoneIcon } from './../../../assets/icon/phone.svg';
import { ReactComponent as MessageIcon } from './../../../assets/icon/message.svg';
import { GROOM_PEOPLE, BRIDE_PEOPLE } from './../../../data/phone';

interface ContactModalProps {
  onClickClose?: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ onClickClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onClickPhone = (phone: string): void => {
    window.open(`tel:${phone}`);
  };

  const onClickMessage = (phone: string): void => {
    window.open(`sms:${phone}`);
  };

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-modalDarkBackBg flex flex-col z-[1000] overflow-auto">
      <div className="w-full h-[80px] flex items-center justify-end px-4">
        <CloseIcon
          width={30}
          height={30}
          className="fill-[#fff]"
          onClick={() => onClickClose?.()}
        />
      </div>
      <div className="w-full text-center my-12">
        <h2 className="text-s text-subTitle">Contact</h2>
        <h3 className="text-xl text-[#fff] font-IropkeBatangM">연락하기</h3>
      </div>
      <div className="w-full px-4 font-IropkeBatangM">
        <div className="mb-8">
          <div className="text-[#ccc] border-b-[1px] border-dotted pb-2">
            <span className="mr-4">신랑측</span>
            <span className="text-xs font-pre">GROOM</span>
          </div>
          {GROOM_PEOPLE.map((person) => (
            <div className="flex flex-row py-4 font-IropkeBatangM">
              <div className="flex-1 flex items-center text-[#ccc] text-sm">
                {person.description}
              </div>
              <div className="flex-1 text-[#fff] font-bold text-center">
                {person.name}
              </div>
              <div className="flex-1 flex items-center justify-center gap-4">
                <PhoneIcon
                  className="fill-[#ccc]"
                  width={20}
                  height={20}
                  onClick={() => onClickPhone(person.phone)}
                />
                <MessageIcon
                  className="fill-[#ccc]"
                  width={20}
                  height={20}
                  onClick={() => onClickMessage(person.phone)}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-[#ccc] border-b-[1px] border-dotted pb-2">
            <span className="mr-4">신부측</span>
            <span className="text-xs font-pre">BRIDE</span>
          </div>

          {BRIDE_PEOPLE.map((person) => (
            <div className="flex flex-row py-4 font-IropkeBatangM">
              <div className="flex-1 flex items-center text-[#ccc] text-sm">
                {person.description}
              </div>
              <div className="flex-1 text-[#fff] font-bold text-center">
                {person.name}
              </div>
              <div className="flex-1 flex items-center justify-center gap-4">
                <PhoneIcon
                  className="fill-[#ccc]"
                  width={20}
                  height={20}
                  onClick={() => onClickPhone(person.phone)}
                />
                <MessageIcon
                  className="fill-[#ccc]"
                  width={20}
                  height={20}
                  onClick={() => onClickMessage(person.phone)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
