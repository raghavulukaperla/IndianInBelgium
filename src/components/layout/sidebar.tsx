import { NavTree } from "./nav-tree";

export function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r px-4 py-6 lg:block">
      <NavTree />
    </aside>
  );
}
