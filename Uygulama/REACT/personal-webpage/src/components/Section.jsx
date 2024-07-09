import React from 'react';

const Section = () => {
  return (
    <section id="home">
      <h1>Welcome to My Website</h1>
      <p>Hello, I'm Eysan Tekinsoy, a web developer. Passionate about creating awesome websites.</p>
      <img src="eysantekinsoy.jpg" alt="Profile Picture" />
      <div className="icons">
        <a href="#" title="Twitter"><i className="fab fa-twitter fa-xl"></i></a>
        <a href="#" title="Instagram"><i className="fab fa-instagram fa-xl"></i></a>
        <a href="#" title="LinkedIn"><i className="fab fa-linkedin fa-xl"></i></a>
        <a href="#" title="GitHub"><i className="fab fa-github fa-xl"></i></a>
        <a href="#" title="Facebook"><i className="fab fa-facebook fa-xl"></i></a>
      </div>
    </section>
  );
}

export default Section;
