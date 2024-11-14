import React, { useState } from 'react';
import { FaStar, FaWhatsapp } from "react-icons/fa";
import menu1 from '../assets/siruthaaniyam.jpg';
import menu2 from '../assets/ell-urundai.png';
import menu3 from '../assets/rava laddu.jpg';
import menu4 from '../assets/nilakadalai urundai.jpeg';
import menu5 from '../assets/thenai mixere.png';
import menu6 from '../assets/snacks3.png';
import menu7 from '../assets/rava laddu1.jpg';

function Menu() {
    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const menuData = [
        {id: 1, heading: "தேங்காய் லட்டு", price: "$10", subtitle: "நாட்டு சர்க்கரை", img: menu3, category: "Sweets", detail: "இந்த தேங்காய் லட்டு பாரம்பரிய முறையில் தயாரிக்கப்பட்டது. இதில் நாட்டு சர்க்கரை பயன்படுத்தியதால், இயற்கையான இனிப்பு சுவை கிடைக்கிறது. அடிகலனின் சுவையோடு கொத்துமைத் தேங்காய் சேர்த்து, இதயத்திற்கு ஆரோக்கியமான இந்த லட்டு நம் முன்னோர்களின் சுவையைக் கொண்டதாகும்."},
        {id: 2, heading: "எள் உருண்டை", price: "$10", subtitle: "பனங்கருப்பட்டி + உரலில் இடித்தது", img: menu2, category: "Sweets", detail: "இந்த எள் உருண்டை, இயற்கையான பனங்கருப்பட்டி மற்றும் உரலில் இடித்த எள்ளை பயன்படுத்தி தயாரிக்கப்பட்டது. இதில் உள்ள எள் சத்துக்கள் உடலின் நோய் எதிர்ப்புத் திறனை மேம்படுத்த உதவுகின்றன. பாரம்பரிய முறையில் சுவையான மற்றும் ஆரோக்கியமான இக்காரிய உருண்டை, உங்கள் உடல் ஆரோக்கியத்திற்கு சிறந்த தேர்வாகும்."},
        {id: 3, heading: "நிலக்கடலை உருண்டை", price: "$10", subtitle: "நாட்டு சர்க்கரை", img: menu4, category: "Sweets", detail: "இந்த நிலக்கடலை உருண்டை நாட்டு சர்க்கரையைப் பயன்படுத்தி பாரம்பரிய முறையில் தயாரிக்கப்பட்டது. இதில் உள்ள நிலக்கடலை கொழுப்பு, புரதச் சத்து மற்றும் நார்ச்சத்து நிறைந்தது. இந்த இனிப்பு சிறு இடைவெளி உணவாகப் பயன்படுத்தக் கூடியதும், உடலுக்கு தாராளமான சத்துகளை வழங்குவதாலும் ஆரோக்கியமான தேர்வாகும்."},
        {id: 4, heading: "சிறுதானிய லட்டு", price: "$10", subtitle: "நாட்டு சர்க்கரை", img: menu1, category: "Sweets", detail: "இந்த சிறுதானிய லட்டு நாட்டு சர்க்கரையைப் பயன்படுத்தி ஆரோக்கியமான முறையில் தயாரிக்கப்பட்டது. இதில் குதிரைவாலி, தினை, சாமை போன்ற சிறுதானியங்கள் சேர்க்கப்பட்டு, மிகுந்த சத்துமிக்கதாகவும், நார்ச்சத்து நிறைந்ததாகவும் உள்ளது. பாரம்பரிய முறையில் உள்ள இந்நறுமண லட்டு, சத்துணவாகும், மேலும் இது நீண்ட நேரத்துக்கு பசிக்குடிப்பை தடை செய்கிறது."},
        {id: 5, heading: "ரவா லட்டு", price: "$10", subtitle: "நாட்டு சர்க்கரை", img: menu7, category: "Sweets", detail: "இந்த ரவா லட்டு நாட்டு சர்க்கரையை வைத்து சுவையாகவும், ஆரோக்கியமாகவும் தயாரிக்கப்பட்டது. மொத்த ரவா, நெய், மற்றும் நாட்டு சக்கரையின் இனிப்பால் பரிமாறப்படும் இந்த லட்டு, மிருதுவாகவும் இனிய சுவையுடனும் அமைந்துள்ளது. பாரம்பரிய நம்பிக்கைகளுக்கு ஏற்ப, இந்த இனிப்பு சிறியவர்களும் பெரியவர்களும் விரும்பும் தன்மையுடையது."},
        {id: 6, heading: "சிறுதானிய மிக்சர் / பாரம்பரிய மிக்சர்", price: "$10", subtitle: "திணை", img: menu5, category: "Snacks", detail: "இந்த சிறுதானிய மிக்சர் பாரம்பரிய முறைப்படி குதிரைவாலி, தினை, சாமை போன்ற சிறுதானியங்களால் தயாரிக்கப்பட்டது. இதில் உள்ள ஒவ்வொரு தானியமும் உடலுக்கு சத்துக்களை வழங்குவதோடு, இந்த மிக்சர் நார்ச்சத்து, கனிமச்சத்து ஆகியவற்றில் வளமையாகவும் உள்ளது. நேர்த்தியான காய்கலை முறை மற்றும் கிராமிய சுவையோடு இந்த மிக்சர் குடும்பம் முழுவதற்கும் ஆரோக்கியமான இடைவேளி சிற்றுண்டியாக பயன்படும்."},
        {id: 7, heading: "சிறுதானிய ரிப்பன் பக்கோடா / தேங்காய் சேர்த்து", price: "$10", subtitle: "திணை", img: menu6, category: "Snacks", detail: "இந்த சிறுதானிய ரிப்பன் பக்கோடா, சுவையான தேங்காய் சேர்க்கப்பட்டு பாரம்பரிய முறையில் தயாரிக்கப்பட்டது. குதிரைவாலி, தினை, சாமை போன்ற சிறுதானியங்களின் தனிச்சுவையுடன் தேங்காயின் இனிய மணமும் சேர்ந்து, இந்த பக்கோடாவை சுவையான மற்றும் சத்தான இடைவேளி சிற்றுண்டியாக ஆக்குகிறது. இது உங்கள் உடலுக்கு ஆரோக்கியம் தரும் சுவையான நொறுக்குத்தீனியாகும்."},
    ];

    const filteredMenuData = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <section className="bg-gray-200 py-12" id="our-menu">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800">Menu</h2>
                    <p className="mt-2 text-lg text-gray-700">Explore Our Best Menu</p>
                </div>

                <div className="flex justify-center space-x-4 mb-10">
                    <button
                        className={`px-4 py-2 border rounded ${filter === 'all' ? 'bg-green-500 text-white' : 'bg-white text-green-500 border-green-500'}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 border rounded ${filter === 'Sweets' ? 'bg-green-500 text-white' : 'bg-white text-green-500 border-green-500'}`}
                        onClick={() => setFilter('Sweets')}
                    >
                        இனிப்புகள்
                    </button>
                    <button
                        className={`px-4 py-2 border rounded ${filter === 'Snacks' ? 'bg-green-500 text-white' : 'bg-white text-green-500 border-green-500'}`}
                        onClick={() => setFilter('Snacks')}
                    >
                        காரம்
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMenuData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer" 
                            onClick={() => openModal(item)}
                        >
                            <img src={item.img} alt="img" className="w-full h-80 object-cover rounded mb-4" data-aos="fade-down"/>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{item.heading}</h3>
                                <h6 className="text-gray-600 mt-2"><strong>குறிப்பு : </strong>{item.subtitle}</h6>
                                <div className="flex justify-center mt-4">
                                    {[...Array(4)].map((_, index) => (
                                        <FaStar key={index} className="text-green-400 mx-1" />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center space-x-4">
                            <button
                                className="px-6 py-2 bg-green-500 text-white rounded-full"
                                onClick={closeModal}
                            >
                                View
                            </button>
                            <a
                                href="https://wa.me/8870566255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-2 bg-green-500 text-white rounded-full"
                            >
                                <FaWhatsapp size={20} className="mr-2" />
                                Order Now
                            </a>
                        </div>
                        </div>
                        
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedItem && (
                <div
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4 sm:p-8"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl lg:max-w-4xl h-[90vh] overflow-y-auto sm:p-8"  
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedItem.img}
                            alt={selectedItem.heading}
                            className="w-full sm:w-80 h-48 sm:h-60 object-cover rounded-lg mb-4 mx-auto"
                        />
                        <h2 className="text-2xl font-bold text-center text-gray-800">{selectedItem.heading}</h2>
                        <p className="text-xl font-bold text-center text-gray-800 mt-2">{selectedItem.price}</p>
                        <p className="text-md text-gray-600 mt-4 leading-relaxed">{selectedItem.detail}</p>

                        {/* Buttons container */}
                        <div className="mt-6 flex justify-center space-x-4">
                            <button
                                className="px-4 sm:px-6 py-2 bg-green-500 text-white rounded-full"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            <a
                                href="https://wa.me/yourwhatsappphonenumber"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 sm:px-6 py-2 bg-green-500 text-white rounded-full"
                            >
                                <FaWhatsapp size={20} className="mr-2" />
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Menu;
