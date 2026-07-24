type TopoContoursProps = {
  className?: string;
};

export default function TopoContours({ className }: TopoContoursProps) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <g stroke="url(#topoStroke)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M-50 620 C 250 560, 350 520, 600 500 C 850 480, 950 520, 1250 460" opacity="0.55" />
        <path d="M-50 560 C 230 500, 380 450, 600 430 C 820 410, 970 460, 1250 400" opacity="0.5" />
        <path d="M-50 500 C 220 440, 400 380, 600 360 C 800 340, 990 400, 1250 340" opacity="0.5" />
        <path d="M-50 440 C 210 380, 420 310, 600 290 C 780 270, 1000 340, 1250 280" opacity="0.55" />
        <path d="M-50 380 C 220 320, 430 250, 600 225 C 770 200, 980 270, 1250 215" opacity="0.6" />
        <path d="M-20 320 C 230 250, 440 190, 600 165 C 760 140, 950 195, 1230 150" opacity="0.65" />
        <path d="M40 265 C 250 190, 440 135, 600 112 C 750 90, 900 130, 1180 95" opacity="0.7" />
        <path d="M110 210 C 280 140, 450 92, 600 72 C 730 55, 850 82, 1080 55" opacity="0.75" />
        <path d="M200 155 C 330 100, 460 62, 600 48 C 700 38, 790 52, 970 32" opacity="0.85" />
        <path d="M320 105 C 410 65, 500 38, 600 30 C 670 25, 720 32, 830 18" opacity="0.95" />
      </g>
      <defs>
        <linearGradient id="topoStroke" x1="0" y1="700" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4C6FFF" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
