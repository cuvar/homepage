import type { NextPage } from "next";
import Link from "../components/Link";
import SiteWrapper from "../components/SiteWrapper";

const Home: NextPage = () => {
  return (
    <SiteWrapper>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col space-y-2">
          <Link href="https://github.com/cuvar" title="github" tab="new" />
          <Link
            href="https://www.linkedin.com/in/luca-mueller01/"
            title="linkedin"
            tab="new"
          />
          <Link href="https://blog.cuvar.dev" title="blog" tab="new" />
          <Link href="https://resumee.cuvar.dev" title="résumé" tab="new" />
          <Link href="mailto:luca@cuvar.dev" title="mail" tab="new" />
        </div>
      </div>
    </SiteWrapper>
  );
};

export default Home;
