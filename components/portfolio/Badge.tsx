type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="section-label justify-center entrance-badge">
      <span className="section-number">✦</span>
      <span className="section-title">{children}</span>
    </span>
  );
}
