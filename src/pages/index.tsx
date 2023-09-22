import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-2/3 w-full flex-col items-center justify-center">
        <div className="mx-4 flex w-5/6 flex-col space-y-8 md:w-3/4 lg:w-1/2 xl:w-2/5">
          <h1 className="text-3xl font-bold">Hi, I&apos;m Luca!</h1>
          <p>
            I am an aspiring fullstack software engineer with a love for web
            development. I focus on developing user-facing application, hence,
            concentrating also on product engineering
          </p>
          <Links />
        </div>
      </div>
    </SiteWrapper>
  );
}
