import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Profile from "../images/profile.jpeg";
import LinkedIn from "../images/icons/linkedin.svg";
import Github from "../images/icons/github.svg";
import Email from "../images/icons/email.svg";
import PlayStore from "../images/icons/playStore.svg";
import AppStore from "../images/icons/appStore.svg";

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

const projects = [
  {
    title: "NocodingAI",
    team: "에이아이노미스",
    start: "2020.11",
    end: "2023.12",
    link: "https://pro.nocodingai.com",
    details:
      "블록 코딩으로 AI 모델을 훈련시키고, AI 모델 추론 API를 파이프라인으로 만들 수 있는 웹 기반 AI 플랫폼입니다.\n 초기 MVP 버전부터 개발에 참여하여 Tenrsorflow js 기반의 GUI 딥러닝 AI 훈련 기능 및 데이터 전처리 기능을 개발했고, API 파이프라인에 사용되는 AI 모델 추론 서버 구축을 담당했습니다.\nAPI 파이프라인 기능은 AI 모델을 순차적으로 호출하여 추론하는 방식이기 때문에 실시간으로 추론 모델을 서브할 GPU 인스턴스가 필요했는데 가동할 수 있는 GPU 인스턴스가 제한된 상황이었습니다. 이를 해결하기 위해 kubernetes를 사용해 대기중인 인스턴스에 AI 모델 추론 서버 이미지가 포함된 docker container를 순환하여 사용하는 serverless 아키텍처를 구축하였고, 제한된 GPU 인스턴스를 보다 효율적으로 사용할 수 있었습니다.",
    stacks:
      "Typescript(react, express), Python, Postgresql, Kubernetes, Docker, AWS(ECS, Lambda, RDS), GCP(GKE)",
  },
  {
    title: "Soynet",
    team: "에이아이노미스(외주업무)",
    start: "2021.11",
    end: "2022.1",
    link: "https://soynet.io",
    details:
      "인공지능 실행 가속기 스타트업인 Soynet의 브랜드 페이지 작업입니다.\nVue로 FE를 구축했고 AWS lambda를 이용한 serverless API로 BE를 구성했습니다.\n회사 소개 페이지 및 마크다운 기반의 Model market, Blog 기능을 serverless architecture로 구현했습니다. 대부분의 자원을 AWS 서비스를 사용해 구축한 프로젝트입니다.",
    stacks: "Javascript(Vue), AWS(Lambda, DynamoDB, API Gateway)",
  },
  {
    title: "MBC 라디오 mini",
    team: "에이아이노미스(외주 업무)",
    start: "2022.1",
    end: "2022.4",
    link: "https://miniwebapp.imbc.com",
    details:
      "MBC 라디오 클라이언트 어플리케이션 리뉴얼 작업에 참여했습니다.\n웹 어플리케이션 FE 개발과 크로스 플랫폼(win/mac) 어플리케이션 개발 업무를 담당했습니다.\nElectron을 이용하여 크로스 플랫폼 앱을 개발하는 도중 OS 시작 시 자동으로 시작, 투명도 관련 설정 등 OS마다 기능이 다른 부분이 있어 구현이 어려운 부분이 있었습니다. 기획측과 논의한 결과 window쪽 기능을 충실히 구현하는데에 더 무게를 두기로 하고 mac 관련 기획을 변경하는 쪽으로 진행하여 잘 마무리할 수 있었습니다.",
    stacks: "Typescript(React, Electron)",
  },
  {
    title: "NomisQR",
    team: "에이아이노미스",
    start: "2023.7",
    end: "2023.8",
    link: "https://www.nomisqr.com/",
    details:
      "생성형 AI 모델을 사용해QR 코드로 인식가능한 이미지를 생성하는 웹 플랫폼입니다.\n이미지 생성 API 서버 구축 및 웹 어플리케이션 BE 개발을 담당했습니다.\n이미지 생성의 경우 Stable Diffusion 모델을 컨테이너화 시켜 사용했고 중계 서버를 두어 클라이언트단에 추론 서버가 노출되지 않도록 구성했습니다. 중계 서버는 URL을 요청받아 QR 코드로 생성한 후, 미리 입력된 prompt 및 설정값과 함께 Stable Diffusion 추론 서버로 보내 생성된 이미지를 클라이언트로 반환합니다. 생성된 qr 이미지가 스캔이 되지 않는 경우도 있었기 때문에 생성된 QR 이미지를 중계서버에서 인식해보고 인식이 되지 않으면 Stable Diffusion에 이미지 재생성을 요청하는 방식으로 인식률을 보장했습니다.",
    stacks: "Python(fastAPI), Docker",
  },
  {
    title: "Timeflik NFT Market place",
    team: "에이아이노미스(외주업무)",
    start: "2023.9",
    end: "2023.12",
    link: "https://nft.timeflik.com",
    details:
      "유저가 직접 만든 안드로이드 및 ios 워치 페이스를 NFT로 거래하는 마켓 플레이스입니다. NFT 경매 smart contract 작성 및 FE, BE 개발 전반을 담당했습니다.\nNFT 마켓을 반응형 웹앱으로 구현하고 앱 개발팀에서 해당 웹앱을 웹뷰를 통해 앱과 연동하는 프로젝트였습니다. 지갑 연동 기능이 브라우저 상에서는 문제없이 동작했지만, 웹뷰에서 스마트폰에 설치된 지갑 어플리케이션을 호출하지 못하는 이슈가 발생했습니다. 브라우저 자체에 내장된 web3 관련 기능이 모바일 웹뷰에서 제대로 동작하지 못하는 문제였고, 지갑 연동 기능 관련 web3 라이브러리를 추가 사용하는 방안을 통해 해결했습니다. 이외에도 1차 기획 시 즉시 구매방식이었던 smart contract가 리뉴얼 이후 경매 방식으로 바뀌는 등의 이슈가 있었지만 solidity smart contract 소스를 전체적으로 재작성하여 기획의도에 맞게 수정할 수 있었습니다.",
    stacks: "Typescript(react, nest.js), Solidity, MongoDB",
  },
  {
    title: "Readingwiz",
    team: "프리랜서",
    start: "2023.9",
    end: "2023.12",
    storeLinks: {
      ios: "https://apps.apple.com/dk/app/readingwiz/id6474678789",
      android: "https://play.google.com/store/apps/details?id=com.readingwiz",
    },
    details:
      "어린이 영어 도서 독서 앱입니다. AI가 생성한 퀴즈를 통해 아동이 책 내용을 얼마나 이해했는지 평가합니다. webview 기반 크로스 플랫폼(Android/ios) 앱입니다.\nReact로 웹어플리케이션을 구축하고 Nest.js로 백엔드를 구축했습니다.\n구독 기능 구현 중 React Native in-app 결제 라이브러리가 결제 영수증 검증 기능에 deprecated된 app store API를 사용하고 있는 것을 확인했습니다. 최신 버전에서도 해당 기능이 수정되지 않아, 결제 완료 후 영수증을 DB에 저장해놓고 백엔드에서 현행 API를 사용하여 영수증을 검증하도록 구현하여 해결했습니다.",
    stacks: "Typescript(React, nest.js), Postgresql, Docker, react native",
  },
  {
    title: "NFC Wifi Connector",
    team: "개인 토이 프로젝트",
    start: "2024.3",
    end: "2024.4",
    storeLinks: {
      ios: "https://apps.apple.com/kr/app/nfc-wifi-connector/id6496284170",
    },
    details:
      "NFC에 기록된 Wifi 정보를 스캔하여 Wifi에 자동으로 연결하는 IOS 앱입니다.\nmime type application/vnd.wfa.wsc 데이터가 기록된 NFC 태그를 Android 기기에서 스캔하면 해당 Wifi 정보를 사용해 자동으로 wifi에 연결되지만 IOS는 해당 기능을 제공하지 않습니다. IOS 기기에서도 wifi 정보가 기록된 NFC를 사용해 wifi에 연결할 수 있도록 만든 토이프로젝트 앱입니다.",
    stacks: "Swift(SwiftUI)",
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
                <div className="basis-full mb-5 md:basis-72 md:mb-0 md:mr-8 md:text-end">
                  <h3 className="text-3xl font-medium mb-2 md:text-4xl">
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
