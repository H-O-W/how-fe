"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import Comment from "@/app/Components/Comment";
import Image from "next/image";

const PostDetailViewPage = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState("궁금한게 있습니다");
  const [content, setContent] = useState("그것은..... 바로.........");
  const [author, setAuthor] = useState("관리자");
  const [date, setDate] = useState("2024.07.14. 13:03");
  const [likes, setLikes] = useState(0);
  const [authorProfileThumbnail, setAuthorProfileThumbnail] = useState("");

  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([
    { id: 1, comment: "댓글1", date: "2023-06-01" },
    { id: 2, comment: "댓글2", date: "2023-06-02" },
    { id: 3, comment: "댓글3", date: "2023-06-03" },
    { id: 4, comment: "댓글4", date: "2023-06-04" },
  ]);

  useEffect(() => {
    if (postId) {
      // postId를 사용하여 실제 데이터를 불러오는 로직 추가
      // 예: fetch(`/api/posts/${postId}`).then(...)
    }
  }, [postId]);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setCommentList([
        ...commentList,
        { id: commentList.length + 1, comment, date: new Date().toISOString().split("T")[0] },
      ]);
      setComment("");
      setComments(comments + 1);
    }
  };

  return (
    <section className="container mx-auto p-4 max-w-5xl mt-24">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {authorProfileThumbnail ? (
                <Image
                  width={100}
                  height={100}
                  src="/placeholder-avatar.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
              ) : (
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
              )}
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">
                  {author} • {date}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </button>
          </div>
          <p className="text-gray-700 mb-4">{content}</p>
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center text-gray-400 hover:text-red-500"
              onClick={toggleLike}
            >
              <FcLike className="mr-1" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-blue-500">
              <FaRegComment className="mr-1" />
              <span>{comments}</span>
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="댓글을 입력하세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              등록
            </button>
          </div>
          <div className="space-y-4">
            {commentList.map((c) => (
              <Comment key={c.id} comment={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetailViewPage;
