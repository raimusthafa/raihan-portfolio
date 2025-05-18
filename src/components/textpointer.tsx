import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="pt-6 text-2xl font-bold tracking-tight md:text-4xl">
      The best way to grow is to
      <PointerHighlight>
        <span>collaborate</span>
      </PointerHighlight>
    </div>
  );
}
