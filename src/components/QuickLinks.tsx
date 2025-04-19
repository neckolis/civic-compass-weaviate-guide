
import { cn } from "@/lib/utils";
import { 
  Building2, Calendar, Car, FileText, HandCoins, 
  HomeIcon, Info, Map, ShieldCheck 
} from "lucide-react";

interface QuickLinksProps {
  className?: string;
}

export function QuickLinks({ className }: QuickLinksProps) {
  const quickLinks = [
    {
      title: "Building Permits",
      description: "Apply for construction and renovation permits",
      icon: Building2,
      href: "/permits/building"
    },
    {
      title: "Parking Regulations",
      description: "Street parking rules and restrictions",
      icon: Car,
      href: "/ordinances/parking"
    },
    {
      title: "Property Taxes",
      description: "Payment information and deadlines",
      icon: HomeIcon,
      href: "/taxes"
    },
    {
      title: "Noise Ordinances",
      description: "Rules regarding noise levels and quiet hours",
      icon: Info,
      href: "/ordinances/noise"
    },
    {
      title: "Public Events",
      description: "Upcoming community gatherings and meetings",
      icon: Calendar,
      href: "/events"
    },
    {
      title: "Zoning Maps",
      description: "Land use regulations and districts",
      icon: Map,
      href: "/zoning"
    },
    {
      title: "Waste Collection",
      description: "Trash and recycling schedules",
      icon: ShieldCheck,
      href: "/services/waste"
    },
    {
      title: "Business Licenses",
      description: "Applications for local businesses",
      icon: FileText,
      href: "/permits/business"
    },
    {
      title: "Financial Assistance",
      description: "Programs for residents in need",
      icon: HandCoins,
      href: "/assistance"
    }
  ];

  return (
    <section className={cn("w-full py-12", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-government-blue mb-8 text-center">
          Quick Links to Popular Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-government-blue-pale p-3 rounded-full text-government-blue">
                  <link.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-government-blue group-hover:text-government-blue-light mb-1">
                    {link.title}
                  </h3>
                  <p className="text-government-gray-dark text-sm">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
