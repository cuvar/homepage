import SiteWrapper from "~/components/SiteWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-2/3 w-full flex-col items-center justify-center">
        <Image
          src={"/imprint.jpeg"}
          alt={"Imprint"}
          width={600}
          height={500}
          className="px-10"
        ></Image>
      </div>
    </SiteWrapper>
  );
}
