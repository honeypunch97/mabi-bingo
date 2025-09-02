import { memo, useState } from 'react';
import Bingo from '../components/Bingo';

const BingoPage = memo(() => {
  const [data, _] = useState([
    { id: 1, text: '주 재능 환\n현렙 200/\n탐렙50유지', status: false },
    { id: 2, text: '주 무기\n에르그 50', status: false },
    { id: 3, text: '알반 토템\n마공5\n최댐5', status: false },
    { id: 4, text: '주무기/\n주장비\n올 마스터', status: false },
    { id: 5, text: '메인스트림\nG26까지\n클리어', status: false },
    { id: 6, text: '수집일기\n300종\n수집', status: false },
    { id: 7, text: '풀샤인\n(누렙 4만)', status: false },
    { id: 8, text: '에코스톤\n3개 모두\n100이상', status: false },
    { id: 9, text: '정령 4개\n이상\n100렙', status: false },
    { id: 10, text: '주장비\n리파인드급\n이상', status: false },
    { id: 11, text: '음식작\n(환생후\n음식먹기)', status: false },
    { id: 12, text: '24개(23개)\n그랜마\n달성', status: false },
    { id: 13, text: '학회 졸업\n스타더스트\n서브 10렙', status: false },
    { id: 14, text: '올 스킬\n3단 승단\n완료', status: false },
    { id: 15, text: '4인 이상\n인형가방\n소유', status: false },
    { id: 16, text: '주무기\n페러급\n이상', status: false },
    { id: 17, text: '펫 하우스\n4단계', status: false },
    { id: 18, text: '키트\n타이틀\n소유', status: false },
    { id: 19, text: '농장\n미니어처\n세팅 완료', status: false },
    { id: 20, text: '신성렙\n225 달성', status: false },
    { id: 21, text: '베테랑 챈\n이상\n인챈트 사용', status: false },
    { id: 22, text: '특성\n올10렙', status: false },
    { id: 23, text: '콤보 카드\n최종 수치\n80이상', status: false },
    { id: 24, text: '아르카나\n전부 레벨\n50', status: false },
    { id: 25, text: '최댐 30/\n마공 20\n이상 토템', status: false },
  ]);
  return (
    <div className='mx-auto flex h-full w-full max-w-2xl items-center justify-center'>
      <Bingo data={data} backgroundImage={'/img_bingo_bg.png'} />
    </div>
  );
});

export default BingoPage;
