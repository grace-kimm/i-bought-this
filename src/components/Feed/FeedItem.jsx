import { useState } from "react";
import "./FeedItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function FeedItem({ feed }) {
  const { img, nickname, description, updatedAt } = feed;
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLikeClick = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="feed-item">
      <img src={img} alt="thumbnail" className="feed-item-image" />
      <article className="feed-item-header">
        <span className="feed-item-nickname">{nickname}</span>
        <span className="feed-item-date">{updatedAt}</span>
      </article>
      <article className="feed-item-content">
        <div className="feed-item-description-container">
          <p className={`feed-item-description ${expanded ? "expanded" : ""}`}>
            {description}
          </p>
          {description.length > 100 && (
            <button className="expand-button" onClick={toggleExpanded}>
              {expanded ? "접기" : "더보기"}
            </button>
          )}
        </div>
        <article className="feed-item-like">
          <button className="like-button" onClick={handleLikeClick}>
            <FontAwesomeIcon icon={liked ? faHeart : faHeartRegular} />
          </button>
          <span className="like-count">{likeCount}</span>
        </article>
      </article>
    </article>
  );
}

export default FeedItem;
