import type { NextPage } from "next";
import CustomCanvas from "../components/Canvas";
import Heading from "../components/Heading";
import SiteWrapper from "../components/SiteWrapper";

const Home: NextPage = () => {
  return (
    <SiteWrapper>
      <div className="flex flex-col h-screen justify-center items-center">
        <Heading
          className=""
          text={"Welcome to my playground"}
          type={"h2"}
        ></Heading>
      </div>
    </SiteWrapper>
  );
};

export default Home;
