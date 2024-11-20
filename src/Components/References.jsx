import React from "react";
import { FaLeaf, FaSeedling } from "react-icons/fa"; // Importing only necessary icons
import green from "../assets/greenish1.jpg";

const references = [
    {
        title: "Indian Medical Council 2024-ம் ஆண்டுக்கான விருது பெற்ற Zoy Herbal Sanitary Napkin",
        details: (
            <>
                <p>
                    <strong>இயற்கை மூலிகை Napkin</strong> - Zoy Herbal Sanitary Napkin, <br />
                    <a
                        href="https://www.zoycare.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        www.zoycare.com
                    </a>
                </p>
            </>
        ),
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "ஆசான் நம்மாழ்வாரின் 'வானகம்' (நம்மாழ்வாரின் சுற்றுச்சூழல் அறக்கட்டளை)",
        details: "நம்மாழ்வார் உயிர்ச்சூழல் நடுவம், கடவூர், கருமான்பட்டி, கரூர்.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "அடுப்பில்லா சமையலில் உலக சாதனை",
        details: "திரு. படையல் சிவக்குமார், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "சோற்றுக் கற்றாழை இராமசாமி அய்யா",
        details: "காரமடை, கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "திரு. நாட்டுமாடு செந்தில்",
        details: "கண்ணம்பாளையம், சூலூர், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "தமிழ்பாரதி இயற்கை உணவகம்",
        details: "திரு. கருணாநிதி, சிங்காநல்லூர், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "நம்ம ஊர் சந்தை",
        details: "கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "குறிஞ்சி இயற்கை அங்காடி",
        details: "ஊத்துக்குளி, திருப்பூர்.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "நற்றினை இயற்கை அங்காடி",
        details: "சரவணம்பட்டி, கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "வையகம் இயற்கை அங்காடி",
        details: "இராமநாதபுரம், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "உயிர் ஆர்கானிக்ஸ்",
        details: "கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "திரு.குமரகுரு",
        details: "கோத்தகிரி - Sigma Organics Farmers Market (கோவைக்கு நேரடி வழங்கல் உண்டு).",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    
    {
        title: "கோவையின் நம்மாழ்வார்",
        details: "திரு.தங்கவேல் அய்யா, முன்னோடி இயற்கை விவசாயி, அத்தப்பகவுண்டன்புதூர், கோவை-641103.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "சுகம் இயற்கை அங்காடி",
        details: "அவினாசி சாலை, கோல்டுவின்ஸ், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "செம்புலம் இயற்கை விவசாயிகளின் கூட்டமைப்பு",
        details: "தாராபுரம், திருப்பூர். (கோவை மற்றும் திருப்பூருக்கு நேரடி வழங்கல் மற்றும் தமிழகம் முழுவதும் Courier Service)",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "திரு. பொன்முத்து",
        details: "சிவன் சந்தை, பல்லடம்.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "செஞ்சோலை இயற்கை வழி வேளாண் பயிற்சிப் பண்ணை",
        details: "இயற்கை வழி உழவர்களின் நேரடி சந்தை, சூலூர்.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "இயல் வணிகம் இயற்கை அங்காடி",
        details: "அவினாசி சாலை, கோல்டுவின்ஸ், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "இயல் வணிகம், இயற்கை அங்காடி",
        details: "ராஜீவ் காந்தி நகர், G.V. Residency, சிங்காநல்லூர், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
    {
        title: "ஐந்தினை அற்றில் இயற்கை உணவகம்",
        details: "ராஜீவ் காந்தி நகர், G.V. Residency, சிங்காநல்லூர், கோவை.",
        icon1: <FaLeaf className="text-green-600 text-4xl mb-3" />,
        icon2: <FaSeedling className="text-green-600 text-4xl mt-3" />,
    },
];

const References = () => {
    return (
        <div
            className="bg-gray-100 py-10"
            style={{
                backgroundImage: `url(${green})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-800">சிறந்த இயற்கை விவசாயம் மற்றும் இன்றைய பெருமை பெற்ற இடங்கள்</h2>
                <p className="mt-4 text-xl text-black font-bold">
                    எங்கள் ஈடு இணையில்லா அர்ப்ணிப்புகளும், சமர்ப்பணங்களும் ... நன்றியுடன் ... உரித்ததாகுக!
                </p>
            </div>

            {/* Reference Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {references.map((ref, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
                    >
                        {/* Icons */}
                        <div className="flex justify-center mb-4">
                            {ref.icon1}
                            {ref.icon2}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{ref.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600">{ref.details}</p>
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <div className="mt-8 px-4 flex justify-end">
                <div className="w-full sm:w-2/3 md:w-1/2 text-sm text-black leading-relaxed font-bold">
                    <p>
                        மேலும் இயற்கையை மீட்டெடுக்கப் போராடும் அனைத்து சிறு, குறு இயற்கை விவசாயிகளுக்கும்
                        இதயம் கனிந்த நன்றிகளுடன்...
                    </p>
                    <p>
                        மேலும் மனமார்ந்த வாழ்த்துகள்... மூலிகைகளின் உயிர்ப்பிப்பாய், உபயோகப்படுத்தும் பொருளே,
                        கருவறைப் பிரச்சனைகளுக்கான தீர்வாய்...
                    </p>
                    <p>
                        பெண்களின் மாதாந்திர இன்னல்களைத் தீர்க்கும் மகத்துவ மருந்தாய்...
                        உருவாக்கப்பட்டதும்... பெண்களுக்கான சிறப்பானதும்...
                    </p>
                   
                    <p>
                        மறந்தும், அறியாமலும் சொல்லப்படாத... இன்னும் ... மற்றும் ... பிற பல...
                        இயற்கை ஆர்வலர்களுக்கும் சமர்ப்பணம்!
                    </p>
                    <p>
                        இயற்கை அங்காடிகளில் வாடிக்கையாளராகி, பூச்சிக்கொல்லி, செயற்கை உரம் எனும் நஞ்சில்லா உணவுப் பொருட்களைப் பயன்படுத்தி, வீட்டையும், நாட்டையும் காக்கவும்... இயற்கையை மீட்டெடுக்கவும்...
                        மக்களை ... வேண்டுகோளுடனும்... அன்புடனும்... அழைக்கும்...
                    </p>
                    <p>
                        <strong className="text-green-800">கோவை மண்வாசனை மனோன்மணி</strong>
                        <br />
                        98651 66255
                    </p>
                </div>
            </div>
        </div>
    );
};

export default References;
