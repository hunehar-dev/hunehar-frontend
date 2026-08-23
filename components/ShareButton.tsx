"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  /** "button" renders the original filled pill button. "link" renders an
   * inline text link with an arrow, matching the donate page's action-link
   * style. */
  variant?: "button" | "link";
}

export default function ShareButton({ variant = "button" }: ShareButtonProps) {
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
      {variant === "link" ? (
        <button
          onClick={handleShare}
          className="mt-auto self-start inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
        >
          Share our mission
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      ) : (
        <Button onClick={handleShare} variant="brand-blue" className="px-5">
          Share Our Mission
        </Button>
      )}

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
              <h4 className="text-lg font-semibold text-brand-blue mb-3">
                Share Hunehar’s Mission
              </h4>

              <textarea
                readOnly
                value={shareText}
                className="w-full h-32 text-sm text-brand-navy border border-brand-border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-brand-blue/50"
              />

              <div className="flex items-center justify-between mt-4">
                <Button onClick={handleCopy} variant="brand-blue">
                  {copied ? "Copied!" : "Copy Text"}
                </Button>

                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-brand-muted hover:text-brand-navy transition"
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
