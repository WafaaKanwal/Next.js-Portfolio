import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              I'm <span className="highlight-text">Wafa</span>, <br />a Web
              Developer
            </h1>
            <p className="home-description">
              Over the years, I have worked on a variety of projects, building
              responsive, scalable, and visually engaging websites.
              <br />
              Currently, I am diving deep into modern frameworks like{" "}
              <strong>Next.js</strong>, exploring Cloud AI, and expanding my
              knowledge in <strong>Autonomous AI Agents</strong> technologies to
              stay ahead of the curve. I believe in continuous learning and am
              constantly looking for ways to improve my skills and contribute to
              exciting projects.
            </p>

            <div className="button-group">
              <button className="hire-button">Hire Me</button>
              <button className="portfolio-button">View Portfolio</button>
            </div>
          </div>
          <div className="home-image">
            <Image
              src="/images/dp.jpg"
              alt="Wafa Kanwal"
              width={320}
              height={320}
              className="profile-picture"
            />
          </div>
        </div>
      </section>

    <section
      id="about"
      className="p-12 bg-gradient-to-r from-purple-800 to-indigo-600 text-white text-center"
    >
      <h2 className="text-5xl font-bold mb-12 uppercase tracking-widest text-white">
        About Me
      </h2>
      <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
        I am a passionate and dedicated Web Developer with a strong foundation
        in front-end and back-end technologies, including{" "}
        <strong className="font-bold">HTML</strong>,{" "}
        <strong className="font-bold">CSS</strong>,{" "}
        <strong className="font-bold">JavaScript</strong>, and{" "}
        <strong className="font-bold">TypeScript</strong>. My journey in web
        development began as a personal project and evolved into a career driven
        by a love for creating user-centric, high-quality web experiences.
      </p>
      <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
        Over the years, I have worked on a variety of projects, building
        responsive, scalable, and visually engaging websites. Currently, I am
        diving deep into modern frameworks like{" "}
        <strong className="font-bold">Next.js</strong>, exploring Cloud AI, and
        expanding my knowledge in <strong className="font-bold">Web 3.0</strong>{" "}
        technologies to stay ahead of the curve. I believe in continuous
        learning and am constantly looking for ways to improve my skills and
        contribute to exciting projects.
      </p>
      <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
        Outside of coding, I am passionate about collaborating with like-minded
        individuals to solve real-world problems through technology. Whether
        working on a personal project, collaborating with a team, or
        contributing to open-source, I am always eager to build something
        meaningful and impactful.
      </p>
      <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
        Let's work together to bring innovative ideas to life and create the
        future of the web. I am always open to new opportunities, so feel free
        to reach out and connect with me!
      </p>
    </section>
  

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container mx-auto text-center px-4 lg:px-8">
          <h2 className="skills-heading">My Skills</h2>
          <div className="skill-item-container">
            <div className="skill-item">
              <Image
                src="/images/html.png"
                alt="HTML"
                width={96} // Adjust size as needed
                height={96} // Adjust size as needed
                className="skill-icon"
              />
              <h3>HTML</h3>
              <p>90%</p>
            </div>
            <div className="skill-item">
              <Image
                src="/images/css.webp"
                alt="CSS"
                width={96} // Adjust size as needed
                height={96} // Adjust size as needed
                className="skill-icon"
              />
              <h3>CSS</h3>
              <p>80%</p>
            </div>
            <div className="skill-item">
              <Image
                src="/images/js.png"
                alt="JavaScript"
                width={96} // Adjust size as needed
                height={96} // Adjust size as needed
                className="skill-icon"
              />
              <h3>JavaScript</h3>
              <p>70%</p>
            </div>
            <div className="skill-item">
              <Image
                src="/images/1ts.png"
                alt="TypeScript"
                width={96} // Adjust size as needed
                height={96} // Adjust size as needed
                className="skill-icon"
              />
              <h3>TypeScript</h3>
              <p>80%</p>
            </div>
            <div className="skill-item">
              <Image
                src="/images/next.png"
                alt="Next.js"
                width={96} // Adjust size as needed
                height={96} // Adjust size as needed
                className="skill-icon"
              />
              <h3>Next.js</h3>
              <p>20%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-12">MY PROJECTS</h2>
        <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/simple-calculator.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/cal.jpg"
                  alt="Calculator"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Calculator
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A simple calculator project built with HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Atm.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/atm.jpg"
                  alt="ATM Machine"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    ATM Machine
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    An ATM machine simulation built with HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/To-Do-App.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/todo.jpg"
                  alt="ToDo App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    ToDo App
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A ToDo app to manage tasks and keep track of daily
                    activities.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Count-Down-Timer.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/ct.jpg"
                  alt="Countdown Timer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Countdown Timer
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A countdown timer built with HTML, CSS, and JavaScript that
                    lets you set a timer for a specific event or goal.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Next.js-Assignment1.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/web.png"
                  alt="Web App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Web App
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A modern web application built using Next.js, React, and
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Next.js-Assignment2.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/figma.png"
                  alt="Figma Next.js"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Figma Next.js
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A Figma design converted into a responsive Next.js web
                    application.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      
      
      {/* Contact Section */}
<section className="contact-section flex justify-center items-center text-center py-16 bg-gradient-to-br from-teal-300 to-blue-500 text-white min-h-[80vh]">
  <div className="contact-content max-w-3xl w-full p-8 bg-black bg-opacity-60 rounded-lg">
    <h2 className="text-5xl font-bold mb-12 text-teal-300">Contact Me</h2>
    <p className="text-lg mb-4 text-gray-100">
      I'm always excited to connect with new people, whether it's for
      collaborations, networking, or just to chat about cool projects. If
      you have any inquiries or would like to discuss a potential
      partnership, feel free to reach out!
    </p>
    <p className="text-lg mb-4 text-gray-100">
      <span className="font-semibold">Email:</span>
      <a
        href="mailto:wafa.kanwal.khi@gmail.com"
        className="text-blue-400 hover:text-blue-600"
      >
        wafa.kanwal.khi@gmail.com
      </a>
    </p>
    <p className="text-lg mb-4 text-gray-100">
      I’m currently open to freelance opportunities and collaborations.
      Let’s create something amazing together!
    </p>

    <div className="social-icons flex justify-center gap-6 mt-6">
      <p className="text-lg mb-2 text-gray-100">
        You can also connect with me on these platforms:
      </p>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/wafa-kanwal-467376279/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
          alt="LinkedIn"
          width={40}
          height={40}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/WafaaKanwal?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          width={40}
          height={40}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
