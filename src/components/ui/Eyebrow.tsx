interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <div
      className={className}
      style={{
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        fontSize: 13,
        color: light ? "rgba(255,255,255,0.85)" : "#6b7a44",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}
