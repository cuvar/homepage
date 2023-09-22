import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Hi, I&apos;m Luca</h1>
        </div>
        <Links />
      </div>
    </SiteWrapper>
  );
}
