import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import '../assets/style/section.scss'
import profilePic from '../assets/img/eysantekinsoy1.jpg';

const Section = () => {
  return (
    <div className='profile-container'>
      <h1>Welcome to My Website</h1>
      <p>Hello, I'm Eysan Tekinsoy, a web developer. Passionate about creating awesome websites.</p>
      <div className='profile-picture'>
      <img src={profilePic} alt="Profil Resmi" />
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </div>
  );
}

export default Section;
