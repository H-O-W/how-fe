"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FcLike } from "react-icons/fc";

const PostDetailViewPage = () => {
  const { postId } = useParams();

  const [title, setTitle] = useState("제목");
  const [content, setContent] = useState("본문");
  const [date, setDate] = useState("날짜");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, comment: "댓글1", date: "2023-06-01" },
    { id: 2, comment: "댓글2", date: "2023-06-02" },
    { id: 3, comment: "댓글3", date: "2023-06-03" },
    { id: 4, comment: "댓글4", date: "2023-06-04" },
  ]);

  useEffect(() => {
    if (postId) {

    }
  }, [postId]);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, comment, date: new Date().toISOString().split('T')[0] }]);
      setComment("");
    }
  };

  return (
    <section className="container mx-auto p-4 mt-24">
      <div className="flex flex-col flex-grow items-center border border-gray-300 rounded-lg pt-8 pb-8 shadow-lg">
        <div className="font-bold text-4xl mb-4">{title}</div>
        <div className="text-lg mb-4 text-gray-600">
          <span>{postId}</span> - <span>{date}</span>
        </div>
        <div className="text-lg mb-4">{content}</div>
        <div className="flex justify-center items-center cursor-pointer" onClick={toggleLike}>
          <FcLike className={`mr-2 ${liked ? "text-red-500" : ""}`} />
          <span>{likes}</span>
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center border border-gray-300 rounded-lg pt-8 pb-12 shadow-lg mt-8 w-full">
        <div className="mb-4 flex justify-center items-center w-full">
          <label className="w-1/7 block text-lg mr-2" htmlFor="comment">댓글</label>
          <input
              type="text"
              id="comment"
              className="px-3 py-2 w-5/6 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="댓글을 입력하세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleAddComment} className="ml-2 bg-gray-400 text-white px-4 py-2 rounded-md text-lg">
            등록
          </button>
        </div>
        <div className="w-full mt-4 pl-12 pr-12">
          {comments.map((c) => (
            <div key={c.id} className="border-b border-gray-300 py-4">
              <div className="font-bold">{c.id}</div>
              <div>{c.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostDetailViewPage;
