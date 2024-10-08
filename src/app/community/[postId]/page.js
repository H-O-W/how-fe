"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import Comment from "@/app/Components/Comment";
import Image from "next/image";
import axios from "axios";
import DOMPurify from "dompurify";
import NotFound from "@/app/not-found";

const PostDetailViewPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("2024.07.14. 13:03");
  const [likes, setLikes] = useState(0);
  const [authorProfileThumbnail, setAuthorProfileThumbnail] = useState("");
  const [postLoading, setPostLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const navigate = useRouter();

  useEffect(() => {
    if (postId) {
      getPostDetail(postId);
    }
  }, [postId]);

  // Method
  const getPostDetail = async (postId) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/board/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setPost(response.data);
      setCommentList(response.data.commentReadDTOS);
      console.log(response);
      setPostLoading(false);
    } catch (error) {
      console.error("글 조회실패", error);
      setIsNotFound(true);
    }
  };
  const onDeleteContent = async (commentId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/comment/${post.boardId}/delete/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      getPostDetail(postId);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const onEditContent = async (commentId, editValue) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/comment/update/${commentId}`,
        {
          content: editValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      getPostDetail(postId);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      postComment();
    }
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/comment/create/${post.boardId}`,
        {
          content: comment.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("댓글 등록 결과", response);
      setComment(""); // 댓글 입력란 비우기
      getPostDetail(postId);
    } catch (error) {
      console.error(error);
    }
  };

  // 글 삭제
  const deletePost = async (id) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/post/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
      navigate.push("/community");
    } catch (e) {
      console.error(e);
    }
  };

  const onClickUpdate = () => {
    navigate.push(`/community/write?id=${postId}`);
  };

  return (
    <section className="container mx-auto p-4 max-w-5xl mt-24">
      {postLoading ? (
        <>
          {isNotFound ? (
            <div>
              <NotFound />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="p-5">
            <div className="relative flex items-center justify-between mb-2">
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
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-500">
                    {post.writer} • {new Date(post.writeDate).toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="text-gray-400 hover:text-gray-500"
              >
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
              {openDropdown && (
                <div className="absolute right-0 top-10 flex flex-col items-end shadow bg-white rounded text p-2">
                  <button onClick={onClickUpdate} className="px-2 hover:bg-gray-100">
                    수정
                  </button>
                  <button onClick={() => deletePost(postId)} className="px-2 hover:bg-gray-100">
                    삭제
                  </button>
                </div>
              )}
            </div>
            <article
              className="w-full min-w-full mt-6 projectDescription flex flex-col items-start mb-6"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            ></article>
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
                <Comment
                  key={c.id}
                  comment={c}
                  onDeleteContent={onDeleteContent}
                  onEditContent={onEditContent}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetailViewPage;
