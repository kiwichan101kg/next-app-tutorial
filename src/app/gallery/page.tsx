"use client";
import { useState } from "react";
import { Sculpture, sculptureList } from "./data";

// データの配列があり、ボタンを押下するたび次のデータを表示する場合、配列のindexをuseStateで管理する
export default function Gallery() {
  const [index, setIndex] = useState<number>(0);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sculptureList.length);
  };
  const article = sculptureList[index];
  return (
    <>
      <button onClick={handleNext}>Next</button>
      <h1>{`${article.name} by ${article.artist}`}</h1>
      <p>{`${index} of 12`}</p>
      <button onClick={() => setIsDisplay(!isDisplay)}>
        {isDisplay ? "Hide" : "Show"} detail
      </button>
      {isDisplay && <p>{article.description}</p>}
      <img src={article.url} alt="" />
    </>
  );
}
