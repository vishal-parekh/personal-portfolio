import {
  About,
  Contact,
  Experience,
  LandingHero,
  ProjectsList,
  SectionDivider,
  Skills,
} from "components";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <LandingHero />
      <SectionDivider />
      <About />
      <ProjectsList />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
