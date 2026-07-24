export function GridBackground() {
  return (
    <div
      className="fixed inset-0"
      style={{
        backgroundColor: "#09090B",
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 300px),
          radial-gradient(circle at 80% 80%, rgba(139,92,246,0.35), transparent 300px),
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, 48px 48px, 48px 48px",
      }}
    />
  );
}