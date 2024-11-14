import React from 'react';
import box from '../assets/brammis sugarcane Box.png';
import greenish from '../assets/greenish1..png';

function Blog() {
  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden" id="specialty">
      <div className="container mx-auto px-6 relative z-10">
        {/* Flexbox container for title and description */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mb-12">
          {/* This div holds h2 and p */}
          <div className="mb-6 lg:w-1/2">
            <span className="text-4xl font-bold block mb-4 text-green-600">Our Specialty</span>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">Packing in a box made from sugar cane</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
              Packaging made from sugarcane fiber is eco-friendly, biodegradable, and compostable. It reduces environmental impact while providing durable solutions for both hot and cold foods. Choose sugarcane fiber packaging to support sustainability and a greener future.
            </p>
            <p className='font-bold mt-4'>"பசுமை மற்றும் நீண்ட கால நிலைத்தன்மைக்கான வழி கரும்புச்சக்கை பாத்திரங்களே!"</p>
          </div>

          {/* This div holds the image */}
          <div className="flex justify-center lg:w-1/2 mt-6">
            <img src={box} className="sugarcane max-w-full h-auto" alt="Sugarcane Packaging Box" />
          </div>
        </div>
      </div>

      {/* Background image positioned at the bottom */}
      <img src={greenish} className="absolute bottom-0 left-0 w-full h-[400px]" alt="Greenish Background" />
    </section>
  );
}

export default Blog;
