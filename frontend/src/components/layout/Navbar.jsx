import Logo from "../common/Logo";
import Button from "../common/Button";
import { FaGithub } from "react-icons/fa";
import { useUpload } from "../../context/UploadContext";

const Navbar = () => {
  const { status } = useUpload();
  return (
    <header
      className="
      h-16
      border-b
      border-violet-900
      bg-slate-900
      flex
      items-center
      justify-between
      px-4
      md:px-6
      lg:px-8
    "
    >
      <p className="hidden sm:block text-violet-400 text-sm">{status}</p>

      <div className="flex-1 flex justify-center md:flex-none">
        <Logo />
      </div>

      <a
        href="https://github.com/GitWithKomal/DockMind-AI"
        target="_blank"
        rel="noopener noreferrer"
        className="
    flex
    items-center
    gap-2
    border
    border-violet-900
    rounded-xl
    px-3
    md:px-4
    py-2
    text-slate-300
    hover:bg-violet-950
    transition-all
    text-sm
  "
      >
        <FaGithub />

        <span className="hidden md:inline">GitHub</span>
      </a>
    </header>
  );
};

export default Navbar;
