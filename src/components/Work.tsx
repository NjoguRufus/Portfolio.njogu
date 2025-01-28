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
    description: 'Refresco Bliss is a sleek e-commerce site for browsing and buying a variety of beverages, from whiskeys to sodas.',
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
    description: 'My Netflix Clone is a movie streaming site with a Netflix-inspired design, featuring a landing page, login/signup, and movie playback.',
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