import Link from "next/link";
import { getTopLevelCategories } from "@/lib/data";
import { InstallPrompt } from "@/components/pwa/install-prompt";

export function Footer() {
  const categories = getTopLevelCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {category.title}
            </Link>
          ))}
        </div>
        <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
          <p>
            &copy; {year} Indians in Belgium. Content is provided for general guidance —
            always verify critical details (visas, fees, hours) with official sources.
          </p>
        </div>
        <div className="mt-4 flex justify-center sm:justify-start">
          <InstallPrompt />
        </div>
      </div>
    </footer>
  );
}
