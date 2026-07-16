import { Container } from "@/components/layout/Container";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import type { SectionComponentProps } from "@/lib/types";

export function ProjectsSection({ id, data }: SectionComponentProps<"projects">) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Click the folder to browse — drag a photo down to close.
          </p>
        </div>
        <InteractiveFolderGallery
          folderName={data.folderName}
          dragHintText={data.dragHintText}
          photos={data.photos}
        />
      </Container>
    </section>
  );
}
