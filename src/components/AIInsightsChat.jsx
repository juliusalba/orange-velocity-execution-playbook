import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, TrendingUp, DollarSign, BarChart3, Globe } from 'lucide-react';
import { perplexityAPI } from '../services/api';

const AIInsightsChat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm your AI Market Intelligence assistant. I can help you with:\n\n• **Ad Platform Insights** - Facebook, Google, TikTok, LinkedIn strategies\n• **Market Trends** - Philippine advertising market analysis\n• **Economic Data** - GDP, consumer spending, digital adoption\n• **Campaign Optimization** - ROI improvement, targeting, creative best practices\n• **Competitor Analysis** - Industry benchmarks and competitive positioning\n\nWhat would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    {
      icon: <TrendingUp size={16} />,
      question: "What are the current ad spending trends in the Philippines?",
      category: "Market Trends"
    },
    {
      icon: <DollarSign size={16} />,
      question: "What's the average ROI for Facebook ads in Southeast Asia?",
      category: "Ad Performance"
    },
    {
      icon: <BarChart3 size={16} />,
      question: "Compare TikTok vs Facebook ad performance for e-commerce",
      category: "Platform Comparison"
    },
    {
      icon: <Globe size={16} />,
      question: "What economic factors affect digital ad spending in PH?",
      category: "Economics"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const systemPrompt = `You are an expert AI assistant specializing in advertising, digital marketing, market intelligence, and economics, with a focus on the Philippine market and Southeast Asia.

Your knowledge areas include:
- Ad platforms: Facebook/Meta, Google Ads, TikTok, LinkedIn, YouTube
- Market trends and consumer behavior in Philippines
- Economic indicators affecting advertising (GDP, consumer spending, digital adoption)
- Campaign optimization strategies (targeting, creative, bidding)
- ROI analysis and performance benchmarks
- Competitor analysis and industry standards

Provide accurate, data-driven insights with references to credible sources when possible. Be concise but comprehensive. Format responses with clear structure using markdown.`;

      const response = await perplexityAPI.chat(input, systemPrompt);

      const assistantMessage = {
        role: 'assistant',
        content: response.answer || response.content || "I apologize, but I couldn't generate a response. Please try again.",
        sources: response.sources || [],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      
      const errorMessage = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble accessing my knowledge base right now. This could be due to:\n\n• API configuration issues\n• Network connectivity\n• Rate limiting\n\nPlease check your Perplexity API key in System Status or try again in a moment.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <div className="ai-insights-chat">
      <div className="chat-header">
        <div className="chat-title">
          <Sparkles className="chat-icon" size={24} />
          <div>
            <h3>AI Market Insights</h3>
            <p>Powered by Perplexity AI • Real-time market intelligence</p>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, idx) => (
          <div key={idx} className={`chat-message ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'assistant' ? (
                <Bot size={20} />
              ) : (
                <User size={20} />
              )}
            </div>
            <div className="message-content">
              <div className="message-text">
                {message.content.split('\n').map((line, i) => {
                  if (line.startsWith('• **')) {
                    const [label, ...rest] = line.replace('• **', '').split('**');
                    return (
                      <div key={i} className="message-bullet">
                        <strong>{label}</strong>{rest.join('')}
                      </div>
                    );
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <strong key={i}>{line.replace(/\*\*/g, '')}</strong>;
                  }
                  if (line.startsWith('###')) {
                    return <h4 key={i}>{line.replace('###', '')}</h4>;
                  }
                  return line ? <p key={i}>{line}</p> : <br key={i} />;
                })}
              </div>
              {message.sources && message.sources.length > 0 && (
                <div className="message-sources">
                  <strong>Sources:</strong>
                  <ul>
                    {message.sources.map((source, i) => (
                      <li key={i}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.title || source.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="message-timestamp">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="chat-message assistant">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="suggested-questions">
          <p className="suggested-label">Suggested questions:</p>
          <div className="suggested-grid">
            {suggestedQuestions.map((item, idx) => (
              <button
                key={idx}
                className="suggested-question-btn"
                onClick={() => handleSuggestedQuestion(item.question)}
              >
                {item.icon}
                <div>
                  <div className="suggested-category">{item.category}</div>
                  <div className="suggested-text">{item.question}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about market trends, ad strategies, economics..."
          className="chat-input"
          disabled={loading}
        />
        <button
          type="submit"
          className="chat-send-btn"
          disabled={!input.trim() || loading}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default AIInsightsChat;
