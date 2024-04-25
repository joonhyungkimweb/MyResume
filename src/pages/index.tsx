import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Profile from "../images/profile.jpeg";
import LinkedIn from "../images/icons/linkedin.svg";
import Github from "../images/icons/github.svg";
import Email from "../images/icons/email.svg";

const profileLinks = [
  {
    link: "mailto:asy8010@gmail.com",
    icon: Email,
    alt: "send email",
  },
  {
    link: "https://www.linkedin.com/in/joon-hyung-kim-682563252",
    icon: LinkedIn,
    alt: "link to linkedin",
  },
  {
    link: "https://github.com/joonhyungkimweb",
    icon: Github,
    alt: "link to github",
  },
];

const BlueDotttedText = ({ children }: React.PropsWithChildren) => (
  <>
    {children}
    <span className="text-6xl text-indigo-500">.</span>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="py-24 max-w-[800px] px-5 mx-auto">
      <header className="flex flex-wrap gap-10 justify-center mb-32">
        <section className="flex flex-col justify-center items-center md:items-end order-2 md:order-1">
          <h1 className="text-7xl font-medium">김준형</h1>
          <h2 className="text-gray-500">Fullstack Web Developer</h2>
          <div className="mt-3 flex gap-3">
            {profileLinks.map(({ alt, icon, link }) => (
              <a
                href={link}
                key={link}
                target={link.split(":")[0] === "mailto" ? "_self" : "_blank"}
              >
                <img
                  src={icon}
                  className="w-5 aspect-square fill-slate-50"
                  alt={alt}
                />
              </a>
            ))}
          </div>
        </section>
        <figure className="basis-full flex justify-center order-1 md:basis-auto md:order-2">
          <img
            src={Profile}
            className="rounded-full w-full max-w-[420px] md:max-w-[300px] aspect-square"
          />
        </figure>
      </header>
      <section className="">
        <h2 className="text-6xl mt-10 mb-16 font-medium">
          <BlueDotttedText>경력</BlueDotttedText>
        </h2>
        <div className="flex flex-wrap">
          <div className="basis-60">
            <h3 className="text-3xl mb-5">
              <a href="https://www.ainomis.com/ko" target="_blank">
                에이아이노미스
              </a>
            </h3>
            <p className="text-gray-500">Web Developer</p>
            <p className="text-gray-500">2020.11 ~ 2023.12 (3년 1개월)</p>
          </div>
          <div className="basis-[calc(100%-15rem)]">
            <h4 className="text-3xl mb-3">상세업무</h4>
            <ul>
              <li>
                회사 메인 프로덕트인 nocodingAI 전반적인 개발을 담당했습니다.
              </li>
              <li>
                nocodingAI 핵심 기능인 GUI 드래그앤 드롭 기반 딥러닝 개발 및
                데이터 전처리 기능을 개발했습니다.
              </li>
              <li>
                다수의 AI 모델을 사용하는 inference 백엔드 서버를 개발했고,
                클라우드 환경에서 API 요청에 따라 GPU 인스턴스를 추가 및
                제거하는 Serverless 아키텍처를 구축했습니다.
              </li>
              <li>
                AWS 및 GCP 환경에서 FE, BE CI/CD 파이프 라인을 구축했습니다.
              </li>
              <li>
                chatGPT, StableDiffusion 등 AI 모델 추론 API를 Slack bot으로
                연동하여 nocodingAI slack bot을 개발했습니다.
              </li>
              <li>
                인턴 및 신입 개발자 대상으로 개발 관련(git, docker, javascript)
                스터디를 진행했습니다.
              </li>
              <li>
                메인 프로덕트 nocodingAI 이외에도 사내 프로젝트 및 외주업무에
                풀스택으로 참여하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 김준형</title>;
