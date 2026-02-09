"use client";

import { useEffect } from "react";

const META_PIXEL_ID = "602672666050230";

const PIXEL_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`;

/**
 * Injects Meta (Facebook) Pixel for tracking PageView and conversions.
 * Script is appended to document.head on mount so it runs in global context.
 */
export function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const win = window as Window & { fbq?: () => void };
    if (win.fbq) {
      return;
    }
    const script = document.createElement("script");
    script.id = "meta-pixel";
    script.innerHTML = PIXEL_SCRIPT;
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("meta-pixel");
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
