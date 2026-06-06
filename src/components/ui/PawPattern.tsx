import PawIcon from "./PawIcon";

interface PawPatternProps {
  color?: string;
  density?: number;
}

const SIZES = [18, 28, 44, 24, 60, 36, 52, 20, 68, 32];
const ROTATES = [-20, 15, -35, 30, -10, 45, -45, 5, 25, -30];

export default function PawPattern({
  color = "rgba(143,158,99,0.12)",
  density = 0.5,
}: PawPatternProps) {
  const cols = Math.ceil(10 * density);
  const rows = Math.ceil(7 * density);
  const paws = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      // Offset léger pour casser la grille parfaite
      const jitterX = ((idx * 17) % 9) - 4;
      const jitterY = ((idx * 23) % 9) - 4;
      paws.push({
        left: `${(c / cols) * 100 + 4 + jitterX}%`,
        top: `${(r / rows) * 100 + 6 + jitterY}%`,
        rotate: ROTATES[idx % ROTATES.length],
        size: SIZES[idx % SIZES.length],
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
          }}
        >
          <PawIcon size={p.size} color={color} rotate={p.rotate} />
        </div>
      ))}
    </div>
  );
}
