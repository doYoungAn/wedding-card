import { FC } from 'react';
import { toast } from 'react-toastify';
import BaseButton from '../baseButton';

interface AccountInfoProps {
  isBorderTop?: boolean;
  account: Account;
}

const AccountInfo: FC<AccountInfoProps> = ({ isBorderTop, account }) => {

  const onClickClipboard = async (owner: string, accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      toast(`${owner}님의 계좌번호가 복사되었습니다.`);
    } catch {
      toast('계좌번호 복사에 실패하였습니다');
    }
  }

  return (
    <div className={`w-5/6 py-3 px-2 flex justify-between bg-whiteBg ${isBorderTop ? 'border-t-[1px] border-mainBorder' : ''}`}>
      <div>
        <div className='text-sm'>
          <span>{account.bankName}</span>
          <span className='mx-1'>|</span>
          <span>{account.accountNumber}</span>
        </div>
        <div>
          <span className='text-sm'>{account.owner}</span>
        </div>
      </div>
      <div>
        <BaseButton onClick={() => onClickClipboard(account.owner, account.accountNumber)}>복사</BaseButton>
      </div>
    </div>
  )
}

export default AccountInfo