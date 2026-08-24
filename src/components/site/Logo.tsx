import mark from "@/assets/next-mark.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={mark.url}
        alt="NEXT logo amblemi"
        width={44}
        height={45}
        className="h-9 w-auto sm:h-11"
      />
      <div className="leading-none">
        <div
          className={cn(
            "wordmark text-2xl sm:text-3xl",
            tone === "light" ? "text-white" : "text-navy",
          )}
        >
          NEXT
        </div>
        <div
          className={cn(
            "tagline mt-1 text-[7px] sm:text-[8px]",
            tone === "light" ? "text-white/70" : "text-steel",
          )}
        >
          Etkinliklerin Dijital Mimarı
        </div>
      </div>
    </div>
  );
}
