import Image from "next/image";
import Links from "~/components/Links";
import SiteWrapper from "~/components/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-2/3 w-full flex-col items-center justify-center">
        <div className="mx-4 flex w-5/6 flex-col space-y-8 md:w-3/4 lg:w-1/2 xl:w-2/5">
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <div className="order-2 flex flex-col space-y-10 md:order-1">
              <h1 className="text-3xl font-bold">Hi, I&apos;m Luca!</h1>
              <p>
                I&apos;m an aspiring fullstack software engineer with a passion
                for the web and a love for developing user-facing applications.
                I find joy in creating helpful products that enhance user
                experiences. I&apos;m currently contributing to the innovative
                field at SAP, specializing in the UI5 framework. I am
                enthusiastic about learning and exploring new technologies and
                fields, with a big interest in software architecture.
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
