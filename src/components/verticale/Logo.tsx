export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      <span className="text-accent">verticale.</span>
      <span className={light ? "text-background" : "text-foreground"}>studio</span>
    </span>
  );
}
