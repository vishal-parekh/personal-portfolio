import { useSectionInView } from "../../lib/hooks";
import { SectionHeading } from "components";
import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 lg:text-xl md:text-xl sm:text-base">
        After my first year of grad school where I was pursuing my master&apos;s
        degree in <span className="font-bold">computer science</span>, I landed
        a software engineering internship in the financial services industry to
        gain practical experience building large, scalable software systems.
        Since then, I&apos;ve held multiple positions as an{" "}
        <span className="font-bold">AWS Certified full-stack developer</span>{" "}
        building fintech applications in the product space and as an independent
        consultant. My favorite aspect about software development is{" "}
        <span className="italic">problem-solving</span>. I love the satisfaction
        of finally figuring out a solution to a complex problem. Although I am
        always interested in learning new technologies, my core stack is{" "}
        <span className="font-bold">
          Python (FastAPI/Flask), PostgreSQL, TypeScript, React, & Next.js.
        </span>{" "}
        I am also familiar with Java and NoSQL databases. I am currently looking
        for a <span className="font-bold">full-time position</span> as a
        software engineer.
      </p>
    </motion.section>
  );
};
