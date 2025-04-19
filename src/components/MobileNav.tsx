
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("md:hidden", className)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <svg 
                width="24" 
                height="24" 
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
              <span className="text-xl font-bold text-government-blue">Civic Compass</span>
            </a>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          <nav className="flex flex-col gap-1">
            <a 
              href="/ordinances" 
              className="px-4 py-3 hover:bg-government-blue-pale text-government-blue rounded-md font-medium flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>
              Local Ordinances
            </a>
            <a 
              href="/permits" 
              className="px-4 py-3 hover:bg-government-blue-pale text-government-blue rounded-md font-medium flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-signature"><path d="M8 2a2 2 0 0 0-2 2"/><path d="M16 2a2 2 0 0 1 2 2"/><path d="M10 2h4"/><path d="M5 8.5V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.5"/><path d="M10 14a.78.78 0 0 1-.5-.2.68.68 0 0 1-.2-.53c0-.53.45-1.27 1.34-1.27.5 0 .95.22 1.33.5.96.73 1.33 1.67 1.33 2.67 0 1.16-1.39 1.84-2.17 1.84-.87 0-1.6-.73-1.6-1.34 0-.37.23-.7.43-.9"/><path d="M11 14h1"/></svg>
              Permits & Licenses
            </a>
            <a 
              href="/data" 
              className="px-4 py-3 hover:bg-government-blue-pale text-government-blue rounded-md font-medium flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              Public Data
            </a>
            <a 
              href="/contact" 
              className="px-4 py-3 hover:bg-government-blue-pale text-government-blue rounded-md font-medium flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Contact Government
            </a>
          </nav>
          
          <div className="border-t border-gray-200 pt-4 mt-2">
            <h3 className="px-4 text-sm font-semibold text-government-gray-dark mb-2">
              Quick Links
            </h3>
            <div className="flex flex-col gap-1 text-sm">
              <a href="/faq" className="px-4 py-2 hover:bg-government-blue-pale text-government-blue rounded-md">
                Frequently Asked Questions
              </a>
              <a href="/events" className="px-4 py-2 hover:bg-government-blue-pale text-government-blue rounded-md">
                Upcoming Events
              </a>
              <a href="/payments" className="px-4 py-2 hover:bg-government-blue-pale text-government-blue rounded-md">
                Online Payments
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
