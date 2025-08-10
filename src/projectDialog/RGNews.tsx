import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mainImg from "@/assets/image/RGNews/main.png";
import articleImg from "@/assets/image/RGNews/article.png";
import bookmarkImg from "@/assets/image/RGNews/bookmark.png";

const RGNews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          개인 맞춤형 뉴스 서비스로, 사용자의 관심사에 맞춘 뉴스를 제공하는
          서비스입니다. <br /> 사용자의 검색 기록, 읽은 기사, 선호하는 주제 등을
          분석하여 최적화된 뉴스 콘텐츠를 추천하며, 실시간으로 업데이트되는 최신
          뉴스를 제공합니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>
            북마크 기능을 구현하여 사용자가 관심 있는 뉴스를 저장하고 관리
          </li>
          <li>
            react-beautiful-dnd 라이브러리를 사용해 드래그 앤 드롭으로 북마크
            폴더 순서를 변경
          </li>
          <li>contendeditable을 사용해 유동적 넓이 키워드 인풋 구현</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <img src={mainImg} alt="dashboard" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src={articleImg} alt="status" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src={bookmarkImg} alt="objectSearch" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default RGNews;
