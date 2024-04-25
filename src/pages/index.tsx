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
      "MBC 라디오 클라이언트 어플리케이션 리뉴얼 작업에 참여했습니다.\n웹 어플리케이션 FE 개발과 크로스 플랫폼(win/mac) 어플리케이션 개발 업무를 담당했습니다.\n웹 앱의 경우 문제 없이 구현작업을 진행하였으나 Electron을 이용하여 크로스 플랫폼 앱을 개발하는 도중 OS 시작 시 자동으로 시작, 투명도 관련 설정 등 OS마다 기능이 다른 부분이 있었습니다. 기획측과 논의한 결과 window쪽 기능을 충실히 구현하는데에 더 무게를 두기로 하고 mac 관련 기획을 변경하는 쪽으로 진행하여 잘 마무리할 수 있었습니다.",
    stacks: "Typescript(React, Electron)",
  },
  {
    title: "NomisQR",
    team: "에이아이노미스",
    start: "2023.7",
    end: "2023.8",
    link: "https://www.nomisqr.com/",
    details:
      "생성형 AI 모델을 사용해QR 코드로 인식가능한 이미지를 생성하는 웹 플랫폼입니다.\n이미지 생성 API 서버 구축 및 웹 어플리케이션 BE 개발을 담당했습니다.\n이미지 생성의 경우 Stable diffusion 모델을 컨테이너화 시켜 사용했고 중계 서버를 두어 클라이언트단에 Stable Diffusion 추론 서버가 노출되지 않도록 구성했습니다. 중계 서버는 URL을 요청받아 QR 코드로 생성한 후, 미리 입력된 prompt 및 설정값과 함께 Stable Diffusion 추론 서버로 보내 생성된 이미지를 클라이언트로 반환합니다. 생성된 qr 이미지가 스캔이 되지 않는 경우도 있었기 때문에 생성된 QR 이미지를 중계서버에서 인식해보고 인식이 되지 않으면 Stable diffusion으로 이미지 재생성을 요청하는 방식으로 인식률을 보장했습니다.",
    stacks: "Python(fastAPI), Docker",
  },
  {
    title: "Timeflik NFT Market place",
    team: "에이아이노미스(외주업무)",
    start: "2023.9",
    end: "2023.12",
    link: "https://nft.timeflik.com",
    details:
      "유저가 직접 만든 안드로이드 및 ios 워치 페이스를 NFT로 거래하는 마켓 플레이스입니다. NFT 경매 smart contract 작성 및 FE, BE 개발 전반을 담당했습니다.\nNFT 마켓를 반응형 웹앱으로 구현하고 다른 팀에서 해당 웹앱을 네이티브앱에 웹뷰로 연동하는 프로젝트였습니다. 연동 도중 브라우저 상에서는 문제없이 동작했지만 모바일 앱의 웹뷰에서 스마트폰에 설치된 지갑 어플리케이션을 호출하지 못하는 이슈가 발생했습니다. 브라우저 자체에 내장된 web3 관련 기능이 모바일 웹뷰에서 제대로 동작하지 못하는 문제였고, 지갑 연동 기능 관련 web3 라이브러리를 추가 사용하는 방안을 통해 해결했습니다. 이외에도 1차 기획 시 즉시 구매방식이었던 smart contract가 리뉴얼 이후 경매 방식으로 바뀌는 등의 이슈가 있었지만 solidity smart contract 소스를 전체적으로 재작성하여 기획의도에 맞게 수정했습니다.",
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
      "어린이 영어 도서 독서 앱입니다. AI가 생성한 퀴즈를 통해 아동이 책 내용을 얼마나 이해했는지 평가합니다. webview 기반 크로스 플랫폼(Android/ios) 앱입니다.\nreact로 웹어플리케이션을 구축하고 nest.js로 백엔드를 구축했습니다.\n웹 어플리케이션 구현에는 별다른 문제가 없었으나 react native에서 인앱 결제 구독 영수증을 검증하는 기능이 deprecated 된 API를 사용하고 있어 영수증을 DB에 저장해놓고 백엔드에서 영수증을 검증하도록 하여 해결했습니다.",
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
      "NFC에 기록된 wifi 정보를 스캔하여 wifi에 자동으로 연결하는 IOS 앱입니다.\napplication/vnd.wfa.wsc mime type 데이터가 기록된 NFC 태그를 안드로이드 기기에서 스캔하면 해당 wifi 정보를 사용해 자동으로 wifi에 연결되지만 IOS는 해당 기능을 제공하지 않습니다. IOS 기기에서도 wifi 정보가 기록된 NFC를 사용해 wifi에 연결할 수 있도록 만든 토이프로젝트 앱입니다.",
    stacks: "Swift(SwiftUI)",
  },
];

const skills = {
  Language: ["TS/JS", "Python", "Swift"],
  "FE/App": ["React", "React-native", "Ios"],
  BE: ["Express", "Nest.js", "FastAPI"],
  DB: ["MongoDB", "Postgresql", "Mysql"],
  Cloud: ["AWS", "GCP"],
  DevOps: ["Docker", "Kubernetes"],
};

const BlueDotttedText = ({ children }: React.PropsWithChildren) => (
  <>
    {children}
    <span className="text-5xl text-indigo-500">.</span>
  </>
);

const beforeMinidot =
  "before:content-['•'] before:absolute before:left-0 before:inline-block before:text-indigo-500 ";

const StyledListItem = ({ children }: React.PropsWithChildren) => (
  <li className={`relative p-[.1rem_0_.1rem_1rem] ${beforeMinidot}`}>
    {children}
  </li>
);

const IndexPage: React.FC<PageProps> = () => {
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
            <div className="basis-full md:basis-[calc(100%-22rem)]">
              <ul className="md:text-lg">
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
            </div>
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
              <li className="flex flex-wrap">
                <div className="basis-full mb-5 md:basis-72 md:mb-10 md:mr-8 md:text-end">
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
                <div className="relative basis-full md:basis-[calc(100%-20rem)] pl-4 border-l-2 border-l-indigo-500 mb-12">
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
        <ul className="flex flex-wrap">
          {Object.entries(skills).map(([category, skills]) => (
            <li
              className="p-3 basis-1/2 sm:basis-1/3 md:basis-1/4"
              key={category}
            >
              <h3 className="text-2xl md:text-3xl font-medium mb-2">
                {category}
              </h3>
              <ul className="text-xl">
                {skills.map((skill) => (
                  <StyledListItem key={skill}>{skill}</StyledListItem>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-5xl md:text-6xl mb-12 md:mb-16 font-medium">
          <BlueDotttedText>외국어 / 자격증</BlueDotttedText>
        </h2>
        <ul className="text-xl">
          <StyledListItem>영어 : 중상(일상회화 가능)</StyledListItem>
          <StyledListItem>일본어 : 상(고급 회화 가능)</StyledListItem>
          <StyledListItem>JLPT N1</StyledListItem>
          <StyledListItem>정보처리기사</StyledListItem>
        </ul>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 김준형</title>;
