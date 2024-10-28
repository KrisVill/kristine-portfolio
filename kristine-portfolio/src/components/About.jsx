import React from 'react';

function About() {
  return (
    <section className="#About">
        <div className="about-content">
            <div className="about-left">
                <img src="kris-about.jpg" alt="Kristine" width={'350px'}/>
            </div>
            <div className="about-right">
                    <h2>About Me</h2>
                <p>
                    As a dedicated web developer, I'm passionate about creating visually stunning and  <br /> 
                    functionally robust websites. With a strong foundation in HTML, CSS, JavaScript, and  <br />
                    popular frameworks like React and Vue.js, I'm committed to delivering exceptional  <br />
                    user experiences.<br /> <br />
                    Let's build something extraordinary together!"
                </p>               
            </div>
        </div>
    </section>
  );
}

export default About;