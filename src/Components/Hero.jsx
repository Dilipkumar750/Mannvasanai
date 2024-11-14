import React from "react";
import nammalvar from "../assets/nammalvar.jpeg";
import ural from "../assets/ural.jpeg";
import green from "../assets/bg2.jpg";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center w-full h-[100%] pt-10 "
      style={{
        backgroundImage: `url(${green})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title Section */}
      <h1 className="text-center text-3xl md:text-4xl text-white font-bold mt-10">
        உலகின் முதல் உணவு விஞ்ஞானி <span className="text-white">{`"`}அம்மா..{`"`}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-full w-full px-4 py-32 gap-6 items-center ">
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
          <p
            className="text-gray-800 text-xs sm:text-sm md:text-base"
            data-aos="fade-down"
          >
            ஒற்றை விதையில் தொடங்கும் விவசாயம்
            <br />
            ஒருவாறு விற்பனைக்கு செல்லும் மாயம்
            <br />
            நீரை உறிஞ்சும் நிலையிலா உரமிங்கு
            <br />
            நிலத்தடியில் தேடவைத்தது நீரை - மேகத்தை மறந்து
            <br />
            நவீன தொழில்நுட்பத்தில் மரபணு மாற்றம்
            <br />
            நல்லொட்டு ரகமிருக்க கலப்பினம் எதற்கு?
            <br />
            அடி காட்டுக்கு நடு மாட்டுக்கு நுனி வீட்டுக்கு
            <br />
            அறிவியல் அறிவோம் புரட்சியைத் தவிர்த்து
            <br />
            மண்ணுக்கு உயிரூட்டி மனிதத்திற்கு உணர்வூட்டு
            <br />
            மானுடமே, நஞ்சில்லா விவசாயம் பழகி
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
};

export default Hero;
