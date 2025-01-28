import { motion } from 'framer-motion';
import styled from 'styled-components';

const skills = [
  'React - Building dynamic, responsive UIs',
  'Vite - Fast, optimized development and build setup',
  'JavaScript - Creating interactive, scalable web apps',
  'HTML & CSS - Crafting semantic, accessible web designs',
  'Tailwind CSS - Styling with utility-first CSS',
  'Bootstrap - Developing mobile-first, responsive layouts'
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card">
          <div className="front">
            <div className="card-top">
              <p className="card-top-para">Profile</p>
            </div>
            <div className="profile-image">
              <img 
                src="https://i.imgur.com/kc7hAhj.jpg" 
                alt="Rufus Njogu"
                className="profile-pic"
              />
            </div>
            <p className="heading">Rufus Njogu</p>
            <p className="title">CEO Astraronix</p>
          </div>
          <div className="back">
            <p className="heading">About Me</p>
            <p className="description">
              Innovative web developer and tech entrepreneur leading Astraronix. 
              Passionate about creating cutting-edge digital experiences and 
              pushing the boundaries of web technology.
            </p>
            <div className="icons">
              <a href="https://instagram.com/rufus_njogu" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://twitter.com/rufus_njogu" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
              <a href="https://wa.me/254714748299" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
              <a href="https://github.com/NjoguRufus" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    height: 294px;
    width: 240px;
    color: #fff;
    perspective: 800px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card {
    width: 100%;
    height: 100%;
    background: #111827; /* bg-gray-900 */
    border-radius: 2rem;
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    position: absolute;
    width: 50%;
    background-color: transparent;
    border: 2px solid #374151; /* bg-gray-700 */
    top: 0;
    border-top: none;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
  }

  .card-top-para {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  .container:hover > .card {
    cursor: pointer;
    transform: rotateX(180deg) rotateZ(-180deg);
  }

  .front,
  .back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px;
  }

  .back {
    background: #111827; /* bg-gray-900 */
    transform: rotateX(180deg) rotateZ(-180deg);
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #374151; /* bg-gray-700 */
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }

  .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .profile-image:hover .profile-pic {
    transform: scale(1.1);
  }

  .heading {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #fbbf24; /* text-yellow-400 */
    text-shadow: 0 0 5px rgba(251, 191, 36, 0.3);
  }

  .description {
    font-size: 14px;
    text-align: center;
    color: #9ca3af; /* text-gray-400 */
    line-height: 1.4;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 10px;
  }

  .icons a {
    color: #9ca3af; /* text-gray-400 */
    transition: all 0.3s ease;
  }

  .icons a:hover {
    color: #fff;
    transform: scale(1.2);
  }
`;

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-l from-gray-300 via-gray-400 to-gray-500 rounded-t-3xl rounded-b-3xl overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 mb-8 md:mb-0"
        >
          <Card />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-yellow-300 mb-6 hover:text-orange-500 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a passionate web designer and developer, I merge creativity and technology to craft sleek, 
            functional websites that push boundaries. My mission? To turn your ideas into reality with a futuristic edge.
          </p>
          
          <div className="mt-8 space-y-6">
            <p className="text-xl text-yellow-400 font-semibold">Skills & Expertise:</p>
            <ul className="list-none text-lg text-black space-y-4">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <svg className="w-6 h-6 text-orange-500 mr-3 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" />
                  </svg>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { About }