"use client";
import { ReactNode, useCallback } from "react";

export default function App() {
  return (
    <>
      <Toolbar
        playing={() => alert("playing")}
        worning={() => alert("worning")}
      />
    </>
  );
}

function Toolbar({
  playing,
  worning,
}: {
  playing: (event: React.MouseEvent<HTMLButtonElement>) => void;
  worning: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <Button onClick={playing}>PLAYING</Button>
      <Button onClick={worning}>WORNING</Button>
    </>
  );
}

function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return <button onClick={onClick}>{children}</button>;
}
