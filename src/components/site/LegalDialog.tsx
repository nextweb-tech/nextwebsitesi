import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { KVKK_TITLE, KvkkContent, PRIVACY_TITLE, PrivacyContent, TERMS_TITLE, TermsContent } from "./legal-content";

export type LegalKey = "privacy" | "terms" | "kvkk" | null;

const MAP: Record<Exclude<LegalKey, null>, { title: string; content: ReactNode }> = {
  privacy: { title: PRIVACY_TITLE, content: <PrivacyContent /> },
  terms: { title: TERMS_TITLE, content: <TermsContent /> },
  kvkk: { title: KVKK_TITLE, content: <KvkkContent /> },
};

export function LegalDialog({
  active,
  onClose,
}: {
  active: LegalKey;
  onClose: () => void;
}) {
  const entry = active ? MAP[active] : null;

  return (
    <Dialog open={active !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl text-navy">{entry?.title}</DialogTitle>
          <DialogDescription className="text-xs tracking-[0.16em] uppercase">
            NEXT — Etkinliklerin Dijital Mimarı
          </DialogDescription>
        </DialogHeader>
        {entry?.content}
      </DialogContent>
    </Dialog>
  );
}
