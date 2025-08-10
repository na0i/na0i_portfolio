import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dashboardImg from "@/assets/image/Statistics/dashboard.png";
import objectSearchImg from "@/assets/image/Statistics/objectSearch.png";
import statusImg from "@/assets/image/Statistics/status.png";

const Statistics = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          CCTV 기반 데이터를 활용해 지역별 통계 정보를 직관적으로 파악할 수 있는
          AI 지능형 통계 분석 시스템입니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>프로젝트 단독 프론트엔드 개발</li>
          <li>ECharts 라이브러리를 사용해 다양한 차트와 함께 데이터 표출</li>
          <li>
            windowing 기법을 사용해 10000+ 요소의 렌더링을 부드럽게 최적화
          </li>
          <li>차트 데이터를 이미지, 엑셀로 변환해 데이터 활용 제고</li>
          <li>SWR을 사용해 크기가 큰 데이터 렌더링 성능 개선</li>
          <li>Backend 개발자와 소통하여 API 프로토콜 형태 개선에 참여</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <img src={dashboardImg} alt="dashboard" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={objectSearchImg} alt="objectSearch" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={statusImg} alt="status" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Statistics;
