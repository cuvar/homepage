import SiteWrapper from "~/components/SiteWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <SiteWrapper>
      <div className="flex h-2/3 w-full flex-col items-center justify-center">
        <div className="space-y-2">
          <p>Luca Müller</p>
          <p>Willi-Graf-Straße 8</p>
          <p>69190 Walldorf</p>
          <p>luca [@] cuvar [dot] dev</p>
        </div>
      </div>
    </SiteWrapper>
  );
}
