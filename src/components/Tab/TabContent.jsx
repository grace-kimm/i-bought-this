import FeedList from "../Feed/FeedList";
import "./TabContent.css";

const TabContent = ({ activeTab }) => {
  return (
    <div className="tab-content">
      {activeTab === "posts" && (
        <div className="content" id="tab1">
          <FeedList />
        </div>
      )}
      {activeTab === "myPost" && (
        <div className="content" id="tab2">
          내게시글 내용
        </div>
      )}
    </div>
  );
};

export default TabContent;
