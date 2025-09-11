import Navbar from "./navbar.jsx";
import Profile from "./profile.jsx";
import Social from "./social.jsx";

export default function Common() {
  return (
    <div className="w-full max-w-3xl text-gray-100">
      <Profile />
      <Social />
      <div className="border-b border-gray-700 w-full my-8"></div>
      <Navbar />
    </div>
  );
}