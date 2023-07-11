"use client";

import { ChangeEvent, ChangeEventHandler, useState } from "react";

// listをオブジェクト配列で管理する
// 親コンポでlistの状態を管理する
// 子コンポから更新情報(itemのid)をうけとり、それをもとに状態を更新する
//→情報を引数で受け取るために子コンポに関数を渡す
// ItemListコンポーネントにlistを渡す

// ItemListコンポーネントは受け取ったlist配列をmapで展開して表示

type List = {
  id: number;
  title: string;
  isChecked: boolean;
};
let nextId = 3;
const initialList: List[] = [
  { id: 0, title: "Big Bellies", isChecked: false },
  { id: 1, title: "Lunar Landscape", isChecked: false },
  { id: 2, title: "Terracotta Army", isChecked: true },
];

export default function BucketList() {
  const [list, setList] = useState<List[]>(initialList);

  /**
   * 子コンポから更新情報をうけとり、それをもとに状態を更新する
   * @param targetId クリックされたチェックボックスのid
   */
  const handleToggle = (targetId: number) => {
    // listの状態を一つ一つ見てクリックされたチェックボックスを探していく
    const upDateList = list.map((item) => {
      // クリックされたチェックボックスを見つけた場合、isCheckを反転する
      if (item.id === targetId) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    setList(upDateList);
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList list={list} onToggle={handleToggle} />
    </>
  );
}
function ItemList({
  list,
  onToggle,
}: {
  list: List[];
  onToggle: (id: number) => void;
}) {
  return (
    <>
      {list.map((item) => (
        <label htmlFor="" key={item.id}>
          <input
            type="checkbox"
            onChange={() => onToggle(item.id)}
            checked={item.isChecked}
            key={item.id}
          />
          {item.title}
        </label>
      ))}
    </>
  );
}
