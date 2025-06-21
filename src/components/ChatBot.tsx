
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with scheduling your waste pickup. What questions do you have?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const commonQuestions = [
    "What types of waste do you collect?",
    "How much does pickup cost?",
    "When will my waste be collected?",
    "What areas do you cover?",
    "Do I need to be present during pickup?"
  ];

  const botResponses: { [key: string]: string } = {
    "what types of waste": "We collect various types of waste including plastic, organic waste, e-waste, paper & cardboard, glass, metal, and mixed waste. Each type is handled with appropriate recycling methods.",
    "cost": "Our pickup service starts from ₦2,500 per pickup. The exact cost depends on the waste type, quantity, and your location. You'll see an estimate before confirming your booking.",
    "when": "We typically schedule pickups within 24-48 hours of your request. You can choose your preferred time slot from 8 AM to 6 PM.",
    "areas": "We currently serve major cities in Nigeria including Lagos, Abuja, Port Harcourt, and Kano. We're expanding to more locations regularly!",
    "present": "You don't need to be present during pickup if you provide clear instructions. However, we recommend being available for the first pickup to ensure everything goes smoothly.",
    "schedule": "To schedule a pickup, fill out the form with your contact details, select your waste type, choose a date and time, and provide your address. We'll contact you to confirm!",
    "payment": "Payment can be made via bank transfer, card payment, or cash on delivery. We'll provide payment details after confirming your pickup.",
    "cancel": "You can cancel your pickup up to 4 hours before the scheduled time. Contact us via phone or email to cancel.",
    "recurring": "Yes! You can set up weekly, bi-weekly, or monthly recurring pickups. This is perfect for regular waste management needs."
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default response
    return "I'd be happy to help! For specific questions, you can contact our support team at support@cleancycle.ng or call +234-XXX-XXXX. You can also try asking about waste types, costs, scheduling, or coverage areas.";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(question),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full gradient-green shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40">
          <Card className="h-full shadow-2xl border-0">
            <CardHeader className="bg-primary text-white rounded-t-lg p-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot className="w-5 h-5" />
                <span>CleanCycle Assistant</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 flex flex-col h-full">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.text}</p>
                        {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                  <div className="space-y-1">
                    {commonQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left text-xs p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 h-9 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="gradient-green"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
