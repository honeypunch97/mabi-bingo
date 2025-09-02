import { memo, useState } from 'react';

interface BingoProps {
  data: {
    id: number;
    text: string;
    status: boolean;
  }[];
  backgroundImage?: string; // 뒷면에 사용할 이미지 URL
}

const Bingo = memo(({ data, backgroundImage }: BingoProps) => {
  return (
    <div className='grid aspect-square w-full grid-cols-5 grid-rows-5 gap-1 md:gap-2'>
      {data.map((item, index) => (
        <BingoItem
          key={item.id}
          item={item}
          backgroundImage={backgroundImage}
          gridPosition={index} // 0~24
        />
      ))}
    </div>
  );
});

export default Bingo;

const BingoItem = memo(
  ({
    item,
    backgroundImage,
    gridPosition,
  }: {
    item: { id: number; text: string; status: boolean };
    backgroundImage?: string;
    gridPosition: number;
  }) => {
    const [isActive, setIsActive] = useState(false);

    // 5x5 그리드에서의 행과 열 계산
    const row = Math.floor(gridPosition / 5);
    const col = gridPosition % 5;

    // 올바른 배경 위치 계산
    // 각 조각은 25%씩 이동해야 함 (100% / 4 = 25%, 0부터 시작하므로)
    const backgroundPositionX = col * 25; // 0%, 25%, 50%, 75%, 100%
    const backgroundPositionY = row * 25; // 0%, 25%, 50%, 75%, 100%

    return (
      <button
        className='relative h-full w-full cursor-pointer rounded-md shadow-lg transition-all duration-300'
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`absolute inset-0 h-full w-full`}
          style={{
            transform: isActive ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s',
          }}
        >
          {/* 앞면 */}
          <div className='font-medium/6 absolute inset-0 flex items-center justify-center rounded-md border bg-sky-100 p-1 text-xs leading-3 transition-colors backface-hidden hover:bg-sky-200 md:p-2 md:text-lg md:leading-8'>
            {item.text}
          </div>

          {/* 뒷면 - 이미지 조각 */}
          <div
            className='absolute inset-0 flex rotate-y-180 items-center justify-center overflow-hidden rounded-md text-white backface-hidden'
            style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              backgroundSize: '500% 500%', // 5x5이므로 500%
              backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: backgroundImage ? 'transparent' : '#3b82f6',
            }}
          >
            {!backgroundImage && `뒷${item.text}`}
          </div>
        </div>
      </button>
    );
  },
);
