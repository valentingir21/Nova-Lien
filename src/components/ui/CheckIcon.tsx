interface CheckIconProps {
  size?: number;
  color?: string;
}

export default function CheckIcon({ size = 16, color = "currentColor" }: CheckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points="2.5,8.5 6,12 13.5,4"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
