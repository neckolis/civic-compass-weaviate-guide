
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

interface ChatWidgetProps {
  className?: string;
}

export function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{
    content: string;
    isUser: boolean;
  }[]>([
    {
      content: "Hello! I'm your virtual assistant. How can I help you with local government information today?",
      isUser: false
    }
  ]);
  const [userInput, setUserInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message
    setMessages([...messages, { content: userInput, isUser: true }]);
    
    // In a real app, this would call the Weaviate API
    // Simulate response for demo
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          content: "Thank you for your question. I'm searching our government database for the most accurate information. Please note that I'm powered by Weaviate to provide you with precise answers to your local government queries.", 
          isUser: false 
        }
      ]);
    }, 1000);
    
    setUserInput("");
  };

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-government-blue hover:bg-government-blue-light shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-full sm:w-96 max-h-[500px] flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-government-blue text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">Ask about local rules</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-government-blue-light text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "300px" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.isUser
                      ? "bg-government-blue text-white"
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex items-center gap-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about local rules..."
                className="flex-1"
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-government-blue hover:bg-government-blue-light"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Powered by Weaviate
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
