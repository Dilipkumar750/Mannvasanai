import React from 'react';
import organic from "../assets/organic.jpg";

const Organic = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${organic})`, // Background image
        }}
      >
        <div className="w-full max-w-3xl p-4 rounded-lg shadow-md text-center font-bold">
          <p className="text-lg md:text-sm font-bold mb-4">
            இயற்கை அங்காடிகளில் விலை அதிகம் என்பது மக்களிடையே பொதுவான, பரவலான கருத்தாக இருக்கிறது.
            ஆனால் பொருட்களின் பயன்பாடு மக்களிடையே அதிகமாகும் போதுதான், விலை என்பது குறையும்.
          </p>
          <p className="text-lg md:text-sm font-bold mb-4">
            உதாரணமாக கைபேசி வந்த புதிதில் உள்வரும் அழைப்புகளுக்கே நிமிடத்திற்கு அதிக தொகை
            ரூ.16 வரை கொடுத்தோம். ஆனால் <em>consumption</em> அதிகமாகும் போது
            (இன்று cell phone பயன்படுத்தாதவர்களே இல்லை எனலாம்), அதாவது பயன்பாடு
            அதிகரித்த பின், பைசா கணக்கீடு என்பது கைபேசி கட்டணத்தில் கடைபிடிக்கப்படுகிறது.
          </p>
          <p className="text-lg md:text-sm font-bold mb-4">
            அது போல் ஒவ்வொரு இயற்கை அங்காடிகளிலும் பயன்பாட்டாளர்கள் அதிகரிக்கும்
            போதுதான் விலையும் குறையும். 100 கிலோ தக்காளிக்குக் கொடுக்கும்
            வண்டி வாடகையை 10-20 கிலோவிற்குக் கொடுக்கும் போது கடைக்காரர்கள் குறைந்த
            அளவு பொருட்களுடன் சேர்க்கும் போது <em>cost</em> அதிகமாகிறது.
            அதிகமான வாடிக்கையாளர்கள் சேரும்போது விலை குறையும்.
          </p>
          <p className="text-lg md:text-sm font-bold">
            அதனால் பூச்சிக்கொல்லி எனும் நஞ்சில்லா, இயற்கைப் பொருட்களின் அருமையை
            உணர்ந்து, பயன்பாட்டை அதிகரிப்போம், இயற்கையோடு அடுத்த தலைமுறைகளையும்
            நோயிலிருந்து காப்போம்...
          </p>
        </div>
   
      </div>
    
    </div>

  );
};

export default Organic;
