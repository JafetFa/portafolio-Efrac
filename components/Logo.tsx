export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="10" fill="currentColor" className="text-primary" />
      <path
        d="M12 14V26M12 14H20M12 20H18"
        stroke="currentColor"
        className="text-primary-foreground"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 14V26M22 14H30"
        stroke="currentColor"
        className="text-primary-foreground"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}