import { motion } from "framer-motion";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
  <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">

    
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />

    
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-600/25 rounded-full blur-[140px]" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[170px]" />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[200px]" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        w-full
        max-w-md
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-[30px]
        shadow-[0_25px_80px_rgba(139,92,246,0.25)]
        p-8
      "
    >

      
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      
      <div className="relative flex justify-center mb-8">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-4xl shadow-xl shadow-violet-700/40">
          🤖
        </div>
      </div>

      <h1 className="relative text-3xl font-bold text-center text-white">
        {title}
      </h1>

      <p className="relative text-center text-slate-400 mt-3 mb-8">
        {subtitle}
      </p>

      <div className="relative">
        {children}
      </div>

    </motion.div>
  </div>
);
};

export default AuthLayout;