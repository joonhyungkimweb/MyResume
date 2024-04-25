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
    <span className="text-5xl text-indigo-500">.</span>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="py-24 max-w-[800px] px-5 mx-auto">
      <header className="flex flex-wrap gap-10 justify-center mb-20 md:mb-32 ">
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
      <section>
        <h2 className="text-5xl md:text-6xl mb-12 md:mb-16 font-medium">
          <BlueDotttedText>경력</BlueDotttedText>
        </h2>
        <div className="flex flex-wrap">
          <div className="basis-full mb-5 md:basis-72 md:mb-10 md:mr-8 text-end">
            <h3 className="text-3xl md:text-4xl font-medium">
              <a href="https://www.ainomis.com/ko" target="_blank">
                에이아이노미스
              </a>
            </h3>
            <p className="text-gray-500">Web Developer</p>
            <p className="text-gray-500">2020.11 ~ 2023.12 (3년 1개월)</p>
          </div>
          <div className="basis-full md:basis-[calc(100%-20rem)]">
            <ul className="md:text-lg">
              <li>
                회사 메인 프로덕트<span className="text-sm">(nocodingAI)</span>
                개발 담당
              </li>
              <li>AI 모델 추론 서버 Serverless 아키텍처 구축</li>
              <li>FE, BE CI/CD 파이프 라인 구축</li>
              <li>
                인턴 및 신입 개발자 대상으로 개발 관련 스터디 진행
                <span className="text-sm block">(git, docker, JS)</span>
              </li>
              <li>기타 사내 프로젝트 및 외주업무 풀스택 개발</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 김준형</title>;
