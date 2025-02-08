import { motion } from 'framer-motion';
import GitHubButton from './GitHubButton';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import { Mail } from 'lucide-react';

const EmailButton = () => {
  return (
    <StyledWrapper>
      <button className="btn-github" onClick={() => window.location.href = 'mailto:rufusnjogu1@gmail.com'}>
        <Mail size={16} />
        <span>Email Me</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-github {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    border: none;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    font-weight: 800;
    place-content: center;
    padding: 0.75rem 1rem;
    font-size: 0.825rem;
    line-height: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
      inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    color: #fff;
  }

  .btn-github:hover {
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
      inset 0 0 0 1px rgba(252, 232, 3, 0.08);
    color: #fce803;
    transform: translate(0, -0.25rem);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const projects = [
  {
    title: 'Zenith Hospital',
    description: 'Modern healthcare platform with advanced patient management system.',
    image: 'data:image/svg+xml,' + encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#ffffff"/>
  <path d="M16 6.66667V25.3333" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.66666 16H25.3333" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 16H24M16 8V24" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`),
    url: 'https://zenith-hospital.vercel.app/',
    stats: {
      views: 2800,
      likes: 1300,
      shares: 480
    }
  },
  {
    title: 'Astraronix',
    description: 'A cutting-edge space exploration and technology showcase platform.',
    image: 'https://i.imgur.com/0pC0Ouo.mp4',
    url: 'https://astraronix.vercel.app/',
    stats: {
      views: 2626,
      likes: 1200,
      shares: 450
    }
  },
  {
    title: 'Spirit Haven',
    description: 'Premium liquor store with an elegant catalog and sophisticated shopping experience.',
    image: 'https://i.imgur.com/GV6HTtf.jpg',
    url: 'https://spirit-haven.vercel.app/',
    stats: {
      views: 2100,
      likes: 980,
      shares: 420
    }
  },
  {
    title: 'FoodBridge',
    description: 'An innovative food delivery platform connecting restaurants with customers.',
    image: 'https://i.imgur.com/E2LHsWj.jpg',
    url: 'https://foodbridge-project.vercel.app/home',
    stats: {
      views: 1950,
      likes: 890,
      shares: 380
    }
  },
  {
    title: 'LandNest Properties',
    description: 'Real estate platform showcasing properties with detailed listings.',
    image: 'https://i.imgur.com/krQnIbd.jpg',
    url: 'https://landnestproperties.vercel.app/',
    stats: {
      views: 1850,
      likes: 920,
      shares: 380
    }
  },
  {
    title: 'Key Company',
    description: 'Corporate website with modern design and professional aesthetics.',
    image: 'https://i.imgur.com/inGRYIf.jpg',
    url: 'https://keycompany.vercel.app/',
    stats: {
      views: 1750,
      likes: 890,
      shares: 340
    }
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with beautiful UI and accurate forecasts.',
    image: 'https://i.imgur.com/1uP9fYx.jpg',
    url: 'https://weather-app-eight-hazel-37.vercel.app/',
    stats: {
      views: 1650,
      likes: 850,
      shares: 320
    }
  },
  {
    title: 'Orbit Wayfarer',
    description: 'An immersive travel and adventure booking platform.',
    image: 'https://i.imgur.com/Cxpa1Qs.jpg',
    url: 'https://orbit-wayfarer.vercel.app/',
    stats: {
      views: 1850,
      likes: 920,
      shares: 380
    }
  },
  {
    title: 'Refresco-Bliss',
    description: 'Refresco Bliss is a sleek e-commerce site for browsing and buying a variety of beverages.',
    image: 'https://i.imgur.com/Mqt1xn6.jpg',
    url: 'https://refresco-bliss.vercel.app/',
    stats: {
      views: 1500,
      likes: 750,
      shares: 300
    }
  },
  {
    title: 'Netflix Clone',
    description: 'My Netflix Clone is a movie streaming site with a Netflix-inspired design.',
    image: 'https://i.imgur.com/tl1QLA5.jpg',
    url: 'https://netfl1x-clone-njogu.vercel.app/',
    stats: {
      views: 2100,
      likes: 980,
      shares: 420
    }
  },
  {
    title: 'Key-Automobile',
    description: 'Key Automobile is an e-commerce site showcasing premium cars by brands like Toyota, BMW, and Mercedes.',
    image: 'https://i.imgur.com/a3bOXn8.jpg',
    url: 'https://key-automobile.vercel.app/',
    stats: {
      views: 1750,
      likes: 890,
      shares: 340
    }
  },
  {
    title: 'Key Collection',
    description: 'A modern e-commerce platform for luxury fashion and accessories.',
    image: 'https://i.imgur.com/KpaFGAG.jpg',
    url: '#',
    stats: {
      views: 1300,
      likes: 650,
      shares: 280
    }
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 bg-gradient-to-l from-gray-300 via-gray-400 to-gray-500 rounded-t-3xl rounded-b-3xl overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <GitHubButton />
          <EmailButton />
        </div>
      </div>
    </section>
  );
}