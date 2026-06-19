import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAL = "#2BE8A5";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  /** Prefills the email subject. */
  subject?: string;
  /** Fires when the trigger is clicked — e.g. to close a parent menu/sheet. */
  onClick?: () => void;
};

const field =
  "w-full rounded-lg bg-white/5 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 outline-none transition-colors focus:border-[var(--teal)] focus:bg-white/[0.07]";

/**
 * Styled CTA that opens a popup request form. On submit it composes an email to
 * info@ximplic.com with the collected fields — no backend needed — then shows a
 * confirmation so the user isn't left wondering whether anything happened.
 * To send server-side instead, replace the mailto in handleSubmit with a fetch() POST.
 */
export default function RequestAccessButton({ className, style, children, subject = "Ximplic — request access", onClick }: Props) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setTimeout(() => setSent(false), 200); // reset after close animation
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const details = String(data.get("details") || "").trim();

    const lines = [`Name: ${name}`, `Work email: ${email}`];
    if (company) lines.push(`Company: ${company}`);
    lines.push("", "Target workloads / platform:", details || "(not provided)");
    const body = lines.join("\n");

    window.location.href = `mailto:info@ximplic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button type="button" className={className} style={style} onClick={onClick}>{children}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content
          style={{ "--teal": TEAL } as React.CSSProperties}
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0c0d10] p-6 md:p-7 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
        >
          <Dialog.Close className="absolute right-4 top-4 text-white/55 hover:text-white transition-colors" aria-label="Close">
            <X size={18} />
          </Dialog.Close>

          {sent ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: `${TEAL}1f`, color: TEAL }}>
                <Check size={22} />
              </div>
              <Dialog.Title className="text-xl font-semibold text-white">Your email is ready to send</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-white/60">
                We've opened a pre-filled message in your email client — just hit send. If nothing opened, write to{" "}
                <a href="mailto:info@ximplic.com" style={{ color: TEAL }}>info@ximplic.com</a> directly. We reply within 2 business days.
              </Dialog.Description>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="mt-6 inline-flex w-full items-center justify-center text-sm font-medium h-11 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-xl font-semibold text-white">Request evaluation</Dialog.Title>
              <Dialog.Description className="mt-1.5 text-sm text-white/60">
                Share your details and target workloads — we'll set up an evaluation under NDA.
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
                <input name="email" required type="email" placeholder="Work email" className={field} autoComplete="email" />
                <input name="company" placeholder="Company (optional)" className={field} autoComplete="organization" />
                <textarea name="details" rows={3} placeholder="Target workloads, models, and platform" className={cn(field, "resize-none")} />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium h-11 rounded-lg text-black transition-transform hover:scale-[1.02] active:scale-95"
                  style={{ background: TEAL }}
                >
                  Send request <ArrowRight size={16} />
                </button>
                <p className="text-center text-xs text-white/55">Under NDA · we reply within 2 business days · no spam</p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
