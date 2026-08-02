const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
w-full
rounded-2xl
bg-gradient-to-r
from-violet-600
via-purple-600
to-fuchsia-600
py-3.5
font-semibold
text-white

transition-all
duration-300

hover:scale-[1.02]
hover:shadow-[0_10px_40px_rgba(139,92,246,0.5)]

active:scale-95

disabled:opacity-50
"
    >
      {children}
    </button>
  );
};

export default Button;
