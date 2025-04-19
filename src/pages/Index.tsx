
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinks } from "@/components/QuickLinks";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { ArrowRight, FileText, GraduationCap, LandPlot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Featured Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-government-blue mb-8 text-center">
              Government Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-government-blue-pale p-2 w-fit rounded-md mb-2">
                    <FileText className="h-5 w-5 text-government-blue" />
                  </div>
                  <CardTitle className="text-government-blue">Document Services</CardTitle>
                  <CardDescription>Access and submit official forms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Birth certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Property records</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Permit applications</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full text-government-blue border-government-blue">
                    View Documents
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-government-blue-pale p-2 w-fit rounded-md mb-2">
                    <LandPlot className="h-5 w-5 text-government-blue" />
                  </div>
                  <CardTitle className="text-government-blue">Zoning & Planning</CardTitle>
                  <CardDescription>Land use regulations and planning</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Zoning maps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Building codes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Property development</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full text-government-blue border-government-blue">
                    View Zoning Info
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-government-blue-pale p-2 w-fit rounded-md mb-2">
                    <GraduationCap className="h-5 w-5 text-government-blue" />
                  </div>
                  <CardTitle className="text-government-blue">Community Education</CardTitle>
                  <CardDescription>Learn about local government</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Citizen workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Civic participation guides</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-government-blue-light" />
                      <span className="text-sm">Educational resources</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full text-government-blue border-government-blue">
                    View Programs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <QuickLinks />
        
        {/* News & Announcements */}
        <section className="py-12 bg-government-blue-pale">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-government-blue mb-8 text-center">
              Latest News & Announcements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 bg-government-gray"></div>
                  <div className="p-4">
                    <div className="text-sm text-government-gray-dark mb-2">April 15, 2025</div>
                    <h3 className="font-semibold text-lg text-government-blue mb-2">
                      New Recycling Program Launches Next Month
                    </h3>
                    <p className="text-government-gray-dark text-sm mb-4">
                      Learn about changes to the city's recycling program and how it affects your neighborhood.
                    </p>
                    <a href="/news/1" className="text-government-blue-light hover:underline text-sm font-medium inline-flex items-center">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
