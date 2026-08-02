import { motion } from "framer-motion";

const AuthButton = ({ children, loading, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      disabled={loading}
      {...props}
      className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-purple-600
        py-3
        text-white
        font-semibold
        shadow-lg
        shadow-violet-700/30
        transition
        hover:brightness-110
        disabled:opacity-60
      "
    >
      {loading ? "Please wait..." : children}
    </motion.button>
  );
};

export default AuthButton;