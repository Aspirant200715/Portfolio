import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLogs = [
  "INITIALIZING SYSTEM...",
  "LOADING NEURAL NETWORKS...",
  "FETCHING DIFFUCAT WEIGHTS...",
  "ESTABLISHING SECURE CONNECTION...",
  "SYSTEM ONLINE: SOHAM GANGOPADHYAY",
  "LOCATION: BENGALURU, INDIA",
  "STATUS: BUILDING THE FUTURE",
];

const Terminal = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalLogs.length) {
        setLogs((prev) => [...prev, terminalLogs[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hidden lg:block absolute bottom-20 left-10 w-[300px] h-[200px] bg-black/60 backdrop-blur-md rounded-lg border border-[#915EFF]/30 p-4 font-mono text-[12px] overflow-hidden shadow-2xl'>
      <div className='flex gap-2 mb-3'>
        <div className='w-3 h-3 rounded-full bg-red-500' />
        <div className='w-3 h-3 rounded-full bg-yellow-500' />
        <div className='w-3 h-3 rounded-full bg-green-500' />
      </div>
      <div className='space-y-1'>
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-green-400'
          >
            <span className='text-[#915EFF]'>$</span> {log}
          </motion.p>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className='inline-block w-2 h-4 bg-green-400 ml-1'
        />
      </div>
    </div>
  );
};

export default Terminal;
