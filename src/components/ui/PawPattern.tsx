import PawIcon from "./PawIcon";

interface PawPatternProps {
  color?: string;
  density?: number;
}

export default function PawPattern({
  color = "rgba(143,158,99,0.12)",
  density = 0.5,
}: PawPatternProps) {
  const cols = Math.ceil(8 * density);
  const rows = Math.ceil(5 * density);
  const paws = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      paws.push({
        left: `${(c / cols) * 100 + 6}%`,
        top: `${(r / rows) * 100 + 10}%`,
        rotate: (c + r) % 2 === 0 ? -15 : 20,
        size: 28 + (c % 2) * 8,
      });
    }
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {paws.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            opacity: 1,
          }}
        >
          <PawIcon size={p.size} color={color} rotate={p.rotate} />
        </div>
      ))}
    </div>
  );
}
