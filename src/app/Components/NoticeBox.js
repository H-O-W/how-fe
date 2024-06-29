import React from "react";

const NoticeBox = ({ title }) => {
  return (
    <div className="py-6 cursor-pointer">
      <div className="w-full inline-flex justify-between items-center">
        <h3 className="flex-1 text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default NoticeBox;
