import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mainImg from "@/assets/image/SOLVER/main.png";
import myPageImg from "@/assets/image/SOLVER/mypage.png";
import notiImg from "@/assets/image/SOLVER/noti.png";

const Solver = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          질문자(1)-답변자(1)-참관인(N)의 학습 이슈 포럼 서비스입니다.
          <br />
          SSAFY 프로젝트의 일환으로 해당 프로젝트를 통해&nbsp;
          <b className="text-black font-bold">
            SSAFY 공통프로젝트 부문에서 1위
          </b>
          를 수상했습니다
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>기획, 와이어프레임 설계, 디자인 참여</li>
          <li>메인 페이지와 마이페이지, 알림 센터 구현</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <img src={mainImg} style={{ height: "360px" }} alt="dashboard" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={myPageImg} alt="status" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={notiImg} alt="objectSearch" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Solver;
