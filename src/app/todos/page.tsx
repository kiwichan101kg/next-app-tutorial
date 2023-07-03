import Link from "next/link";

type Todo = {
  title: string;
};

async function getData() {
  console.log("レンダリング ");

  const res = await fetch("http://localhost:3000/api/todos");
  console.log("res.json()");
  return res.json();
}

export default async function Home() {
  const todos: Todo[] = await getData();

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo: Todo) => {
        <div>Todo:{todo.title}</div>;
      })}
      <h1>あああああ</h1>
      <Link href={"page1"}>ページ1へ</Link>
    </>
  );
}
