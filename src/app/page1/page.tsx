import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello Home</h1>
      <Link href={"page2"}>ページ2へ</Link>
    </>
  );
}
