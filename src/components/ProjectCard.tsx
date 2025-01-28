import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  stats: {
    views: number;
    likes: number;
    shares: number;
  };
}

const ProjectCard = ({ title, description, image, url, stats }: ProjectCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="top-section">
          <div className="border" />
          <div className="media-container">
            {image.endsWith('.mp4') ? (
              <video 
                className="project-media"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={image} alt={title} className="project-media" />
            )}
          </div>
        </div>
        <div className="bottom-section">
          <span className="title">{title}</span>
          <p className="description">{description}</p>
          <div className="row row1">
            <div className="item">
              <span className="big-text">{stats.views}</span>
              <span className="regular-text">Views</span>
            </div>
            <div className="item">
              <span className="big-text">{stats.likes}</span>
              <span className="regular-text">Likes</span>
            </div>
            <div className="item">
              <span className="big-text">{stats.shares}</span>
              <span className="regular-text">Shares</span>
            </div>
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-project"
          >
            <span>View Project</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    border-radius: 20px;
    background: #1b233d;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .top-section {
    height: 200px;
    border-radius: 15px;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    position: relative;
    overflow: hidden;
  }

  .media-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .project-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .card .top-section .border {
    border-bottom-right-radius: 10px;
    height: 30px;
    width: 130px;
    background: #1b233d;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1b233d;
    z-index: 2;
  }

  .card .top-section .border::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #1b233d;
  }

  .card .top-section::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #1b233d;
    z-index: 2;
  }

  .card .bottom-section {
    margin-top: 15px;
    padding: 20px 15px;
  }

  .card .bottom-section .title {
    display: block;
    font-size: 20px;
    font-weight: bolder;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-align: center;
    margin-bottom: 15px;
  }

  .card .bottom-section .row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .card .bottom-section .row .item {
    flex: 30%;
    text-align: center;
    padding: 5px;
    color: rgba(170, 222, 243, 0.721);
  }

  .card .bottom-section .row .item .big-text {
    font-size: 16px;
    display: block;
    font-weight: bold;
    color: white;
  }

  .card .bottom-section .row .item .regular-text {
    font-size: 12px;
    display: block;
    margin-top: 3px;
  }

  .card .bottom-section .row .item:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
  }

  .view-project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 25px;
    padding: 12px 24px;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    color: white;
    border-radius: 100px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .view-project:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(4, 159, 187, 0.2);
  }
`;

export default ProjectCard;