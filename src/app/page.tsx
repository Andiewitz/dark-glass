import { siteConfig } from "@/config/site.config";
import { SectionRenderer } from "@/components/sections/SectionRenderer";

export default function Home() {
  return <SectionRenderer sections={siteConfig.sections} />;
}
