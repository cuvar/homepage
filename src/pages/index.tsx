import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-full w-full items-center justify-center">
        <Links />
      </div>
    </SiteWrapper>
  );
}
