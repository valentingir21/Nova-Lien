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
        fontSize: 20,
        color: light ? "rgba(255,255,255,0.95)" : "#6b7a44",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}
