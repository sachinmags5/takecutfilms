import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SocialSidebar from "../components/layout/SocialSidebar";

function MainLayout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SocialSidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;