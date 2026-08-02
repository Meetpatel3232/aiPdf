import { RiRobot2Line } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-2xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-900/40">

        <RiRobot2Line className="text-white text-2xl" />

      </div>

      <div>

        <h1 className="text-xl font-bold text-white tracking-wide">
          DockMind AI
        </h1>

        <p className="text-xs text-slate-400">
          AI Document Assistant
        </p>

      </div>

    </div>
  );
};

export default Logo;