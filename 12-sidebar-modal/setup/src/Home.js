import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">showModal</button>
    </main>
  );
};

export default Home;
