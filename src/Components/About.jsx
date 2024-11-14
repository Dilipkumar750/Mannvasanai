import React from 'react';
import about from '../assets/about_1.png';

function AboutUs() {
  return (
    <section className="bg-02" id="about-us">
      <div className="shape-02" />
      <div className="shape-03" />
      <div className="shape-04" />
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Image Section */}
          <div className="col-md-6 col-sm-12 text-center mb-2 mb-md-0 d-flex justify-content-center">
            <div className="wrapper">
              <div className="image " data-aos="fade-left">
                <img src={about} alt="About Us" className="img-fluid " />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className="col-md-6 col-sm-12 d-flex flex-column justify-content-center"
            style={{ textAlign: 'center' }}
          >
            <div className="content">
              <span className='text-green-500'
                style={{
                  display: 'block',
                  fontSize: '40px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  
                }}
              >
                About
              </span>
              <h2 className="mb-4 text-green-500">
                Food Is an Important Part of a Balanced Diet
              </h2>
              <p className="mb-4">
                Discover the Essence of Tamil Food Culture. In a world of fast food and modern diets, we invite you to explore the rich tapestry of Tamil cuisine—a heritage that spans centuries. Our mission: To revive forgotten flavors, celebrate local ingredients, and honor the wisdom of our ancestors.
              </p>
              <h4 className="mb-3 text-green-500">Health and Harmony:</h4>
              <p>
                Tamil food isn’t just about taste; it’s about holistic well-being. Explore dishes that balance flavors, boost immunity, and connect mind, body, and soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
