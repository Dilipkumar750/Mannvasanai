import React from 'react';
import nammalvar from "../assets/nammalvar.jpeg";
import ural from "../assets/ural.jpeg";
import green from "../assets/background1.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-screen py-8" style={{ backgroundImage: `url(${green})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Title Section */}
      <h1 className="text-center text-3xl md:text-4xl text-white font-bold mb-8">
        உலகின் முதல் உணவு விஞ்ஞானி <span className='text-black'>அம்மா..</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full p-6 gap-6 items-center">
        {/* Nammalvar Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <img 
            src={nammalvar} 
            alt="Nammalvar" 
            className="w-60 h-60 sm:w-80 sm:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-lg mx-auto text-center">
          <p className="text-gray-800 text-xs sm:text-sm md:text-base" data-aos="fade-down">
            சிறு சிறு தானிய முத்துக்கள் சுமந்தவள்,<br/>
            சிறப்புமிக்க செம்மையால் சிரித்தவள்.<br/>
            விரல் நுனியில் வியாபாரம் விறுவிறுப்பாய்,<br/>
            சிறுதானியத்தை உண்ணும் வழியை திறந்தவள்.<br/><br/>

            வாழ்வின் சுவைகளில் ஆரோக்கியம் தேடும்,<br/>
            வாய்ப்பினை விதையாய் மனதில் விதைக்கும்.<br/>
            அவள் முயற்சியில் உயிர்ப்பை கண்டு,<br/>
            ஊருணி தாண்டி உலகினை அலையும்.<br/><br/>

            உடம்பை உன்னித்து ஆரோக்கியம் வளர்க்க,<br/>
            சிறுதானியத்தின் சுவை காண துடிக்கும்.<br/>
            தன் வீடு கைவினையில் வணிகம் கொண்டு,<br/>
            தமிழச்சியின் திருப்பம் காட்டும் தேசம்!
          </p>
        </div>

        {/* Ural Image */}
        <div className="flex justify-center" data-aos="fade-left">
          <img 
            src={ural} 
            alt="Ural" 
            className="w-60 h-60 sm:w-80 sm:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
