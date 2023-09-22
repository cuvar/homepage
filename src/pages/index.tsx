import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-2/3 w-full flex-col items-center justify-center">
        <div className="mx-4 flex w-5/6 flex-col space-y-8 md:w-3/4 lg:w-1/2 xl:w-2/5">
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <div className="order-2 flex flex-col space-y-10 md:order-1">
              <h1 className="text-3xl font-bold">Hi, I&apos;m Luca!</h1>
              <p>
                I am an aspiring fullstack software engineer with a love for web
                development. I focus on developing user-facing application for
                creating helpful products. Currently I work at SAP.
              </p>
            </div>
            <Image
              src={"/me-circle.png"}
              alt={"Portrait of Luca"}
              width={250}
              height={250}
              className="order-1 pb-8 md:order-2 md:pb-0"
            />
          </div>
          <Links />
        </div>
      </div>
    </SiteWrapper>
  );
}
