import "./Home.css";
import { useState } from "react";
import TabNav from "./Tab/TabNav";
import TabContent from "./Tab/TabContent";
import CreatePostButton from "./CreatePostButton";
import "./Tab/TabNav.css";
import "./CreatePostButton.css";

function Home() {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="home">
      <h1 className="title">내돈내산 구경하기</h1>
      <CreatePostButton />

      <TabNav activeTab={activeTab} handleTabClick={handleTabClick} />

      <TabContent activeTab={activeTab} />
    </div>
  );
}

export default Home;
