"use client";
import { useState } from "react";
/**
 * 3つの数字の状態をuseStateで管理し、+1ボタンをおされたcounterのみを更新する。
 * ボタンにそれぞれindexを持たせる。
 * ボタンを押されたときに実行する関数にボタンの識別子(index)を引数に渡す。
 * mapで3つの数字の状態を一つづつ見ていき、indexが一致したもののみ+1する。一致しないものはそのまま返す。
 */

let initialCounters: number[] = [0, 0, 0];
export default function CounterList() {
  const [counter, setCounter] = useState<number[]>(initialCounters);

  const handleUp = (index: number) => {
    console.log(index);
    const updatteCounter = counter.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounter(updatteCounter);
  };
  return (
    <>
      {counter.map((num, index) => (
        <>
          <li key={index}>{num}</li>
          <button onClick={() => handleUp(index)}>+1</button>
        </>
      ))}
    </>
  );
}
