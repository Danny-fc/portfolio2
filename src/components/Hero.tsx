import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-[#0a0a0a] dark:via-[#171717] dark:to-[#232323]">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300"
      >
        Hi, I’m <span className="inline-block">Daramola Daniel</span>
        <br />
        <span className="text-xl sm:text-3xl font-light block mt-2">Creative Developer & Designer</span>
      </motion.h1>
      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group"
        >
          <motion.svg
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-10 h-10 fill-current text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
          </motion.svg>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group"
        >
          <motion.svg
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-10 h-10 fill-current text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
          </motion.svg>
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
          className="group"
        >
          <motion.svg
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-10 h-10 fill-current text-pink-600 dark:text-pink-400 group-hover:text-pink-800 dark:group-hover:text-pink-200 transition-colors duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
          </motion.svg>
        </a>
      </div>
    </section>
  );
}
