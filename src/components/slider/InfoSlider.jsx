import { useState , useRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import './slider.css';

import slideShowData from './../../assets/slider-data/slideshow'
const delayActive = 2000;


const InfoSlider = () => {const [active, setActive] = useState(false);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setActive((prevActive) =>
            prevActive === true ? false : true
          ),

          delayActive
      );
  
      return () => {
        resetTimeout();
      };
    }, [active]);
    return (
        <div className="info-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{delay: 3300}}
                >
                {
                    slideShowData.map ((info, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide">
                                <h2 className={(active)? 'active' : ''}>{info.heading}</h2>
                                <p className={(active)? 'active' : ''}>
                                    {info.paragraph}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                }
                {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
            

            <div className="btns">
                <button>get started</button>
                <button>learn more</button>
            </div>
        </div>
    )
}

export default InfoSlider;