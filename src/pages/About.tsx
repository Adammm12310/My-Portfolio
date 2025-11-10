import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="about-main">
        <section className="about-section">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Hello! I'm [Your Name], a passionate developer with experience in building web applications using React and TypeScript. I love creating user-friendly and efficient solutions to complex problems.
            </p>
            <p>
              In my free time, I enjoy exploring new technologies, contributing to open-source projects, and improving my skills through continuous learning.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;