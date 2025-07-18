import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center gap-3 bg-white/80 dark:bg-black/40 border-t border-gray-100 dark:border-gray-800">
      <div className="flex gap-6 text-2xl">
        <a href="https://github.com/Danny-fc" className="hover:text-blue-500" aria-label="GitHub"><FaGithub /></a>
        <a href="www.linkedin.com/in/daniel-timilehin-092074204" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
      <span className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Daramola Daniel. All rights reserved.</span>
    </footer>
  );
}
