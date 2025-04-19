
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Would typically connect to search API
  };

  return (
    <header className={cn("w-full bg-white shadow-sm", className)}>
      <div className="container mx-auto py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="flex items-center gap-2">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-government-blue"
              >
                <path 
                  d="M12 2L2 8L12 14L22 8L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M2 14L12 20L22 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
              <h1 className="text-xl md:text-2xl font-bold text-government-blue">Civic Compass</h1>
            </a>
            <MobileNav className="md:hidden" />
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-3xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for rules, permits, or ask a question..."
                className="pl-10 pr-4 py-2 w-full border-government-gray shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-government-gray-dark" />
              <Button 
                type="submit" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-government-blue hover:bg-government-blue-light"
                size="sm"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-4">
            <li>
              <a 
                href="/ordinances" 
                className="px-4 py-2 text-government-blue hover:bg-government-blue-pale rounded-md font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>
                Local Ordinances
              </a>
            </li>
            <li>
              <a 
                href="/permits" 
                className="px-4 py-2 text-government-blue hover:bg-government-blue-pale rounded-md font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-signature"><path d="M8 2a2 2 0 0 0-2 2"/><path d="M16 2a2 2 0 0 1 2 2"/><path d="M10 2h4"/><path d="M5 8.5V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.5"/><path d="M10 14a.78.78 0 0 1-.5-.2.68.68 0 0 1-.2-.53c0-.53.45-1.27 1.34-1.27.5 0 .95.22 1.33.5.96.73 1.33 1.67 1.33 2.67 0 1.16-1.39 1.84-2.17 1.84-.87 0-1.6-.73-1.6-1.34 0-.37.23-.7.43-.9"/><path d="M11 14h1"/></svg>
                Permits & Licenses
              </a>
            </li>
            <li>
              <a 
                href="/data" 
                className="px-4 py-2 text-government-blue hover:bg-government-blue-pale rounded-md font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                Public Data
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="px-4 py-2 text-government-blue hover:bg-government-blue-pale rounded-md font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Contact Government
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
