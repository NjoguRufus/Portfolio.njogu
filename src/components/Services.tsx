import { motion } from 'framer-motion';
import { Code2, Palette, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building efficient, scalable websites with modern technologies.',
    icon: Code2,
    color: 'blue'
  },
  {
    title: 'Web Design',
    description: 'Crafting clean, responsive designs that look great on any device.',
    icon: Palette,
    color: 'green'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating seamless online shopping experiences for your customers.',
    icon: ShoppingCart,
    color: 'red'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-l from-gray-300 via-gray-400 to-gray-500 rounded-t-3xl rounded-b-3xl overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          My Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white shadow-lg p-8 relative overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 transform rotate-45 bg-gray-100 -translate-y-1/2 translate-x-1/2 w-48 h-48 rounded-lg opacity-60" />
              <div className="relative z-10">
                <div className="mb-4">
                  <service.icon className="w-16 h-16 mx-auto text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}