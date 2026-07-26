import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Map, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pinIcon from "../../imports/location-pin-transparent.png";

export default function MapPage() {
  const [isInfoBarOpen, setIsInfoBarOpen] = useState(false);

  return (
    <div className="relative w-full h-[calc(100vh-72px)] bg-slate-100 overflow-hidden">
      {/* Fullscreen Map Background */}
      <Map
        size={800}
        className="text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      
      {/* Clickable Map Pin */}
      <button
        onClick={() => setIsInfoBarOpen(true)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12
              origin-bottom
              transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
              hover:-translate-y-4 hover:scale-125
              hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]
              cursor-pointer z-10 animate-fade-in opacity-0"
        style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        aria-label="Open Map Info"
      >
        <ImageWithFallback
          src={pinIcon}
          alt="Location Pin"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </button>

      {/* Info Bar Sidebar */}
      <AnimatePresence>
        {isInfoBarOpen && (
          <>
            {/* Backdrop overlay for mobile to click out */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInfoBarOpen(false)}
              className="fixed inset-0 bg-slate-900 z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="absolute top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-2xl z-50 flex flex-col border-l border-slate-200"
            >
              <div className="p-6 bg-[#14213d] text-white flex items-center justify-between">
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">
                  EXAMPLE NAME
                </h3>
                <button
                  onClick={() => setIsInfoBarOpen(false)}
                  className="text-white hover:text-[#5C87C7] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 flex-1 flex flex-col overflow-y-auto">
                <div className="mb-2 inline-block px-3 py-1 bg-[#DCE4F0] text-[#14213d] text-xs font-bold rounded-full uppercase tracking-wider w-max">
                  Information
                </div>
                <h4 className="font-bold text-slate-800 mb-4 text-lg">
                  INFO:
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  This is an example description of the
                  landmark. Explore the digital map to learn
                  more about its rich heritage, cultural
                  significance, and the stories that shaped its
                  identity over generations.
                </p>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <button className="w-full py-4 bg-[#14213d] hover:bg-[#0d1526] text-white font-bold rounded-xl transition-colors uppercase tracking-wider text-sm shadow-md flex items-center justify-center space-x-2">
                    <span>PLAY GAME</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
