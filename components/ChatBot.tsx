'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const faqs = [
  { 
    question: "What are your opening hours?", 
    answer: "We are open Monday to Friday, 9:00 AM - 6:00 PM, and Saturdays 10:00 AM - 2:00 PM. We are closed on Sundays.",
    keywords: ['hour', 'time', 'open', 'when', 'close', 'saturday', 'monday', 'friday', 'weekend', 'day', 'schedule']
  },
  { 
    question: "Where is the clinic located?", 
    answer: "Our clinic is located at 123 Dental St, Wellness City. We have ample parking available for our patients.",
    keywords: ['location', 'where', 'address', 'place', 'map', 'direction', 'parking', 'near', 'city', 'area']
  },
  { 
    question: "How do I book an appointment?", 
    answer: "You can book an appointment directly through our website form on the home page or by clicking the WhatsApp button for a faster response!",
    keywords: ['book', 'appointment', 'schedule', 'visit', 'doctor', 'meet', 'checkup', 'slot', 'consultation']
  },
  { 
    question: "Do you accept dental insurance?", 
    answer: "Yes, we accept most major dental insurance providers. Please bring your insurance card during your first visit so we can verify coverage.",
    keywords: ['insurance', 'pay', 'cost', 'price', 'card', 'coverage', 'bill', 'money', 'charge', 'expensive', 'fee']
  },
  { 
    question: "Should I eat before my procedure?", 
    answer: "For most routine procedures, a light meal is fine. However, if you are undergoing sedation, please fast for at least 6-8 hours. Please check your specific pre-op instructions.",
    keywords: ['eat', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'hungry', 'procedure', 'surgery', 'fast', 'fasting']
  },
  { 
    question: "What if I have an emergency?", 
    answer: "If you have a dental emergency (like a knocked-out tooth or severe pain), please call us immediately. We prioritize emergency cases.",
    keywords: ['emergency', 'pain', 'hurt', 'broke', 'toothache', 'urgent', 'bleeding', 'accident', 'help']
  },
  { 
    question: "How often should I visit?", 
    answer: "We recommend a professional cleaning and checkup every 6 months to keep your smile healthy and catch any issues early.",
    keywords: ['often', 'visit', 'cleaning', 'clean', 'checkup', 'regular', 'months', 'year', 'routine']
  },
];


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<{ text: string, isBot: boolean }[]>([
    { text: "Hello! I'm your BrightSmile assistant. How can I help you today? You can ask about our hours, location, or how to book an appointment.", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const processResponse = (text: string) => {
    const input = text.toLowerCase();
    let bestMatch = faqs.find(faq => 
      faq.keywords.some(keyword => input.includes(keyword))
    );

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (bestMatch) {
        setMessages(prev => [...prev, { text: bestMatch.answer, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { 
          text: "I'm sorry, I didn't quite get that. Could you please rephrase your question? You can ask about our hours, location, or insurance.", 
          isBot: true 
        }]);
      }
    }, 1000);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim()) return;

    const text = userInput;
    setMessages(prev => [...prev, { text, isBot: false }]);
    setUserInput('');
    processResponse(text);
  };

  const handleFaqClick = (faq: typeof faqs[0]) => {
    setMessages(prev => [...prev, { text: faq.question, isBot: false }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: faq.answer, isBot: true }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[600px] w-[400px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 animate-in slide-in-from-bottom-5 duration-300 max-sm:w-[calc(100vw-64px)]">
          {/* Header */}
          <div className="bg-primary p-6 text-white shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/20 p-1 ring-1 ring-white/30">
                  <Image src="/chatBot.png" alt="Bot" fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">BrightSmile Bot</h3>
                  <p className="text-xs text-white/80">Online | Ready to help</p>
                </div>

              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/10"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-grow overflow-hidden flex flex-col">
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-primary text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-gray-100 px-4 py-4">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]" />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input and FAQs */}
            <div className="border-t border-gray-100 bg-gray-50/50">
              {/* Horizontal Chip View for FAQs */}
              <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide no-scrollbar">
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleFaqClick(faq)}
                    disabled={isTyping}
                    className="whitespace-nowrap rounded-full border border-primary/20 bg-white px-4 py-1.5 text-[11px] font-semibold text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all shadow-sm shrink-0"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2 p-4 pt-0">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-grow rounded-xl border-gray-200 bg-white px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none shadow-inner"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!userInput.trim() || isTyping}
                  className="rounded-xl bg-primary p-2 text-white shadow-md hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      )}


      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-gray-100 text-gray-500' : 'bg-primary ring-4 ring-primary/10'
        }`}
      >
        {isOpen ? (
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative h-10 w-10">
            <Image src="/chatBot.png" alt="Chat" fill className="object-contain p-2" />
          </div>
        )}
      </button>

    </div>
  );
}
