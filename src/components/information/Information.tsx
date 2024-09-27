import { FC, useState } from 'react';

const Information: FC = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="w-full font-IropkeBatangM text-contentPrimary">
      <div className="w-full flex flex-row">
        <div
          className={`flex-1 text-center py-3 bg-darkBg rounded-tl-md border-mainBorder ${tab === 1 ? 'border-t-[1px] border-r-[1px] border-l-[1px] bg-mainBg' : ''}`}
          onClick={() => setTab(1)}
        >
          식사안내
        </div>
        <div
          className={`flex-1 text-center py-3 bg-darkBg rounded-tr-md border-mainBorder ${tab === 2 ? 'border-t-[1px] border-r-[1px] border-l-[1px] bg-mainBg' : ''}`}
          onClick={() => setTab(2)}
        >
          주차안내
        </div>
      </div>
      {tab === 1 ? (
        <div className="h-[220px] px-4 py-6 text-center border-b border-l border-r border-mainBorder rounded-b-md">
          식사는 결혼식 및 사진촬영이 끝난 후 <br />
          웨딩홀 주변 층에서 단독으로 진행되며 뷔페식으로 제공됩니다. <br />
          <br />
          부담없이 즐기실 수 있도록 <br />
          한식을 비롯해 중식, 양식, 일식 등 <br />
          다양한 메뉴가 준비되어 있습니다. <br />
        </div>
      ) : null}
      {tab === 2 ? (
        <div className="h-[220px] px-4 py-6 text-center border-b border-l border-r border-mainBorder rounded-b-md">
          기본적으로 1시간 30분의 무료 주차가 제공됩니다. <br />
          <br />
          웨딩홀 지하주차장 만차 시 <br />
          호텔 바로 옆의 야외 주차장도 이용이 가능합니다.
        </div>
      ) : null}
    </div>
  );
};

export default Information;
