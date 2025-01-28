import { Github, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-yellow-400">Rufus</span> Njogu
            </h3>
            <p className="mt-2 text-gray-400">Turning ideas into reality</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex space-x-4 mt-8 md:mt-0">
            <a href="https://github.com/NjoguRufus" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition duration-300">
              <Github size={24} />
            </a>
            <a href="mailto:rufusnjogu1@gmail.com" 
               className="text-gray-400 hover:text-white transition duration-300">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rufus-njogu" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rufus Njogu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}