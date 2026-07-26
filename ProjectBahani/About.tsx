import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Map, Landmark, Quote } from "lucide-react";
import GuyIcon from "../../imports/Heritage_guy.png";
import MoloMansion from "../../imports/Molo.jpg";
import Logo from "../../imports/Logo.png";
import AboutPicture from "../../imports/AboutPicture.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-[0.25em] text-slate-700">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-lg leading-8 text-slate-600 font-serif">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default function About() {
  return (
    <main className="bg-white text-slate-700 overflow-hidden font-serif">
      {/* ===================================== */}
      {/* HERO */}
      {/* ===================================== */}
      <section
        className="relative text-white py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutPicture})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#14213d]/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The Story Behind
            <br />
            <span className="text-[#5C87C7]">BAHANDI</span>
          </h1>
          <p className="mt-8 max-w-4xl mx-auto text-xl leading-9 text-white/80">
            Discover the history, stories, and cultural identity of Molo, Iloilo
            City through an interactive digital platform that preserves heritage,
            highlights community memories, and connects the past with the
            present.
          </p>
          <Link
            to="/digital-map"
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              hover:bg-slate-100
              px-8
              py-4
              text-lg
              font-semibold
              text-[#14213d]
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explore Digital Map
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* ===================================== */}
      {/* ABOUT THE PROJECT */}
      {/* ===================================== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="About the Project"
            subtitle="PROJECT BAHANDI is a digital heritage initiative that transforms local history into an engaging learning experience."
          />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="
    h-[450px]
    rounded-3xl
    shadow-xl
    bg-slate-100
    overflow-hidden
    relative
  "
>
  <img
    src={MoloMansion}         
    alt="Molo"
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  />
</motion.div>
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8">PROJECT BAHANDI</h3>
              <p className="text-lg leading-9 text-slate-600">
                <strong>
                  PROJECT BAHANDI: An Interactive Showcase of Heritage and
                  Identity of Molo, Iloilo City, Philippines
                </strong>{" "}
                is a digital heritage platform designed to showcase and preserve
                the cultural identity of Molo, Iloilo City.
              </p>
              <p className="mt-8 text-lg leading-9 text-slate-600">
                It provides an interactive way for learners and users to explore
                historical landmarks, traditional food, notable personalities,
                oral traditions, and community stories connected to Molo's
                heritage.
              </p>
              <p className="mt-8 text-lg leading-9 text-slate-600">
                Through digital mapping and storytelling, the project transforms
                heritage learning into an engaging experience where users can
                discover the meanings, values, and memories behind Molo's
                cultural elements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* MOLO HISTORY */}
      {/* ===================================== */}
      <section className="bg-slate-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Molo: A District Rich in History and Culture" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-12
            "
          >
            <div className="flex items-center gap-5 mb-8">
              <Map className="text-[#14213d]" size={42} />
              <h3 className="text-2xl font-bold">Historic Molo</h3>
            </div>
            <p className="text-lg leading-9 text-slate-600">
              Molo is one of the historic districts of Iloilo City, known for
              its significant role in the cultural and economic development of
              the province.
            </p>
            <p className="mt-7 text-lg leading-9 text-slate-600">
              During the Spanish colonial period, Molo became an important
              trading center where different cultures and traditions blended. Its
              historical structures, ancestral houses, traditions, and community
              stories continue to reflect the district's unique identity.
            </p>
            <p className="mt-7 text-lg leading-9 text-slate-600">
              Today, Molo's heritage remains alive through the people who
              preserve, share, and give meaning to its cultural resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================== */}
      {/* HERITAGE IS CREATED THROUGH PEOPLE */}
      {/* ===================================== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Heritage is Created Through People" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="
                  bg-[#14213d]
                  text-white
                  rounded-3xl
                  p-10
                  shadow-xl
                "
              >
                <Quote size={42} className="mb-6 text-[#5C87C7]" />
                <p className="text-2xl leading-10 italic">
                  “Heritage is a social and cultural process where people
                  actively create and shape heritage based on the values,
                  meanings, and importance they assign to objects, places, and
                  traditions.”
                </p>
                <p className="mt-8 text-white/80 font-semibold">
                  — Kurmo Konsa (2013)
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg leading-9 text-slate-600">
                Molo's cultural heritage is not only represented by its
                historical landmarks, ancestral houses, traditional food, and
                local practices, but also by the people who recognize, preserve,
                and give meaning to these cultural elements.
              </p>
              <p className="mt-8 text-lg leading-9 text-slate-600">
                Through <strong>PROJECT BAHANDI</strong>, students become active
                participants in the heritage process by exploring, documenting,
                and interpreting Molo's cultural resources through a digital
                map.
              </p>
              <p className="mt-8 text-lg leading-9 text-slate-600">
                The project highlights that heritage is not simply inherited from
                the past, but is continuously created and sustained by the
                community through shared memories, experiences, and cultural
                appreciation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* EXPLORING HERITAGE THROUGH TECHNOLOGY */}
      {/* ===================================== */}
      <section className="bg-slate-50 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Exploring Heritage Through Technology"
            subtitle="Discover Molo's cultural identity through an interactive digital experience."
          />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg leading-9 text-slate-600">
                The interactive digital map allows users to explore different
                aspects of Molo's cultural heritage in one platform.
              </p>
              <p className="mt-7 text-lg leading-9 text-slate-600">
                Each entry provides historical information, stories, images, and
                cultural significance that help users understand the connection
                between Molo's past and present.
              </p>
              <h3
                className="
                mt-10
                text-2xl
                font-bold
                text-slate-700
              "
              >
                Through the map, users can discover:
              </h3>
              <ul
                className="
                mt-6
                space-y-4
                text-lg
                text-slate-600
              "
              >
                {[
                  "Historical landmarks",
                  "Traditional food",
                  "Notable personalities",
                  "Oral traditions",
                  "Community stories",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 8 }}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        w-3
                        h-3
                        rounded-full
                        bg-[#14213d]
                      "
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p
                className="
                mt-10
                text-lg
                leading-9
                text-slate-600
              "
              >
                The map serves as a digital space where heritage knowledge can be
                documented, shared, and appreciated by learners and the
                community.
              </p>
            </motion.div>

            {/* Replaced Digital Map Mockup */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                h-[500px]
                bg-white
                rounded-3xl
                shadow-xl
                flex
                items-center
                justify-center
                border
                border-slate-100
                overflow-hidden
                relative
              "
            >
              <img
                src= {"GuyIcon"}
                alt="Interactive Digital Map Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* PROJECT GOALS */}
      {/* ===================================== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Project Goals" />
          <div
            className="
            grid
            md:grid-cols-2
            gap-10
          "
          >
            {[
              {
                icon: Landmark,
                title: "Showcase Cultural Heritage",
                text: "Showcase Molo's cultural heritage through an interactive digital platform highlighting historical landmarks, traditions, food, personalities, oral traditions, and community stories.",
              },
              {
                icon: Map,
                title: "Preserve Cultural Knowledge",
                text: "Document historical sites, traditions, food, personalities, and community stories to preserve cultural knowledge for future generations.",
              },
              {
                icon: Quote,
                title: "Encourage Student Participation",
                text: "Encourage students to participate in cultural exploration and heritage preservation through interactive learning and digital mapping.",
              },
              {
                icon: ArrowRight,
                title: "Promote Heritage Awareness",
                text: "Promote awareness that heritage is continually shaped by the community through shared memories, meanings, and cultural appreciation.",
              },
            ].map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    p-10
                    transition
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-[#DCE4F0]
                      flex
                      items-center
                      justify-center
                      mb-8
                    "
                  >
                    <Icon
                      size={32}
                      className="
                        text-[#14213d]
                      "
                    />
                  </div>
                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-5
                  "
                  >
                    {goal.title}
                  </h3>
                  <p
                    className="
                    text-lg
                    leading-8
                    text-slate-600
                  "
                  >
                    {goal.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* PROJECT CREATORS */}
      {/* ===================================== */}
      <section
        className="
        bg-slate-50
        py-28
        px-6
      "
      >
        <div
          className="
          max-w-7xl
          mx-auto
        "
        >
          <SectionTitle title="Project Creators" />
          <h3
            className="
            text-center
            text-3xl
            font-bold
            mb-12
          "
          >
            PROJECT DEVELOPERS
          </h3>
          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
          >
            {[
              "Keion Enzo C. Gendrala",
              "John Paul M. Balboa",
              "Cybele Faith B. Arroyo",
              "Reylen Angela N. Guillano",
            ].map((person, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-8
                  text-center
                "
              >
                <div
                  className="
                    w-24
                    h-24
                    rounded-full
                    mx-auto
                    mb-6
                    bg-[#DCE4F0]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                    text-3xl
                    font-bold
                    text-[#14213d]
                  "
                  >
                    {person.charAt(0)}
                  </span>
                </div>
                <h4
                  className="
                  text-xl
                  font-bold
                "
                >
                  {person}
                </h4>
              </motion.div>
            ))}
          </div>
          <div
            className="
            mt-16
            grid
            md:grid-cols-3
            gap-8
          "
          >
            {[
              {
                title: "Adviser",
                value: "Rio G. Castanares Jr.",
              },
              {
                title: "School Principal",
                value: "Delorah Cecilia L. Fantillo",
              },
              {
                title: "Institution",
                value:
                  "Iloilo National High School Strengthened Technical-Vocational Education Program",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-8
                  text-center
                "
              >
                <h4
                  className="
                  text-xl
                  font-bold
                  text-[#14213d]
                  mb-4
                "
                >
                  {item.title}
                </h4>
                <p
                  className="
                  text-lg
                  leading-8
                  text-slate-600
                "
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* CALL TO ACTION */}
      {/* ===================================== */}
      <section className="bg-[#14213d] py-28 px-6 text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2
            className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
          "
          >
            Ready to Explore Molo?
          </h2>
          <p
            className="
            mt-8
            text-xl
            leading-9
            text-white/80
            max-w-4xl
            mx-auto
          "
          >
            Explore Molo's rich cultural heritage through our interactive digital
            map featuring historical landmarks, traditions, community stories,
            and local identity.
          </p>
          <Link
            to="/digital-map"
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              hover:bg-slate-100
              text-[#14213d]
              px-10
              py-5
              text-lg
              font-bold
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explore Digital Map
            <ArrowRight size={22} />
          </Link>
        </motion.div>
      </section>

{/* ===================================== */}
{/* FOOTER */}
{/* ===================================== */}
<section className="py-20 px-6">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="w-full max-w-5xl mx-auto flex items-center justify-center"
  >
    <img
      src={Logo}
      alt="STVEP-INHS Logo"
      className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 hover:scale-105"
    />
  </motion.div>
</section>

      
<footer className="bg-white border-t border-slate-200 py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-12">
      {/* Brand */}
      <div>
        <h3 className="text-3xl font-bold text-[#14213d]">
          PROJECT BAHANDI
        </h3>
        <p className="mt-6 text-slate-600 leading-8 text-lg">
          Preserving Molo's stories, connecting generations, and
          celebrating the heritage shaped by its people.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="text-xl font-bold mb-6">Navigation</h4>
        <ul className="space-y-4 text-slate-600 text-lg">
          {["Home", "About", "Digital Map", "Games", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="hover:text-[#14213d] transition cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-xl font-bold mb-6">Contact</h4>
        <div className="space-y-5 text-slate-600 text-lg leading-8">
          <p>
            <strong>Email:</strong>
            <br />
            stvepstudentcouncil18@gmail.com
          </p>
          <p>
            <strong>Location:</strong>
            <br />
            Luna St., La Paz, Iloilo City, Iloilo, Philippines, 5000
          </p>
          <p>
            <strong>Facebook:</strong>
            <br />
            INHS - STVEP Local Learner Government
          </p>
        </div>
      </div>
    </div>

 {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 leading-8 text-lg">
            © 2026 PROJECT BAHANDI: An Interactive Showcase of Heritage and
            Identity of Molo, Iloilo City, Philippines.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </main>
  );
}


          