import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Profile from "../images/profile.jpeg";
import LinkedIn from "../images/icons/linkedin.svg";
import Github from "../images/icons/github.svg";
import Email from "../images/icons/email.svg";

// email : asy8010@gmail.com
// linkedIn :
// github :

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="py-24 flex justify-center">
      <header className="flex flex-wrap max-w-[700px] w-full justify-between">
        <figure className="w-72 mr-10">
          <img src={Profile} className="rounded-full w-full y-full" />
        </figure>
        <section className="flex flex-col justify-center items-end">
          <h1 className="text-5xl">김준형</h1>
          <h2 className="text-gray-500">Fullstack Web engineer</h2>
          <ul className="mt-3 flex">
            <li className="mr-2">
              <a href="mailto:asy8010@gmail.com">
                <img src={Email} className="w-5 h-5" alt="send email" />
              </a>
            </li>
            <li className="mr-2">
              <a
                href="https://www.linkedin.com/in/joon-hyung-kim-682563252"
                target="_blank"
              >
                <img
                  src={LinkedIn}
                  className="w-5 h-5"
                  alt="link to linkedin"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/joonhyungkimweb" target="_blank">
                <img src={Github} className="w-5 h-5" alt="link to github" />
              </a>
            </li>
          </ul>
        </section>
      </header>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>이력서 | 김준형</title>;
