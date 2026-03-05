import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const isHome = location.pathname === "/";
  const isLoggedIn = !!localStorage.getItem("token");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // 🔥 BACKGROUND LOGIC
  const navbarStyle = isHome
    ? scrolled
      ? "bg-[#1e3a3a]/10 backdrop-blur-md"
      : "bg-transparent"
    : "bg-[#e6f2f2]/70 backdrop-blur-md";

  // 🔥 TEXT COLOR LOGIC
  const textColor = isHome
    ? scrolled
      ? "text-[#1e3a3a]"
      : "text-[#e6f2f2]"
    : "text-[#1e3a3a]";

  const activeLink = "bg-[#2c5c5c] text-[#e6f2f2]";
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle}`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        {/* Logo */}
        <h1 className={`text-2xl font-semibold ${textColor}`}>
          Med<span className="text-[#2c5c5c]">Wise.</span>
        </h1>

        {/* Middle Menu */}
        <div className="hidden md:flex gap-3">
          {isLoggedIn ? (
            <>
              <Link
                to="/"
                className={`px-6 py-2 rounded-full transition ${
                  location.pathname === "/" ? activeLink : textColor
                }`}
              >
                Home
              </Link>

              <Link
                to="/search"
                className={`px-6 py-2 rounded-full transition ${
                  location.pathname === "/search" ? activeLink : textColor
                }`}
              >
                Search
              </Link>

              <Link
                to="/chat"
                className={`px-6 py-2 rounded-full transition ${
                  location.pathname === "/chat" ? activeLink : textColor
                }`}
              >
                Health Chat
              </Link>
            </>
          ) : (
            <>
              <span
                onClick={() => scrollToSection("home")}
                className={`px-6 py-2 rounded-full cursor-pointer ${textColor}`}
              >
                Home
              </span>

              <span
                onClick={() => scrollToSection("about")}
                className={`px-6 py-2 rounded-full cursor-pointer ${textColor}`}
              >
                About
              </span>

              <span
                onClick={() => scrollToSection("contact")}
                className={`px-6 py-2 rounded-full cursor-pointer ${textColor}`}
              >
                Contact
              </span>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className={`${textColor} font-medium`}>
                Hi, {user?.name || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-[#2c5c5c] text-[#e6f2f2] px-5 py-2 rounded-full hover:bg-[#1e3a3a] transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className={textColor}>
                Login
              </Link>

              <Link
                to="/login"
                className="bg-[#2c5c5c] text-[#e6f2f2] px-5 py-2 rounded-full"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
