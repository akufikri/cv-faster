import { EducationSections } from "@/components/pages/cv/education";
import { ExperienceSections } from "@/components/pages/cv/experience";
import { HeaderSections } from "@/components/pages/cv/header";
import { OtherSections } from "@/components/pages/cv/other";
import { SummarySections } from "@/components/pages/cv/summary";

export default function Home() {
  return (
    <>
      <section className="w-full h-auto flex items-center justify-center">
        <div className="card card-bordered max-w-2xl w-full border h-[88vh] rounded shadow-md bg-base-100">
          <div className="card-body">
            <HeaderSections />
            <SummarySections />
            <ExperienceSections />
            <EducationSections />
            <OtherSections />
          </div>
        </div>
      </section>
    </>
  );
}
