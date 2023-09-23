import landmarkPropertyDallasImg from "/public/landmarkPropertyImg.png";
import rocketDollarImg from "/public/rocketDollarImg.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated with a MS in Computer Science",
    location: "Dallas, TX",
    description:
      "Landed an internship after my first year of grad school and was offered an extension to continue working as part-time Software Systems Engineer while I finished my degree.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated May 2020",
  },
  {
    title: "Platform Developer and DevOps Intern",
    location: "Dallas, TX",
    description:
      "My internship experience consisted of backend development building cloud-based web services using Microsoft Azure.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Dec 2019",
  },
  {
    title: "Software Systems Engineer",
    location: "Dallas, TX",
    description:
      "Built more complex and robust backend systems and infrastructure for loan origination and refinancing processes.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Associate Developer",
    location: "Dallas, TX",
    description:
      "Consultant for a Big Four accounting firm where built RPA and automation solutions for clients.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Full-Stack Software Engineer",
    location: "Austin, TX",
    description:
      "Worked for a fintech start-up and upskilled to full-stack development. Developed and enhanced payment processing system integrated with Stripe using Python and designed and developed UI components and pages with TypeScript, React, and Next.js.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Landmark Property Dallas",
    description:
      "Built a buy-side lead generation website for regional real estate investor.",
    tags: ["Tailwind CSS", "TypeScript", "Node", "React", "Next.js", "Vercel"],
    imageUrl: landmarkPropertyDallasImg,
  },
  {
    title: "Rocket Dollar",
    description:
      "Full-Stack Software Engineer for a retirements savings investment platform built using Python, TypeScript, React, and Next.js.",
    tags: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "Material UI",
      "Next.js",
      "AWS",
    ],
    imageUrl: rocketDollarImg,
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "Flask",
  "Django",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Material UI",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Git",
  "AWS",
  "Microsoft Azure",
  "Vercel",
  "GitHub Actions",
  "Agile(Scrum)",
  "CI/CD",
] as const;
