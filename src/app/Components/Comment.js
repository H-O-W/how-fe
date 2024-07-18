import React, { useState } from "react";

const Comment = ({ comment, onDeleteContent, onEditContent }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(comment.content);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = () => {
    onEditContent(comment.id, editValue);
    setIsEdit(false);
  };

  const handleCancelClick = () => {
    setIsEdit(false);
    setEditValue(comment.content || "");
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center">
        <div className="font-bold">{comment.writer}</div>
        <div className="flex space-x-2">
          {isEdit ? (
            <>
              <button
                onClick={handleSaveClick}
                className="text-gray-500 hover:text-blue-500"
              >
                저장
              </button>
              <button
                onClick={handleCancelClick}
                className="text-gray-500 hover:text-red-500"
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEditClick}
                className="text-gray-500 hover:text-blue-500"
              >
                수정
              </button>
              <button
                onClick={() => onDeleteContent(comment.id)}
                className="text-gray-500 hover:text-red-500"
              >
                삭제
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <input
          type="text"
          value={editValue || ""}
          onChange={(e) => setEditValue(e.target.value)}
          className="mt-2 px-2 py-1 border rounded"
        />
      ) : (
        <div>{comment.content}</div>
      )}
    </div>
  );
};

export default Comment;
