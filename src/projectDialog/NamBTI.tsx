import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import figmaImg from "@/assets/image/NamBTI/figma.png";
import resultImg from "@/assets/image/NamBTI/result.png";
import shareImg from "@/assets/image/NamBTI/share.png";
import surveyImg from "@/assets/image/NamBTI/survey.png";

const NamBTI = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          다른 사람이 보는 나는 어떨까? 라는 아이디어에서 착안한 서비스입니다.
          <br />
          간단한 MBTI 설문을 통해 남들이 보는 나의 MBTI는 어떤지를 확인할 수
          있습니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 접근</h3>
        <div>
          출시일(2025.08.06 ~ 현재 진행중)을 기준으로
          <br />
          배포 5일만에 조회수 12000+, 활성 사용자 2000+ 달성했습니다. (08.10
          기준)
        </div>
        <ul className="list-disc pl-5">
          <li>
            메인 페이지 접속 링크:&nbsp;
            <a
              className="text-blue-400 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
              href="https://www.nambti.site/"
            >
              NamBTI
            </a>
          </li>
          <li>
            결과 페이지 접속 링크:&nbsp;
            <a
              className="text-blue-400 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
              href="https://www.nambti.site/27f2ac688893d70c94ed932ad4e93efc039da27232ecf1e0e663cac78b72ac1e/result/"
            >
              박나영의 NamBTI
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>figma를 사용해 프로젝트 기획 및 디자인</li>
          <li>프론트엔드 개발</li>
          <li>Google Analytics 연동</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <img style={{ height: "500px" }} src={figmaImg} alt="dashboard" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img style={{ height: "500px" }} src={shareImg} alt="status" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img style={{ height: "500px" }} src={surveyImg} alt="status" />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                style={{ height: "500px" }}
                src={resultImg}
                alt="objectSearch"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default NamBTI;
