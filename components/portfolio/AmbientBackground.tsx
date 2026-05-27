/** Fondo ambiental liviano (solo CSS, sin canvas). */
export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg__mesh" />
      <div className="ambient-bg__orb ambient-bg__orb--a" />
      <div className="ambient-bg__orb ambient-bg__orb--b" />
    </div>
  );
}
