import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import HomePicture from "../../imports/MoloFront.jpg";

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col items-center justify-center relative px-12 md:px-24 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${HomePicture})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#14213d]/70" />

        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in z-10 relative">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            PROJECT BAHANDI
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore Molo's rich cultural heritage through an
            interactive digital map featuring historical
            landmarks, traditional practices, local stories, and
            community memories. Discover the places, people, and
            traditions that shaped Molo's identity.
          </p>
          <Link
            to="/digital-map"
            className="inline-block bg-white hover:bg-slate-100 text-[#14213d] font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
          >
            Explore the digital map
          </Link>
        </div>
      </section>

      {/* Break/Divider Section */}
      <div className="w-full h-[100px] flex items-center justify-center overflow-hidden bg-white">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#14213d] to-transparent opacity-20"></div>
      </div>

      {/* Main Content (About) */}
      <section
  id="about"
  className="py-24 px-6 md:px-12 max-w-6xl mx-auto bg-white"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="space-y-12"
  >
    <div className="text-center mb-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213d] mb-4 uppercase tracking-wide">
        About the Project
      </h2>
      <div className="w-24 h-1 bg-[#14213d] mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xNhHZGU3egM"
          title="About Molo, Iloilo City"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center md:text-left">
        <div className="space-y-6 text-slate-700 leading-relaxed font-serif mb-8">
          <div>
            <p className="mb-3">
              <strong className="text-[#14213d]">PROJECT BAHANDI</strong>: An
              Interactive Showcase of Heritage and Identity of Molo, Iloilo
              City, Philippines is a digital heritage platform designed to
              showcase and preserve the cultural identity of Molo, Iloilo
              City. It provides an interactive way for learners and users to
              explore historical landmarks, traditional food, notable
              personalities, oral traditions, and community stories
              connected to Molo's heritage.
            </p>
            <p>
              Through digital mapping and storytelling, the project
              transforms heritage learning into an engaging experience
              where users can discover the meanings, values, and memories
              behind Molo's cultural elements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-[#14213d] mb-3 uppercase tracking-wide">
              Molo: A District Rich in History and Culture
            </h3>
            <p className="mb-3">
              Molo is one of the historic districts of Iloilo City, known
              for its significant role in the cultural and economic
              development of the province. During the Spanish colonial
              period, Molo became an important trading center where
              different cultures and traditions blended. Its historical
              structures, ancestral houses, traditions, and community
              stories continue to reflect the district's unique identity.
            </p>
            <p>
              Today, Molo's heritage remains alive through the people who
              preserve, share, and give meaning to its cultural resources.
            </p>
          </div>
        </div>

        
          <a href="/about"
          className="inline-block bg-[#14213d] hover:bg-[#0d1526] text-white font-serif font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-300 no-underline"
        >
          Learn More
        </a>
      </div>
    </div>
  </motion.div>
</section>

      {/* Games Section */}
      <section
        id="games"
        className="py-24 px-6 md:px-12 max-w-5xl mx-auto bg-white border-t border-slate-100 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14213d] mb-4">
          Games
        </h2>
        <p className="text-slate-600 mb-8">
          Cultural games coming soon.
        </p>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
