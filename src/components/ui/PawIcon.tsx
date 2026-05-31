"use client";

interface PawIconProps {
  size?: number;
  color?: string;
  rotate?: number;
  className?: string;
}

function parseColor(color: string): { r: number; g: number; b: number; a: number } {
  const rgbaMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
  if (rgbaMatch) {
    return {
      r: parseInt(rgbaMatch[1]),
      g: parseInt(rgbaMatch[2]),
      b: parseInt(rgbaMatch[3]),
      a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1,
    };
  }
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
      a: 1,
    };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

// Pre-computed filters for brand dark colors (applied before multiply blend)
const DARK_COLOR_FILTERS: Record<string, string> = {
  "107,122,68": "brightness(0) saturate(100%) invert(44%) sepia(24%) saturate(582%) hue-rotate(57deg) brightness(82%) contrast(89%)", // #6b7a44
  "143,158,99": "brightness(0) saturate(100%) invert(62%) sepia(17%) saturate(550%) hue-rotate(57deg) brightness(93%) contrast(83%)", // #8f9e63
  "221,226,206": "brightness(0) saturate(100%) invert(91%) sepia(11%) saturate(300%) hue-rotate(57deg) brightness(103%) contrast(88%)", // #dde2ce
  "28,32,24": "brightness(0)", // #1c2018
  "74,79,63": "brightness(0) saturate(100%) invert(28%) sepia(8%) saturate(400%) hue-rotate(57deg) brightness(80%) contrast(90%)", // #4a4f3f
};

export default function PawIcon({
  size = 24,
  color = "currentColor",
  rotate = 0,
  className,
}: PawIconProps) {
  if (!color || color === "currentColor") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/pattes.png"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className={className}
        style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, display: "block", mixBlendMode: "multiply" }}
      />
    );
  }

  const { r, g, b, a } = parseColor(color);
  const isLight = (r + g + b) / 3 > 200;

  let filter: string;
  let blendMode: React.CSSProperties["mixBlendMode"];

  if (isLight) {
    // Light/white paw on dark background: invert PNG (black bg → transparent via screen)
    filter = "invert(1)";
    blendMode = "screen";
  } else {
    // Dark paw on light background: colorize from black, white bg → transparent via multiply
    const key = `${r},${g},${b}`;
    filter = DARK_COLOR_FILTERS[key] ?? "brightness(0) saturate(100%)";
    blendMode = "multiply";
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pattes.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        filter,
        opacity: a,
        display: "block",
        userSelect: "none",
        mixBlendMode: blendMode,
      }}
    />
  );
}
