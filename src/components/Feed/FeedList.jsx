import FeedItem from "./FeedItem";
import iphoneImage from "../../assets/images/iphone.jpg";
import dollImage from "../../assets/images/doll.jpg";
import perfumeImage from "../../assets/images/perfume.jpg";

const feeds = [
  {
    id: 1,
    nickname: "🥺 사는게제일좋아",
    description:
      "나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 나 이번에 향수 샀어 ",
    updatedAt: "2024-07-02 13:00:23",
    img: perfumeImage,
  },
  {
    id: 2,
    nickname: "😙 사는게제일좋아",
    description: "나 이번에 아이폰 샀어",
    updatedAt: "2024-07-01 12:00:23",
    img: iphoneImage,
  },
  {
    id: 3,
    nickname: "😎 사는게제일좋아",
    description: "나 이번에 인형 샀어",
    updatedAt: "2024-06-29 10:00:23",
    img: dollImage,
  },
];

function FeedList() {
  return (
    <div>
      {feeds.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </div>
  );
}

export default FeedList;
