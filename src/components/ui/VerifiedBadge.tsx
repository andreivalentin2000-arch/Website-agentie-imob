interface VerifiedBadgeProps {
  size?: number;
  className?: string;
  label?: string;
}

/**
 * The site's signature mark. Rural Romanian property deeds are historically
 * confirmed with a cadastral survey and a notary's stamp — this badge borrows
 * that visual language (compass rose + circular seal type) instead of a
 * generic checkmark, tying the "verified paperwork" promise to something
 * concrete from the subject's own world.
 */
export default function VerifiedBadge({ size = 56, className = "", label = "Documents Verified" }: VerifiedBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} role="img" aria-label={label}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="50" r="47" stroke="#B68A4E" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="39" stroke="#B68A4E" strokeWidth="1" strokeDasharray="1 4" />
        <path
          d="M50 20 L54 46 L80 50 L54 54 L50 80 L46 54 L20 50 L46 46 Z"
          stroke="#B68A4E"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="50" cy="50" r="4" fill="#B68A4E" />
        <text
          x="50"
          y="16"
          textAnchor="middle"
          fontSize="6.5"
          fill="#B68A4E"
          fontFamily="Georgia, serif"
          letterSpacing="2"
        >
          VERIFIED
        </text>
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontSize="5"
          fill="#B68A4E"
          fontFamily="Georgia, serif"
          letterSpacing="1.5"
        >
          ROMANIA
        </text>
      </svg>
      <span className="font-body text-[11px] uppercase tracking-widest2 text-gold-dim leading-tight">
        {label}
      </span>
    </div>
  );
}
