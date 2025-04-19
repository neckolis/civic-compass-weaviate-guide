
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("w-full bg-government-blue text-white py-8", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Civic Compass</h3>
            <p className="text-gray-200 text-sm">
              Your trusted source for local government information, rules, ordinances, and public data.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/ordinances" className="text-gray-200 hover:text-white text-sm">Local Ordinances</a></li>
              <li><a href="/permits" className="text-gray-200 hover:text-white text-sm">Permits & Licenses</a></li>
              <li><a href="/data" className="text-gray-200 hover:text-white text-sm">Public Data</a></li>
              <li><a href="/contact" className="text-gray-200 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-200 hover:text-white text-sm">FAQ</a></li>
              <li><a href="/accessibility" className="text-gray-200 hover:text-white text-sm">Accessibility</a></li>
              <li><a href="/privacy" className="text-gray-200 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-200 hover:text-white text-sm">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-200 space-y-2">
              <p>City Hall</p>
              <p>123 Government Street</p>
              <p>Anytown, USA 12345</p>
              <p className="mt-2">
                <a href="tel:+1-555-123-4567" className="hover:text-white">Phone: (555) 123-4567</a>
              </p>
              <p>
                <a href="mailto:info@civiccompass.gov" className="hover:text-white">Email: info@civiccompass.gov</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Civic Compass. All rights reserved.</p>
          <p className="mt-1">Chat assistance powered by Weaviate</p>
        </div>
      </div>
    </footer>
  );
}
