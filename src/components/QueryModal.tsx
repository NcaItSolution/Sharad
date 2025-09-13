import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface QueryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QueryModal: React.FC<QueryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const whatsappMessage = `Hi! My name is ${name}. ${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/916291836498?text=${encodedMessage}`, // ✅ removed unnecessary '+'
        '_blank'
      );
      setName('');
      setMessage('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <MessageCircle className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Have a Query?</h2>
          <p className="text-gray-600">Send us a message on WhatsApp</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-black"
              placeholder="Type your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle size={20} />
            <span>Send to WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueryModal;
