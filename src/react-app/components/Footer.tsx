import { Github, Linkedin, Mail, Heart } from "lucide-react";
import namelogo from "../../../public/name-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white dark:bg-slate-950 border-t border-beige-200/50 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-beige-500 dark:text-beige-500 text-sm flex items-center justify-center gap-2 font-light">
              Built with{" "}
              <Heart className="w-4 h-4 text-softpink-500 fill-softpink-500" />{" "}
              by Lakshya
            </p>

            <p className="text-beige-400 dark:text-beige-600 text-xs mt-3 font-light">
              © {currentYear} Lakshya Pandey. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={namelogo}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              alt="Lakshya Pandey Logo"
              className="w-14 h-14 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Lakshya84"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/60 dark:bg-white/5 rounded-xl backdrop-blur-xl border border-beige-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 hover:scale-110 transition-all duration-300 group shadow-elegant"
            >
              <Github className="w-5 h-5 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/lakshya-pandey0307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/60 dark:bg-white/5 rounded-xl backdrop-blur-xl border border-beige-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 hover:scale-110 transition-all duration-300 group shadow-elegant"
            >
              <Linkedin className="w-5 h-5 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors" />
            </a>
            <a
              href="mailto:lakshyapandey787@gmail.com"
              className="p-4 bg-white/60 dark:bg-white/5 rounded-xl backdrop-blur-xl border border-beige-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 hover:scale-110 transition-all duration-300 group shadow-elegant"
            >
              <Mail className="w-5 h-5 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import { Github, Linkedin, Mail, Heart } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative py-20 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-700">

//       {/* 🔥 Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-lavender-400/20 blur-[120px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-softpink-400/20 blur-[120px] rounded-full animate-pulse"></div>
//       </div>

//       {/* ✨ Top Gradient Divider */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lavender-400 to-transparent opacity-60"></div>

//       <div className="relative max-w-6xl mx-auto px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//           {/* Left Section */}
//           <div className="text-center md:text-left space-y-3">

//             <p className="text-beige-500 dark:text-beige-400 text-sm flex items-center justify-center md:justify-start gap-2 font-light">
//               Built with{" "}

//               {/* ❤️ Animated Heart */}
//               <Heart className="w-4 h-4 text-softpink-500 fill-softpink-500 animate-[pulse_1.2s_ease-in-out_infinite]" />

//               by{" "}
//               <span className="bg-gradient-to-r from-lavender-600 via-softpink-500 to-softgold-500 bg-clip-text text-transparent font-medium">
//                 Lakshya
//               </span>
//             </p>

//             <p className="text-beige-400 dark:text-beige-600 text-xs font-light">
//               Crafted with passion & precision ✨
//             </p>

//             <p className="text-beige-400 dark:text-beige-600 text-xs font-light">
//               © {currentYear} Lakshya Pandey. All rights reserved.
//             </p>
//           </div>

//           {/* Right Section - Social Icons */}
//           <div className="flex items-center gap-6">

//             {[{
//               icon: <Github className="w-5 h-5" />,
//               link: "https://github.com/Lakshya84"
//             },
//             {
//               icon: <Linkedin className="w-5 h-5" />,
//               link: "https://linkedin.com/in/lakshyapandey"
//             },
//             {
//               icon: <Mail className="w-5 h-5" />,
//               link: "mailto:lakshyapandey787@gmail.com"
//             }].map((item, index) => (

//               <a
//                 key={index}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative p-4 rounded-xl backdrop-blur-xl border border-beige-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 transition-all duration-300 shadow-elegant hover:scale-110 hover:-translate-y-1"
//               >
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-lavender-500/20 via-softpink-500/20 to-softgold-500/20 blur-md"></div>

//                 {/* Icon */}
//                 <div className="relative z-10 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors">
//                   {item.icon}
//                 </div>
//               </a>
//             ))}

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
