/** Fixed backdrop: soft navy gradient with three slow-floating purple and blue glows. Pure CSS, no JavaScript. */
export default function Background() {
  return (
    <div className="bg-layer" aria-hidden>
      <span className="orb o1" />
      <span className="orb o2" />
      <span className="orb o3" />
    </div>
  );
}
