import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((s) => s.auth);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(loginUser(form));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* Animated Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse bottom-[-120px] right-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse bottom-[50px] left-[200px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[28px] shadow-[0_0_40px_rgba(255,255,255,0.15)] space-y-6 text-white"
        >
          {/* Funky Header */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-lg">
                <Sparkles size={24} />
              </div>
            </div>

            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome Back Admin
            </h2>

            <p className="text-gray-300 text-sm">
              Enter credentials to unlock the dashboard 🚀
            </p>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm text-gray-200">Email</label>
            <div className="flex items-center border border-white/20 rounded-xl px-3 bg-white/5 focus-within:border-pink-400 transition">
              <Mail size={18} className="text-pink-300" />
              <input
                type="email"
                placeholder="admin@email.com"
                className="w-full bg-transparent outline-none p-3 text-white placeholder-gray-400"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-sm text-gray-200">Password</label>
            <div className="flex items-center border border-white/20 rounded-xl px-3 bg-white/5 focus-within:border-cyan-400 transition">
              <Lock size={18} className="text-cyan-300" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none p-3 text-white placeholder-gray-400"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </motion.button>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-3 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Footer */}
          <p className="text-center text-gray-400 text-xs">
            Crafted with ⚡ Tailwind + React
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;