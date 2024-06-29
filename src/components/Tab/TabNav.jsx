import React from "react";
import "./TabNav.css";

const TabNav = ({ activeTab, handleTabClick }) => {
  return (
    <div className="tabs">
      <ul className="tab-nav">
        <li className={`tab-item ${activeTab === "posts" ? "active" : ""}`}>
          <button onClick={() => handleTabClick("posts")}>구경하기</button>
        </li>
        <li className={`tab-item ${activeTab === "myPost" ? "active" : ""}`}>
          <button onClick={() => handleTabClick("myPost")}>내게시글</button>
        </li>
      </ul>
    </div>
  );
};

export default TabNav;
