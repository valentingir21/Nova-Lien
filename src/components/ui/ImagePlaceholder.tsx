interface ImagePlaceholderProps {
  tone?: "sage" | "cream";
  aspect?: number;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  tone = "sage",
  aspect = 1,
  label,
  className,
}: ImagePlaceholderProps) {
  const bg = tone === "sage" ? "#dde2ce" : "#ebe2c8";
  const fg = tone === "sage" ? "#6b7a44" : "#c9b78f";

  return (
    <div
      className={className}
      style={{
        background: bg,
        aspectRatio: `1 / ${aspect}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="8" fill={fg} fillOpacity="0.3" />
        <circle cx="14" cy="16" r="5" fill={fg} fillOpacity="0.5" />
        <path
          d="M4 32 L14 20 L22 28 L28 22 L36 32"
          stroke={fg}
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
          fillOpacity="0.5"
        />
      </svg>
      {label && (
        <span
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: 11,
            color: fg,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
