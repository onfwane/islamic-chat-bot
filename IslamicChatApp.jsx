import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function IslamicChatApp() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={\`flex items-center justify-center min-h-screen transition-all duration-500 \${darkMode ? "bg-gray-900 text-white" : "bg-red-200 text-black"}\`}>
      <div className={\`relative flex flex-col items-center p-6 rounded-3xl shadow-2xl w-80 md:w-96 h-[90vh] transition-all duration-500 \${darkMode ? 'bg-gray-800' : 'bg-white'}\`}>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-opacity-30 hover:bg-opacity-50 transition-all" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-500" />}
        </button>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mt-10 text-center">
          <h1 className="text-4xl font-extrabold">📜</h1>
          <p className="text-lg font-medium mt-2">شات الفتاوى الإسلامية</p>
        </motion.div>
        <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="relative flex items-center justify-center w-32 h-32">
            <div className={\`absolute w-24 h-24 rounded-full bg-gradient-to-br \${darkMode ? "from-gray-600 to-gray-800" : "from-yellow-400 to-orange-500"}\`}></div>
            <div className="absolute w-20 h-20 bg-red-300 rounded-full blur-md"></div>
          </div>
        </motion.div>
        <div className="mt-16 w-full px-4">
          <input type="text" placeholder="ابحث عن فتوى..." className="w-full p-3 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all shadow-sm" />
        </div>
      </div>
    </div>
  );
}