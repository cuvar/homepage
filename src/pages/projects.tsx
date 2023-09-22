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
      <div className="flex h-full w-full flex-col items-center">
        <div className="flex h-full w-5/6 flex-col items-center justify-center space-y-8 md:w-3/4 lg:w-3/4 xl:w-3/5">
          <h1 className="w-full text-3xl font-bold">Projects</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p: ProjectItem) => (
              <Project key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </SiteWrapper>
  );
}
