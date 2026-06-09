export function SectionTitle({ children }) {
  return (
    <h2
      className="font-serif text-gray-900 mb-8 text-center tracking-tight"
      style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}
    >
      {children}
    </h2>
  );
}
