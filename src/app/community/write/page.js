"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import { CiImageOn } from "react-icons/ci";
import { useRecoilState } from "recoil";
import userState from "@/app/Store/userState";
import Image from "next/image";
import axios from "axios";

const CoummunityWritePage = ({ searchParams }) => {
  // 상태 관리
  const [author, setAuthor] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [jobField, setJobField] = useState("");
  const [disabilityType, setDisabilityType] = useState("");

  // UI 상태
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [isEdit, setIsEdit] = useState(false);
  const navigate = useRouter();
  const inputRef = useRef(null);
  const editorRef = useRef(null);

  // 전역 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);

  // Effect
  useEffect(() => {
    const id = searchParams["id"];
    if (id) {
      setIsEdit(true);
      getPostDetail(id);
    }
  }, [searchParams]);

  const getPostDetail = async (postId) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/board/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setPostTitle(response.data.title);
      setPostContent(response.data.content);
      console.log(response);
    } catch (error) {
      console.error("글 조회실패", error);
      setPostTitle("");
      setPostContent("");
    }
  };

  const validateForm = () => {
    if (!postTitle.trim()) {
      setError("제목을 입력해주세요");
      return false;
    }
    if (!category) {
      setError("카테고리를 선택해주세요");
      return false;
    }
    if (!postContent.trim()) {
      setError("내용을 입력해주세요");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스입니다.");
      navigate.push("/login");
      return;
    }
    setError("");
    setSuccess("");
    if (!validateForm()) {
      return;
    }

    const postData = {
      title: postTitle,
      content: postContent,
      thumbnail: thumbnailUrl,
      category,
      region,
      jobField,
      disabilityType,
      authorId: author.uid,
      createdAt: new Date().getTime(),
    };

    try {
      if (!isEdit) {
        createPost();
        setSuccess("게시글 작성이 완료되었습니다.");
      } else {
        const id = searchParams["id"];
        updatePost(id);
        setSuccess("게시글 수정이 완료되었습니다.");
      }
      navigate.push("/community");
    } catch (error) {
      console.error("게시글 저장 중 오류 발생:", error);
      setError("게시글 저장 중 오류가 발생했습니다.");
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  // Method
  const createPost = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const data = {
        title: postTitle,
        content: postContent,
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/create`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // 글 수정
  const updatePost = async (id) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/post/update/${id}`,
        {
          title: postTitle,
          content: postContent,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="page">
      <div className="max-w-5xl w-full mt-16 mb-20 mx-auto p-5 md:p-5 community-post">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">커뮤니티 글쓰기</h1>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={postTitle}
            placeholder="제목"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">카테고리 선택</option>
            <option value="question">질문</option>
            <option value="share">정보 공유</option>
            <option value="job">구직/채용</option>
            <option value="chat">잡담</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={region}
            placeholder="지역 (선택사항)"
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={jobField}
            placeholder="직종 (선택사항)"
            onChange={(e) => setJobField(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={disabilityType}
            placeholder="장애 유형 (선택사항)"
            onChange={(e) => setDisabilityType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div
            className="rounded-sm overflow-hidden w-full h-48 bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-gray-200 border-dotted border-4"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
          >
            {thumbnailUrl ? (
              <Image
                width={600}
                height={600}
                src={thumbnailUrl}
                alt="Thumbnail"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-3xl flex flex-col justify-center items-center gap-3">
                <CiImageOn />
                <span className="text-sm">썸네일 이미지 업로드 (선택사항)</span>
                {isUploading && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            )}
            <input ref={inputRef} className="hidden" type="file" accept="image/*" />
          </div>
        </div>
        <div className="mb-4">
          <ReactQuill
            forwardedRef={editorRef}
            theme="snow"
            modules={modules}
            value={postContent}
            onChange={setPostContent}
            placeholder="내용을 입력하세요..."
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 text-black rounded"
            onClick={() => navigate.push("/community")}
          >
            취소
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleSave}>
            {isEdit ? "수정" : "작성"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoummunityWritePage;
