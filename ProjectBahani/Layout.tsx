import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Mail, MapPin, Facebook } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import iloiloLogo from "../../../imports/unnamed.jpg";
import lovePhilippinesLogo from "../../../imports/unnamed_1.jpg";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "About", Component: About },
    { label: "Contact Us", path: "Contact" },
  ];

  return (
    <div className="min-h-screen text-slate-800 font-sans flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full h-[72px] bg-[#14213d] text-white z-50 shadow-md flex items-center px-6 md:px-12">
        <div className="font-serif text-xl font-bold tracking-wide flex-1">
          Project Bahandi
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#5C87C7] hover:underline underline-offset-4 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-[#14213d] text-white flex flex-col items-center py-6 space-y-4 md:hidden z-40 shadow-lg border-t border-white/20">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-[#5C87C7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>

      {/* Contact Section & Comprehensive Footer */}
      {location.pathname !== '/digital-map' && (
      <section id="contact-us" className="pt-24 bg-[#14213d] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Left Column: Project Bahandi Info */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-2xl font-serif font-bold mb-4 text-[#5C87C7]">
                PROJECT BAHANDI
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                An Interactive Showcase of Heritage and Identity
                of Molo, Iloilo City, Philippines.
                <br />
                <br />
                Explore Molo’s rich cultural heritage through an
                interactive digital map featuring historical
                landmarks, traditional practices, local stories,
                and community memories. Discover the places,
                people, and traditions that shaped Molo’s
                identity.
              </p>
              <Link
                to="/digital-map"
                className="inline-block bg-white hover:bg-slate-100 text-[#14213d] font-bold py-3 px-8 rounded-full transition-colors uppercase tracking-wider text-sm"
              >
                EXPLORE
              </Link>
            </div>

            {/* Middle Column: Quick Links */}
            <div className="col-span-1 md:col-span-1 md:pl-12">
              <h3 className="text-xl font-serif font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
                Explore
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-[#5C87C7] transition-colors uppercase tracking-wider text-sm"
                    >
                      {link.label === "Contact Us" ? "CONTACT" : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Information */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-serif font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
                Contact
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 text-[#5C87C7] flex-shrink-0" />
                  <span className="text-sm">
                    stvepstudentcouncil18@gmail.com
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-[#5C87C7] flex-shrink-0" />
                  <span className="text-sm">
                    Luna St., La Paz, Iloilo City, Iloilo,
                    Philippines, 5000
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Facebook className="w-5 h-5 mt-1 text-[#5C87C7] flex-shrink-0" />
                  <span className="text-sm">
                    INHS - STVEP Local Learner Government
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Branding & Tagline */}
          <div className="border-t border-white/20 py-12 flex flex-col items-center text-center">
            <h4 className="text-xl font-serif italic text-[#5C87C7] mb-8 max-w-2xl">
              "Preserving Molo’s stories, connecting
              generations, and celebrating the heritage shaped
              by its people."
            </h4>

            <div className="flex space-x-8 items-center mb-8 bg-white p-4 rounded-xl">
              <div className="w-24">
                <ImageWithFallback
                  src={iloiloLogo}
                  alt="Iloilo City Logo"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="w-24">
                <ImageWithFallback
                  src={lovePhilippinesLogo}
                  alt="Love The Philippines Logo"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <p className="text-slate-400 text-xs tracking-wider uppercase max-w-3xl leading-relaxed">
              © {new Date().getFullYear()} PROJECT BAHANDI: An
              Interactive Showcase of Heritage and Identity of
              Molo, Iloilo City, Philippines.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
