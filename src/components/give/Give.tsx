import { FC } from 'react';
import { toast } from 'react-toastify';
import BaseButton from '../common/baseButton';

const Give: FC = () => {

  return (
    <div className='w-full flex flex-col items-center gap-4 text-contentPrimary'>
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='w-5/6 bg-darkBg py-3 text-center rounded-md font-IropkeBatangM'>신랑측 계좌번호</div>
        {/** 신랑 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between bg-whiteBg'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신랑</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>

        {/** 신랑 아버님 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between border-t-[1px] bg-whiteBg border-mainBorder'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신랑 아버지</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>

        {/** 신랑 어머님 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between border-t-[1px] bg-whiteBg border-mainBorder'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신랑 어머니</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center flex-col'>
        <div className='w-5/6 bg-darkBg py-3 text-center rounded-md font-IropkeBatangM'>신부측 계좌번호</div>
        {/** 신랑 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between bg-whiteBg'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신부</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>

        {/** 신랑 아버님 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between border-t-[1px] bg-whiteBg border-mainBorder'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신부 아버지</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>

        {/** 신랑 어머님 계좌 */}
        <div className='w-5/6 py-3 px-2 flex justify-between border-t-[1px] bg-whiteBg border-mainBorder'>
          <div>
            <div className='text-sm'>
              <span>국민</span>
              <span className='mx-1'>|</span>
              <span>123-12345-1233</span>
            </div>
            <div>
              <span className='text-sm'>신부 어머니</span>
            </div>
          </div>
          <div>
            <BaseButton onClick={() => toast('계좌번호가 복사되었습니다.')}>복사</BaseButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Give