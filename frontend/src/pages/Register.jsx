import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { register as registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    toast.success("Registration Successful! Please login.");

    navigate("/login");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-violet-900 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-violet-400">DockMind AI</h1>

          <p className="text-slate-400 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-violet-500"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-slate-300 text-sm mb-2 block">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-violet-500"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-violet-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-violet-500"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 transition duration-300 text-white py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-slate-400">Already have an account?</span>

          <Link to="/login" className="text-violet-400 ml-2 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
