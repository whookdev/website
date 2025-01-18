export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="technical-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="none" />
            <circle cx="20" cy="20" r="1" fill="#9F7AEA" />
            <path
              d="M0 20h40M20 0v40"
              stroke="#9F7AEA"
              strokeWidth="0.5"
              strokeDasharray="2,6"
              opacity="0.4"
            />
            <path
              d="M0 0l40 40M40 0L0 40"
              stroke="#F472B6"
              strokeWidth="0.5"
              strokeDasharray="2,8"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#technical-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-transparent to-[#161616] opacity-60"></div>
    </div>
  );
}
