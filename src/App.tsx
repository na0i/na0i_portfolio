import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import Chatbot from "./projectDialog/Chatbot";
import MAM from "./projectDialog/MAM";
import MLOps from "./projectDialog/MLOps";
import NamBTI from "./projectDialog/NamBTI";
import RGNews from "./projectDialog/RGNews";
import Solver from "./projectDialog/Solver";
import Statistics from "./projectDialog/Statistics";

const App = () => {
  const expreience = [
    {
      name: "MAM v2",
      dialogContent: <MAM />,
      img: "",
      company: "Innodep",
      period: "2024.05 ~ 진행중",
      skills: [
        "React",
        "TypeScript",
        "Recoil",
        "Styled-Components",
        "Tanstack Query",
      ],
      position: "프론트엔드",
    },
    {
      name: "AI 지능형 통계",
      dialogContent: <Statistics />,
      img: "",
      company: "Innodep",
      period: "2024.09 - 진행중",
      skills: [
        "React",
        "TypeScript",
        "Recoil",
        "Styled-Components",
        "SWR",
        "ECharts",
      ],
      position: "프론트엔드",
    },
    {
      name: "MLOps",
      dialogContent: <MLOps />,
      img: "",
      company: "Innodep",
      period: "2023.10 - 2024.03",
      skills: ["React", "TypeScript", "Recoil", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "HyperChatbot",
      dialogContent: <Chatbot />,
      img: "",
      company: "TmaxAI",
      period: "2023.01 - 2023.12",
      skills: [
        "React",
        "TypeScript",
        "Recoil",
        "Styled-Components",
        "SWR",
        "ReactFlow",
      ],
      position: "프론트엔드",
    },
    {
      name: "RG News",
      dialogContent: <RGNews />,
      img: "",
      company: "TmaxAI",
      period: "2023.01 - 2023.12",
      skills: ["React", "TypeScript", "Recoil", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "NamBTI",
      dialogContent: <NamBTI />,
      img: "",
      company: "Side Project",
      period: "2025.08 - 2025.08",
      skills: ["Next", "TypeScript", "TailwindCSS"],
      position: "기획 / 디자인 / 프론트엔드",
    },
    {
      name: "SOLVER",
      dialogContent: <Solver />,
      img: "",
      company: "SSAFY",
      period: "2021.06 - 2021.07",
      skills: ["Vuejs", "TypeScript"],
      position: "기획 / 디자인 / 프론트엔드",
    },
  ];

  return (
    <div className="w-screen min-h-screen flex flex-col gap-7 p-10 ">
      <h1 className="text-4xl text-center font-bold">Park Nayoung</h1>
      <h2 className="text-2xl text-center font-bold">Frontend Engineer</h2>
      <div className="flex">
        <div className="flex-1 text-center">
          <h5 className="text-lg font-bold mb-1">
            👂 사용자 경험에 민감한 개발자입니다.
          </h5>
          <p className="text-center">
            사용자 관점에서 끊임없이 고민하고 개선하려 합니다. <br /> 적극적인
            커뮤니케이션을 통해 더 나은 UI/UX라는 목표를 향해 나아갑니다.
          </p>
        </div>
        <div className="flex-1">
          <h5 className="text-lg font-bold mb-1 text-center">
            📚 배움과 성장은 함께, 성장을 적극 도모합니다.
          </h5>
          <p className="text-center">
            조직의 성장을 위해 지식을 공유하는 시간을 소중히 여깁니다. <br />
            세미나와 개발 문서 작성을 통한 신뢰의 문화를 추구해 조직내의 협업
            증대에 기여합니다.
          </p>
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold mt-5">Experience</h2>
      <div className="grid grid-cols-3 gap-5">
        {expreience.map(
          ({ img, name, company, position, skills, period, dialogContent }) => (
            <Dialog key={name}>
              <DialogTrigger>
                <div className="bg-white rounded-lg p-5 shadow-lg flex flex-col items-baseline gap-2">
                  <img src={img} />
                  <span className="inline-block text-sm">{company}</span>
                  <div>
                    <h3 className="inline text-lg font-bold mr-2">{name}</h3>
                    <span className="text-xs">{period}</span>
                  </div>
                  <div>{position}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skills.map((skill) => (
                      <span className="text-xs px-2 py-1 bg-[#f6f6f6] rounded-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="min-w-[70vw] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{name}</DialogTitle>
                  <DialogDescription>{dialogContent}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </div>
  );
};

export default App;
