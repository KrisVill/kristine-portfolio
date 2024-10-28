import React from 'react';

function Contact() {
  return (
    <section className="#Contact">
      <h2>Contact Me</h2>
      <div className="contact-body">
        <div className="contact-pic">
          <img src="kris-contact.avif" alt="kristine-contact" width={'400px'}/>
        </div>
        <div className="contact-info">
          <a href="#gmail">kristinevillanueva@gmail.com</a>
          <a href="#fb">kristine_facebook.com</a>
          <a href="#linkedin">kristvillanueva_linkedIn.com</a>
          <a href="#github">kristinevillanueva_github.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;