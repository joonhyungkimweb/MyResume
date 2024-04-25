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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="py-24 flex justify-center">
      <header className="flex flex-wrap max-w-[768px] w-full gap-10 justify-center">
        <section className="flex flex-col justify-center items-center md:items-end order-2 md:order-1">
          <h1 className="text-7xl">김준형</h1>
          <h2 className="text-gray-500">Fullstack Web engineer</h2>
          <ul className="mt-3 flex gap-3">
            {profileLinks.map(({ alt, icon, link }) => (
              <li>
                <a
                  href={link}
                  target={link.split(":")[0] === "mailto" ? "_self" : "_blank"}
                >
                  <img src={icon} className="w-5 aspect-square" alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <figure className="w-full flex justify-center order-1 md:w-auto md:order-2">
          <img
            src={Profile}
            className="rounded-full max-w-[420px] sm:max-w-[300px] aspect-square"
          />
        </figure>
      </header>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 - 김준형</title>;
