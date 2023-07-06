import Link from "next/link";

type ItemType = {
  name: string;
  isDisplay: boolean;
  isPacked: boolean;
};

const Item = ({ name, isDisplay, isPacked }: ItemType) => {
  if (!isDisplay) {
    return null;
  }
  return (
    <>
      <li>{isPacked ? name + "✅" : <del>{name}</del>}</li>
    </>
  );
};

export default function PackingList() {
  return (
    <>
      <h1>Page2</h1>
      <Item name={"花子"} isDisplay={true} isPacked={false} />
      <Item name={"田中"} isDisplay={true} isPacked={true} />
      <Item name={"山田"} isDisplay={false} isPacked={true} />
      <Link href="/drinks">次へ</Link>
      <br />
      <Link href="/">homeへ</Link>
    </>
  );
}
