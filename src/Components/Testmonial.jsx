import React from 'react';
import green from "../assets/green.jpg";

function Testimonials() {
  return (
    <section style={{ backgroundColor: "#CDC4F9", backgroundImage: `url(${green})` }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-10 col-xl-8">

            <div className="card rounded-3">
              <div className="card-body py-5">

                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://m.media-amazon.com/images/I/71DlnvFSajL.png"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                    alt="Testimonial"
                  />
                </div>

                <figure className="text-center mb-0 ">
                  <blockquote className="blockquote mb-4 md:text-sm lg:text-base">
                    <p className="whitespace-pre-wrap">
                      <span className="font-italic text-[12px] font-extrabold">
                        தற்காத்துத் தற்கொண்டாற் பேணித் தகைசான்ற<br />
                        சொற்காத்துச் சோர்விலாள் பெண்.
                      </span>
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0 text-right">
                    திருவள்ளுவர்
                  </figcaption>
                </figure>


                <h6>விளக்கம்:</h6>
                <p className='text-[14px]'>
                  தன்னை காத்து தான் கொண்டவர்களை பாதுகாத்து தகுதிக்கு உதாரனமாய் வாய்ச்சொல் காத்து சோர்வில்லாமல் இருபவளே பெண்.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
