import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md py-4 px-8 shadow-sm flex justify-between items-center">
      <h1 className="text-xl font-bold text-emerald-800">Raihan</h1>
      <div className="space-x-4">
        <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
        <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
        <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
      </div>
    </nav>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
