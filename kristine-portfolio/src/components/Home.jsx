import React from 'react';

function Home() {
  return (
    <section className="#Home">
        <div className="home-content">
            <div className="left">   
                <h3>Hi! There I'm</h3>
                    <h1>Kristine F. Villanueva</h1>
                <p>
                    3rd year student in Information Technology Student at <br />
                    Western Institute of Technology
                </p>
                <button className="contact-button">
                    <a href="#Contact">Contact Me</a>
                </button>
            </div>
            <div className="right">
                <img src="kris.jpg" alt="Kristine" width='400px'/>
            </div>            
        </div>
    </section>
  );
}

export default Home;
