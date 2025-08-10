import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import monitoringImg from "@/assets/image/MAM/monitoring.png";
import monitoringImg2 from "@/assets/image/MAM/monitoring2.png";
import settingsImg from "@/assets/image/MAM/settings.png";
import thumbnailImg from "@/assets/image/MAM/thumbnail.png";

const MAM = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          관제중인 CCTV 영상 처리에 대한 다양한 서비스를 제공하기 위한
          플랫폼으로 영상 처리 서버의 상태를 실시간으로 확인하고 설정값을
          관리합니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>프로젝트 단독 프론트엔드 개발</li>
          <li>v1 프로젝트 마이그레이션 및 기능 추가 기획에 참여</li>
          <li>Socket 통신을 통해 실시간으로 서버 상태 및 로그 표출</li>
          <li>테스트 코드(Vitest)를 작성하여 가독성과 유지보수성을 높임</li>
          <li>i18next를 사용해 다국어 지원</li>
          <li>스켈레톤 UI 적용</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <img src={monitoringImg} alt="monitoring" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={monitoringImg2} alt="monitoring2" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={settingsImg} alt="settings" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={thumbnailImg} alt="thumbnail" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MAM;
