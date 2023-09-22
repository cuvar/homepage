import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-8">
        <div className="mx-4 sm:mx-10 md:mx-20">
          <h1 className="text-3xl font-bold">Hi, I&apos;m Luca</h1>
          <p>
            I am an aspiring fullstack software engineer with a love for web
            development. I focus on developing user-facing application, hence,
            concentrating also on product engineering
          </p>
        </div>
        <Links />
      </div>
    </SiteWrapper>
  );
}
