import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello Home</h1>
      <Link href={"page1"}>ページ1へ</Link>
      <Link href={"todos"}>todosページへ</Link>
    </>
  );
}
