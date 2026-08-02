import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await login(form);

      authLogin(data.user, data.token);

      toast.success("Login Successful!");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to DockMind AI"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          icon={FiMail}
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <AuthButton loading={loading} type="submit">
          Sign In →
        </AuthButton>

        <p className="text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
