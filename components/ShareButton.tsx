"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ShareButton() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `Hunehar is a registered NGO in Pakistan providing free education to underprivileged children through a sponsorship model.

Read more about them and how you can help and contribute towards an educated Pakistan!
https://hunehar.org`;

  const handleShare = async () => {
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: "Support Hunehar Welfare School",
          text: shareText,
          url: "https://hunehar.org",
        });
      } catch {
        // user cancelled
      }
      return;
    }
    setOpen(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close modal on Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={handleShare}
        className="text-sm font-medium text-white bg-[#206FAC] px-5 py-2 rounded-full hover:opacity-90 transition"
      >
        Share Our Mission
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setOpen(false)} // click outside closes
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative"
              onClick={(e) => e.stopPropagation()} // prevent closing on modal click
            >
              <h4 className="text-lg font-semibold text-[#206FAC] mb-3">
                Share Hunehar’s Mission
              </h4>

              <textarea
                readOnly
                value={shareText}
                className="w-full h-32 text-sm text-gray-700 border rounded-lg p-3 resize-none focus:outline-none"
              />

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handleCopy}
                  className="text-sm px-4 py-2 rounded-full bg-[#206FAC] text-white hover:opacity-90 transition"
                >
                  {copied ? "Copied!" : "Copy Text"}
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-500 hover:text-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
