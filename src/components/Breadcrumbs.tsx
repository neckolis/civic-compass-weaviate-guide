
import { cn } from "@/lib/utils";
import { ChevronRight, HomeIcon } from "lucide-react";

interface BreadcrumbsProps {
  className?: string;
  items: {
    label: string;
    href: string;
  }[];
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm text-government-gray-dark hover:text-government-blue"
          >
            <HomeIcon className="w-4 h-4 mr-2" />
            Home
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-government-gray-dark" />
            {index === items.length - 1 ? (
              <span className="ml-1 text-sm font-medium text-government-blue md:ml-2">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="ml-1 text-sm text-government-gray-dark hover:text-government-blue md:ml-2"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
