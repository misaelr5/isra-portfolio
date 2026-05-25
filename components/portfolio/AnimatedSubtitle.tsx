type AnimatedSubtitleProps = {
  className?: string;
  text: string;
};

export function AnimatedSubtitle({ className = "", text }: AnimatedSubtitleProps) {
  return (
    <span className={`animated-subtitle inline-flex flex-wrap ${className}`}>
      {text.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} className="animated-subtitle-letter" style={{ animationDelay: `${index * 22}ms` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
