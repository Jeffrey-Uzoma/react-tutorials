import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              delay: dot * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
