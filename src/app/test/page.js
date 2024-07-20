"use client";

import axios from "axios";

const { useEffect } = require("react");

const a = () => {
  const apiSave = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:8080/api/save",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiSave();
  }, []);

  return <div>dd</div>;
};

export default a;
