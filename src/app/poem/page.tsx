import { hrtime } from "process";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  const length = poem.lines.length;

  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          <p key={index}>{line}</p>

          {/**配列の最後の要素以外は表示する */}
          {index < length - 1 && <hr />}
        </>
      ))}
    </article>
  );
}
