import { useState, useEffect } from "react";

const colorToStyle = {
  RED: "bg-red-600",
  GREEN: "bg-green-600",
  BLUE: "bg-blue-600",
};

const colorToXPosition = {
  RED: 10,
  GREEN: 35,
  BLUE: 60,
} as const;

const DraggableDiv = ({
  color,
  disabled,
}: {
  disabled: boolean;
  color: "RED" | "GREEN" | "BLUE";
}) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: colorToXPosition[color],
    y: 10,
  });

  useEffect(() => {
    if (disabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setPosition({ x: newX, y: newY });
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, startY]);

  return (
    <div
      className={`h-5 w-5 ${disabled ? "" : "cursor-pointer"} rounded-full ${
        colorToStyle[color]
      }`}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
      onMouseDown={(e) => {
        setIsDragging(true);
        setStartX(e.clientX - position.x);
        setStartY(e.clientY - position.y);
      }}
    />
  );
};

export default DraggableDiv;
