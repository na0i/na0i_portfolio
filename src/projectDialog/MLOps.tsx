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

const MLOps = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          데이터 수집/분석 부터 모델 학습/배포 까지의 과정을 하나의 Lifecycle로
          간 주하고 효율적으로 관리하는 플랫폼입니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>데이터셋 관리, 장비 리스트, 배포 결과 페이지 구현</li>
          <li>비디오 플레이어 및 비디오 프레임 단위로 이동 기능 구현</li>
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

export default MLOps;
