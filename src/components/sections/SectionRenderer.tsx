import type { ComponentType } from "react";
import type { SectionComponentProps, SectionConfig, SectionType } from "@/lib/types";
import { sectionRegistry } from "./index";

export function SectionRenderer({ sections }: { sections: SectionConfig[] }) {
  return (
    <>
      {sections.map((section) => {
        const Section = sectionRegistry[section.type] as ComponentType<
          SectionComponentProps<SectionType>
        >;
        return (
          <Section key={section.id} id={section.id} data={section.data} />
        );
      })}
    </>
  );
}
