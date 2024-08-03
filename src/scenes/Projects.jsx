import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projectDescription, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{projectDescription}</p>
        <a
          className="hover:opacity-50 transition duration-500"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-5 w-5 flex"
            alt="right-arrow"
            src={require("../assets/right-arrow.png")}
          />
        </a>
      </div>
      <img
        className="w-[650px] h-[500px]"
        src={require(`../assets/${projectTitle}.png`)}
        alt={projectTitle}
        w-auto
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w=1/3" />
          </div>
        </div>
        <LineGradient width="1/3" />
        <p className="mt-10 mb-7">
          Snippets of various projects that I was particularly proud of
          completing
        </p>
      </motion.div>

      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* row 1 */}
          <Project
            title="Project 1"
            projectDescription="A fully functional full stack website hosted on AWS used as an MVP for WaveViewImaging. I worked on this project with a team from the University of Calgary."
            link="https://www.youtube.com/watch?v=PhSkrdhOMH0"
          >
            {" "}
          </Project>
          <Project
            title="Project 2"
            projectDescription="A finance program to keep track of expenses and income that was made using Styled Components, JavaScript, and React"
            link="https://github.com/jordankwan72/finance-app-2024"
          >
            {" "}
          </Project>
          <Project
            title="Project 3"
            projectDescription="A fully functional website that finds the nearest west-facing bench and a nearby restaurant for you and your date to enjoy!"
            link="https://benchbae.netlify.app/"
          >
            {" "}
          </Project>
          {/* row 2 */}
          <Project
            title="Project 4"
            projectDescription="This is a project that included a hardware component where we created the ideal lighting conditions for the morning using a smart lightbulb complete with authentication."
            link="https://sun-lite.netlify.app/"
          >
            {" "}
          </Project>
          <Project
            title="Project 5"
            projectDescription="ConsoleMates is a project where programmers are able to rant about their issues and write messages to other users. Other users can then respond from anywhere in the world and give advice or helpful words to the sender."
            link="https://consolemates.netlify.app/"
          >
            {" "}
          </Project>
          <Project
            title="Project 6"
            projectDescription="Tic Tac Toe was the first project I ever made in Python during my first year of coding and I was particularly proud because this was my first fully functioning program with multiple different modes"
            link="https://github.com/jordankwan72/tictactoe"
          >
            {" "}
          </Project>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
