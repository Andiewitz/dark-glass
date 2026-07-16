import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/project-card";
import type { SectionComponentProps } from "@/lib/types";

export function ProjectsSection({ id, data }: SectionComponentProps<"projects">) {
  return (
    <section id={id} className="scroll-mt-20 py-12 sm:py-16">
      <Container className="flex flex-col items-center">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {data.title ?? "Selected Work"}
          </h2>
          {data.description ? (
            <p className="mt-3 text-sm text-white/50">{data.description}</p>
          ) : null}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(data.projects ?? []).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
