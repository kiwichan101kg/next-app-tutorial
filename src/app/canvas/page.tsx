"use client";
import { ChangeEvent, useState } from "react";
/**
 * プルダウンで色が変えられる
 * ・CanvasコンポでBoxの状態を保持する
 * ・BoxコンポにBoxの状態を渡す
 * ・
 *
 * ドラッグ&ドロップできる
 */

type Shape = {
  color: string;
  position: { x: number; y: number };
};

export default function Canvas() {
  const initialShape: Shape = {
    color: "orange",
    position: { x: 0, y: 0 },
  };
  const [shape, setShape] = useState<Shape>(initialShape);

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setShape({ ...shape, color: e.target.value });
  };

  const handleMove = (dx: number, dy: number) => {
    setShape({
      ...shape,
      position: { x: shape.position.x + dx, y: shape.position.y + dy },
    });
  };
  return (
    <>
      <select onChange={handleColorChange} value={shape.color}>
        <option value="orange">orange</option>
        <option value="pink">pink</option>
        <option value="green">green</option>
      </select>
      <Box shape={shape} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
type LastCoordinates = {
  x: number;
  y: number;
};
function Box({
  shape,
  onMove,
  children,
}: {
  shape: Shape;
  onMove: (dx: number, dy: number) => void;
  children: string;
}) {
  const [lastCoordinates, setLastCoordinates] =
    useState<LastCoordinates | null>(null);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    // e.target.setPointerCapture(e.pointerId);
    console.log("handlePointerDown");

    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (lastCoordinates) {
      console.log("handlePointerMove");

      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    console.log("handlePointerUp");

    setLastCoordinates(null);
  }
  return (
    <>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          width: 100,
          height: 100,
          cursor: "grab",
          backgroundColor: shape.color,
          position: "absolute",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `translate(
            ${shape.position.x}px,
            ${shape.position.y}px
          )`,
        }}
      >
        {children}
      </div>
    </>
  );
}
