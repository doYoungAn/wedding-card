import { FC } from 'react';
import AccountInfo from '../common/accountInfo';
import { GROOM_ACCOUNTS, BRIDE_ACCOUNTS } from './../../data/account';

const Give: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-contentPrimary">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-5/6 bg-darkBg py-3 text-center rounded-md font-IropkeBatangM">
          신랑측 계좌번호
        </div>
        {GROOM_ACCOUNTS.map((groomAccount, index) => (
          <AccountInfo
            key={index}
            account={groomAccount}
            isBorderTop={index !== 0}
          />
        ))}
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-5/6 bg-darkBg py-3 text-center rounded-md font-IropkeBatangM">
          신부측 계좌번호
        </div>
        {BRIDE_ACCOUNTS.map((groomAccount, index) => (
          <AccountInfo
            key={index}
            account={groomAccount}
            isBorderTop={index !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Give;
