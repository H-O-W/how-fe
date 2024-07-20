"use client";

import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect } from "react";

const a = () => {
  // const getPosts = useCallback(
  //   debounce(async (term) => {
  //     try {
  //       const encodedSearchTerm = encodeURIComponent(term);
  //       let apiQuery = "http://3.34.215.159:8080/board/list";
  //       if (term) {
  //         apiQuery += `?keyword=${encodedSearchTerm}`;
  //       }
  //       const response = await axios.get(apiQuery, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       });
  //       console.log("글 불러오기 결과", response);
  //     } catch (error) {
  //       if (error) {
  //         refreshAccessToken();
  //         console.error(error);
  //       }
  //     }
  //   }, 200),
  //   []
  // );

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return <div>dd</div>;
};

export default a;
