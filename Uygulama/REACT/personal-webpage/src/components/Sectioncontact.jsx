import React from 'react';
import '../assets/style/sectioncontact.scss'

const SectionContact = () => {
  return (
    <div>
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <div>
            <label htmlFor="userName">Name:</label>
            <input id="userName" name="userName" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" cols="30" rows="5" required></textarea>
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default SectionContact;
