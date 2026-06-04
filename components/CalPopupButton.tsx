"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

export default function CalPopupButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!calLink) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#2d7a56" } },
      });
    })();
  }, []);

  if (!calLink) return null;

  return (
    <button data-cal-link={calLink} className={className}>
      {children}
    </button>
  );
}
