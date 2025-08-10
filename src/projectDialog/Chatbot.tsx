import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import reactFlowImg from "@/assets/image/HyperChatbot/reactFlow.png";
import reactFlowImg2 from "@/assets/image/HyperChatbot/reactFlow2.png";
import reactFlowImg3 from "@/assets/image/HyperChatbot/reactFlow3.png";
import reactFlowImg4 from "@/assets/image/HyperChatbot/reactFlow4.png";

const Chatbot = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">프로젝트 개요</h3>
        <p>
          HyperChatbot은 규칙 기반 방식의 대화형 챗봇 생성 플랫폼입니다. <br />{" "}
          노드를 통해 쉽게 챗봇 플로우를 구성하여 사용자와의 대화를 미리 정해진
          플로우로 응답하도록 제공하는 서비스입니다.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-black">프로젝트 내 역할</h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>ReactFlow 라이브러리를 사용해 노드 생성 및 연결 기능 구현</li>
          <li>챗봇 플로우를 이루는 노드의 다양한 입력 컴포넌트 생성</li>
          <li>SWR을 사용해 렌더링 최적화</li>
        </ul>
      </div>

      <div className="w-full px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <img src={reactFlowImg} alt="dashboard" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={reactFlowImg2} alt="objectSearch" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={reactFlowImg3} alt="status" />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <img src={reactFlowImg4} alt="status" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Chatbot;
