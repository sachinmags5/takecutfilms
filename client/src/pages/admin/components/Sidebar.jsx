// ================= Sidebar.jsx =================

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Film,
  PlusCircle,
  LogOut,
  Menu,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const nav = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Movies",
      path: "/admin/movies",
      icon: Film,
    },
    {
      name: "Add Movie",
      path: "/admin/movies/add",
      icon: PlusCircle,
    },
  ];

  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-white/10 backdrop-blur-xl border-r border-white/20 text-white shadow-xl flex flex-col justify-between z-50"
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          {!collapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-2">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                  active
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon size={20} />

                {!collapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={ () => {
             dispatch(logout());
            console.log('kkkk');
            navigate("/admin/login");
          }
          }
          className="flex items-center gap-3 w-full p-3 rounded-xl bg-red-500 hover:bg-red-600 transition shadow-lg"
        >
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

