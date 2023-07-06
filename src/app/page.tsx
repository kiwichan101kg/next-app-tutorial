import Link from "next/link";

export default function Home() {
  const homeStyle = { color: "pink", fontSize: "36px" };
  return (
    <>
      <h1 style={homeStyle}>こんにちは</h1>
      <Link href={"page1"}>ページ1へ</Link>
      <br />
      <Link href={"todos"}>todosページへ</Link>
    </>
  );
}
