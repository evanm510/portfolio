"use client";

import { ProfileSummary } from "@/components/sections/ProfileSummary";
import AboutMe from "@/components/sections/AboutMe";
import ProfessionalExperience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import OtherInterests from "@/components/sections/OtherInterests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ProfileSummary />
      <AboutMe />
      <ProfessionalExperience />
      <Projects />
      <OtherInterests />
      <Contact />
    </div>
  );
}
