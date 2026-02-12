export function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute float-gentle"
          style={{
            left: `${20 + i * 25}%`,
            top: `${10 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/30"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
