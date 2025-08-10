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
      period: "2024. - 2023.12",
      skills: ["React", "TypeScript", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "AI 지능형 통계",
      dialogContent: <Statistics />,
      img: "",
      company: "Innodep",
      period: "2023.01 - 2023.12",
      skills: ["React", "TypeScript", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "MLOps",
      dialogContent: <div></div>,
      img: "",
      company: "Innodep",
      period: "2023.01 - 2023.12",
      skills: ["React", "TypeScript", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "HyperChatbot",
      dialogContent: <Chatbot />,
      img: "",
      company: "TmaxAI",
      period: "2023.01 - 2023.12",
      skills: ["React", "TypeScript", "Styled-Components"],
      position: "프론트엔드",
    },
    {
      name: "RG News",
      dialogContent: <RGNews />,
      img: "",
      company: "TmaxAI",
      period: "2023.01 - 2023.12",
      skills: ["React", "TypeScript", "Styled-Components"],
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
    <div className="w-screen min-h-screen flex flex-col gap-5 p-10 ">
      <h1 className="text-3xl text-center font-bold">Nayoung</h1>
      <h2 className="text-xl text-center font-bold">Frontend Engineer</h2>
      <h2 className="text-xl text-center font-bold">Experience</h2>
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
