import React from 'react';

export default function Logo({ size = 40 }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#AAAAAA"/>
        </linearGradient>
      </defs>
      <rect x="18" y="20" width="45" height="14" rx="5" fill="url(#grad-dark)"/>
      <path d="M46 20 L62 34 L50 90 L36 90 L48 40 L32 34 Z" fill="url(#grad-dark)" />
      <circle cx="62" cy="60" r="26" fill="#CCCCCC"/>
      <circle cx="62" cy="60" r="15" fill="#000000"/>
      <rect x="62" y="46" width="28" height="12" rx="2" fill="#000000"/>
      <rect x="62" y="62" width="28" height="12" rx="2" fill="#000000"/>
      <circle cx="62" cy="60" r="7" fill="rgba(255,255,255,0.15)"/>
    </svg>
  );
}
