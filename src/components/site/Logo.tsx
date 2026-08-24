import logoWhite from "@/assets/next-logo-white.png.asset.json";
import logoBlack from "@/assets/next-logo-black.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <img
      src={tone === "light" ? logoWhite.url : logoBlack.url}
      alt="NEXT"
      width={716}
      height={149}
      className={cn("h-7 w-auto sm:h-9", className)}
    />
  );
}
