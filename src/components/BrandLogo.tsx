export function BrandLogo() {
  return (
    <span className="brand-logo">
      <svg className="brand-monogram" viewBox="0 0 100 108" aria-hidden="true" focusable="false">
        <text x="7" y="77" fill="#B59B6F" fontFamily="var(--font-heading)" fontSize="96" fontWeight="400">E</text>
        <text x="35" y="100" fill="currentColor" fontFamily="var(--font-heading)" fontSize="98" fontWeight="400">A</text>
        <path d="M8 83C27 103 57 53 94 66" fill="none" stroke="#B59B6F" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 90C12 77 7 69 3 66C2 78 6 86 13 90ZM17 93C17 80 13 74 10 72C9 83 12 90 17 93ZM19 94C11 92 5 94 2 98C10 100 16 98 19 94Z" fill="#B59B6F" />
      </svg>
      <span className="brand-wordmark">
        <span className="brand-eyebrow">La conciergerie</span>
        <span className="brand-name">Écrin d’Azur</span>
        <span className="brand-location">Côte d’Azur · Provence</span>
      </span>
    </span>
  )
}
