import React, { useState } from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  const [view, setView] = useState("home"); // State to manage which view to show

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        {authUser ? (
          <>
            <Navbar setView={setView} /> {/* Pass setView to Navbar */}
            {view === "home" && <Home />}
            {view === "courses" && <Courses />}
          </>
        ) : (
          <Signup />
        )}
        <Toaster />
      </div>
    </>
  );
}

export default App;
