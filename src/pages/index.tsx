import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Profile from "../images/profile.jpeg";
import LinkedIn from "../images/icons/linkedin.svg";
import Github from "../images/icons/github.svg";
import Email from "../images/icons/email.svg";
import PlayStore from "../images/icons/playStore.svg";
import AppStore from "../images/icons/appStore.svg";
import projects from "./data/projects.json";

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

const skills = {
  Programming: [
    "사용하는 언어의 Idiom과 탐구하고 Convention을 준수하는 것을 즐깁니다.",
    "함수형과 객체 지향 패러다임을 이해하고 적재적소에 사용합니다.",
    "Javascript/Typescript에 능숙합니다. Typescript의 타입 조작 키워드를 사용하여 TS가 타입 추론을 잘 할 수 있게 격려합니다.",
    "Python의 방대한 AI 관련 생태계를 활용하고 환경을 구성하는데에 익숙합니다.",
  ],
  Frontend: [
    "주로 React를 사용해 Frontend를 개발합니다. 함수형 컴포넌트와 Hooks를 능숙하게 사용하고 로직을 적절히 분리합니다.",
    "날 것 그대로의 React를 탐구하는 한 편 생산성을 높이는 React 생태계에도 큰 관심을 기울입니다.",
    "컴포넌트의 디자인 패턴에 대해 숙고하고 우아한 컴포넌트 분리를 위해 노력합니다.",
    "시맨틱한 마크업과 웹 접근성 향상을 지향합니다.",
  ],
  Backend: [
    "Express, Nest.js, fastAPI 등의 프레임워크를 사용해 웹서버를 구축합니다.",
    "ORM을 사용하여 영속 데이터를 코드 중심으로 처리하는 것을 선호합니다.",
    "Testing Library로 테스트 코드를 작성하고 테스트 주도 개발을 실천하려 노력합니다.",
    "기능을 구현하는 것 뿐만이 아닌, 보다 효율적인 서비스 구조를 구축하기 위해 고민합니다.",
  ],
  Devops: [
    "Docker image 경량화 및 최적화를 위해 노력합니다.",
    "Kubernetes를 사용해 제한된 리소스를 보다 효율적으로 관리해 본 경험이 있습니다.",
    "클라우드 환경에서 제품을 배포하는데에 익숙하며, 다양한 클라우드 공급자 환경에서 CI/CD를 구축할 수 있습니다.",
    "온프레미스와 클라우드 간, 혹은 서로 다른 클라우드 공급자 사이의 리소스를 이전하거나 각기 다른 환경을 통합해 아키텍처를 구축한 경험이 있습니다.",
  ],
  Others: {
    data: [
      "Git을 사용한 버전 관리에 익숙하며 한 커밋 한 커밋이 일관된 작업 내용을 담도록 하는 데에 많은 노력을 기울입니다. patch 옵션을 애용하고, 필요하다면 공격적인 rebase로 히스토리를 바로잡습니다.",
      "Jira, Notion 등 협업용 도구 사용에 익숙합니다.",
      "문제 해결을 위해 가능한 모든 방법을 탐구하고 필요하다면 낯선 분야라도 적극적으로 탐색합니다.",
      "더 많은 기술을 익히기 위해 몰두하는 것을 지양합니다. 익힌 기술로 현실의 문제에 도전하고 이를 해결했을 때 성장을 체감합니다.",
    ],
    easterEgg: "k8s와 i18n을 어떻게 읽는 줄 압니다.",
  },
};

const BlueDotttedText = ({ children }: React.PropsWithChildren) => (
  <>
    {children}
    <span className="text-5xl text-indigo-500">.</span>
  </>
);

const beforeMinidot =
  "before:content-['•'] before:absolute before:left-0 before:inline-block before:text-indigo-500";

const StyledListItem = ({
  children,
  style,
}: React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>) => (
  <li
    className={`relative p-[.1rem_0_.1rem_1rem] ${beforeMinidot}`}
    style={style}
  >
    {children}
  </li>
);

const IndexPage: React.FC<PageProps> = () => {
  const [easterEggShow, setEasterEggShow] = React.useState(false);
  return (
    <main className="py-24 max-w-[800px] px-5 mx-auto">
      <header className="flex flex-wrap gap-10 justify-center mb-20 md:mb-32">
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
                <img src={icon} className="w-5 aspect-square" alt={alt} />
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
      <section className="mb-20 md:mb-32">
        <h2 className="text-5xl md:text-6xl mb-12 md:mb-16 font-medium">
          <BlueDotttedText>경력</BlueDotttedText>
        </h2>
        <ul>
          <li className="flex flex-wrap">
            <div className="basis-full mb-5 md:basis-80 md:mb-10 md:mr-8 md:text-end">
              <h3 className="text-3xl font-medium mb-2 md:text-4xl">
                <span className="text-indigo-500">#</span>
                <a href="https://www.ainomis.com/ko" target="_blank">
                  에이아이노미스
                </a>
              </h3>
              <p className="text-gray-500">Web Developer</p>
              <p className="text-gray-500">2020.11 ~ 2023.12 (3년 1개월)</p>
            </div>
            <ul className="basis-full md:basis-[calc(100%-22rem)] md:text-lg">
              <StyledListItem>
                회사 메인 프로덕트
                <span className="text-sm">(nocodingAI)</span>
                개발 담당
              </StyledListItem>
              <StyledListItem>
                AI 모델 추론 서버 Serverless 아키텍처 구축
              </StyledListItem>
              <StyledListItem>FE, BE CI/CD 파이프 라인 구축</StyledListItem>
              <StyledListItem>
                인턴 및 신입 개발자 대상으로 개발 관련 스터디 진행
                <span className="text-sm block">(git, docker, JS)</span>
              </StyledListItem>
              <StyledListItem>
                기타 사내 프로젝트 및 외주업무 풀스택 개발
              </StyledListItem>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-20 md:mb-32">
        <h2 className="text-5xl md:text-6xl mb-12 md:mb-16 font-medium">
          <BlueDotttedText>프로젝트</BlueDotttedText>
        </h2>
        <ul>
          {projects.map(
            ({
              title,
              team,
              start,
              end,
              link,
              storeLinks,
              details,
              stacks,
            }) => (
              <li className="flex flex-wrap mb-12 md:mb-20">
                <div className="basis-full mb-5 md:basis-72 md:mb-0 md:mr-8 md:text-end break-words">
                  <h3 className="text-3xl font-medium mb-2 md:text-4xl whitespace-pre-line">
                    {link && <span className="text-indigo-500">#</span>}
                    <a href={link} target="_blank">
                      {title}
                    </a>
                  </h3>

                  <p className="text-gray-500">{team}</p>
                  <p className="text-gray-500">
                    {start} ~ {end}
                  </p>
                  {storeLinks && (
                    <div>
                      {storeLinks.android && (
                        <a href={storeLinks.android} target="_blank">
                          <img
                            src={PlayStore}
                            className="w-5 aspect-square inline-block"
                            alt="link to playstore"
                          />
                        </a>
                      )}
                      {storeLinks.ios && (
                        <a
                          href={storeLinks.ios}
                          target="_blank"
                          className="mx-2"
                        >
                          <img
                            src={AppStore}
                            className="w-5 aspect-square inline-block"
                            alt="link to appStore"
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="relative basis-full md:basis-[calc(100%-20rem)] pl-4 border-l-2 border-l-indigo-500">
                  <p className="whitespace-pre-line mb-4 md:text-lg">
                    {details}
                  </p>
                  <p className="text-sm text-gray-500">사용 기술: {stacks}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
      <section className="mb-20 md:mb-32">
        <h2 className="text-5xl md:text-6xl mb-12 md:mb-16 font-medium">
          <BlueDotttedText>기술</BlueDotttedText>
        </h2>
        <ul>
          {Object.entries(skills).map(([category, skills]) => (
            <li
              className="py-12 md:px-3 border-b last:border-b-0 last:pb-0 first:pt-0 md:py-16"
              key={category}
            >
              {Array.isArray(skills) ? (
                <>
                  <h3 className="text-3xl font-medium mb-2 md:text-4xl relative">
                    {category}
                  </h3>
                  <ul className="md:text-lg">
                    {skills.map((skill) => (
                      <StyledListItem key={skill}>{skill}</StyledListItem>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-medium mb-2 md:text-4xl relative">
                    <button
                      className="hover:text-indigo-950 cursor-default"
                      onClick={() => setEasterEggShow((prev) => !prev)}
                    >
                      {category}
                    </button>
                  </h3>
                  <ul className="md:text-lg transition-opacity">
                    {skills.data.map((skill) => (
                      <StyledListItem key={skill}>{skill}</StyledListItem>
                    ))}
                    <StyledListItem
                      style={{
                        textDecoration: "line-through",
                        transitionProperty: "opacity",
                        transitionDuration: "1000ms",
                        opacity: +easterEggShow * 0.5,
                      }}
                    >
                      {skills.easterEgg}
                    </StyledListItem>
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-20 md:mb-32">
        <h2 className="text-5xl font-medium mb-12 md:text-6xl md:mb-16">
          <BlueDotttedText>언어/자격</BlueDotttedText>
        </h2>
        <div className="flex flex-wrap justify-between md:px-3">
          <div className="flex-0 basis-[calc(50%-.5rem)]">
            <h3 className="text-3xl font-medium mb-2 md:text-4xl">외국어</h3>
            <ul className="md:text-lg">
              <StyledListItem>영어 : 일상 회화 가능</StyledListItem>
              <StyledListItem>
                일본어 : 고급 및 비지니스 회화 가능
                <span className="text-xs">(JLPT N1)</span>
              </StyledListItem>
            </ul>
          </div>
          <div className="flex-0 basis-[calc(50%-.5rem)]">
            <h3 className="text-3xl font-medium mb-2 md:text-4xl">자격증</h3>
            <ul className="md:text-lg">
              <StyledListItem>정보처리기사</StyledListItem>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <p className="text-lg text-end text-gray-500">🙇‍♂️</p>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 김준형</title>;
