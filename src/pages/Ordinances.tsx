
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const Ordinances = () => {
  // This would be populated from an API in a real application
  const ordinances = [
    {
      id: "ord-001",
      title: "Noise Control Ordinance",
      category: "Public Safety",
      date: "January 15, 2025",
      summary: "Regulations regarding acceptable noise levels and quiet hours within city limits."
    },
    {
      id: "ord-002",
      title: "Parking Regulations",
      category: "Transportation",
      date: "February 3, 2025",
      summary: "Rules for street parking, loading zones, and parking restrictions."
    },
    {
      id: "ord-003",
      title: "Building Code Standards",
      category: "Construction",
      date: "March 10, 2025",
      summary: "Required building specifications and safety standards for new construction."
    },
    {
      id: "ord-004",
      title: "Pet Ownership Regulations",
      category: "Public Health",
      date: "March 22, 2025",
      summary: "Rules for keeping domestic animals within city limits, including leash laws and waste removal."
    },
    {
      id: "ord-005",
      title: "Waste Management Ordinance",
      category: "Environmental",
      date: "April 5, 2025",
      summary: "Regulations for trash collection, recycling, and proper waste disposal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: "Local Ordinances", href: "/ordinances" }
          ]}
          className="mb-6"
        />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-government-blue mb-2">Local Ordinances</h1>
            <p className="text-government-gray-dark">
              Browse and search through the complete collection of local rules and regulations.
            </p>
          </div>
          
          <Button className="mt-4 md:mt-0 bg-government-blue hover:bg-government-blue-light">
            <FileText className="mr-2 h-4 w-4" />
            Request Ordinance Clarification
          </Button>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-government-gray-dark" />
              <Input 
                type="search"
                placeholder="Search ordinances..."
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="public-safety">Public Safety</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="environmental">Environmental</SelectItem>
                  <SelectItem value="public-health">Public Health</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="text-government-blue border-government-blue">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
        
        {/* Ordinances List */}
        <div className="space-y-4">
          {ordinances.map((ordinance) => (
            <div 
              key={ordinance.id}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-government-blue hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-government-blue">
                  {ordinance.title}
                </h3>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="text-sm text-government-gray-dark">
                    {ordinance.date}
                  </span>
                  <span className="text-xs bg-government-blue-pale text-government-blue px-3 py-1 rounded-full">
                    {ordinance.category}
                  </span>
                </div>
              </div>
              <p className="text-government-gray-dark mb-4">
                {ordinance.summary}
              </p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="text-government-blue border-government-blue"
                >
                  Read Full Ordinance
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="text-government-blue-light"
                >
                  Download PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-government-blue text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </nav>
        </div>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Ordinances;
