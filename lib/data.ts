import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import forwardtechSolutionsImg from "/public/forwardtechSolutions.png";
import landmarkBuildingCoImg from "/public/landmarkBuildingCoImg.png";
import landmarkPropertyDallasImg from "/public/landmarkPropertyImg.png";
import rocketDollarImg from "/public/rocketDollarImg.png";

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
    location: "",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "May 2020",
  },
  {
    title: "Platform Developer and DevOps Intern",
    location: "Dallas, TX",
    description:
      "Landed a summer-fall internship after finishing my first year of grad school. My experience consisted of building APIs hosted on Microsoft Azure.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Dec 2019",
  },
  {
    title: "Software Systems Engineer",
    location: "Dallas, TX",
    description:
      "I was offered an extension to continue working as a part-time Software Systems Engineer while I finished my degree. Built more complex and robust backend systems and infrastructure for loan origination and refinancing processes. Transitioned to full-time after I graduated.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Consultant - Software Development",
    location: "Dallas, TX",
    description:
      "Consultant for a Big Four accounting firm where I built RPA and other automation solutions on client-facing projects.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Founder of Forwardtech Solutions",
    location: "Dallas, TX",
    description:
      "Started a consulting company to partner with companies to transform their business through technology.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
  {
    title: "Software Engineer",
    location: "Austin, TX",
    description:
      "Worked for a fintech start-up and upskilled to full-stack development. Developed and enhanced Stripe-integrated payment processing system using Python and developed UI components with TypeScript & React.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Dallas, TX",
    description:
      "Software Engineer for a large insurance company where I am building REST APIs for document catalog manager using TypeScript and NodeJS. Designing and developing UI components for internal applications with React. Deploying and servicing cloud native applications built within AWS",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Landmark Building Company",
    description:
      "Designed and built e-commerce ready website for a building supply company",
    tags: ["Webflow"],
    imageUrl: landmarkBuildingCoImg,
  },
  {
    title: "Landmark Property Group",
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
  {
    title: "Forwardtech Solutions",
    description:
      "Started a software consulting company that helps businesses solve problems and grow by building custom software solutions.",
    tags: ["Tailwind CSS", "TypeScript", "Node", "React", "Next.js", "Vercel"],
    imageUrl: forwardtechSolutionsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "Flask",
  "Django",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Material UI",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "NoSQL",
  "Git",
  "AWS",
  "Microsoft Azure",
  "Vercel",
  "GitHub Actions",
  "Agile(Scrum)",
  "CI/CD",
] as const;
