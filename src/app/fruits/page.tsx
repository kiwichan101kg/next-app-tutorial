import Link from "next/link";
import { List } from "./List";
import { ReactNode } from "react";

export default function Page() {
  const fruits = [
    {
      name: "りんご",
      color: "red",
    },
    {
      name: "もも",
      color: "pink",
    },
    {
      name: "みかん",
      color: "orange",
    },
  ];
  return (
    <>
      <h1>Hello Home</h1>
      <Wrap>
        <List thema={"red"} fruits={fruits} />
      </Wrap>
      <Wrap>
        <List fruits={fruits} />
      </Wrap>
      <Link href={"page2"}>ページ2へ</Link>
    </>
  );
}

export const Wrap = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>____________</h1>
      {children}
      <h1>____________</h1>
    </div>
  );
};
