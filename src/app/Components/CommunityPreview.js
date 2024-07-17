"use client";
import { useState } from "react";
import Link from "next/link";
import { FcLike } from "react-icons/fc";

const CommunityPreview = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [date, setDate] = useState(post.date);
  const [likes, setLikes] = useState(post.likes);

  return (
    <div className="border border-gray-300 rounded-lg p-4 my-4 w-11/12 mx-auto flex justify-between items-center">
      <Link href={`/community/${post.id}`} className="w-full no-underline text-black">
        <div className="flex justify-between w-full">
          <div className="flex flex-col flex-grow">
            <div className="font-bold text-xl truncate">{title}</div>
            <div className="flex items-center">
              <div>{post.id}</div>
              <div className="mx-2">-</div>
              <div>{date}</div>
            </div>
          </div>
          <div className="flex items-center ml-4">
            <FcLike className="mr-2" />
            <div>{likes}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommunityPreview;
