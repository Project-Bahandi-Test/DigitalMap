
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Mail, Globe, Facebook, MessageSquare, Send } from "lucide-react";
import Logo from "../../imports/Logo.png";
import ContactPicture from "../../imports/Molo.jpg";

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

export default function ContactUs() {
  return (
    <main className="bg-white text-slate-700 overflow-hidden font-serif">
      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section
        className="relative text-white py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactPicture})` }}
      >
        <div className="absolute inset-0 bg-[#14213d]/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Share Your
            <br />
            <span className="text-[#5C87C7]">STORIES</span>
          </h1>
          <p className="mt-8 max-w-4xl mx-auto text-xl leading-9 text-white/80">
            Have questions, suggestions, or heritage stories to share? Connect with Project Bahandi and help preserve the culture and history of Molo. We would love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* ===================================== */}
      {/* CONTACT INFORMATION */}
      {/* ===================================== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Contact Information"
            subtitle="Whether you have questions, or ideas, your voices help us improve Project BAHANDI and continue sharing the beauty of Molo's Heritage through innovative and transformative means."
          />
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Location Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center border border-slate-100"
            >
              <div className="w-20 h-20 rounded-full bg-[#DCE4F0] flex items-center justify-center mx-auto mb-8">
                <MapPin size={36} className="text-[#14213d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Location</h3>
              <p className="text-lg leading-8 text-slate-600 mb-4">
                <strong>Iloilo National High School</strong><br />
                Strengthened Technical-Vocational Education Program<br />
                Luna St., La Paz, Iloilo City, Iloilo, Philippines 5000
              </p>
              <p className="text-sm text-slate-500 italic mt-6">
                Created as a student-led initiative celebrating the heritage of Molo, Iloilo.
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center border border-slate-100"
            >
              <div className="w-20 h-20 rounded-full bg-[#DCE4F0] flex items-center justify-center mx-auto mb-8">
                <Mail size={36} className="text-[#14213d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Email</h3>
              <div className="text-lg leading-8 text-slate-600 space-y-4">
                <div>
                  <strong className="block text-slate-700">School Email:</strong>
                  <a href="mailto:iloilonhs.ph@gmail.com" className="hover:text-[#5C87C7] transition-colors">iloilonhs.ph@gmail.com</a>
                </div>
                <div>
                  <strong className="block text-slate-700">Project Developers Email:</strong>
                  <a href="mailto:stvepstudencouncil18@gmail.com" className="hover:text-[#5C87C7] transition-colors overflow-wrap-anywhere">stvepstudencouncil18@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Connect Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center border border-slate-100"
            >
              <div className="w-20 h-20 rounded-full bg-[#DCE4F0] flex items-center justify-center mx-auto mb-8">
                <Globe size={36} className="text-[#14213d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Stay Connected!</h3>
              <div className="text-lg leading-8 text-slate-600 space-y-4">
                <a href="https://www.facebook.com/Iloilonhs" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-[#5C87C7] transition-colors">
                  <Facebook size={20} /> Iloilo National High School
                </a>
                <a href="https://www.iloilonhs.edu.ph/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-[#5C87C7] transition-colors">
                  <Globe size={20} /> iloilonhs.edu.ph
                </a>
                <a href="https://www.facebook.com/STVEPStudentCouncil" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-[#5C87C7] transition-colors text-center">
                  <Facebook size={20} className="shrink-0" /> INHS - STVEP Learner Government
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* FEEDBACK FORM */}
      {/* ===================================== */}
      <section className="bg-slate-50 py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Share Your Feedback" 
            subtitle="Your Feedback helps us continue building a digital space where Molo's heritage, culture, and traditions can be discovered and appreciated."
          />
          
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 md:p-14"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#5C87C7] transition-all"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#5C87C7] transition-all"
                  placeholder="juan@example.com"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-slate-700 font-bold mb-3 text-lg">Your Story or Feedback</label>
              <textarea 
                rows="6"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#5C87C7] transition-all resize-none"
                placeholder="Share your thoughts, suggestions, or a piece of Molo's history..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#14213d] hover:bg-[#5C87C7] text-white rounded-xl px-8 py-5 text-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              Send Message <Send size={24} />
            </button>
          </motion.form>
        </div>
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
                Preserving Molo’s stories, connecting generations, and
                celebrating the heritage shaped by its people.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xl font-bold mb-6">Explore</h4>
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
                  <a href="mailto:stvepstudentcouncil18@gmail.com" className="hover:text-[#5C87C7]">stvepstudentcouncil18@gmail.com</a>
                </p>
                <p>
                  <strong>Location:</strong>
                  <br />
                  Luna St., La Paz, Iloilo City, Iloilo, Philippines, 5000
                </p>
                <p>
                  <strong>Facebook:</strong>
                  <br />
                  <a href="https://www.facebook.com/STVEPStudentCouncil" target="_blank" rel="noreferrer" className="hover:text-[#5C87C7]">INHS - STVEP Local Learner Government</a>
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
