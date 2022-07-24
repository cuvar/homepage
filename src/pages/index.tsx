import type { NextPage } from "next";
import CustomCanvas from "../components/Canvas";
import SiteWrapper from "../components/SiteWrapper";

const Home: NextPage = () => {
  return (
    <SiteWrapper>
      <div className="flex flex-col h-screen justify-center">
        <CustomCanvas />
      </div>
    </SiteWrapper>
  );
};

export default Home;
