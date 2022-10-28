import type { NextPage } from "next";
import CustomCanvas from "../components/Canvas";
import SiteWrapper from "../components/SiteWrapper";

const Home: NextPage = () => {
  return (
    <SiteWrapper>
      <div className="flex flex-col h-screen justify-center">
        <div className="flex flex-col items-center space-y-4 mt-10">
          <h1 className="text-lg text-center  mb-4">
            Some links to other stuff
          </h1>
          <div className="flex justify-between space-x-10">
            <a
              href="https://blog.cuvar.dev"
              className="text-2xl hover:underline text-cgreen-300"
              rel="noreferrer"
              target="_blank"
            >
              Blog
            </a>
            <a
              href="https://github.com/cuvar"
              className="text-2xl hover:underline text-cgreen-300"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <CustomCanvas />
      </div>
    </SiteWrapper>
  );
};

export default Home;
