import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";

export type LegalKey = "privacy" | "terms" | "kvkk" | null;

export function LegalDialog({ active, onClose }: { active: LegalKey; onClose: () => void }) {
  const { t } = useI18n();
  const entry = active ? t.legal[active] : null;

  return (
    <Dialog open={active !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl text-navy">{entry?.title}</DialogTitle>
          <DialogDescription className="text-xs tracking-[0.16em] uppercase">
            {t.legal.subtitle}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          {entry?.blocks.map((block) => (
            <div key={block.p} className="space-y-2">
              {"h" in block && block.h ? (
                <h3 className="pt-2 text-base font-bold text-navy">{block.h}</h3>
              ) : null}
              <p className="text-sm leading-relaxed text-muted-foreground">{block.p}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
