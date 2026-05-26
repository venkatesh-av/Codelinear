import React from 'react';

export function CheckIcon() {
  const gradientId = `checkIconGradient-${React.useId().replace(/:/g, '')}`;

  return (
    <div className="check-icon-wrapper" aria-hidden="true">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="9.5" r="9.26182" fill={`url(#${gradientId})`} />
        <path transform="translate(2.3 2.3)" d="M4.92747 8.85313L3.02765 6.95331C2.92528 6.85094 2.78644 6.79343 2.64166 6.79343C2.49689 6.79343 2.35805 6.85094 2.25568 6.95331C2.05094 7.15805 2.05094 7.49299 2.25568 7.69772L4.54423 10.0138C4.75775 10.2274 5.10267 10.2274 5.3162 10.0138L11.1087 4.22128C11.2111 4.11891 11.2686 3.98007 11.2686 3.8353C11.2686 3.69052 11.2111 3.55168 11.1087 3.44931C11.0064 3.34694 10.8675 3.28943 10.7228 3.28943C10.578 3.28943 10.4391 3.34694 10.3368 3.44931L4.92747 8.85313Z" fill="#E9F4F9" />
        <defs>
          <linearGradient id={gradientId} x1="-14.7431" y1="-22.7132" x2="19.5002" y2="-24.3383" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B4FD" />
            <stop offset="0.815786" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
