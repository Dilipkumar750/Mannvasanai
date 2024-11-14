import React from 'react';
import poster from "../assets/poster.jpg"; // Using the 'poster.jpg' image
import background from "../assets/background2.png"; // Background image

const HomePage = () => {
  return (
    <div 
      className="flex flex-col justify-between p-6 h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${background})` }}  // Setting the background image
    >

      {/* Top Text Section */}
      <div className="flex justify-between items-center w-full mt-8 px-6 space-x-4">
        <h4 className="text-lg md:text-2xl font-semibold text-white">உணவு!</h4>
        <h4 className="text-lg md:text-2xl font-semibold text-white">உணர்வு!!</h4>
        <h4 className="text-lg md:text-2xl font-semibold text-white">உயர்வு!!!</h4>
      </div>

      {/* Flex Container for Image and Text */}
      <div className="flex justify-between items-center mt-8 w-full">

        {/* Image Section */}
        <div className="flex justify-center w-1/2">
          <img
            src={poster} // Poster image used here
            className="rounded-lg shadow-2xl w-full max-w-sm h-auto"
            alt="Poster"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center text-white px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            கோவை மண்வாசனை இயற்கை உணவகம்
          </h2>

          {/* Thirukkural and Explanation */}
          <div className="text-sm md:text-base text-gray-800 mx-4 md:mx-20">
            <p className="text-xl text-gray-900">
              தற்காத்துத் தற்கொண்டாற் பேணித் தகைசான்ற <br />
              சொற்காத்துச் சோர்விலாள் பெண்.
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-900">
              <strong>திருவள்ளுவர்</strong>
            </p>

            {/* Explanation */}
            <div className="mt-4 text-base text-gray-700">
              <p>
                விளக்கம்: தன்னை காத்து தான் கொண்டவர்களை பாதுகாத்து தகுதிக்கு உதாரனமாய் வாய்ச்சொல் காத்து சோர்வில்லாமல் இருப்பவளே பெண்.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;
