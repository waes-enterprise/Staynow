"use client";

import Link from "next/link";
import { Home, Building, Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <div className="hidden">
      {/* Minimal sidebar - hidden on public pages */}
      <nav className="flex flex-col gap-1 p-2">
        <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent text-sm">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link href="/lodges" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent text-sm">
          <Building className="w-4 h-4" />
          <span>Lodges</span>
        </Link>
      </nav>
    </div>
  );
}
