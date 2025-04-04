"use client";

import { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import Script from "next/script";
import ContactForm from "./ContactForm";
import SpecialDivider from "./SpecialDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ImageModal from "./ImageModal";

export default function Home() {
  const name = "Benjamin Garcia";
  const words = name.split("");

  const [modalImages, setModalImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleImageClick = (images: string[], index: number = 0) => {
    setModalImages(images);
    setInitialIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        strategy="afterInteractive"
      />

      <div
        id="top"
        className="scroll-mt-52 min-h-screen flex flex-col justify-center p-5 sm:p-20 lg:px-40 font-cabinet max-w-5xl mx-auto animate-fadeIn"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold pb-2">
            {name.split("").map((char, idx) => (
              <span
                key={idx}
                style={{ animationDelay: `${(idx * 0.05).toFixed(2)}s` }}
                className="inline-block animate-letterFloat"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {/* <h1 className = "text-5xl text-custom-hover">bg</h1> */}
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl font-light text-center">
            Turning code into meaningful creations.
          </p>

          <div className="flex space-x-4 mt-4 justify-between gap-5">
            <a
              href="https://www.linkedin.com/in/btgarcia05/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-grey hover:text-custom-hover text-2xl sm:text-3xl duration-300"
              />
            </a>

            <a
              href="https://github.com/bgar324"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-grey hover:text-custom-hover text-2xl sm:text-3xl duration-300"
              />
            </a>

            <a
              href="https://open.spotify.com/user/13loawolnhae7wiuu1ficd51g?si=ebb2aa6614e14cdd"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faSpotify}
                className="text-grey hover:text-custom-hover text-2xl sm:text-3xl duration-300"
              />
            </a>

            <a
              href="mailto:bentgarcia05@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-grey hover:text-custom-hover text-2xl sm:text-3xl duration-300"
              />
            </a>
          </div>
        </div>
        <nav className="flex justify-center sticky -top-0.5 z-50 bg-navbar-bg -mr-1">
          <ul className="flex flex-wrap space-x-4 underline underline-offset-4 mt-4 pb-3 px-5 sm:px-20 lg:px-40 items-center">
            <li>
              <a
                href="#top"
                className="text-sm sm:text-lg hover:text-custom-hover hover:underline hover:decoration-custom-hover transition duration-300"
              >
                home
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="text-sm sm:text-lg hover:text-custom-hover hover:underline hover:decoration-custom-hover transition duration-300"
              >
                experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-sm sm:text-lg hover:text-custom-hover hover:underline hover:decoration-custom-hover transition duration-300"
              >
                projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="text-sm sm:text-lg hover:text-custom-hover hover:underline hover:decoration-custom-hover transition duration-300"
              >
                skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm sm:text-lg hover:text-custom-hover hover:underline hover:decoration-custom-hover transition duration-300"
              >
                contact
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed text-center">
          I'm a{" "}
          <span className="text-custom-hover">Computer Science Student</span>{" "}
          and <span className="text-custom-hover">Web Developer</span> based in
          the greater Los Angeles area. Currently working as a{" "}
          <span className="text-custom-hover">
            Backend Software Development Intern
          </span>{" "}
          at <span className="text-custom-hover">Todd</span>, with experience in{" "}
          <span className="text-custom-hover">front-end development </span>
          through my college's Computer Science Club and client work.
        </p>

        <a
          href="/static/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base md:text-lg flex items-center justify-center text-white font-semibold mx-auto 
          mt-1 sm:mt-2 md:mt-3 
          p-3 
          rounded-lg shadow-md hover:bg-gray-800 hover:text-custom-hover transition duration-300"
        >
          View full Résumé
          <FontAwesomeIcon
            icon={faSquareArrowUpRight}
            className="w-4 h-4 ml-2"
          />
        </a>

        <img
          src="/static/ben-min.JPG"
          className="w-11/12 h-auto rounded-lg mx-auto mt-6"
        />

        <div id="experience" className="scroll-mt-24 flex flex-col">
          <ExperienceItem
            dateRange="APR — PRESENT"
            title="Backend Software Development Intern · Todd"
            description="Developing backend solutions that leverage AI and machine learning to automate large-scale agricultural data analysis and optimization."
            link="https://www.toddagriscience.com/"
            tags={[
              "Artifical Intelligence",
              "Machine Learning",
              "Advanced Data Processing",
            ]}
          />
          <ExperienceItem
            dateRange="APR — PRESENT"
            title="Front-End Developer · Caduceus Club"
            description="Collaborated with the Caduceus Club to design and launch a mobile-first feedback site for the 15th Annual Health Professions Conference, focusing on accessibility, responsiveness, and ease of use for attendees."
            link="https://github.com/bgar324/caduceus-club-website"
            tags={["Mobile First Development", "Responsiveness"]}
          />
          <ExperienceItem
            dateRange="SEP 2024 — PRESENT"
            title="Front-End Developer · Mt. SAC CS Club"
            description="Spearheaded the redesign and overhaul of the Mt. SAC Computer Science Club website for a 900+ member organization, transitioning to React.JS for modularity and Bootstrap for responsiveness and improved functionality. Developed and implemented features to enhance user experience and accessibility, including up-to-date contact information, officer and advisor profiles, upcoming and past events."
            link="https://mtsaccs.netlify.app/"
            tags={["React.JS", "Bootstrap", "Vite", "Netlify"]}
          />
          <ExperienceItem
            dateRange="FEB — APR 2025"
            title="Software Developer · Reality AI Lab"
            description="Currently contributing to the development and refinement of the full-stack architecture for Marvel AI (AI Teaching Assistant) and Sky AI (AI Career Coach). Built and optimized the frontend with ReactJS and developed backend services using Node.js, Python, and RESTful APIs.Managed data and real-time workflows with Firestore DB, Firebase Realtime DB, and Redis."
            link="https://www.realityai.tech/open-source/careers"
            tags={[
              "ReactJS",
              "Redux",
              "Node.js",
              "Python",
              "RESTful APIs",
              "Firebase",
              "Open Source Contribution",
            ]}
          />

          <ExperienceItem
            dateRange="SEP 2024 — APR 2025"
            title="Front-End Developer · AdeptEye"
            description="Communicated with clients to understand website needs and preferences. Collaborated with graphic design and video production teams to receive and integrate media assets, ensuring optimal formatting and display across different resolutions. Leveraged HTML, CSS, JavaScript, and React to deliver a seamless user experience with well-implemented animations."
            link="https://www.adepteye.com/"
            tags={[
              "SquareSites",
              "Next.JS",
              "TailwindCSS",
              "React.JS",
              "Bootstrap",
            ]}
          />

          <ExperienceItem
            dateRange="MAR 2024 — APR 2025"
            title="AI Engineer · Outlier AI"
            description="Reviewed and evaluated AI-generated responses to ensure compliance with specified guidelines and optimized engineering processes to improve response quality and efficiency. Adjusted settings and refined prompts to optimize response quality and alignment with desired parameters. Reviewed the validity of prompts through a rejection and approval process, ensuring alignment with client requirements and company guidelines."
            link="https://outlier.ai/"
            tags={["AI", "Prompt Engineering", "Response Optimization"]}
          />

          <ExperienceItem
            dateRange="APR — MAY 2024"
            title="Database Analyst Extern · Mobalytics"
            description="Analyzed SQL data tables presented by the team at Mobalytics. Then presenting a player base analysis based off of said analytics and data tables in order to further pursue business ventures."
            link="https://mobalytics.gg/"
            tags={["SQL", "Data Analysis"]}
          />

          <ExperienceItem
            dateRange="FEB — MAR 2024"
            title="AI Powered VC Analyst · igniteXL Ventures"
            description="Utilized startup databases such as Crunchbase, Pitchbook, Tracxn, and Wellfound/AngelList to identify promising startups in the Health, Beauty, and Wellness sectors. Conducted in-depth research using generative AI tools like ChatGPT (3.5 & 4), Google PaLM, Perplexity, and Bing AI to gather valuable insights.  a comprehensive three-page investment thesis outlining investment rationale, potential risks with mitigation strategies, business models, and key metrics such as growth and consumer profiles."
            link="https://ignitexl.vc/"
            tags={["AI", "VC", "Investment Analysis"]}
          />

          <ExperienceItem
            dateRange="JAN — APR 2024"
            title="Software Programming Instructor · Code Ninjas"
            description="Worked closely with children, including those with disabilities, to provide guidance in coding and debugging. Instructed individuals aged 5 to 14 in Scratch, JavaScript, and C# using Microsoft's MakeCode Platform, fostering proficiency and problem-solving skills."
            link="https://www.codeninjas.com/"
            tags={["Scratch", "JavaScript", "C#"]}
          />
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div id="projects" className="scroll-mt-24 flex flex-col">
          <ProjectItem
            src="/static/project-previews/portfolio-preview.png"
            title="Benjamin Garcia"
            description="Third iteration of my portfolio website, built strictly with Next.JS & TailwindCSS. With a strong focus on performance and accessibility, this website is designed to be as lightweight as possible while still providing a visually appealing experience."
            link="https://github.com/bgar324/BenjaminGarcia-v3"
            tags={["Next.JS", "TypeScript", "TailwindCSS", "Vercel"]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="/static/project-previews/caduceus.png"
            title="15th Annual Health Professions Conference"
            note="(v1)"
            description="Developed a mobile-first website for Mt. SAC's 15th Annual Health Professions Conference. Designed to help attendees quickly access and submit feedback forms for each session."
            link="https://github.com/bgar324/caduceus-club-website"
            tags={["Next.JS", "TypeScript", "TailwindCSS", "Vercel"]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="/static/project-previews/logit-preview-min.png"
            title="logit"
            note="(work in progress!)"
            description="A full-stack workout logging app designed for a minimal and efficient tracking experience. Users can log workouts, edit past sessions with a React-calendar, and track progress with Recharts visualizations. Workouts are stored in a PostgreSQL database, with support for tags, comments, and dropsets. Built with Next.js, Tailwind CSS, and Prisma, it streamlines workout management while enabling progressive overload tracking."
            link="https://github.com/bgar324/logit"
            tags={[
              "Next.JS",
              "React",
              "TypeScript",
              "TailwindCSS",
              "react-calendar",
              "Recharts",
              "Supabase",
              "PostgreSQL",
              "Prisma",
            ]}
            galleryImages={[
              "/static/project-previews/logit-preview-min.png",
              "/static/project-previews/logit-preview-2-min.png",
              "/static/project-previews/logit-preview-3-min.png",
              "/static/project-previews/logit-preview-4-min.png",
              "/static/project-previews/logit-preview-5-min.png",
            ]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="static/project-previews/image.png"
            title="Roadmap Maker"
            description="Built a CRUD web app using Next.js, Tailwind, and an MUI Timeline for visualizing tasks throughout the year. Users pick a month, define date ranges, and enter a title with an optional description, automatically placing tasks on the timeline. Integrated pdfmake enables generating a downloadable PDF of the entire roadmap."
            link="https://github.com/bgar324/roadmapMaker"
            tags={["Next.JS", "TailwindCSS", "MUI", "pdfmake"]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="static/project-previews/Screenshot 2025-01-09 233039-min.png"
            title="Tea Spots"
            description="Collaborated with video production and graphic design teams to redesign a client’s website using Square Online, integrating custom CSS, embedded code, and POS systems to support high traffic and dozens of weekly orders. Optimized multimedia assets for a cohesive, brand-aligned experience, resulting in thousands of page views and 200+ unique visits in the first week."
            link="https://www.myteaspots.com/"
            tags={[
              "Square Online",
              "Square Sites",
              "Photopea",
              "Graphic Design",
              "Video Production",
            ]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="/static/project-previews/csclubwebsite-preview.png"
            title="Mt. SAC Computer Science Club Website"
            description="Redesigned and developed the Mt. SAC Computer Science Club website using React.JS and Bootstrap to improve functionality, accessibility, and responsiveness. The site serves as a hub for members, providing resources, event details, officer contacts, and Discord access."
            link="https://mtsaccs.netlify.app/"
            galleryImages={[
              "/static/project-previews/csclubwebsite-preview.png",
              "/static/project-previews/cs-preview-2-min.png",
              "/static/project-previews/cs-preview-3-min.png",
              "/static/project-previews/cs-preview-4-min.png",
              "/static/project-previews/cs-preview-5-min.png",
            ]}
            tags={["React.JS", "Bootstrap", "Vite", "Netlify"]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="/static/project-previews/suika-preview.png"
            title="Suika Remake"
            description="Developed a physics-driven puzzle game featuring realistic ball dynamics using Pymunk, with color-coded merging mechanics and interactive player controls. Integrated gameplay elements like a scoring system, cooldown mechanics, and responsive visuals. Built with Pygame for rendering and Python for game logic and functionality."
            link="https://github.com/bgar324/suika"
            tags={["Python", "Pygame", "Pymunk"]}
            onImageClick={handleImageClick}
          />

          <ProjectItem
            src="/static/project-previews/weather-preview.jfif"
            title="Weather Display"
            description="Used OpenWeather's API in order to retrieve live data within the week based on the user's location. Created a simple front end with HTML & CSS, while using JavaScript to fetch the data and display it on the page."
            link="https://beautiful-gumption-a0ca0e.netlify.app/"
            tags={["HTML", "CSS", "JavaScript", "OpenWeather API"]}
            onImageClick={handleImageClick}
          />
        </div>

        {/* skills section */}

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div
          id="skills"
          className="scroll-mt-52 text-lg border rounded-lg border-white p-6 mt-4 w-10/12 mx-auto"
        >
          <div className="grid grid-cols-4 gap-6">
            {[
              {
                icon: "/static/skills/next.svg",
                alt: "Next.js",
                link: "https://nextjs.org/",
              },
              {
                icon: "/static/skills/react.svg",
                alt: "React",
                link: "https://reactjs.org/",
              },
              {
                icon: "/static/skills/tailwind.svg",
                alt: "TailwindCSS",
                link: "https://tailwindcss.com/",
              },
              {
                icon: "/static/skills/javascript.svg",
                alt: "JavaScript",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              {
                icon: "/static/skills/html.svg",
                alt: "HTML",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              {
                icon: "/static/skills/c++.svg",
                alt: "C++",
                link: "https://cplusplus.com/",
              },
              {
                icon: "/static/skills/python.svg",
                alt: "Python",
                link: "https://www.python.org/",
              },
              {
                icon: "/static/skills/asm.svg",
                alt: "Bootstrap",
                link: "https://getbootstrap.com/",
              },
            ].map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 rounded-lg transition duration-75"
              >
                <img
                  src={skill.icon}
                  alt={skill.alt}
                  className="w-12 h-12 mx-auto transition duration-75 filter invert group-hover:filter-custom-hover"
                />
              </a>
            ))}
          </div>
        </div>

        <hr className="h-px mt-14 -mb-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <ContactForm />
      </div>
      {isModalOpen && (
        <ImageModal
          images={modalImages}
          initialIndex={initialIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
