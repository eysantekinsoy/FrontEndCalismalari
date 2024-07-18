// src/components/about.jsx
import React from 'react';
import '../assets/style/about.scss';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
      Welcome to our Recipe Website! Here you can explain various recipes and create wonders in the kitchen. Our goal is to inspire people who love cooking and help others with our recipes.

      Our team consists of professionals from different culinary cultures and regions. We aim to combine new recipes every day and offer you fresh and delicious suggestions.

      If you would like to get more information about our site or give us feedback, please go through the application.
      </p>
      <h1>Contact us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196186.66321336283!2d32.717937674027596!3d39.797645783395716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345ad9f357261%3A0x4b01c691eefd6f1d!2zw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1721225964862!5m2!1str!2str" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default About;
