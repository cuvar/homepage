import SiteWrapper from "~/components/SiteWrapper";
import Project from "~/components/Project";
import type { ProjectItem } from "~/utils/types";

export default function Home() {
  const projects: ProjectItem[] = [
    {
      name: "panal",
      description: "widget-based dashboard for managing life",
      url: "https://github.com/cuvar/panal",
    },
    {
      name: "swiper-action",
      description: "Simple react component for swipe-to-action",
      url: "https://github.com/cuvar/swiper-action",
    },
    {
      name: "vocab",
      description: "A simple vocabulary app for learning new words",
      url: "https://github.com/cuvar/vocab",
    },
  ];

  return (
    <SiteWrapper>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p: ProjectItem) => (
            <Project key={p.name} {...p} />
          ))}
        </div>
      </div>
    </SiteWrapper>
  );
}
