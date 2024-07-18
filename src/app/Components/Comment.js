import React from "react";

const Comment = ({ comment, onDelete, onEdit }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center">
        <div className="font-bold">{comment.writer}</div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(comment.id)}
            className="text-gray-500 hover:text-blue-500"
          >
            수정
          </button>
          <button
            onClick={() => onDelete(comment.id)}
            className="text-gray-500 hover:text-red-500"
          >
            삭제
          </button>
        </div>
      </div>
      <div>{comment.content}</div>
    </div>
  );
};

export default Comment;
