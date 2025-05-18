import { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='slider-container'>
      <button className='arrow left' onClick={handlePrev}>
        ‹
      </button>

      <img
        className='main-image'
        src={images[current]}
        alt={`Slide ${current}`}
      />

      <button className='arrow right' onClick={handleNext}>
        ›
      </button>

      <div className='thumbnails'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
