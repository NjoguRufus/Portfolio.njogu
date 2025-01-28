import { motion } from 'framer-motion';
import { sendWhatsAppMessage } from '../utils/whatsapp';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsAppMessage(formData.name, formData.message);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-l from-gray-300 via-gray-400 to-gray-500 rounded-t-3xl rounded-b-3xl overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-2 border-gray-300 p-4 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-2 border-gray-300 p-4 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="relative w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center"
            >
              <span>Send Message on WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}