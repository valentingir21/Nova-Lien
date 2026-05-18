"use client";

interface PawIconProps {
  size?: number;
  color?: string;
  rotate?: number;
  className?: string;
}

export default function PawIcon({
  size = 24,
  color = "currentColor",
  rotate = 0,
  className,
}: PawIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="6" cy="5.5" rx="2.5" ry="3.2" opacity="0.9" />
      <ellipse cx="18" cy="5.5" rx="2.5" ry="3.2" opacity="0.9" />
      <ellipse cx="3.5" cy="10.5" rx="2.2" ry="2.8" opacity="0.9" />
      <ellipse cx="20.5" cy="10.5" rx="2.2" ry="2.8" opacity="0.9" />
      <path d="M12 8.5c-4.5 0-7.5 3-7.5 6.5 0 3.2 2 5 4 5 1 0 2-.5 3.5-.5s2.5.5 3.5.5c2 0 4-1.8 4-5 0-3.5-3-6.5-7.5-6.5z" />
    </svg>
  );
}
