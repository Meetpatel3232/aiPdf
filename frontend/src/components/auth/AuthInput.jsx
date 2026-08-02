import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthInput = forwardRef(
  ({ icon: Icon, type = "text", placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="relative">
        {Icon && (
          <Icon
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              text-lg
            "
          />
        )}

        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          {...props}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            py-3.5
            pl-12
            pr-12
            text-white
            placeholder:text-slate-500
            transition-all
            duration-300
            outline-none

            focus:border-violet-500
            focus:bg-white/10
            focus:ring-4
            focus:ring-violet-500/20
          "
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-violet-400
              transition
            "
          >
            {showPassword ? (
              <FiEyeOff size={20} />
            ) : (
              <FiEye size={20} />
            )}
          </button>
        )}
      </div>
    );
  }
);

export default AuthInput;