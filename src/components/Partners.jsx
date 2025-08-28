import React from 'react';
import Slider from 'react-slick';
import { partners } from '../data';

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Very slow transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // No pause between slides, continuous motion
    arrows: false,
    cssEase: "linear", // Ensures smooth, constant speed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-light/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Partenaires de Confiance</h2>
        <Slider {...settings}>
          {partners.map(partner => (
            <div key={partner.id} className="px-4">
              <div className="flex justify-center items-center h-24 bg-white/70 rounded-lg shadow-md p-2">
                <img src={partner.logo} alt={partner.name} className="max-h-16 object-contain" loading="lazy" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
